---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-10-02 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Efficient Parallel IO]({{ page.url }}#efficient-parallel-io), Online, 15 October 2024 09:30 - 16:30  	
- [Introduction to LAMMPS]({{ page.url }}#introduction-to-lammps), Online, 17 October 2024 10:00 - 16:30 
- [Data Analysis and Visualisation in Python]({{ page.url }}#data-analysis-and-visualisation-in-python), Online, 21 - 22 October 2024 09:30 - 16:30 
- [Data transfer via Globus]({{ page.url }}#data-transfer-via-globus)
- [Accessibility of EPSRC Large Scale Facilities]({{ page.url }}#accessibility-of-epsrc-large-scale-facilities---user-survey) - User survey
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  

<!--more-->


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


## Data Analysis and Visualisation in Python

Online, 21 - 22 October 2024 09:30 - 16:30 

Python is a general purpose programming language that is useful for writing scripts to work effectively and reproducibly with data.

This is an introduction to Python designed for participants with no programming experience.

This course covers:

-    Some basic information about Python syntax.
-    The Jupyter notebook interface.
-    How to import CSV files.
-    Using the Pandas package to work with data frames.
-    How to calculate summary information from a data frame.
-    Brief introduction to plotting.
-    How to work with databases directly from Python.

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
- [Efficient Parallel IO](https://www.archer2.ac.uk/training/courses/241015-efficient-parallel-io/), Online, 15 October 2024 09:30 - 16:30  	
- [Introduction to LAMMPS](https://www.archer2.ac.uk/training/courses/241017-lammps/), Online, 17 October 2024 10:00 - 16:30 	
- [Data Analysis and Visualisation in Python](https://www.archer2.ac.uk/training/courses/241021-analysis-visualisation-python/), Online, 21 - 22 October 2024 09:30 - 16:30 	
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/241118-hpc-carpentry/), University of Newcastle, 18 - 19 November 2024 09:30 - 16:00 (Fully booked)	
- [Intermediate Research Software Development](https://www.archer2.ac.uk/training/courses/241126-int-sw-dev/), Queen's University, Belfast, 26 - 28 November 2024 09:30 - 17:00




[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
