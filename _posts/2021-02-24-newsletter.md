---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-02-24 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Message-passing programming with MPI](#message-passing-programming-with-mpi), Online,  17, 22 and 24 March 2021
- [Shared Memory programming with OpenMP](#shared-memory-programming-with-openmp), Online self-service course
- [EPCC GPU Hackathon 19-28 April 2021](#epcc-gpu-hackathon-19-28-april-2021) - Deadline extended
- [Upcoming ARCHER2 training](#other-upcoming-archer2-training) 



## Message-passing programming with MPI

Online,  17, 22 and 24 March 2021, 09:30 - 17:00 GMT, 09:30 - 15:00 GMT on final day

The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processes to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together. This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers point-to-point communication, non-blocking operations, derived datatypes, virtual topologies, collective communication and general design issues.

The course is normally delivered in an intensive three-day format using EPCC’s dedicated training facilities. It is taught using a variety of methods including formal lectures, practical exercises, programming examples and informal tutorial discussions. This enables lecture material to be supported by the tutored practical sessions in order to reinforce the key concepts.

Further details and registration:  [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


## Shared Memory programming with OpenMP

New Online self-service course - always open

Almost all modern computers now have a shared-memory architecture with multiple CPUs connected to the same physical memory, for example multicore laptops or large multi-processor compute servers. This course covers OpenMP, the industry standard for shared-memory programming, which enables serial programs to be parallelised easily using compiler directives. Users of desktop machines can use OpenMP on its own to improve program performance by running on multiple cores; users of parallel supercomputers can use OpenMP in conjunction with MPI to better exploit the shared-memory capabilities of the compute nodes. This course contains an introduction to the fundamental concepts of the shared variables model, followed by the syntax and semantics of OpenMP and how it can be used to parallelise real programs.

The course covers the following topics:

- Basic concepts of shared memory: threads, tasks, shared/private data, synchronisation.
- Concepts of OpenMP: parallel regions, shared/private variables, parallel loops, reductions
- OpenMP parallel regions and associated clauses
- OpenMP worksharing directives, scheduling of parallel loops
- OpenMP synchronisation: barriers, critical sections, atomics, locks.
- OpenMP tasks
- Additional features of OpenMP: nesting, orphaning, threadprivate globals, OpenMP 4.0/4.5 feature
- OpenMP tricks, tips and gotchas.
- OpenMP implementations
- Memory models.

This self-service course includes a series of Lecture videos (with transcript and slides downloadable) which you can work through at your own pace and in your own time.

Hands-on practical programming exercises are included, with the option of working in either Fortran or C.

Access to ARCHER2 provided for participants to build and run the exercises.

Further details and registration:  [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)



## EPCC GPU Hackathon 19-28 April 2021

Deadline for Applications **extended to 5th March 2021** 

EPCC will host a virtual GPU Hackathon and we invite applications from teams of three to six developers to take part.  

The EPCC GPU Hackathon is a multi-day event designed to help teams of three to six developers accelerate their own codes on GPUs using a programming model, or machine learning framework of their choice. Each team is assigned mentors for the duration of the event and provides an exciting opportunity for scientists to accelerate their AI research or HPC codes under the guidance of expert mentors from National Labs, Universities and Industry leaders in a collaborative environment.   

**Prerequisites:** 
 - Teams are expected to be fluent with the code or project they bring to the event and motivated to make progress during the Hackathon.   
 -	No advanced GPU skills required, but teams are expected to know the basics of GPU programming and profiling at the event. A collection of GPU lectures, tutorials, and labs are available for all participants at no no fee (see: [https://www.gpuhackathons.org/technical-resources](https://www.gpuhackathons.org/technical-resources)). Please contact organisers for more information to help you prepare for the hackathon. 

**GPU Compute Resource:**  
Teams attending the event will be given access to the GPU nodes on Cirrus ([https://www.cirrus.ac.uk/](https://www.cirrus.ac.uk/)) for the duration of the Hackathon. If participants prefer they can use their own GPU resource at the event.  


Further details can be found at: [https://gpuhackathons.org/event/epcc-gpu-hackathon-2021](https://gpuhackathons.org/event/epcc-gpu-hackathon-2021) or please contact [support@cirrus.ac.uk](mailto:support@cirrus.ac.uk) if you have any questions. 




## Other upcoming ARCHER2 Training

- Message-passing programming with MPI, Online, 17, 22 and 24 March 2021 09:30 - 17:00 GMT, 09:30 - 15:00 GMT on final day 
- Shared Memory Programming with OpenMP, Online, a new always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)