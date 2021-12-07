---
layout: post
title: A Container Factory for HPC
date: 2021-08-25 12:00:00
author: Michael Bareford (EPCC)
tags: [blog] 
categories: [news]
---


This blog post follows on from "[HPC Containers?](https://www.archer2.ac.uk/news/2021/08/06/hpc-containers.html)", which showed how to run a containerized GROMACS
application across multiple compute nodes. The purpose of this post is to explain how that container was made.

We turn now to the container factory, the environment within which containers are first created and then customised
for various HPC platforms. The container factory is a standalone machine providing root-level access. It runs on the
[Eleanor Research Cloud](https://www.ed.ac.uk/information-services/computing/computing-infrastructure/cloud-computing-service/researcher-cloud-service-eleanor) at the University of Edinburgh.
(The factory instance has 8 vCPUs, 16 GB RAM and 160 GB of disk space.)

At the time of writing, the factory OS is Ubuntu 20.04.2 and the container software is (Sylabs) [SingularityCE 3.8.1](https://sylabs.io/guides/3.8/user-guide/).

You could of course setup a container factory on your personal laptop (or on any machine where you have root access).
However, establishing the factory as a cloud-based instance separates that work from any details peculiar to an
individual's machine, and the building of a factory can also be scripted allowing others to create their own container
factories, see [https://github.com/mbareford/container-factory](https://github.com/mbareford/container-factory).

The two sections that follow contain many script blocks; these have been added as collapsible items so as to improve
readability. At the start of each block is the corresponding path from the [Container Factory repository](https://github.com/mbareford/container-factory).
All subsidiary scripts referenced can also be found within this GitHub project.


Creating the Initial Container Image
------------------------------------

The making of an application-specific container takes place within the factory builds folder, e.g., `~/work/builds/gromacs`.
Presented below is the top-level creation script for the [GROMACS](https://www.gromacs.org/) code. 


  <summary>GROMACS Creation Script</summary>

  ```bash
  # https://github.com/mbareford/container-factory/blob/main/builds/gromacs/create.sh

  #!/bin/bash

  echo "Deleting old images, logs and scripts..."
  rm -f *.sif*
  rm -f *.log
  rm -rf scripts*

  echo "Gathering required scripts..."
  APP=gromacs
  SCRIPTS_ROOT=${HOME}/work/scripts
  SCRIPTS_DEF=${SCRIPTS_ROOT}/def
  SCRIPTS_APP=${SCRIPTS_ROOT}/app/${APP}
  SCRIPTS_SNG=${SCRIPTS_ROOT}/fac/singularity

  mkdir -p ./scripts/aux
  cp ${SCRIPTS_ROOT}/aux/download_src.sh ./scripts/aux/
  cp ${SCRIPTS_ROOT}/aux/install_cmp.sh ./scripts/aux/
  cp ${SCRIPTS_ROOT}/aux/setup_env.sh ./scripts/aux/
  cp ${SCRIPTS_ROOT}/aux/update_env.sh ./scripts/aux/
  cp ${SCRIPTS_ROOT}/aux/add_log.sh ./scripts/aux/
  cp ${SCRIPTS_ROOT}/aux/add_dirs.sh ./scripts/aux/

  mkdir -p ./scripts/chk
  cp ${SCRIPTS_ROOT}/chk/check_os.sh ./scripts/chk/
  cp ${SCRIPTS_ROOT}/chk/check_gcc.sh ./scripts/chk/
  cp ${SCRIPTS_ROOT}/chk/check_cmp.sh ./scripts/chk/

  mkdir -p ./scripts/def
  cp ${SCRIPTS_ROOT}/def/gromacs.def ./scripts/def/

  mkdir -p ./scripts/os
  cp ${SCRIPTS_ROOT}/os/ubuntu-20.04.sh ./scripts/os/

  mkdir -p ./scripts/cmp
  cp -r ${SCRIPTS_ROOT}/cmp/miniconda ./scripts/cmp/
  cp ${SCRIPTS_ROOT}/cmp/cmake.sh ./scripts/cmp/

  mkdir -p ./scripts/app/${APP}
  cp ${SCRIPTS_APP}/source.sh ./scripts/app/${APP}/
  cp ${SCRIPTS_APP}/build.sh ./scripts/app/${APP}/
  cp -r ${SCRIPTS_APP}/host ./scripts/app/${APP}/

  tar -czf scripts.tar.gz ./scripts
  rm -rf scripts

  echo "Creating ${APP} singularity image file..."
  sudo singularity build ${PWD}/${APP}.sif.0 ${SCRIPTS_DEF}/${APP}.def &> create.log

  echo "Adding creation log to image file..."
  ${SCRIPTS_SNG}/add_log.sh ${PWD}/${APP}.sif.0 create log

  echo "Final tidy up..."
  rm create.log
  rm scripts.tar.gz

  echo "Creation complete!"
  echo "${PWD}/${APP}.sif.0"
  ```



The key line in the creation script is the one that builds the container image.
```bash
sudo singularity build ${PWD}/${APP}.sif.0 ${SCRIPTS_DEF}/${APP}.def &> create.log
```
It takes as input a Singularity definition file, e.g., `${HOME}/work/scripts/def/gromacs.def`.


  <summary>GROMACS Singularity Definition File</summary>

  ```bash
  # https://github.com/mbareford/container-factory/blob/main/scripts/def/gromacs.def

  Bootstrap: library
  From: ubuntu:20.04

  %setup
      # empty

  %files
      ${HOME}/work/scripts/post_start.sh /opt/
      ${HOME}/work/scripts/post_stop.sh /opt/
      ${HOME}/work/builds/gromacs/scripts.tar.gz /opt/

  %environment
      # empty

  %post
      . /opt/post_start.sh

      ubuntu-20.04.sh 10

      miniconda.sh 3 4.8.3 38
      conda_install.sh numpy,scipy,matplotlib

      cmake.sh 3.18.4

      source.sh gromacs 2021.1

      . /opt/post_stop.sh

  %runscript
      # empty

  %startscript
      # empty

  %test
      ROOT=/opt/scripts
      export PATH=${ROOT}/chk:${ROOT}/aux:${ROOT}/os:${ROOT}/cmp:${PATH}
      check_os.sh "Ubuntu 20.04.2"
      check_gcc.sh "10.3.0"
      check_cmp.sh ${MINICONDA3_ROOT} ${MINICONDA3_NAME}
      check_cmp.sh ${CMAKE_ROOT} ${CMAKE_NAME}

  %labels
      Author Michael Bareford
      Email m.bareford@epcc.ed.ac.uk
      Version v1.0.0

  %help
      This GROMACS (http://www.gromacs.org/) container image file was created at the EPCC Container Factory,
      an OpenStack Ubuntu 20.04 instance (ID 859596f3-6683-4951-82d4-f9e080c30d1f) hosted by the University of Edinburgh Eleanor Research Cloud.

      The container is based on Ubuntu 20.04 and features GCC 10.3.0, Miniconda3 4.8.3, CMake 3.18.4 and the GROMACS source code version 2021.1.
      See the container creation log at "/opt/logs/create.log.0" and the original definition file at "/opt/scripts/def/gromacs.def".

      Submission script templates can be found under "/opt/scripts/app/gromacs/host/".
      These script files are named "submit.sh" and are organised by "<host name>/<MPI library>/<compiler>".
  ```



The `post` section of the definition file specifies the container OS (Ubuntu 20.04 in this case) as well as the GCC compiler (major) version. Subsequent
commands install Miniconda3, CMake 3.18.4 and the GROMACS 2021.1 *source* code. The installation of the GROMACS source is handled by a simple script called
`source.sh`.


  <summary>GROMACS Source Script</summary>

  ```bash
  # https://github.com/mbareford/container-factory/blob/main/scripts/app/gromacs/source.sh

  #!/bin/bash
  
  VERSION=$2
  LABEL=$1
  NAME=${LABEL}-${VERSION}
  ROOT=/opt/app/${LABEL}

  mkdir -p ${ROOT}
  cd ${ROOT}

  wget https://ftp.gromacs.org/${LABEL}/${NAME}.tar.gz
  tar -xzf ${NAME}.tar.gz
  rm ${NAME}.tar.gz
  ```



Information on the other sections listed in the definiton file (e.g., `files`, `test` and `help`) can be found in the [SingularityCE User Guide](https://sylabs.io/guides/3.8/user-guide/definition_files.html).

The creation phase should result in an image file such as `gromacs.sif.0` that can be *inspected* by running \
`singularity inspect -H gromacs.sif.0`.

```bash
This GROMACS (http://www.gromacs.org/) container image file was created at the EPCC Container Factory,
an OpenStack Ubuntu 20.04 instance (ID 859596f3-6683-4951-82d4-f9e080c30d1f) hosted by the University of Edinburgh Eleanor Research Cloud.

The container is based on Ubuntu 20.04 and features GCC 10.3.0, Miniconda3 4.8.3, CMake 3.18.4 and the GROMACS source code version 2021.1.
See the container creation log at "/opt/logs/create.log.0" and the original definition file at "/opt/scripts/def/gromacs.def".

Submission script templates can be found under "/opt/scripts/app/gromacs/host/".
These script files are named "submit.sh" and are organised by "<host name>/<MPI library>/<compiler>".
```

You can see that the text returned was provided by the Singularity definition file. It is reproduced here to illustrate the principle
that the provenance of a container should always be accessible via the Singularity inspect `-H` command. Note, that the text gives
the paths to the original definition file as well as the output generated by running `sudo singularity build ...`. Those two files
are trivial to access.

```bash
singularity exec gromacs.sif.0 cat /opt/scripts/def/gromacs.def
singularity exec gromacs.sif.0 cat /opt/logs/create.log.0
```

From now on, this provenance history grows every time the containerized application is built on (or targeted at) a HPC platform.


Targeting the container
-----------------------

The command below starts the process that compiles the containerized GROMACS source on the ARCHER2 4cab system. The final string argument
specifies the GROMACS version (2021.1), the host MPI library (Cray MPICH v8) and the compiler (GCC v10).

```bash
~/work/scripts/fac/singularity/target.sh ~/work/scripts ${PWD} gromacs archer2 "/work/z19/z19/mrb4cab/containers/build" "2021.1 cmpich8-ofi gcc10"
```

The `target.sh` script is actually quite simple: the container image file is uploaded to the HPC platform (the target), a *deployment* script
is run and then a *new* container image file is downloaded back to the factory.


  <summary>Targeting Script</summary>

  ```bash
  # https://github.com/mbareford/container-factory/blob/main/scripts/fac/singularity/target.sh

  #!/bin/bash

  SCRIPTS_ROOT=$1
  IMG_PATH=$2
  APP=$3
  HOST=$4
  DEPLOY_PATH=$5
  DEPLOY_ARGS="${APP} ${DEPLOY_PATH}/${APP}.sif \"$6\""
  DEPLOY_SCRIPT=${SCRIPTS_ROOT}/app/${APP}/host/${HOST}/deploy.sh

  . ${SCRIPTS_ROOT}/fac/singularity/get_latest_suffix.sh
  get_latest_suffix ${IMG_PATH} ${APP}
  next_suffix=`expr ${suffix} + 1`

  echo "Uploading ${APP} singularity image to ${HOST} host..."
  scp ${IMG_PATH}/${APP}.sif.${suffix} ${HOST}:${DEPLOY_PATH}/${APP}.sif

  echo "Running the deployment script that builds a containerized ${APP} app on the ${HOST} host..."
  ssh ${HOST} "bash -ls" < ${DEPLOY_SCRIPT} ${DEPLOY_ARGS}

  echo "Downloading new ${APP} singularity image from ${HOST} host..."
  scp ${HOST}:${DEPLOY_PATH}/${APP}.sif ${IMG_PATH}/${APP}.sif.${next_suffix}

  echo "Deleting the ${APP} singularity image left on ${HOST} host..."
  ssh ${HOST} rm -f ${DEPLOY_PATH}/${APP}.sif

  echo "Targeting complete!"
  echo "${IMG_PATH}/${APP}.sif.${next_suffix}"
  ```



What is the *deployment* script? It is a short script that is executed on the the target (the HPC host).


  <summary>GROMACS ARCHER2 Deployment Script</summary>

  ```bash
  # https://github.com/mbareford/container-factory/blob/main/scripts/app/gromacs/host/archer2/deploy.sh

  #!/bin/bash
  
  APP=$1
  SIF=$2
  HOST=archer2
  BUILD_ARGS="${HOST} $3"
  BIND_ARGS=`singularity exec ${SIF} cat /opt/scripts/app/${APP}/host/${HOST}/bindpaths.lst`

  echo "Converting ${APP} container image to sandbox..."
  singularity build --sandbox ${SIF}.sandbox ${SIF}
  echo ""

  echo "Building ${APP} within container sandbox..."
  singularity exec -B ${BIND_ARGS} --writable ${SIF}.sandbox /opt/scripts/app/${APP}/build.sh ${BUILD_ARGS}
  echo ""

  echo "Converting ${APP} container sandbox back to image..."
  singularity build --force ${SIF} ${SIF}.sandbox
  echo ""

  echo "Deleting ${APP} container sandbox..."
  rm -rf ${SIF}.sandbox
  ```



Near the start of the deployment, the bind paths - the links between the container and host file systems - are
extracted from the container image. These paths are needed for when the containerized application is built and
are different for each HPC host. Presented below are the bind paths for the ARCHER2 4cab system.

```bash
# https://github.com/mbareford/container-factory/blob/main/scripts/app/gromacs/host/archer2/bindpaths.lst

/work/y07/shared,/opt/cray,/usr/lib64:/usr/lib64/host,/etc/libibverbs.d
```

You can see that the bind paths are given as a comma separated list. The syntax for a single bind path
follows `src[:dest[:opts]]`, where `src` and `dest` are respectively, outside (on the host) and inside the container.
If `dest` is not given, it is set equal to `src`.  Lastly, the `opts` setting is `rw` by default.

Returning to the deployment script, the container image is now converted to a sandbox in preparation for
building the (GROMACS) code. Container images are immutable objects; this conflicts with the fact
that a code compilation will add new files to the container. The solution is to convert the container
to a sandbox directory and then use the `--writable` flag when building the code within the sandbox.
Once the build has completed, the sandboxed container is converted back to an image file (in fact,
the deployment script uses the `--force` flag to ensure that the original image file is overwritten).

The GROMACS build script (called from `deploy.sh`) is shown below &mdash; the `cmake` command has been abbreviated for clarity.


  <summary>GROMACS Build Script</summary>

  ```bash
  # https://github.com/mbareford/container-factory/blob/main/scripts/app/gromacs/build.sh

  #!/bin/bash

  HOST=$1
  VERSION=$2
  MPI_LABEL=$3
  COMPILER_LABEL=$4

  LABEL=gromacs
  NAME=${LABEL}-${VERSION}
  ROOT=/opt/app/${LABEL}
  HOST_PATH=${HOST}/${MPI_LABEL}/${COMPILER_LABEL}
  SCRIPTS_ROOT=/opt/scripts/app/${LABEL}/host/${HOST_PATH}
  BUILD_ROOT=${ROOT}/${NAME}
  INSTALL_ROOT=${ROOT}/${VERSION}/${HOST_PATH}
  LOG_ROOT=/opt/logs
  CMAKE_PRELOAD=/lib/x86_64-linux-gnu/libssl.so.1.1:/lib/x86_64-linux-gnu/libcrypto.so.1.1

  # set the build environment
  . ${SCRIPTS_ROOT}/env.sh

  # set make log name
  mkdir -p ${LOG_ROOT}
  if [ -f "${LOG_ROOT}/.make" ]; then
    makecnt=`cat ${LOG_ROOT}/.make`
    makecnt=`expr ${makecnt} + 1`
  else
    makecnt="1"
  fi
  MAKE_LOG=${LOG_ROOT}/make.log.${makecnt}
  echo "${makecnt}" > ${LOG_ROOT}/.make

  # set compiler and build flags
  export FLAGS="-O3 -ftree-vectorize -funroll-loops"

  # build
  BUILD_PATH=${BUILD_ROOT}/build/${HOST_PATH}/single
  rm -rf ${BUILD_PATH}
  mkdir -p ${BUILD_PATH}
  cd ${BUILD_PATH}

  LD_PRELOAD=${CMAKE_PRELOAD} cmake ${BUILD_ROOT} \
      -DGMX_MPI=ON -DGMX_OPENMP=ON -DGMX_HWLOC=OFF -DGMX_GPU=OFF \
      ...
      -DCMAKE_INSTALL_PREFIX=${INSTALL_ROOT} &> ${MAKE_LOG}

  LD_PRELOAD=${CMAKE_PRELOAD} make install &>> ${MAKE_LOG}

  # record
  currentDateTime=`date +"%Y-%m-%d %T"`
  echo "    ${currentDateTime}: Built ${LABEL} ${VERSION} (${MPI_LABEL}-${COMPILER_LABEL}) on ${HOST}" >> /.singularity.d/runscript.help
  echo "                         (${MAKE_LOG})" >> /.singularity.d/runscript.help
  echo "" >> /.singularity.d/runscript.help
  ```



At the beginning of the build script, many environment variables are initialised; a further set of variables are initialised by sourcing
a second script called `env.sh` located within the container on a path that defines a particular combination of HPC host, MPI library
and compiler, e.g., `/opt/scripts/app/gromacs/host/archer2/cmpich8-ofi/gcc10`. The content of the `env.sh` for that particular example
is produced below.

```bash
# https://github.com/mbareford/container-factory/blob/main/scripts/app/gromacs/host/archer2/cmpich8-ofi/gcc10/env.sh

MPI_ROOT=/opt/cray/pe/mpich/8.0.16/ofi/gnu/9.1
MPI_C_LIB=mpi
MPI_CXX_LIB=mpi
MPI_LIBRARY_PATH=${MPI_ROOT}/lib/libmpi.so
FFTW_ROOT=/opt/cray/pe/fftw/3.3.8.8/x86_rome
LIBSCI_ROOT=/opt/cray/pe/libsci/20.10.1.2/GNU/9.1/x86_64
BLAS_LIBRARIES=${LIBSCI_ROOT}/lib/libsci_gnu_82_mpi_mp.so
LAPACK_LIBRARIES=${BLAS_LIBRARIES}
LD_LIBRARY_PATH=${FFTW_ROOT}/lib:${LIBSCI_ROOT}/lib:${MPI_ROOT}/lib:\
  /opt/cray/pe/lib64:/opt/cray/libfabric/1.11.0.0.233/lib64:\
  /usr/lib64/host:/usr/lib64/host/libibverbs:\
  /lib/x86_64-linux-gnu:/.singularity.d/libs
CC=gcc
CXX=g++
```

The sourcing of `env.sh` enables the make command to find the headers and libraries required to build the containerized application.

Notice also, that the `build.sh` script takes some care ensuring that the make output is directed to an appropriately named log file.
As mentioned earlier, this is so a container's history can be accessed via the Singularity inspect command, such as \
`singularity inspect -H gromacs.sif.2`.

```bash
This GROMACS (http://www.gromacs.org/) container image files was created at the EPCC Container Factory,
an OpenStack Ubuntu 20.04 instance (ID 859596f3-6683-4951-82d4-f9e080c30d1f) hosted by the University of Edinburgh Eleanor Research Cloud.

The container is based on Ubuntu 20.04 and features GCC 10.0.1, Miniconda3 4.8.3, CMake 3.18.4 and the GROMACS source code version 2021.1.
See the container creation log at "/opt/logs/create.log.0" and the original definition file at "/opt/scripts/def/gromacs.def".

Submission script templates can be found under "/opt/scripts/app/gromacs/host/".
These script files are named "submit.sh" and are organised by "<host name>/<MPI library>/<compiler>".


2021-05-25 12:39:53: Built gromacs 2021.1 (cmpich8-ofi-gcc10) on archer2
                     (/opt/logs/make.log.1)

2021-05-25 13:42:56: Built gromacs 2021.1 (ompi4-ofi-gcc10) on archer2
                     (/opt/logs/make.log.2)
```

We see that the GROMACS code has been targeted twice at the ARCHER2 platform, once using Cray MPICH v8 and again using OpenMPI v4. Both of
these events are time stamped and the container-based paths to the make logs are indicated. In this way, possession of a container image file
should be sufficient for determining the HPC platforms on which the containerized application is expected to run. Note also that batch submission
script templates also exist within the container.


It is apparent that this *targeting* workflow is somewhat complex involving many Bash scripts most of which are executed at the factory.
The exceptions are the deployment script which is run on the HPC host and the build script which is run within the sandboxed Singularity
container on the HPC host.

Other codes such as [CASTEP](http://www.castep.org/) and [RAMSES](https://www.ics.uzh.ch/~teyssier/ramses/RAMSES.html) have been containerized in a similar manner and run successfully on ARCHER2.
These successes suggest that the design implict in the Container Factory script hierarchy will be flexible enough to accommodate more parallel codes (and more HPC platforms).


Addendum
--------

Recent versions of Singularity (>= 3.7.x) may provide a further complication: the need to create host-specific file paths within the container
before the targeting process can begin. This isn't currently an issue with the ARCHER2 4cab system as the version of Singularity installed on
that platform is 3.5.3-1, but, the [Tier-2 Cirrus machine](https://www.cirrus.ac.uk/) has Singularity v3.7.2-1. And so, targeting the GROMACS
container at Cirrus, first requires the creation of the `/lustre/sw`, `/opt/hpe` and `/etc/libibverbs.d` paths in order to support the use of the various
bindpaths specified in the accompanying Cirrus `deploy.sh` script. This extra step is handled at the factory by [`target_init.sh`](https://github.com/mbareford/container-factory/blob/main/scripts/fac/singularity/target_init.sh).
