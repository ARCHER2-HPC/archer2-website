---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-03-09 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Recently added Known Issues](#recently-added-known-issues)
- [UK wide Research and Innovation (R&I) Workforce Survey](#uk-wide-research-and-innovation-ri-workforce-survey)
- [CASTEP 21.1.1 available](#castep-2111-available)
- [Message-passing programming with MPI, Online, 23, 24 and 31 March 2022 09:00 - 16:30 GMT, 09:00 - 15:00 BST on final day](#message-passing-programming-with-mpi) 
- [Upcoming ARCHER2 training](#upcoming-archer2-training) 


## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

Recently added issues include:

- [OOM due to memory leak in libfabric](https://docs.archer2.ac.uk/known-issues/#oom-due-to-memory-leak-in-libfabric-added-2022-02-23) (Added: 2022-02-23)
- [Default FFTW library points to Intel Haswell version rather than AMD Rome at runtime](https://docs.archer2.ac.uk/known-issues/#default-fftw-library-points-to-intel-haswell-version-rather-than-amd-rome-at-runtime-added-2022-02-23) (Added: 2022-02-23)

We encourage users to check this page if they are experiencing any issues, and also to alert the service desk if they discover any issues or identify any workaround themselves, so that we can add the information to this page.

We will also be highlighting newly added issues in this weekly mailing.



## UK wide Research and Innovation (R&I) Workforce Survey

All ARCHER2 users are encouraged to take part in the first UK wide Research and Innovation (R&I) Workforce Survey which is currently open for submissions.

<https://www.archer2.ac.uk/news/2022/03/07/research-and-innovation-workforce-survey.html>



This is your chance to help develop an evidence base that will inform UK government and UK Research and Innovation (UKRI) policies and funding decisions. The survey covers the full range of occupations in the R&I workforce, including but not limited to trainee or experienced researchers, technicians, engineers, social and economic researchers, R&I leaders and managers.




## CASTEP 21.1.1 available

The latest version of CASTEP (21.1.1) is now available for licensed users on ARCHER2. You can use this version by loading the appropriate module in your job scripts:

`module load castep/21.11`

The default version of CASTEP on ARCHER2 remains 20.1.1 at this time so `module load castep` will still give you access to CASTEP 20.1.1. We will inform users before we make any changes to the default version of CASTEP on ARCHER2.

If you do not yet have access to CASTEP on ARCHER2 and have a valid CASTEP licence, you can request access using the process described at: <https://epcced.github.io/safe-docs/safe-for-users/#how-to-request-access-to-a-package-group-licensed-software-or-restricted-features>

You can find more information on using CASTEP on ARCHER2, including example job submission scripts in the ARCHER2 documentation at:
<https://docs.archer2.ac.uk/research-software/castep/castep/>
  

## Message-passing programming with MPI

Online 	23, 24 and 31 March 2022 09:00 - 16:30 GMT, 09:00 - 15:00 BST on final day 
 
The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processes to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together. This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers point-to-point communication, non-blocking operations, derived datatypes, virtual topologies, collective communication and general design issues.

The course is normally delivered in an intensive three-day format using EPCC’s dedicated training facilities. It is taught using a variety of methods including formal lectures, practical exercises, programming examples and informal tutorial discussions. This enables lecture material to be supported by the tutored practical sessions in order to reinforce the key concepts.
 
Further details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>
 



## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course <br><br>
- Message-passing programming with MPI, Online, 23, 24 and 31 March 2022 09:00 - 16:30 GMT, 09:00 - 15:00 BST on final day 
- Advanced use of LAMMPS, Online, 31 March 2022 10:00 - 16:00 BST
- Introduction to ARCHER2 for Software Developers, Online, 19 - 20 April 2022 10:00 - 16:00 BST 
- Introduction to GROMACS, Online, 21 April 2022 10:00 - 16:00 BST 



Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)
