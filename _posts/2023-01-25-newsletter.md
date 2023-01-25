---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-01-25 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [OPTIMET: an HPC Code for Modelling Nonlinear Optical Response of Arbitrary Clusters of Nanoparticles on ARCHER2](#optimet-an-hpc-code-for-modelling-nonlinear-optical-response-of-arbitrary-clusters-of-nanoparticles-on-archer2), online webinar, Wednesday 25th January 2023, 3pm
- [Message Passing programming with MPI](#message-passing-programming-with-mpi), Imperial College London, 22 - 24 February 2023
- [ARCHER2 9th Embedded CSE (eCSE) call](#archer2-9th-embedded-cse-ecse--call)
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 


## OPTIMET: an HPC Code for Modelling Nonlinear Optical Response of Arbitrary Clusters of Nanoparticles on ARCHER2

Online webinar, Wednesday 25th January 2023, 3pm

Computational modelling of interaction of light with clusters of nanoparticles is a notoriously challenging problem, chiefly because of the vectorial nature of the electromagnetic field, the existence of multiple scales at which the field must be described, such as in the near-, intermediate-, and far-field regions, the large parameter space needed to describe the nanoparticles in the cluster, and the complex, multi-scattering processes undergone by optical waves propagating within the nanoparticle cluster.

This computational complexity is further enhanced if nonlinear optical processes are considered.

In this talk, I will briefly introduce the numerical method used to model computationally such complex interactions, the so-called multiple-scattering matrix (MSM) method, and an HPC code (OPTIMET), which has been developed with eCSE support and implements the MSM method.

In particular, I will present the main structure of the code, describe the main steps of a numerical simulation, and discuss its scaling properties with respect to the number of nanoparticles in the cluster and number of cores as established on ARCHER2.

Several examples of numerical simulations of the linear and nonlinear optical response of certain nanoparticle clusters will be presented, too.

More details an join link : https://www.archer2.ac.uk/training/courses/230125-optimet-vt/

This online session is open to all. 


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
- [OPTIMET: an HPC Code for Modelling Nonlinear Optical Response of Arbitrary Clusters of Nanoparticles on ARCHER2](https://www.archer2.ac.uk/training/courses/230125-optimet-vt/), 	Online webinar, Wednesday 25th January 2023 15:00 - 16:00 
- [Software Carpentry](https://www.archer2.ac.uk/training/courses/230130-software-carpentry/), Cardiff, 30 - 31 January 2023 09:30 - 17:00 GMT
- [Message Passing programming with MPI](https://www.archer2.ac.uk/training/courses/230222-mpi/), Imperial College London, 22 - 24 February 2023 10:00 - 17:30 (Day 1 and 2) 10:00 - 15:00 (Day 3) 


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses and virtual tutorials](https://www.archer2.ac.uk/training/materials/)

