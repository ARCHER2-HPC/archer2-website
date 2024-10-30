---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-10-30 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Spack software package manager on ARCHER2]({{ page.url }}#spack-software-package-manager-on-archer2)
- [Autumn 2024 UKRI Access to HPC Call open]({{ page.url }}#autumn-2024-ukri-access-to-hpc-call-open) (deadline 28 Nov 2024):
- [Single Node Performance Optimisation]({{ page.url }}#single-node-performance-optimisation), Edinburgh, 12 - 13 November 2024 09:30 - 17:30 Day 1, 09:30 - 16.30 Day 2
- [Message Passing programming with MPI]({{ page.url }}#message-passing-programming-with-mpi), 26 - 27 November 2024 09:00 - 17:00, Birmingham
- [ARCHER2 Calendar 2025]({{ page.url }}#archer2-calendar-2025) - sign up for your copy
- [Accessibility of EPSRC Large Scale Facilities]({{ page.url }}#accessibility-of-epsrc-large-scale-facilities---user-survey) - User survey
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  

<!--more-->


## Spack software package manager on ARCHER2

There is now an installation of the [Spack](https://spack.readthedocs.io) package manager available on ARCHER2 for users to use. Spack is designed to assist with building and installing software as well as determining what dependencies are required and installing those. It was originally designed for use on HPC clusters, where several variations of a given package may be installed alongside one another for different use cases -- for example different versions, built with different compilers, using MPI or hybrid MPI+OpenMP.

Extensive documentation on [using Spack on ARCHER2 can be found in the ARCHER2 documentation](https://docs.archer2.ac.uk/data-tools/spack/)

This new feature is available at an experimental stage on ARCHER2. We have done a lot of testing but there is still the chance you may run into issues and the configuration and available packages are subject to change with little or no notice as we continue to improve the setup. We also welcome any feedback you have on this new facility, please send any comments or feedback to the ARCHER2 Service Desk.


## Autumn 2024 UKRI Access to HPC Call open 

Deadline: 28 November 2024 4:00pm  UK time

[ARCHER2 access page]( https://www.archer2.ac.uk/support-access/access.html)

[Full details of UKRI call]( https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-autumn-2024/)

No TA form required at application stage

### Webinar for potential applicants

UKRI will hold a webinar on 7 November from 11:00am to 12:00 noon. This will provide more information about the funding opportunity and a chance to ask questions.

[Register for the webinar]( https://ukri.zoom.us/webinar/register/WN_G2YVsSj3QL-YmoKcCJl3VA)




## Single Node Performance Optimisation

12 - 13 November 2024 09:30 - 17:30 Day 1, 09:30 - 16.30 Day 2, Edinburgh

This course covers techniques for improving the performance of parallel applications by optimising of the code that runs within each node.

Modern HPC systems such as ARCHER2 are being constructed using increasingly powerful nodes, with larger and larger numbers of cores and enhanced vector capabilities. To extract maximum performance from applications, it is therefore necessary to understand, and be able to overcome, on-node performance bottlenecks. This course will cover the main features of modern HPC nodes, including multiple cores, vector floating point units, deep cache hierarchies, and NUMA memory systems. We will cover techniques for efficient programming of these features, using batch processing options and compiler options as well as hand tuning of code. The course will also contain an introduction to the use of Cray performance analysis tools.
Prerequisites:

Participants must be familiar with software development on ARCHER2, or any other HPC facility, using C, C++ or Fortran.

This course is targeted at users interested in optimising the performance of their own applications, e.g. through compiler options or code changes.

[Further information and registration]( https://www.archer2.ac.uk/training/#upcoming-training)



## Message Passing programming with MPI

26 - 27 November 2024 09:00 - 17:00, Birmingham,  Tuesday 3rd December 14:00 to 16:30 online

The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processors to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together. This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers point-to-point communication, non-blocking operations, derived datatypes, virtual topologies, collective communication and general design issues.

[Full details and registration](  https://www.archer2.ac.uk/training/#upcoming-training)



## ARCHER2 Calendar 2025

As in previous years, we plan to produce a printed calendar featuring some of the images from the competition – you are most warmly invited to [sign up to receive a copy](https://bit.ly/ARCHER2-Calendar-2025), and these will be posted out in time for the new year.


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
- [Single Node Performance Optimisation](https://www.archer2.ac.uk/training/courses/241112-single-node/), Edinburgh, 12 - 13 November 2024 09:30 - 17:30 Day 1, 09:30 - 16.30 Day 2 
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/241118-hpc-carpentry/), University of Newcastle, 18 - 19 November 2024 09:30 - 16:00 (Fully booked)	
- [Intermediate Research Software Development](https://www.archer2.ac.uk/training/courses/241126-int-sw-dev/), Queen's University, Belfast, 26 - 28 November 2024 09:30 - 17:00
- [Message Passing programming with MPI](https://www.archer2.ac.uk/training/courses/241126-mpi/), 26 - 27 November 2024 09:00 - 17:00 in Birmingham, Tuesday 3rd December 14:00 to 16:30 online




[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
