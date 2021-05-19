---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-05-19 09:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Message-Passing Programming with MPI](#message-passing-programming-with-mpi) - new Online self-service course
- [VASP modules updated](#vasp-modules-updated)
- [RDFaaS available from ARCHER2](#rdfaas-available-from-archer2)
- [Upcoming ARCHER2 training](#other-upcoming-archer2-training) 


## Message-Passing Programming with MPI

We are pleased to announce our new Online Self-Service Message-passing Programming with MPI is now available.

Earlier this year we launched the Online Self-Service Shared Memory Programming with OpenMP course, and this is the partner to that course, covering MPI.

The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processors to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate OS processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together.

This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers:

- point-to-point communication
- non-blocking operations
- derived datatypes
- virtual topologies
- collective communication
- general design issues

This self-service course includes a series of Lecture videos (with closed captions and downloadable PDF slides) which you can work through at your own pace and in your own time.

Hands-on practical programming exercises are included, with the option of working in either C, C++ or Fortran.

Access to ARCHER2 is provided for participants to build and run the exercises.
 
[Full details, and registration link](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/).


## VASP modules updated

The following were made the default versions on ARCHER2 on Tuesday 18 May 2021
- vasp/5/5.4.4-gcc10-cpe2103
- vasp/6/6.2.0-gcc10-cpe2103


## RDFaaS available from ARCHER2

As previously noted, the RDF data was available on RDF as a Service (RDFaaS) as read-only. 
The RDFaaS is now available for read and write access. 

ARCHER2 users can access the data from the ARCHER2 User Access Nodes (UANs) using
- cd /epsrc/your_project_code
- cd /general/your_project_code

Note: as previously notified, /nerc is no longer available

If the data you wish to access is from an old ARCHER project which is not on ARCHER2, then please contact the [Service Desk](mailto:support@archer2.ac.uk) and we can make arrangements so that you are able to access the data.


## Other upcoming ARCHER2 Training

- HPC Carpentry, Online, 2 - 3 June 2021 09:30 - 16:00 BST 
- Message-passing Programming with MPI, Online,  always-open self-service course  - *new*
- Shared Memory Programming with OpenMP, Online, always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)