---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-02-01 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Major software Upgrade]({{ page.url }}#major-software-upgrade-fri-14th-april---wb-mon-8th-may): Fri 14th April - w/b Mon 8th May
- [Message Passing programming with MPI]({{ page.url }}#message-passing-programming-with-mpi), Imperial College London, 22 - 24 February 2023
- [ARCHER2 9th Embedded CSE (eCSE) call](#archer2-9th-embedded-cse-ecse--call)
- [Recently added Known Issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->
 


## Major software Upgrade: Fri 14th April - w/b Mon 8th May


A reminder that there will be a major software upgrade on ARCHER2 from Friday 14th April - week beginning 8th May. This major software upgrade includes the base operating system, the Slingshot interconnect system software, the HPE Cray Programming Environment and the HPE Cray Management Software.

This essential upgrade will ensure access to security updates; improvements to interconnect reliability and performance; improvements to upgradeability, maintainability and monitoring; and access to more recent compilers, software libraries and tools. Unfortunately, the major software upgrade will cause a long outage but we have endeavoured to minimise the outage as well as give as much notice to users as possible so that you can plan accordingly.

During the upgrade, users will be unable to connect to ARCHER2 via the login nodes, jobs will not run on the compute nodes and users will not be able to access any data on the system which include the /home, /work, NVMe and RDFaaS (/epsrc and /general) file systems.

Following the upgrade, we would advise users to recompile and test your codes as the new software will be based on a new operating system and new versions of compilers and libraries. The ARCHER2 CSE team will be recompiling and testing all centrally installed software. There will be no Python 2 installation available as part of supported software following the upgrade. Python 3 will continue to be fully-supported.  

We will include weekly reminders of the software upgrade in the ARCHER2 weekly newsletter and a further notification will be sent to all users two weeks prior to the upgrade. We are also planning a user forum which will provide an opportunity to ask any questions to HPE and EPCC staff and learn about new features and changes to the user environment following the upgrade.

We have created a [webpage with further details of the upgrade](https://docs.archer2.ac.uk/faq/upgrade-2023/) which will be updated throughout the upgrade process:  

Please [contact the service desk] (mailto:support@archer2.ac.uk) if you have any concerns regarding the upgrade. 


## Message Passing programming with MPI

22 - 24 February 2023 10:00 - 17:30 (Day 1 and 2) 10:00 - 15:00 (Day 3)

This course will take place face-to-face at Imperial College London

The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processes to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together. This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers point-to-point communication, non-blocking operations, derived datatypes, virtual topologies, collective communication and general design issues.

The course is normally delivered in an intensive three-day format. It is taught using a variety of methods including formal lectures, practical exercises, programming examples and informal tutorial discussions. This enables lecture material to be supported by the tutored practical sessions in order to reinforce the key concepts.

This course is free to all academics.

[More details and registration]( https://www.archer2.ac.uk/training/#upcoming-training)



## ARCHER2 9th Embedded CSE (eCSE)  call

We are very pleased to announce that the 9th ARCHER2 eCSE call
(ARCHER2-eCSE09) is now open for proposals. The deadline for submitting documents for technical evaluation is 16:00 on 21st February 2023 with the final deadline for proposal submission being 16:00 on 14th March 2023.

Embedded CSE (eCSE) support provides funding for RSEs (Research Software Engineers, PDRAs or equivalent) to carry out software development of codes to be run on the ARCHER2 system.

Projects can be requested for up to 18 person months of effort per project. We hope that this recent increase in the effort available per project will provide researchers with the opportunity to carry out more in depth improvements to software and to allow for an increase in the scope of a project's objectives. There is flexibility in the way the effort is requested. For example, a project may have more than one person working on it or the effort could be spread over a greater number of calendar months, i.e. a staff member could work on the project at less than 100% alongside other commitments or it could be worked on by a staff member who doesn't work full time. Please just get in contact with the ARCHER2 Service Desk if you wish to discuss possible scenarios.

The code(s) may already be running on ARCHER2, where the aim is to improve performance or scalability, to add functionality or to improve the usability and maintainability, or the code(s) may be running elsewhere (e.g. on a Tier-2 system) and the proposal could be to bring the software up to a level where it would perform well on ARCHER2.

For this call, software which results in research which is within the remit of EPSRC is eligible. Funding can be requested for staff located at the institution of the PI, third parties, or can include staff from the centralised CSE support team or a mixture of the above.

More details of how to apply are available by following the link to the [eCSE calls page](https://www.archer2.ac.uk/ecse/) together with details of the application and review process, assessment criteria eligibility, etc.


### eCSE call dates


Deadline for submitting eCSE09 documents for technical evaluation: 16:00 on Tuesday 21st February 2023

Deadline for final eCSE09 submission: 16:00 Tuesday 14th March 2023

A [recent webinar](https://www.archer2.ac.uk/training/courses/220428-ecse-webinar/) includes a walk through of the submission of a proposal.


## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course
- [Message Passing programming with MPI](https://www.archer2.ac.uk/training/courses/230222-mpi/), Imperial College London, 22 - 24 February 2023 10:00 - 17:30 (Day 1 and 2) 10:00 - 15:00 (Day 3) 


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses and virtual tutorials](https://www.archer2.ac.uk/training/materials/)

