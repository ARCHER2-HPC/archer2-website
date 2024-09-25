---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-09-25 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Adventures and misadventures in hybrid programming]({{ page.url }}#adventures-and-misadventures-in-hybrid-programming), webinar, Wednesday 25th September 2024 15:00 - 16:00
- [Efficient Parallel IO]({{ page.url }}#efficient-parallel-io), Online, 15 October 2024 09:30 - 16:30  	
- [Introduction to LAMMPS]({{ page.url }}#introduction-to-lammps), Online, 17 October 2024 10:00 - 16:30 
- [Data transfer via Globus]({{ page.url }}#data-transfer-via-globus)
- [Accessibility of EPSRC Large Scale Facilities]({{ page.url }}#accessibility-of-epsrc-large-scale-facilities) - User survey
- [Capability Days]({{ page.url }}#capability-days) including [webinar]({{ page.url }}#capability-days-webinar) on how to get the most from the Capability Days
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  

<!--more-->


## Adventures and misadventures in hybrid programming

Webinar, Wednesday 25th September 2024 15:00 - 16:00

Parallelism is central to modern scientific computing in that it provides the potential both to increase problem size and to reduce time to solution. At the level of the application, parallelism is typically expressed as a mixture of two levels (at least): MPI for distributed memory and a shared memory model at the node level, be it OpenMP for host parallelism or some GPU model for device parallelism. Thus “hybrid programming”.

This presentation will focus on a series of practical problems arising in the development of Ludwig, a lattice Boltzmann code aimed at complex fluids. First, I will give an overview of the abstraction adopted at the shared memory level to cope with the advent of GPUs. Second, a general measure of performance will be discussed in the context of ARCHER2 to show that the hybrid approach is effective at the socket level. Third, the interaction between the two levels of parallelism at the point of the nearest-neighbour halo exchange will be examined to consider a number of strategies including the use of tasks. Fourth, the task picture will be extended to the use of graph execution in the GPU context. Fifth, results will be presented on the performance including i/o in the high-scaling regime on ARCHER2.

The talk will illustrate approaches have been found useful, but will also describe misadventures which lead to relatively poor performance. The talk is aimed primarily at application programmers.

[Details and join link](https://www.archer2.ac.uk/training/courses/240925-hybrid-programming-vt/)

This online session is open to all. It will use the Blackboard Collaborate platform.


## Efficient Parallel IO

Online, 15 October 2024 09:30 - 16:30 GMT

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. Standard Unix IO routines are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems are optimised for large volumes of data, but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

This hands-on course explores a range of issues related to parallel IO. It uses ARCHER2 and its parallel Lustre file system as a platform for the exercises; however, almost all the IO concepts and performance considerations are applicable to any parallel system.

We will give a general overview of the Lustre filesystem and how parallel IO is implemented in MPI-IO since these are the routines ultimately used by many higher-level libraries such as HDF5 and NetCDF. A good understanding of the performance characteristics of MPI-IO is therefore very useful in optimising the IO performance of most parallel applications.

The course does not teach the detailed syntax of the various parallel IO libraries, but the Fortran source code provided for the benchmarking application used in the practical sessions should be useful reference material.

[Full details and registration](  https://www.archer2.ac.uk/training/#upcoming-training)


## Introduction to LAMMPS

Online, 17 October 2024 10:00 - 16:30

LAMMPS (Large-scale Atomic/Molecular Massively Parallel Simulator) is a widely-used classical molecular dynamics (MD) code. This C++ code is easy to use, incredibly versatile, and parallelised to run efficiently on both small-scale personal computers and CPU/GPU/CPU&GPU HPC clusters. As of 2023, LAMMPS has been used, to some degree, in over 40,000 publications in fields as varied as chemistry, physics, material science, granular and lubricated-granular flow.
The course will be divided into two parts:

-    The first part will be an introduction to setting up and running an MD simulation using LAMMPS. We will begin by running a simulation of a Lennard-Jones fluid before delving deeper into how simulations can be set up and run in LAMMPS.
-    The second part will go over advanced input commands, property calculations, outputs, input generation, data post-processing, and trajectory visualization.

[Full details and registration]( https://www.archer2.ac.uk/training/#upcoming-training)


## Data transfer via Globus

The ARCHER2 filesystems have a Globus Collection (formerly known as an endpoint) with the name "Archer2 file systems"

[We have provided a full step-by-step guide for using Globus to transfer files to/from ARCHER2]( 
https://docs.archer2.ac.uk/user-guide/data/#data-transfer-via-globus)


## Accessibility of EPSRC Large Scale Facilities - User survey 

We have been asked by EPSRC to circulate this survey to all users to collect the experiences of facility users.

With this survey their aim is not to single out any individual facilities but instead to identify and share what is working well. Once they have analysed the responses, the aggregated results will be shared with all the facilities, so we can jointly explore ways in which the range of facilities can become more inclusive, e.g. through good practice sharing.

[Complete the survey](  https://engagementhub.ukri.org/epsrc-researchinfrastructure/lsfusersurvey/)

EPSRC are keen to reach as many users as possible, to help them understand what barriers, if any, exist to providing greater accessibility.

Please do complete the survey.

## Capability Days

The third ARCHER2 Capability Days session is running from 24-26 September 2024. ARCHER2 Capability Days are a mechanism to allow users to run large scale tests on the system free of charge. The motivations behind Capability Days are:
- Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
- Enabling capability use cases that are not possible on other UK HPC services.
- Providing a facility that can be used to test scaling to help prepare software and communities for future exascale resources.

Capability Days are made up of three parts:

- 0800-2000 BST, 24 September 2024 - pre-Capability Days session (pre-capabilityday QoS) to allow users to test scaling and job setup ahead of full Capability Day
    - Supports jobs 256-1024 nodes, 20 min maximum run time
    - Jobs are uncharged
- 0800-1600 BST, 24 Sep 2024 - NERCcapability reservation to allow NERC users to test scaling
    - Only available to users in NERC projects
    - Supports up to 1024 nodes
    - Jobs are uncharged  
- 2000 BST, 24 September - 1400 BST, 26 September 2024 - Capability Days session (capabilityday QoS)
    - Supports jobs 512-4096 nodes, 1 hour maximum run time
    - Jobs are uncharged
      
For all Capability Days QoS/reservation jobs can be submitted ahead of time and will start when the session starts.

A full description of the Capability Days, including example job submission scripts can be found in the ARCHER2 Documentation at:
[ARCHER2 Capability Days](https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days)

During Capability Days a significantly reduced number of nodes are available for standard ARCHER2 jobs so users should expect to experience longer than usual wait times and reduced throughput.

**Currently, the nodes reserved for Capability Days are not fully utilised so we would encourage users to make use of them.  We will continue to monitor utilisation and if utilisation reduces further then we will return to nodes to normal service.** Users will be notified if we do this.

Please contact the service desk if you have any questions or require assistance regarding Capability Days.


### Capability Days webinar

[A recording of the Capability Days webinar from Wednesday 18th September is available]( https://www.archer2.ac.uk/training/courses/240918-capability-days-vt/)


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues.


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>
- [Adventures and misadventures in hybrid programming](https://www.archer2.ac.uk/training/courses/240925-hybrid-programming-vt/), Online webinar, Wednesday 25th September 2024 15:00 - 16:00 
- [Accelerating your Applications with AMD GPUs](https://www.archer2.ac.uk/training/courses/241001-amd-gpu/), Online, 1-4 October 2024 13:00 - 17:00 - **closing at 12:00 on 25th September 2024**	
- [Efficient Parallel IO](https://www.archer2.ac.uk/training/courses/241015-efficient-parallel-io/), Online, 15 October 2024 09:30 - 16:30  	
- [Introduction to LAMMPS](https://www.archer2.ac.uk/training/courses/241017-lammps/), Online, 17 October 2024 10:00 - 16:30 	
- [Data Analysis and Visualisation in Python](https://www.archer2.ac.uk/training/courses/241021-analysis-visualisation-python/), Online, 21 - 22 October 2024 09:30 - 16:30 	
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/241118-hpc-carpentry/), University of Newcastle, 18 - 19 November 2024 09:30 - 16:00 	





[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
