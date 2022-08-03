---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-07-27 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Performance of MPI+OpenMP on ARCHER2](#performance-of-mpiopenmp-on-archer2), Online webinar, Wednesday 27th July 2022 15:00 - 16:00 BST 
- [Goal-oriented mesh adaptation for Firedrake](#goal-oriented-mesh-adaptation-for-firedrake), Online webinar, Thursday 28th July 2022 15:00 - 16:00 BST
- [Efficient Parallel IO](#efficient-parallel-io), Online, 23 August 2022 09:30 - 16:30 BST 
- [Access to HPC Call open](#access-to-hpc-call)
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 
 

## Performance of MPI+OpenMP on ARCHER2

Holly Judge EPCC
Wednesday 27th July 2022 15:00 - 16:00 BST

Commonly, parallel applications on ARCHER2 are run using the message passing interface (MPI), where one process (or task) is spawned on each core. For ARCHER2 (which has 128 cores per node) this means that a large number of processes are used when running on many nodes. Using this many processes can have a negative impact on the performance of MPI communications for some applications and use cases. As an alternative, in some cases it is possible to use a combination of MPI processes and OpenMP threads (known as MPI+OpenMP). This approach naturally results in using fewer processes overall, and this can improve the performance of applications by reducing the overhead of communications, and also have other positive effects, such as lowering the memory requirements.

This talk will present a study of the performance of MPI+OpenMP in a variety of applications on ARCHER2. In doing so different configurations of processes and threads will be explored for various benchmark systems. This will aim to provide guidance to users about which applications and use cases can see a performance benefit from using MPI+OpenMP. The main applications we will present results for are CASTEP, CP2K, LAMMPS, GROMACS and Quantum EPRESSO.

Details and join link: <https://www.archer2.ac.uk/training/courses/220727-mpi-openmp-performance-vt/>



## Goal-oriented mesh adaptation for Firedrake

Joe Wallwork, Imperial College London
Thursday 28th July 2022 15:00 - 16:00 BST

Mesh adaptation can be a very powerful tool for improving the accuracy and/or efficiency of numerical simulations, but it is still not widely used. This is largely because commonly available approaches require experience and an in-depth understanding of both the problem at hand and its interaction with the discretisation method being used. The goal-oriented mesh adaptation framework reduces the required level of experience, since it is driven by error estimates determined by the PDE and a user-specified quantity of interest that we seek to accurately approximate, such as the power output of a turbine or the drag on an aeroplane wing.

The primary output of this eCSE is a new goal-oriented error estimation module, Pyroteus, which handles the solution of PDEs and their adjoints on sequences of meshes and enables the automatic computation of error indicators. In addition, both the PETSc solver library and Firedrake finite element library have been extended to support metric-based mesh adaptation, to facilitate goal-oriented mesh adaptation using Pyroteus. In this webinar, we will describe the new functionality introduced by this eCSE and demonstrate its use in a variety of test cases related to geoscientific modelling.

Full details and join link: <https://www.archer2.ac.uk/training/courses/220728-firedrake-vt/>



## Efficient Parallel IO

David Henty EPCC
23 August 2022 09:30 - 16:30 BST
Online

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. Standard Unix IO routines are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems are optimised for large volumes of data, but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

This hands-on course explores a range of issues related to parallel IO. It uses ARCHER2 and its parallel Lustre file system as a platform for the exercises; however, almost all the IO concepts and performance considerations are applicable to any parallel system.

Full details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>




## Access to HPC Call 

Access to HPC Call (EPSRC remit only) opened 4th July.<br>
ARCHER2 or Tier-2 computing resource for a maximum duration of one year and a minimum of 4000 CU. <br>
TA Deadline - 20th September 16:00<br>
Submit Deadline - 18th October 16:00<br>
More details an application forms 
<https://www.archer2.ac.uk/support-access/access#calls-for-archer2-time-only>



## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course <br><br>
- Performance of MPI+OpenMP on ARCHER2, Online webinar, Wednesday 27th July 2022 15:00 - 16:00 BST
- Goal-oriented mesh adaptation for Firedrake, Online webinar, Thursday 28th July 2022 15:00 - 16:00 BST
- Efficient Parallel IO, Online, 23 August 2022 09:30 - 16:30 BST 
- Debugging and Optimizing Parallel Codes with Arm Forge - Debugging and DDT, Online webinar, Wednesday 31st August 2022 15:00 - 16:00 BST
- Debugging and Optimizing Parallel Codes with Arm Forge - Performance optimization, MAP, and PR, Online webinar, Wednesday 7th September 2022 15:00 - 16:00 BST 


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)

