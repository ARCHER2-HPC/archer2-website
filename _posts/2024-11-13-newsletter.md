---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-11-13 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [At risk IO monitoring periods]({{ page.url }}#at-risk-io-monitoring-periods--thu-14-nov-mon-25-nov-2024): Thu 14 Nov, Mon 25 Nov 2024
- [GPU Driving Test]({{ page.url }}#gpu-driving-test)
- [Autumn 2024 UKRI Access to HPC Call open]({{ page.url }}#autumn-2024-ukri-access-to-hpc-call-open) (deadline 28 Nov 2024):
- [Cross-vendor GPU development with C++ and SYCL]({{ page.url }}#cross-vendor-gpu-development-with-c-and-sycl), online, 3 December 2024 09:00 - 17:00
- [Message Passing programming with MPI]({{ page.url }}#message-passing-programming-with-mpi), 26 - 27 November 2024 09:00 - 17:00, Birmingham
- [ARCHER2 Calendar 2025]({{ page.url }}#archer2-calendar-2025) - sign up for your copy
- [Accessibility of EPSRC Large Scale Facilities]({{ page.url }}#accessibility-of-epsrc-large-scale-facilities---user-survey) - User survey
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  

<!--more-->


## At risk IO monitoring periods:  Thu 14 Nov, Mon 25 Nov 2024

As part of ongoing work to improve the ARCHER2 service we want to gain a more detailed understanding of the IO patterns in practice on the service. Having this information should allow us to work on improving user experience with IO on the /work Lustre file systems and provide better advice on improving IO performance to users of the service.

To gain this detailed information we need to gather IO statistics from all jobs on ARCHER2 for representative periods using the Darshan IO characterisation tool (https://www.mcs.anl.gov/research/projects/darshan/). To do this, we will enable Darshan for all jobs on ARCHER2 for two 24 hour periods in November:

- 08:00 GM Thu 14 Nov 2024 to 08:00 Fri 15 Nov 2024
- 08:00 GM Mon 25 Nov 2024 to 08:00 Tue 26 Nov 2024.

While we have run multiple 24h data collection periods before without issues earlier this year, there is a risk that enabling Darshan may cause issues for a small number of user jobs so the service should be considered "at risk" during these 24 hour periods.

If you do see jobs failing during this period and you suspect that Darshan may be the issue, you can set up your job to disable Darshan IO data characterisation by adding the command:

`module remove darshan`

as the last "module" command in your job submission script and resubmitting the job. If you see an issue and it is resolved by removing the "darshan" module in this way, please do let us know via support@archer2.ac.uk with details of the software you are running that saw the problem.

If you are building software or running jobs that use a profiling tool (e.g. CrayPAT, Arm Forge MAP, Scalasca) we recommend that you use the "module remove darshan" command before compiling software with profiling enabled and add the "module remove darshan" command to your job submission script for the profiling run as Darshan profiling may interfere with other profiling tools. We have tested running CrayPAT profiling with Darshan enabled and it worked successfully for our test cases, but we think it is still prudent to disable Darshan when profiling applications.

If you are interested in using Darshan or looking at the profiles of your jobs generated during this monitoring period, please see the [Darshan on ARCHER2 documentation.](https://docs.archer2.ac.uk/data-tools/darshan/)


## GPU Driving Test

In order to support users wishing to explore the [ARCHER2 AMD GPU Development Platform](https://docs.archer2.ac.uk/user-guide/gpu/) we are now offering the ARCHER2 GPU Driving Test.

The [GPU Driving Test](https://www.archer2.ac.uk/training/driving-test#gpu-driving-test) uses an online assessment tool format which includes a range of questions around the use of ARCHER2 and the GPUs.

-  [Take the ARCHER2 GPU Driving Test]( https://www.quia.com/quiz/8519232.html)

The GPU Driving Test is open to everyone, including those who have previously completed the ARCHER2 Driving Test.

On successful completion, eligible users will be invited to sign up for an account on ARCHER2 for access to the GPU cluster for a year.

[Full details]( https://www.archer2.ac.uk/news/2024/11/12/gpu-driving-test.html )

We hope that this new access route will enable more people, interested in exploring what GPUs can offer in their work, an easy way to get immediate, hands-on access and experience.


## Autumn 2024 UKRI Access to HPC Call open 

Deadline: 28 November 2024 4:00pm  UK time

[ARCHER2 access page]( https://www.archer2.ac.uk/support-access/access.html)

[Full details of UKRI call]( https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-autumn-2024/)

No TA form required at application stage


## Cross-vendor GPU development with C++ and SYCL

Online, 3 December 2024 09:00 - 17:00

[SYCL](https://www.khronos.org/api/index_2017/sycl) is an open standard defined by the Khronos Group and allows programmers to write code for high-end GPUs across the biggest platforms like Intel, Nvidia and AMD, using both custom device kernels and optimised vendor libraries. This course will teach you the basics of the SYCL programming model, using the DPC++ compiler, and show how to run the same code on different GPU hardware. It will also touch on using high-performance libraries like oneMKL to get the best performance on these devices in domains like BLAS, FFT and others. oneMKL is based on the oneAPI specification and governed by the UXL Foundation.

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
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/241118-hpc-carpentry/), University of Newcastle, 18 - 19 November 2024 09:30 - 16:00 (Fully booked)	
- [Intermediate Research Software Development](https://www.archer2.ac.uk/training/courses/241126-int-sw-dev/), Queen's University, Belfast, 26 - 28 November 2024 09:30 - 17:00
- [Message Passing programming with MPI](https://www.archer2.ac.uk/training/courses/241126-mpi/), 26 - 27 November 2024 09:00 - 17:00 in Birmingham, Tuesday 3rd December 14:00 to 16:30 online
- [Introduction to LAMMPS](https://www.archer2.ac.uk/training/courses/241202-lammps/), online,  2nd and 9th December 2024 13:00 - 16:00
- [Cross-vendor GPU development with C++ and SYCL](https://www.archer2.ac.uk/training/courses/241203-sycl/), online, 3 December 2024 09:00 - 17:00


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
