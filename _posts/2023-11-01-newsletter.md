---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-11-01 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Slurm update]({{ page.url }}#slurm-update)
- [Access to HPC call open]({{ page.url }}#access-to-hpc-call-open)
- [ARCHER2 User Survey 2023]({{ page.url }}#archer2-user-survey-2023)
- [Single Node Performance Optimisation]({{ page.url }}#single-node-performance-optimisation), Online, 23 - 24 November 2023 09:30 - 16:30 GMT
- [ARCHER2 for Package Users]({{ page.url }}#archer2-for-package-users), Online, 7 December 2023 09:30 - 15:30 GMT 
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->


## Slurm update

Slurm on ARCHER2 has recently been updated. Please remember that the budget code must be specified when submitting a job. The budget code is set using the following line within the submit script, where `[budget code]` is replaced with the budget code to be used e.g. `ab123`

`#SBATCH --account=[budget code]` 

Further details can be found in the [scheduler documentation](https://docs.archer2.ac.uk/user-guide/scheduler/)


## Access to HPC call open

EPSRC Access to HPC call is open, with the  deadline for submission of TAs being 17 November 2023 16:00, and the closing date for applications is 1 December 2023 16:00.

Details including the Technical Assessment form can be found on our [Access page]( https://www.archer2.ac.uk/support-access/access.html#calls-for-archer2-time-only)

[Full call details on the UKRI site](https://www.ukri.org/opportunity/access-to-high-performance-computing/)


## ARCHER2 User Survey 2023

We are committed to continually improving the ARCHER2 Service and would like to request your input to help us understand what is important to you, where the Service is working well and where there is scope for improvement.

The ARCHER2 Annual User Survey consists of just a few questions and should take only a few minutes of your time to complete. There are opportunities to add more detailed comments if you wish.

For each survey response received, we will donate £1 to Save The Children.

[Complete the survey](https://bit.ly/ARCHER2-User-Survey-2023)

Thank you in advance for taking the time to complete this survey. The responses will be used to try and improve the service for you and to help identify key areas for service development.



## Single Node Performance Optimisation

Online, 23 - 24 November 2023 09:30 - 16:30 GMT

This course covers techniques for improving the performance of parallel applications by optimising of the code that runs within each node.

Modern HPC systems such as ARCHER2 are being constructed using increasingly powerful nodes, with larger and larger numbers of cores and enhanced vector capabilities. To extract maximum performance from applications, it is therefore necessary to understand, and be able to overcome, on-node performance bottlenecks. This course will cover the main features of modern HPC nodes, including multiple cores, vector floating point units, deep cache hierarchies, and NUMA memory systems. We will cover techniques for efficient programming of these features, using batch processing options and compiler options as well as hand tuning of code. The course will also contain an introduction to the use of Cray performance analysis tools.

Participants must have attended ARCHER2 for Software Developers or be familiar with software development on ARCHER, ARCHER2, or any other HPC facility, using C, C++ or Fortran.

This course is targeted at users interested in optimising the performance of their own applications, e.g. through compiler options or code changes.

Users interested in efficient use of centrally installed packages should consider attending Understanding Package Performance instead

[Full details and registration](https://www.archer2.ac.uk/training/courses/231123-performance-optimisation/)




## ARCHER2 for Package Users

Online, 7 December 2023 09:30 - 15:30 GMT 

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

[Full details and registration](https://www.archer2.ac.uk/training/courses/231207-package-users/)


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [Single Node Performance Optimisation](https://www.archer2.ac.uk/training/courses/231123-performance-optimisation/), online, 23 - 24 November 2023 09:30 - 16:30 GMT
- [ARCHER2 for Package Users](https://www.archer2.ac.uk/training/courses/231207-package-users/), online, 7 December 2023 09:3 - 15:30 GMT

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
