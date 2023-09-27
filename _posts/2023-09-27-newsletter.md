---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-09-27 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Network Upgrade Maintenance completed]({{ page.url }}#network-upgrade-maintenance-completed)
- [The 11th ARCHER2 and Exascale eCSE software development call and Early Career eCSE Panel Observers call]({{ page.url }}#the-11th-archer2-and-exascale-ecse-software-development-call-and-early-career-ecse-panel-observers-call)
- [Building and installing packages with CMake: a hands-on introduction]({{ page.url }}#building-and-installing-packages-with-cmake-a-hands-on-introduction), Online webinar Wednesday 4th October 2023 15:00 - 16:00 BST
- [RDFaaS File System]({{ page.url }}#rdfaas-file-system)
- [Seminar - Structure and delivery format for Online HPC courses]({{ page.url }}#seminar---structure-and-delivery-format-for-online-hpc-courses) - 9th October 2023  11:30am - 1pm BST   Hybrid
- [Shared memory programming with OpenMP]({{ page.url }}#shared-memory-programming-with-openmp), Imperial College London, 28 - 29 September 2023 10:00 - 17:00 BST
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->



## Network Upgrade Maintenance completed

Monday 18th September  09:00 – Friday 22nd September 

We are pleased to confirm that the Data Centre Network (DCN) upgrade work was completed successfully last week and ARCHER2 returned to full service on Friday afternoon.
 
The relaxation of the restrictions on QoS have now been reverted to their normal values https://docs.archer2.ac.uk/user-guide/scheduler/#quality-of-service-qos
 
We would welcome your feedback on whether you found the revised limits useful as we continually review limits for the QoS – please just drop an email in to the service desk support@archer2.ac.uk



## The 11th ARCHER2 and Exascale eCSE software development call and Early Career eCSE Panel Observers call


We are very pleased to announce that the 11th ARCHER2 eCSE call (ARCHER2 eCSE11) opened on the 12 Sep 2023. For this call, in addition to proposals for codes to run on ARCHER2, we are also accepting proposals looking to prepare codes for a future Exascale successor, including for example GPU development. The deadline for submitting documents for technical evaluations is 16:00 on 10 Oct 2023, with the final deadline for proposal submission being 16:00 on 31 Oct 2023. The early career eCSE Panel Observers opened alongside the eCSE call and the deadline for applications for this call is 16:00 on 10 Oct 2023.

### The 11th ARCHER2 eCSE call


Through a series of regular calls, Embedded CSE (eCSE) support provides funding to the ARCHER2 user community to develop software in a sustainable manner, to run on the ARCHER2 system, or to prepare for a future Exascale successor. Projects targeting a future GPU platform are welcome, as are projects looking at any aspect of preparing the ARCHER2 software stack for Exascale. Note projects that only target improvements for existing platforms (other than ARCHER2), rather than preparing for future Exascale systems, are not in scope.

Funding will enable the employment of an RSE (a Research Software Engineer, PDRA or equivalent) to work specifically on the relevant software to enable new features or improve the performance of the code. Funding can be requested for up to 18 person months of effort per project. There is flexibility in the way the effort is requested. For example, a project may have more than one person working on it or the effort could be spread over a greater number of calendar months, i.e. a staff member could work on the project at less than 100% alongside other commitments or it could be worked on by a staff member who doesn’t work full time. Please just get in contact with the ARCHER2 Service Desk if you wish to discuss possible scenarios.

For this call, software which results in research which is within the remit of EPSRC is eligible. Funding can be requested for staff located at the institution of the PI, third parties, or can include staff from the ARCHER2 centralised CSE support team at EPCC or a mixture of the above.

More details of how to apply are available by following the link to the [eCSE calls page](https://www.archer2.ac.uk/ecse/) together with details of the application and review process, assessment criteria eligibility, etc. 

A [recent webinar can be found on our website](https://www.archer2.ac.uk/training/courses/220428-ecse-webinar/) 
which includes a walk through of the submission of a proposal.


### ARCHER2 Early Career eCSE Panel Observers call

The eCSE Panel Meeting is the meeting where eCSE proposals are reviewed and decisions are made on which proposals to fund. As part of our commitment to encouraging and developing Early Career Researchers, we are offering a small number of places to such researchers to attend the eCSE panel meeting as Early Career Observers. The aim is to give Early Career Researchers a better insight into this competitive selection process, to assist them in the preparation of future funding proposals.

The [deadline for applying to attend the panel meeting as an observer is 16:00 on 10 October 2023 and details of the call ](https://www.archer2.ac.uk/ecse/observers/)

An [insight into the experience from one of our recent Early Career Panel Observers ](https://www.archer2.ac.uk/news/2023/01/18/ecse-ec-obs.html)

### eCSE and observers call dates


Deadline for submitting ARCHER2-eCSE11 documents for technical evaluation: 16:00 on 10 Oct 2023

Deadline for final ARCHER2-eCSE11 submission: 16:00 on 31 Oct 2023

Deadline for Early Career eCSE Panel Observers call: 16:00 on 10 Oct 2023


## Building and installing packages with CMake: a hands-on introduction

Online webinar Wednesday 4th October 2023 15:00 - 16:00 BST

It is common on High Performance Computing machines to install software packages from source code. Many packages today make use of CMake, an open-source tool that automates the process of building, testing and packaging software.

We will give an introduction to CMake from the point of view of a user attempting to install a CMake package. We will cover configuring, building and installing packages, introduce common good practices and highlight troubleshooting techniques.

Additionally, we will give a brief overview of how to develop a CMake package.

[Full details and join link](https://www.archer2.ac.uk/training/courses/231004-cmake-vt/)


## RDFaaS file system

The RDFaaS (Research Data Facility as a Service) file systems provide additional capacity for projects to store data that is not currently required on the compute nodes but which is too large for the home file systems. 

If you do not currently have access to the RDFaaS and would like access for your active ARCHER2 project then please [contact the Service Desk](mailto:support@archer2.ac.uk). 

Further information for the RDFaaS can be [found in our documentation](https://docs.archer2.ac.uk/user-guide/data/#rdfaas-file-systems )

Please note the RDFaaS is not currently available for NERC funded projects.


## Seminar - Structure and delivery format for Online HPC courses

9th October 2023  11:30am - 1pm BST   Hybrid

A UNIVERSE-HPC Project seminar, but likely to be of interest to ARCHER2 community

With the rapid move to wide scale use of online training kickstarted by the COVID pandemic, there has been a lot of discussion about the best technologies to use for the delivery of lectures and practical for remote courses, but surprisingly little discussion about the high-level structure such as timetabling. In this talk, our speaker will discuss the pros and cons of a variety of formats that EPCC has used for online training before, during and after the pandemic, including intensive live courses; full or half days with gaps between them; recorded lectures with live practical; fully asynchronous courses such as MOOCs or online degree programmes.

[Further details and registration](http://www.universe-hpc.ac.uk/events/upcoming-events/2023-10-09_seminar-edinburgh/)



## Shared memory programming with OpenMP

Imperial College London, 28 - 29 September 2023 10:00 - 17:00 BST

Almost all modern computers now have a shared-memory architecture with multiple CPUs connected to the same physical memory, for example multicore laptops or large multi-processor compute servers. This course covers OpenMP, the industry standard for shared-memory programming, which enables serial programs to be parallelised easily using compiler directives. Users of desktop machines can use OpenMP on its own to improve program performance by running on multiple cores; users of parallel supercomputers can use OpenMP in conjunction with MPI to better exploit the shared-memory capabilities of the compute nodes.

This course will cover an introduction to the fundamental concepts of the shared variables model, followed by the syntax and semantics of OpenMP and how it can be used to parallelise real programs. Hands-on practical programming exercises will be included, with access to HPC provided for the duration of the course.

[Full details and registration](https://www.archer2.ac.uk/training/courses/230928-openmp/)


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [Shared memory programming with OpenMP](https://www.archer2.ac.uk/training/courses/230928-openmp/), Imperial College London, 28 - 29 September 2023 10:00 - 17:00 BST
- [Building and installing packages with CMake: a hands-on introduction](https://www.archer2.ac.uk/training/courses/231004-cmake-vt/), online vt, Wednesday 4th October 2023 15:00 - 16:00 BST

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
