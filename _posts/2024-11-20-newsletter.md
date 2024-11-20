---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-11-20 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [At risk IO monitoring periods]({{ page.url }}#at-risk-io-monitoring-periods--mon-25-nov-2024):  Mon 25 Nov 2024
- [Autumn 2024 UKRI Access to HPC Call open]({{ page.url }}#autumn-2024-ukri-access-to-hpc-call-open) (deadline 28 Nov 2024):
- [Cross-vendor GPU development with C++ and SYCL]({{ page.url }}#cross-vendor-gpu-development-with-c-and-sycl), online, 3 December 2024 09:00 - 17:00
- [Introduction to LAMMPS]({{ page.url }}#introduction-to-lammps)
- [ARCHER2 Calendar 2025]({{ page.url }}#archer2-calendar-2025) - sign up for your copy
- [Accessibility of EPSRC Large Scale Facilities]({{ page.url }}#accessibility-of-epsrc-large-scale-facilities---user-survey) - User survey
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Change to Training Registration process]({{ page.url }}#change-to-training-registration-process)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  

<!--more-->


## At risk IO monitoring periods:  Mon 25 Nov 2024

As part of ongoing work to improve the ARCHER2 service we want to gain a more detailed understanding of the IO patterns in practice on the service. Having this information should allow us to work on improving user experience with IO on the /work Lustre file systems and provide better advice on improving IO performance to users of the service.

To gain this detailed information we need to gather IO statistics from all jobs on ARCHER2 for representative periods using the Darshan IO characterisation tool (https://www.mcs.anl.gov/research/projects/darshan/). To do this, we will enable Darshan for all jobs on ARCHER2 for one further 24 hour period in November:

- 08:00 GM Mon 25 Nov 2024 to 08:00 Tue 26 Nov 2024.

While we have run multiple 24h data collection periods before without issues earlier this year, there is a risk that enabling Darshan may cause issues for a small number of user jobs so the service should be considered "at risk" during these 24 hour periods.

If you do see jobs failing during this period and you suspect that Darshan may be the issue, you can set up your job to disable Darshan IO data characterisation by adding the command:

`module remove darshan`

as the last "module" command in your job submission script and resubmitting the job. If you see an issue and it is resolved by removing the "darshan" module in this way, please do let us know via support@archer2.ac.uk with details of the software you are running that saw the problem.

If you are building software or running jobs that use a profiling tool (e.g. CrayPAT, Arm Forge MAP, Scalasca) we recommend that you use the "module remove darshan" command before compiling software with profiling enabled and add the "module remove darshan" command to your job submission script for the profiling run as Darshan profiling may interfere with other profiling tools. We have tested running CrayPAT profiling with Darshan enabled and it worked successfully for our test cases, but we think it is still prudent to disable Darshan when profiling applications.

If you are interested in using Darshan or looking at the profiles of your jobs generated during this monitoring period, please see the [Darshan on ARCHER2 documentation.](https://docs.archer2.ac.uk/data-tools/darshan/)


## Autumn 2024 UKRI Access to HPC Call open 

Deadline: 28 November 2024 4:00pm  UK time

[ARCHER2 access page]( https://www.archer2.ac.uk/support-access/access.html)

[Full details of UKRI call]( https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-autumn-2024/)

No TA form required at application stage


## Cross-vendor GPU development with C++ and SYCL

Online, 3 December 2024 09:00 - 17:00

[SYCL](https://www.khronos.org/api/index_2017/sycl) is an open standard defined by the Khronos Group and allows programmers to write code for high-end GPUs across the biggest platforms like Intel, Nvidia and AMD, using both custom device kernels and optimised vendor libraries. This course will teach you the basics of the SYCL programming model, using the DPC++ compiler, and show how to run the same code on different GPU hardware. It will also touch on using high-performance libraries like oneMKL to get the best performance on these devices in domains like BLAS, FFT and others. oneMKL is based on the oneAPI specification and governed by the UXL Foundation.

[Further information and registration]( https://www.archer2.ac.uk/training/#upcoming-training)



## Introduction to LAMMPS

Online, 2nd and 9th December 2024 13:00 - 16:00

LAMMPS (Large-scale Atomic/Molecular Massively Parallel Simulator) is a widely-used classical molecular dynamics (MD) code. This C++ code is easy to use, incredibly versatile, and parallelised to run efficiently on both small-scale personal computers and CPU/GPU/CPU&GPU HPC clusters. As of 2023, LAMMPS has been used, to some degree, in over 40,000 publications in fields as varied as chemistry, physics, material science, granular and lubricated-granular flow.
The course will be divided into two parts:

- The first part will be an introduction to setting up and running an MD simulation using LAMMPS. We will begin by running a simulation of a Lennard-Jones fluid before delving deeper into how simulations can be set up and run in LAMMPS.
- The second part will go over advanced input commands, property calculations, outputs, input generation, data post-processing, and trajectory visualization.

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


## Change to Training Registration process

During November 2024 We are moving to a [new Registration process](https://www.archer2.ac.uk/news/2024/11/19/training-registration.html), so registration is done within SAFE, and the account request in the correct project is now part of the approval process, done automatically by the system.

Documentation for this new process can be found in our [SAFE Docs](https://epcced.github.io/safe-docs/training-registrations)

Please do not hesitate to contact the Service Desk if you have any questions or experience any issues with the new process.


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>
- [Intermediate Research Software Development](https://www.archer2.ac.uk/training/courses/241126-int-sw-dev/), Queen's University, Belfast, 26 - 28 November 2024 09:30 - 17:00
- [Message Passing programming with MPI](https://www.archer2.ac.uk/training/courses/241126-mpi/), 26 - 27 November 2024 09:00 - 17:00 in Birmingham, Tuesday 3rd December 14:00 to 16:30 online
- [Introduction to LAMMPS](https://www.archer2.ac.uk/training/courses/241202-lammps/), online,  2nd and 9th December 2024 13:00 - 16:00
- [Cross-vendor GPU development with C++ and SYCL](https://www.archer2.ac.uk/training/courses/241203-sycl/), online, 3 December 2024 09:00 - 17:00


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
