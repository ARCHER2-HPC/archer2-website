---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-04-03 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Access to HPC call open]({{ page.url }}#access-to-hpc-call-open)
- [Introduction to CP2K]({{ page.url }}#introduction-to-cp2k), Online, 8 April 2024 09:00 - 17:00 
- [Intermediate Modern Fortran]({{ page.url }}#intermediate-modern-fortran), Edinburgh, 10 - 11 April 2024 09:30 - 16:30 
- [Reproducible computational environments using containers &amp; introduction to Docker and Singularity]({{ page.url }}#reproducible-computational-environments-using-containers--introduction-to-docker-and-singularity), Birmingham, 16 -17 April 2024 10:00 - 16:30 & 09:00 - 14:30
- [Introduction to GPU programming with HIP]({{ page.url }}#introduction-to-gpu-programming-with-hip), Online, 18 - 19 April 2024 09:30 - 16:00 
- [Parallel Performance Analysis using Scalasca/Score-P on the ARCHER2 AMD GPUs]({{ page.url }}#parallel-performance-analysis-using-scalascascore-p-on-the-archer2-amd-gpus), Edinburgh, 29 - 30 April 2024 09:30 - 17:00 GMT 
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->





## Access to HPC call open

Deadline: 23 April 2024 4:00pm UK time

[ARCHER2 access page](https://www.archer2.ac.uk/support-access/access.html#archer2-time-calls)

[Full details of UKRI call](https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-2024/)

No TA form required at application stage



## Introduction to CP2K

Online, 8 April 2024 09:00 - 17:00 

CP2K can be used to perform simulations of solid state, liquid, molecular and biological systems. It is especially aimed at massively parallel and linear scaling electronic structure methods and state-of-the-art ab initio molecular dynamics (AIMD) simulations. CP2K is optimized for the mixed Gaussian and Plane-Waves (GPW) method based on pseudopotentials, but is also able to run all-electron or pure plane-wave/Gaussian calculations. 

This course provides an introductory overview of some of the most commonly used CP2K functionality. 

Topics include the following (all with specific reference to CP2K):

-    Basic and Hybrid Density Functional Theory (DFT) methods
-    Ab initio Molecular Dynamics (AIMD) and Machine Learned Potential MD
-    Excited state methods

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)



## Intermediate Modern Fortran

Edinburgh, 10 - 11 April 2024 09:30 - 16:30

Fortran (a contraction of Formula Translation) was the first programming language to have a standard (in 1954), but has changed significantly over the years. More recent standards (the latest being Fortran 2018) come under the umbrella term “Modern Fortran”. Fortran retains very great significance in many areas of scientific and numerical computing, particularly for applications such as quantum chemistry, plasmas, engineering and fluid dynamics, and in numerical weather prediction and climate models.

This intermediate course concentrates on some of the more recent features which are central to Modern Fortran. Attendees should be familiar with the basics of Fortran programming 

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)




## Reproducible computational environments using containers &amp; introduction to Docker and Singularity

Birmingham, 16 -17 April 2024 10:00 - 16:30 & 09:00 - 14:30

This course aims to introduce the use of containers with the goal of using them to effect reproducible computational environments. Such environments are useful for ensuring reproducible research outputs and for simplifying the setup of complex software dependencies across different systems. The course will introduce the use of Docker and Singularity containers but the material will be of use for whatever container technology you plan to, or end up, using.

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## Introduction to GPU programming with HIP 	 

Online, 18 - 19 April 2024 09:30 - 16:00 	

This short course will provide an introduction to GPU computing with HIP aimed at scientific application programmers wishing to develop their own software. The course will give a background on the difference between CPU and GPU architectures as a prelude to introductory exercises in HIP programming. The course will discuss the execution of kernels, memory management, among other topics.

The course will not discuss programming with compiler directives, but does provide a concrete basis of understanding of the underlying principles of the HIP model which is useful for programmers ultimately wishing to make use of OpenMP or OpenACC. The course will not consider graphics programming, nor will it consider machine learning packages.

Note that the course is also appropriate for those wishing to use NVIDIA GPUs via the CUDA API, although we will not specifically use CUDA.

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## Parallel Performance Analysis using Scalasca/Score-P on the ARCHER2 AMD GPUs

Edinburgh, 29 - 30 April 2024 09:30 - 17:00 GMT

Scalasca/Score-P is a portable, free and open-source software toolset that supports the performance optimisation of parallel programs by measuring and analysing their runtime behaviour.  The analysis identifies potential performance bottlenecks – in particular those concerning communication and synchronisation – and offers guidance in exploring their causes.  Scalasca uses execution profiles and traces generated by the community-developed Score-P instrumentation and measurement infrastructure.

Scalasca/Score-P targets scientific and engineering applications based on the programming interfaces MPI and OpenMP/OpenACC, including hybrid applications combining both with kernel offload to GPU accelerators. The tool has been specifically designed for use on large-scale systems, but is also well suited for small and medium-scale HPC platforms.  The software is available for free download under the New BSD open-source license.

This in-person course will cover how to use the tools in practice, delivered by members of the development team.  Scalasca/Score-P is portable across HPC systems, but for this course practical exercises will be conducted on the GPU-enabled partition of the UK National HPC Service ARCHER2 (an HPE/Cray EX system); all attendees will be given accounts on ARCHER2 for the duration of the course.  Although example parallel programs will be provided, attendees are encouraged to analyse the performance of their own applications.  

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- When close to storage quota, jobs may slow down or produce corrupted files (Added: 2024-02-27)
For situations where users are close to user or project quotas on work (Lustre) file systems we have seen cases of the following behaviour:
    - Jobs run very slowly as IO slows down
    - IO calls seem to complete successfully but not all data is written (so output is corrupted)
    - No "disk quota exceeded" error is seen

If you see these symptoms: slower than expected performance, data corruption; then you should check if you are close to your storage quota (either user or project quota). If you are, you may be experiencing this issue. Either remove data to free up space or request more storage quota.


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>
- [Introduction to CP2K](https://www.archer2.ac.uk/training/courses/240408-cp2k), Online, 	8 April 2024 09:00 - 17:00 
- [Intermediate Modern Fortran](https://www.archer2.ac.uk/training/courses/240410-intermediate-modern-fortran/), Edinburgh, 10 - 11 April 2024 09:30 - 16:30
- [Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/240410-modern-c/), York, 10 - 11 April 2024 09:30 - 16:30 GMT 
- [Introduction to Xcompact3D](https://www.archer2.ac.uk/training/courses/240415-xcompact3d/), Imperial College London, 15 April 2024 10:00 - 17:00
- [Reproducible computational environments using containers &amp; introduction to Docker and Singularity](https://www.archer2.ac.uk/training/courses/240416-containers/), Birmingham, 16 -17 April 2024 10:00 - 16:30 & 09:00 - 14:30 
- [Introduction to GPU programming with HIP](https://www.archer2.ac.uk/training/courses/240418-gpu-hip/), Online, 18 - 19 April 2024 09:30 - 16:00
- [Parallel Performance Analysis using Scalasca/Score-P on the ARCHER2 AMD GPUs](https://www.archer2.ac.uk/training/courses/240429-scalasca-gpu/), Edinburgh, 29 - 30 April 2024 09:30 - 17:00 GMT 

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
