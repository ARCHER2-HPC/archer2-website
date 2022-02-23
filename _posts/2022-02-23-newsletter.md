---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-02-23 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [The Hitchhikers' Guide to ARCHER2, Online webinar, Wednesday 2nd March 2022 15:00 - 16:00](#the-hitchhikers-guide-to-archer2)
- [Message-passing programming with MPI, Online, 23, 24 and 31 March 2022 09:00 - 16:30 GMT, 09:00 - 15:00 GMT on final day](#message-passing-programming-with-mpi)
- [ARCHER2 for Package Users, Online, 10 March 2022 10:00 - 16:00 GMT](#archer2-for-package-users)
- [ARCHER2 for Data Scientists, Online, 28 February 2022 10:00 - 17:00 GMT ](#archer2-for-data-scientists)
- [VASP 6.3.0 available, VASP performance](#vasp-630-available-vasp-performance) 
- [Upcoming ARCHER2 training](#upcoming-archer2-training) 


## The Hitchhikers' Guide to ARCHER2

Online webinar, Wednesday 2nd March 2022 15:00 - 16:00
 
ARCHER2 is the UK’s Tier-1 supercomputing service. First-time users of HPC may be unsure of what to expect, and those coming from other services will notice differences. In this webinar I will provide an overview of the system’s hardware and software and cover basic usage such as logging in, compiling code, and running jobs.

Questions from attendees will be welcome.

This online session is open to all. 

Further details and join link: <https://www.archer2.ac.uk/training/#upcoming-training>
 


## Message-passing programming with MPI

Online 	23, 24 and 31 March 2022 09:00 - 16:30 GMT, 09:00 - 15:00 GMT on final day 
 
The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processes to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together. This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers point-to-point communication, non-blocking operations, derived datatypes, virtual topologies, collective communication and general design issues.

The course is normally delivered in an intensive three-day format using EPCC’s dedicated training facilities. It is taught using a variety of methods including formal lectures, practical exercises, programming examples and informal tutorial discussions. This enables lecture material to be supported by the tutored practical sessions in order to reinforce the key concepts.
 
Further details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>
 

## ARCHER2 for Package Users

Online 10 March 2022 10:00 - 16:00 GMT

This lesson provides an introduction to using ARCHER2 for users who:

- have already used other HPC systems; and
- want to use pre-installed simulation/modelling packages rather than compiling their own.

The lesson aims to answer the following questions:

- What hardware is available on ARCHER2?
- What does it consist of (login nodes, compute nodes, file systems, backup)?
- How does this impact me as a user?
- How can I access ARCHER2 interactively and transfer data?
- What does the ARCHER2 software environment look like and how do I access software?
- How do I write job submission scripts and submit them to the ARCHER2 scheduler?
- How can I be a good ARCHER2 citizen?
- How can I check what resources I am using and look at historical usage?
- What are the next steps for me using ARCHER2 and how can I get more help?
 
Further details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>
  

##  ARCHER2 for Data Scientists

28 February 2022 10:00 - 17:00 GMT

This one-day introductory course will cover the essentials of ARCHER2, the basic use of core data science packages (e.g., R, Pandas), and data handling best practice.

Further details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>


## VASP 6.3.0 available, VASP performance

The latest version of VASP (6.3.0) is now available for licensed users on ARCHER2. You can use this version by loading the appropriate module in your job scripts:

```module load vasp/6/6.3.0```

The default version of VASP 6 on ARCHER2 remains 6.2.1 at this time so ```module load vasp/6``` will still give you access to VASP 6.2.1. We will inform users before we make any changes to the default version of VASP on ARCHER2.

Along with this update, we have re-evaluated performance of VASP (versions 5.4.4.pl1 and 6.3.0) on ARCHER2 and summarised this information on the VASP pages in the ARCHER2 documentation at:

<https://docs.archer2.ac.uk/research-software/vasp/vasp/>

along with links to the full performance dataset.

If you do not yet have access to VASP 6 on ARCHER2 and have a valid VASP 6 licence, you can request access using the process described at: <https://epcced.github.io/safe-docs/safe-for-users/#how-to-request-access-to-a-package-group>




## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course
- ARCHER2 for Data Scientists, Online, 28 February 2022 10:00 - 17:00 GMT
- The Hitchhikers' Guide to ARCHER2, Online webinar, Wednesday 2nd March 2022 15:00 - 16:00
- ARCHER2 for Package Users, Online, 10 March 2022 10:00 - 16:00 GMT 
- Message-passing programming with MPI, Online, 23, 24 and 31 March 2022 09:00 - 16:30 GMT, 09:00 - 15:00 GMT on final day 



Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)
