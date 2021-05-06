---
layout: post
title: Attending the “Efficient use of the HPE Cray EX Supercomputer ARCHER2” course
date: 2021-05-06 10:00:00
author: Eleanor Broadway (EPCC)
tags: [blog] 
categories: [news]
---


With the end of the ARCHER service in January 2021, the ARCHER2 4-cabinet pilot system has now been operating as the national service for three months. A new architecture, programming environments, tools and scheduling system is a new challenge for users to experiment with and discover techniques to achieve optimal performance for their applications. 

To support the move to a new system, experts from the HPE Cray Centre of Excellence gave a three day workshop on the [efficient use of the HPE Cray EX Supercomputer: ARCHER2](https://www.archer2.ac.uk/training/courses/210420-efficient-use/). This covered an introduction to the architecture and software before deep-diving into efficient compilation, profiling, MPI and IO techniques specific to ARCHER2. As well as a completely new hardware and software environment, ARCHER2 introduces a new suite of tools provided by HPE Cray to compliment the Cray programming environment (also new to ARCHER2). The workshop covered advanced performance analysis and profiling using tools such as Perftools, Reveal, CrayPat and Apprentice2. From an in-depth profiling analysis, we can begin to optimise based on the architecture by utilising Slurm binding technology, advanced job placement and MPMD. We can then push this even further by understanding the structure of the Lustre Parallel file system and optimising communication using Cray’s MPI library. Overall, the course was suitable for experienced users to review their performance and prepare to fine-tune based on ARCHER2 as well as an excellent starting point to teach new users how to achieve good performance within their first few attempts.

I joined the ARCHER2 CSE team at EPCC in October 2020 as a new university graduate, so attended this course as a fairly fresh-faced beginner to optimising performance based on different architectures. This course gave almost a guided timeline of events to optimise performance based on a new architecture: starting with porting and running codes on ARCHER2 and finishing at advanced optimisations to MPI and parallel I/O. With the CSE team learning how to implement these specialist techniques, we are learning how to help you smoothly move from ARCHER to ARCHER2 and fully utilise the new tools available. 






![image]({{ site.baseurl }}/img/blog/210506-HPE-Cray-EX-Cabinet-Exploded-View.jpg)
{: .img-center style="width: 80%" 
alt="Hewlett Packard Enterprise Cray EX Cabinet Exploded View" 
title=" Hewlett Packard Enterprise Cray EX Cabinet Exploded View"}





For those of you that attended the course, we hope you enjoyed it and would love to hear about any tips you have discovered to improve your performance. If the opportunity to attend this course is presented again, I would strongly recommend signing up. In the meantime, the [ARCHER2 documentation](https://docs.archer2.ac.uk/) is constantly being updated as we learn more tips and tricks to optimise performance based on ARCHER2 and is always a good place to get started!  