---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-03-13 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 Capability Day]({{ page.url }}#archer2-capability-day): Thu 14 Mar 2024
- [Access to HPC call open]({{ page.url }}#access-to-hpc-call-open)
- [GPU eCSE software development call]({{ page.url }}#gpu-ecse-software-development-call) 
- [Introduction to Modern Fortran]({{ page.url }}#introduction-to-modern-fortran), Durham, 3 - 4 April 2024 09:30 - 16:30 BST 
- [Intermediate Modern Fortran]({{ page.url }}#intermediate-modern-fortran), Edinburgh, 10 - 11 April 2024 09:30 - 16:30
- [Introduction to Xcompact3D]({{ page.url }}#introduction-to-xcompact3d), London, 15 April 2024 10:00 - 17:00
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->


## ARCHER2 Capability Day

Thursday 14th March 2024

A reminder that the first ARCHER2 Capability Day will take place from 0900 14 Mar 2024 to 0900 15 Mar 2024. 

ARCHER2 Capability Days are a mechanism to allow users to run large scale (512 node or more) tests on the system free - Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
- Enabling capability use cases that are not possible on other UK HPC services.
- Providing a facility that can be used to test scaling to help prepare software and communities for future exascale resources.

To enable this, a 24h period will be made available regularly where users can run jobs free of charge with the following limits:
- Minimum job size: 512 nodes
- Individual jobs steps (i.e. srun commands) within job scripts should also be a minimum of 512 nodes
- Jobs that do not meet these limits will be killed
- Maximum walltime: 3 hours
- Job numbers: 8 jobs maximum per user in the QoS
- 2 jobs maximum running per user
- Users must have a valid, positive CU budget to be able to run jobs during Capability Days

Users wishing to run jobs during Capability Day should submit to the “capabilityday” QoS. Jobs can be submitted ahead of time and will start when the Capability Day starts. You can find [information and an example job submission script in the ARCHER2 documentation](https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days).


## Access to HPC call open

Deadline: 23 April 2024 4:00pm UK time

[ARCHER2 access page](https://www.archer2.ac.uk/support-access/access.html#archer2-time-calls)

[Full details of UKRI call](https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-2024/)

No TA form required at application stage


## GPU eCSE software development call 

### GPU eCSE call

The first call of a new programme of eCSE calls focussing on GPU-based software development is now open. We invite proposals to develop software that facilitates research targeted at UKRI’s digital research infrastructure e.g. future Exascale supercomputing services, UK national AI services, national Tier-2 HPC services. The call is open to research across all of UKRI’s remit.

The first GPU eCSE call (GPU-eCSE01) opened on the 17 Jan 2024. The final deadline for proposal submission is 16:00 on 19 Mar 2024 via the ARCHER2 SAFE. Please note that for this call there is no separate technical evaluation stage or separate technical evaluation form.

Funding will enable the employment of an RSE (a Research Software Engineer, PDRA or equivalent) to work specifically on the relevant software to enable new features or improve the performance of the software to be run on GPU-based architectures. Funding can be requested for up to 36 person months of effort per project for a duration of up to 2 calendar years. There is flexibility in the way the effort is requested. For example, a project may have more than one person working on it or the effort could be spread over a greater number of calendar months, i.e. a staff member could work on the project at less than 100% alongside other commitments or it could be worked on by a staff member who doesn’t work full time. Please just get in contact with the [ARCHER2 Service Desk](mailto:support@archer2.ac.uk) if you wish to discuss possible scenarios. Projects are expected to start between 2-6 months after a call closes. Funding can be requested for staff located at the institution of the PI, third parties, or can include staff from the ARCHER2 centralised CSE support team at EPCC or a mixture of the above.

Projects may utilise the GPU component of ARCHER2 or other suitable GPU resources to complete the technical work. If the proposal plans to use the GPU component of ARCHER2, successful projects will be given access to these resources. If projects plan to utilise other systems, you should ensure you have suitable resources available to complete the project successfully. Please contact and arrange this access with the relevant service provider before submission.

More details of how to apply are available by following the link to the [eCSE calls page](https://www.archer2.ac.uk/ecse/)

[Video of the recent webinar on the application process](https://www.archer2.ac.uk/training/courses/240208-gpu-ecse-vt/)


### eCSE call dates

Deadline for final GPU eCSE submission: 16:00 on 19 Mar 2024 (via the [ARCHER2 SAFE](https://safe.epcc.ed.ac.uk/))


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


## Introduction to Xcompact3D

London, 15 April 2024 10:00 - 17:00

This course focused on Xcompact3d which is a Fortran-based framework of high-order finite-difference flow solvers dedicated to the study of turbulent flows. Dedicated to Direct and Large Eddy Simulations (DNS/LES) for which the largest turbulent scales are simulated, it can combine the versatility of industrial codes with the accuracy of spectral codes. Its user-friendliness, simplicity, versatility, accuracy, scalability, portability and efficiency makes it an attractive tool for the Computational Fluid Dynamics community. It is one of the four flagship solvers of the UK Turbulence Consortium. The course will run for 1 day comprising a mixture of lectures and tutorials. 

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
