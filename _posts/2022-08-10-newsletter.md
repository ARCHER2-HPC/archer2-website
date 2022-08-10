---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-08-10 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Performance of different routing protocols on ARCHER2: OpenFabrics and UCX](#performance-of-different-routing-protocols-on-archer2-openfabrics-and-ucx) -  Wednesday date 17th August 2022 15:00 - 16:00 BST
- [ARCHER2 Image and Video Competition 2022](#archer2-image-and-video-competition-2022) 
- [AMD Optimising CPU Libraries (AOCL) module available](#amd-optimising-cpu-libraries-aocl-module-available)
- [Efficient Parallel IO](#efficient-parallel-io), Online, 23 August 2022 09:30 - 16:30 BST 
- [Access to HPC Call open](#access-to-hpc-call)
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 
 

## Performance of different routing protocols on ARCHER2: OpenFabrics and UCX

 Wednesday date 17th August 2022 15:00 - 16:00 BST <br>
(Postponed from 20th July)

In this presentation, we report on a comparison on performance between different routing protocols underlying the Cray MPICH library on a HPE Cray EX system for a variety of application and synthetic benchmarks. The ARCHER2 system allows users to select, at runtime, between two different underlying routing protocols: OpenFabrics (OFI) and Mellanox UCX (UCX). The CSE team have compared the performance of OFI and UCX for different applications from a variety of research areas (CASTEP, CP2K, GROMACS, NEMO, OpenSBLI, VASP) and the performance of the OSU MPI benchmarks. We find that the choice of routing protocol can have a profound effect on application performance and that the best choice is dependent on the number of nodes, the application and the benchmark case used for the performance evaluation. This makes providing general advice to users challenging. We summarise the data we have gathered so far and the advice we provide to users; and provide an overview of what future investigations we have planned.

Details and join link: <https://www.archer2.ac.uk/training/courses/220817-routing-protocols-vt/>


## ARCHER2 Image and Video Competition 2022 

Share your images and videos to support excellence and promote the contribution of ARCHER and ARCHER2 to outstanding research. The winner of the competition will be awarded £250.

The winning image or video, along with a selection of other entries, will also be featured on the ARCHER2 website and in EPCC and ARCHER2 publications. Credit will be given to the entrant in all cases.

### Key Details

- Competition Opens: 8th August 2022
- Submission Deadline: 16 September 2022
- Judging: October/November 2022
- Prizes:
    + Best image : £150
    + Best video : £150
    + Best early career researcher submission : £150
    + Overall winner, selected from the above three winners : additional £100

Full details and entry form: <https://www.archer2.ac.uk/community/image-comp/>


## AMD Optimising CPU Libraries (AOCL) module available 

AMD Optimizing CPU Libraries (AOCL) are a set of numerical libraries optimized for AMD “Zen”-based processors, including EPYC, Ryzen Threadripper PRO, and Ryzen. AOCL is comprised of the following eight libraries: 

- BLIS (BLAS Library)
- libFLAME (LAPACK) 
- AMD-FFTW, LibM (AMD Core Math Library)
- ScaLAPACK, AMD Random Number Generator (RNG)
- AMD Secure RNG
- AOCL-Sparse 

 
AOCL is now available as a module on ARCHER2 for the GNU and AOCC programming environments. Please read the docs for more information: <https://docs.archer2.ac.uk/software-libraries/aocl/>


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
- Performance of different routing protocols on ARCHER2: OpenFabrics and UCX - (Postponed from 20th July), Online webinar, Wednesday date 17th August 2022 15:00 - 16:00 BST 
- Efficient Parallel IO, Online, 23 August 2022 09:30 - 16:30 BST
- Introduction to OpenMP, Online, 30th & 31st August, 6th September 2022 09:00 - 17:00 BST 
- Debugging and Optimizing Parallel Codes with Arm Forge - Debugging and DDT, Online webinar, Wednesday 31st August 2022 15:00 - 16:00 BST
- ARCHER2 for Software Developers, Online, 1 - 2 September 2022 10:00 - 16:00 BST 
- Debugging and Optimizing Parallel Codes with Arm Forge - Performance optimization, MAP, and PR, Online webinar, Wednesday 7th September 2022 15:00 - 16:00 BST 
- ARCHER2 for Package Users, Online, 13 October 2022 10:00 - 16:00 BST



Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)

