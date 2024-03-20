---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-03-20 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [At risk IO monitoring period]({{ page.url }}#at-risk-io-monitoring-period): Wed 27 Mar 2024
- [Access to HPC call open]({{ page.url }}#access-to-hpc-call-open)
- [Introduction to Modern Fortran]({{ page.url }}#introduction-to-modern-fortran), Durham, 3 - 4 April 2024 09:30 - 16:30 BST 
- [Intermediate Modern Fortran]({{ page.url }}#intermediate-modern-fortran), Edinburgh, 10 - 11 April 2024 09:30 - 16:30
- [Modern C++ for Computational Scientists]({{ page.url }}#modern-c-for-computational-scientists), York, 10 - 11 April 2024 09:30 - 16:30 
- [Introduction to Xcompact3D]({{ page.url }}#introduction-to-xcompact3d), London, 15 April 2024 10:00 - 17:00
- [Reproducible computational environments using containers &amp; introduction to Docker and Singularity]({{ page.url }}#reproducible-computational-environments-using-containers--introduction-to-docker-and-singularity), Birmingham, 16 -17 April 2024 10:00 - 16:30 & 09:00 - 14:30
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->


## At risk IO monitoring period

Wednesday 27th March 2024

As part of ongoing work to improve the ARCHER2 service we want to gain a more detailed understanding of the IO patterns in practice on the service. Having this information should allow us to work on improving user experience with IO on the /work Lustre file systems and provide better advice on improving IO performance to users of the service.

To gain this detailed information we need to gather IO statistics from all jobs on ARCHER2 for representative periods using the [Darshan IO characterisation tool ](https://www.mcs.anl.gov/research/projects/darshan/). To do this, we will enable Darshan for all jobs on ARCHER2 for a 24 hour period, starting at 09:00 GMT on Wednesday 27 March 2024. While we have run a 24h data collection period before without issues (on 30 Jan 2024) there is a risk that enabling Darshan may cause issues for a small number of user jobs so the service should be considered "at risk" during this 24 hour period.

If you do see jobs failing during this period and you suspect that Darshan may be the issue, you can set up your job to disable Darshan IO data characterisation by adding the command:

```module remove darshan```

as the last "module" command in your job submission script and resubmitting the job. If you see an issue and it is resolved by removing the "darshan" module in this way, please do [let us know](mailto:support@archer2.ac.uk) with details of the software you are running that saw the problem.

If you are building software or running jobs that use a profiling tool (e.g. CrayPAT, Arm Forge MAP, Scalasca) we recommend that you use the `module remove darshan` command before compiling software with profiling enabled and add the `module remove darshan` command to your job submission script for the profiling run as Darshan profiling may interfere with other profiling tools. We have tested running CrayPAT profiling with Darshan enabled and it worked successfully for our test cases, but we think it is still prudent to disable Darshan when profiling applications.

If you are interested in using Darshan or looking at the profiles of your jobs generated during this monitoring period, please see the [Darshan on ARCHER2 documentation](https://docs.archer2.ac.uk/data-tools/darshan/).


## Access to HPC call open

Deadline: 23 April 2024 4:00pm UK time

[ARCHER2 access page](https://www.archer2.ac.uk/support-access/access.html#archer2-time-calls)

[Full details of UKRI call](https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-2024/)

No TA form required at application stage



## Introduction to Modern Fortran

Durham, 3 - 4 April 2024 09:30 - 16:30 BST

Fortran (a contraction of Formula Translation) was the first programming langauge to have a standard (in 1954), but has changed significantly over the years. More recent standards (the latest being Fortran 2018) come under the umbrella term “Modern Fortran”. Fortran retains very great significance in many areas of scientific and numerical computing, particularly for applications such as quantum chemistry, plasmas, and in numerical weather prediction and climate models.

This course provides an introduction to the basics of writing Fortran. It will cover basic syntax, variables, expressions and assignments, flow of control, and introductions to i/o and user-defined types. Common Fortran idioms are introduced and contrasted with those available in C-like languages; the course will try to focus on real usage rather than formal descriptions.

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## Intermediate Modern Fortran

Edinburgh, 10 - 11 April 2024 09:30 - 16:30

Fortran (a contraction of Formula Translation) was the first programming language to have a standard (in 1954), but has changed significantly over the years. More recent standards (the latest being Fortran 2018) come under the umbrella term “Modern Fortran”. Fortran retains very great significance in many areas of scientific and numerical computing, particularly for applications such as quantum chemistry, plasmas, engineering and fluid dynamics, and in numerical weather prediction and climate models.

This intermediate course concentrates on some of the more recent features which are central to Modern Fortran. Attendees should be familiar with the basics of Fortran programming 

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)



## Modern C++ for Computational Scientists

York, 10 - 11 April 2024 09:30 - 16:30 

With the recent revisions to the C++ language and standard library, the ways it is now being used are quite different. Used well, these features enable the programmer to write elegant, reusable and portable code that runs efficiently on a variety of architectures.

However it is still a very large and complex tool. This course will cover a minimal set of features to allow an experienced non-C++ programmer to get to grips with language.

These include:

- overloading
- templates
- containers
- iterators
- lambdas
- standard algorithms

We will also briefly cover some important libraries for numerical computing.

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)



## Introduction to Xcompact3D

London, 15 April 2024 10:00 - 17:00

This course focused on Xcompact3d which is a Fortran-based framework of high-order finite-difference flow solvers dedicated to the study of turbulent flows. Dedicated to Direct and Large Eddy Simulations (DNS/LES) for which the largest turbulent scales are simulated, it can combine the versatility of industrial codes with the accuracy of spectral codes. Its user-friendliness, simplicity, versatility, accuracy, scalability, portability and efficiency makes it an attractive tool for the Computational Fluid Dynamics community. It is one of the four flagship solvers of the UK Turbulence Consortium. The course will run for 1 day comprising a mixture of lectures and tutorials. 

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## Reproducible computational environments using containers &amp; introduction to Docker and Singularity

Birmingham, 16 -17 April 2024 10:00 - 16:30 & 09:00 - 14:30

This course aims to introduce the use of containers with the goal of using them to effect reproducible computational environments. Such environments are useful for ensuring reproducible research outputs and for simplifying the setup of complex software dependencies across different systems. The course will introduce the use of Docker and Singularity containers but the material will be of use for whatever container technology you plan to, or end up, using.

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
- [Introduction to Modern Fortran](https://www.archer2.ac.uk/training/courses/240403-intro-modern-fortran/), Durham, 3 - 4 April 2024 09:30 - 16:30  
- [Message Passing programming with MPI](https://www.archer2.ac.uk/training/courses/240403-mpi/), Cambridge, 3 - 4 April 2024 09:30 - 17:00 (Day 1) and 09:30 - 16:00 (Day 2)
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
