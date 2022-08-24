---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-08-24 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Maintenance sessions](#maintenance-sessions-wednesdays-24th-and-31st-august): Wednesdays 24th and 31st August
- [HPC-AI Advisory Council UK conference](hpc-ai-advisory-council-uk-conference--extended-deadline-for-abstract-submissions-30th-august) - extended deadline for abstract submissions: 30th August
- [Introduction to OpenMP](#introduction-to-openmp), Online, 30th & 31st August, 6th September 2022 09:00 - 17:00 BST 
- [Debugging and Optimizing Parallel Codes with Arm Forge - Debugging and DDT](debugging-and-optimizing-parallel-codes-with-arm-forge---debugging-and-ddt), Online webinar Wednesday 31st August 2022 15:00 - 16:00 BST
- [ARCHER2 for Software Developers](archer2-for-software-developers), Online, 1 - 2 September 2022 10:00 - 16:00 BST
- [ARCHER2 Image and Video Competition 2022](#archer2-image-and-video-competition-2022)  
- [Access to HPC Call open](#access-to-hpc-call)
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 
 
## Maintenance sessions: Wednesdays 24th and 31st August

A reminder that there will be two maintenance sessions on ARCHER2 to allow  essential networking work to take place:

### Wednesday 24th August 0900 - 1300 at-risk session 

This maintenance session has now been downgraded to an 'at-risk' session.
This means that we do not expect this work to have any impact on user service. Users will be able to connect to ARCHER2, access data, submit and run jobs.

### Wednesday 31st August 0900 - 1100 partial outage 

During this partial outage maintenance session, users will not be able to connect to ARCHER2 via the login nodes and will not be able to access data. The compute nodes will be operational and will continue to run jobs and new jobs will start.
Users will also be unable to connect to the SAFE during this time.

We apologise for any inconvenience caused by this essential network work and we will notify users as soon as the work has been completed and the full service is available again.

<https://www.archer2.ac.uk/support-access/status.html#service-alerts>


## HPC-AI Advisory Council UK conference – extended deadline for abstract submissions: 30th August

The webpages for 2022 HPC-AI Advisory Council UK conference are now live (links below) and we have extended the deadline for abstract submissions
to 30th August.

The HPC-AI Advisory Council’s mission is “to bridge the gap between high-performance computing (HPC) and Artificial Intelligence (AI) use
and its potential, bring the beneficial capabilities of HPC and AI to new users for better research, education, innovation and product manufacturing, bring users the expertise needed to operate HPC and AI systems, provide application designers with the tools
needed to enable parallel computing, and to strengthen the qualification and integration of HPC and AI system products.”

The 2022 conference will take place in Leicester on 19/20 October, and will bring together UKRI researchers, Digital Research Infrastructure
professionals and industry colleagues.

The three coupled themes for the 2 days are:

1. The importance of large-scale computing
2. Sustainability and net-zero in large-scale computing
3. The vital role of Digital Research Infrastructure professionals

The deadline for submitting contributed talk abstracts is Tuesday, August 30th.

Full details, including the registration form, are available at:

<https://www.hpcadvisorycouncil.com/events/2022/uk-conference/>

and the page for abstract submissions is at:

<https://www.hpcadvisorycouncil.com/events/2022/uk-conference/papers.php>




## Introduction to OpenMP

Mark Bull EPCC<br>
30th & 31st August, 6th September 2022 09:00 - 17:00 BST <br>
Online

This course will take place over three days on 30th and 31st August and 6th September 2022.

Almost all modern computers now have a shared-memory architecture with multiple CPUs connected to the same physical memory, for example multicore laptops or large multi-processor compute servers. This course covers OpenMP, the industry standard for shared-memory programming, which enables serial programs to be parallelised easily using compiler directives. Users of desktop machines can use OpenMP on its own to improve program performance by running on multiple cores; users of parallel supercomputers can use OpenMP in conjunction with MPI to better exploit the shared-memory capabilities of the compute nodes.

This course will cover an introduction to the fundamental concepts of the shared variables model, followed by the syntax and semantics of OpenMP and how it can be used to parallelise real programs. Hands-on practical programming exercises will be included, with access to HPC provided for the duration of the course.
Prerequisites:

This course is aim at attendees with prior experience of programming in C, C++ or Fortran. Some familiarity with HPC systems is helpful but not essential.
Learning outcomes:

At the end of the course, attendees should be equipped with the skills to write correct parallel programs using the core functionality of OpenMP, and understand the main issues affecting performance of shared memory parallel programs

Full details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>



## Debugging and Optimizing Parallel Codes with Arm Forge - Debugging and DDT

Online webinar Wednesday 31st August 2022 15:00 - 16:00 BST

In this presentation we will provide an overview of Arm Forge, a cross platform, integrated environment for debugging and optimizing parallel codes at any scale. We will provide hands-on demonstrations of how Arm Forge reduces development time, simplifies debugging, and eases application performance enhancement.
Ensuring Program Correctness with Arm DDT

Using sample codes, we will walk through the major capabilities of the debugger to illustrate how DDT can debug applications ranging from a single thread to large scale

- Using Forge as a remote client
- Using semantic analysis tools to catch bugs before you even run the code
- How to use sparklines to visualize variable values across processes and threads
- Illustrate memory debugging to trap array out of bounds errors and memory leaks
- Using the array viewer to visualize multi-dimensional variables
- Using watchpoints to halt execution dependent upon expression values
- Offline debugging for large scale debugging, catching non-deterministic errors and continuous integration
- Trace points, a flexible and deterministic printf alternative
- Modifying the definition of your program without re-building using the Evaluate Window
- Debugging on a GPU (optional)
- Debugging Python (optional)

Details and join link: <https://www.archer2.ac.uk/training/courses/220831-arm-forge-debugging-ddt-vt/>



## ARCHER2 for Software Developers

Online, 1 - 2 September 2022 10:00 - 16:00 BST

The lesson aims to answer the following questions:

- What hardware is available on ARCHER2?
- What does they consist of (login nodes, compute nodes, file systems, backup)?
- How does this impact me as a user?
- How can I access ARCHER2 interactively and transfer data?
- What does the ARCHER2 application development environment look like and how do I use it?
- How do I write job submission scripts and submit them to the ARCHER2 scheduler?
- How can I be a good ARCHER2 citizen?
- How can I check what resources I am using and look at historical usage?

Full details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>


## ARCHER2 Image and Video Competition 2022 

Share your images and videos to support excellence and promote the contribution of ARCHER and ARCHER2 to outstanding research. The winner of the competition will be awarded £250.

The winning image or video, along with a selection of other entries, will also be featured on the ARCHER2 website and in EPCC and ARCHER2 publications. Credit will be given to the entrant in all cases.

### Key Details

- Competition Opens: 8th August 2022
- Submission Deadline: 16 September 2022
- Judging: October/November 2022
- Prizes:
    + Best image : £150
    + Best video : £150
    + Best early career researcher submission : £150
    + Overall winner, selected from the above three winners : additional £100

Full details and entry form: <https://www.archer2.ac.uk/community/image-comp/>


## Access to HPC Call 

Access to HPC Call (EPSRC remit only) opened 4th July.<br>
ARCHER2 or Tier-2 computing resource for a maximum duration of one year and a minimum of 4000 CU. <br>
TA Deadline - 20th September 16:00<br>
Submit Deadline - 18th October 16:00<br>
More details an application forms 
<https://www.archer2.ac.uk/support-access/access#calls-for-archer2-time-only>


## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course
- Introduction to OpenMP, Online, 30th & 31st August, 6th September 2022 09:00 - 17:00 BST 
- Debugging and Optimizing Parallel Codes with Arm Forge - Debugging and DDT, Online webinar, Wednesday 31st August 2022 15:00 - 16:00 BST
- ARCHER2 for Software Developers, Online, 1 - 2 September 2022 10:00 - 16:00 BST 
- Debugging and Optimizing Parallel Codes with Arm Forge - Performance optimization, MAP, and PR, Online webinar, Wednesday 7th September 2022 15:00 - 16:00 BST 
- ARCHER2 for Package Users, Online, 13 October 2022 10:00 - 16:00 BST



Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)

