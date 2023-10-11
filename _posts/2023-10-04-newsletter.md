---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-10-04 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Building and installing packages with CMake: a hands-on introduction]({{ page.url }}#building-and-installing-packages-with-cmake-a-hands-on-introduction), Online webinar Wednesday 4th October 2023 15:00 - 16:00 BST TODAY
- [Efficient Parallel IO]({{ page.url }}#efficient-parallel-io), online,  1 November 2023 09:30 - 16:30 GMT
- [ARCHER2 User Survey 2023]({{ page.url }}#archer2-user-survey-2023)
- [The 11th ARCHER2 and Exascale eCSE software development call and Early Career eCSE Panel Observers call]({{ page.url }}#the-11th-archer2-and-exascale-ecse-software-development-call-and-early-career-ecse-panel-observers-call)
- [Seminar - Structure and delivery format for Online HPC courses]({{ page.url }}#seminar---structure-and-delivery-format-for-online-hpc-courses) - 9th October 2023  11:30am - 1pm BST   Hybrid
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->


## Building and installing packages with CMake: a hands-on introduction

Online webinar Wednesday 4th October 2023 15:00 - 16:00 BST

It is common on High Performance Computing machines to install software packages from source code. Many packages today make use of CMake, an open-source tool that automates the process of building, testing and packaging software.

We will give an introduction to CMake from the point of view of a user attempting to install a CMake package. We will cover configuring, building and installing packages, introduce common good practices and highlight troubleshooting techniques.

Additionally, we will give a brief overview of how to develop a CMake package.

[Full details and join link](https://www.archer2.ac.uk/training/courses/231004-cmake-vt/)


## Efficient Parallel IO

Online, 1 November 2023 09:30 - 16:30 GMT

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. Standard Unix IO routines are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems are optimised for large volumes of data, but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

This hands-on course explores a range of issues related to parallel IO. It uses ARCHER2 and its parallel Lustre file system as a platform for the exercises; however, almost all the IO concepts and performance considerations are applicable to any parallel system.

[Full details and regsitration](https://www.archer2.ac.uk/training/courses/231101-efficient-parallel-io/)


## ARCHER2 User Survey 2023

We are committed to continually improving the ARCHER2 Service and would like to request your input to help us understand what is important to you, where the Service is working well and where there is scope for improvement.

The ARCHER2 Annual User Survey consists of just a few questions and should take only a few minutes of your time to complete. There are opportunities to add more detailed comments if you wish.

For each survey response received, we will donate £1 to Save The Children.

[Complete the survey](https://bit.ly/ARCHER2-User-Survey-2023)

Thank you in advance for taking the time to complete this survey. The responses will be used to try and improve the service for you and to help identify key areas for service development.



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







## Seminar - Structure and delivery format for Online HPC courses

9th October 2023  11:30am - 1pm BST   Hybrid

A UNIVERSE-HPC Project seminar, but likely to be of interest to ARCHER2 community

With the rapid move to wide scale use of online training kickstarted by the COVID pandemic, there has been a lot of discussion about the best technologies to use for the delivery of lectures and practical for remote courses, but surprisingly little discussion about the high-level structure such as timetabling. In this talk, our speaker will discuss the pros and cons of a variety of formats that EPCC has used for online training before, during and after the pandemic, including intensive live courses; full or half days with gaps between them; recorded lectures with live practical; fully asynchronous courses such as MOOCs or online degree programmes.

[Further details and registration](http://www.universe-hpc.ac.uk/events/upcoming-events/2023-10-09_seminar-edinburgh/)





## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [Building and installing packages with CMake: a hands-on introduction](https://www.archer2.ac.uk/training/courses/231004-cmake-vt/), online vt, Wednesday 4th October 2023 15:00 - 16:00 BST
- [Efficient Parallel IO](https://www.archer2.ac.uk/training/courses/231101-efficient-parallel-io/),  Online, 	1 November 2023 09:30 - 16:30 GMT 
- [Single Node Performance Optimisation](https://www.archer2.ac.uk/training/courses/231123-performance-optimisation/), online, 23 - 24 November 2023 09:30 - 16:30 GMT

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
