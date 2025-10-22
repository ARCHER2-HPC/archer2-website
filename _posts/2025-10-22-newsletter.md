---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2025-10-22 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [UKRI National Compute Resources (NCRs): Phase One]({{ page.url }}#ukri-national-compute-resources-ncrs-phase-one) 
- [Autumn 2025 UKRI Access to HPC Call open]({{ page.url }}#autumn-2025-ukri-access-to-hpc-call-open) (deadline 6 November 2025)
- [ARCHER2 Celebration of Science 2026]({{ page.url }}#archer2-celebration-of-science-2026)
- [GPU programming with kernels]({{ page.url }}#gpu-programming-with-kernels), Online, 29-30 October, 5-7 November 09:30 - 12:00
- [Efficient Parallel IO]({{ page.url }}#efficient-parallel-io), Online, 25 November 2025 09:30 - 16:00
- [NetDRIVE Second Call for Community Projects and Champions]({{ page.url }}#netdrive-second-call-for-community-projects-and-champions) 
- [Understanding the dRTP Training Landscape Workshop]({{ page.url }}#understanding-the-drtp-training-landscape-workshop), London, 5th - 6th November 2025
- [ARCHER2 Image and Video Competition 2025 results]({{ page.url }}#archer2-image-and-video-competition-2025-results)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->

## UKRI National Compute Resources (NCRs): Phase One 

This opportunity is seeking potential hosting entities for the first phase of UKRI investment in NCRs. Currently it is anticipated that up to £9.5 million will be available per NCR and at least two NCRs will be supported in this round. Further funds (up to £2 million p.a.) will be provided for each NCR from 2026-2031 to cover NCR service provision, power and other directly relevant costs necessary for user support. These services will support research across the whole UKRI remit.

This opportunity is open to potential host site providers and their support teams (‘hosting entities’ – hosting entities may be a single site or a partnership co-localised across sites) who have the experience and access to the necessary infrastructure (either through direct ownership or through suitable commercial arrangements) to host an NCR, can deliver the hardware components by March 2026 and can operate a full service for users commencing in the 2026/2027 financial year. The requirements for hosting entities are provided below.

It is expected that the 2025/2026 UKRI investment in NCRs will fund:

- At least one CPU-based system and;
- At least one heterogeneous or accelerated system.

There is also an Expression of Interest (EoI) for future (Phase 2) phased investment in Financial Year 2026/2027, which will go live shortly. Applicants for the phase 1 NCR call are welcome to submit EoIs for phase 2. A second NCR hosting opportunity is expected to launch in early 2026.


## Autumn 2025 UKRI Access to HPC Call open

Deadline: 6 November 2025 4:00pm UK time

[ARCHER2 access page]( https://www.archer2.ac.uk/support-access/access.html)

[Full details of UKRI call]( https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-autumn-2025/)


## ARCHER2 Celebration of Science 2026


We are pleased to announce that [ARCHER2 Celebration of Science 2026](https://www.archer2.ac.uk/community/events/celebration-of-science-2026/) will take place on the 19th - 20th March 2026 in Edinburgh at South Hall, The University of Edinburgh.

Please **[register here](https://forms.office.com/e/bYHMcP8KLc)** to participate. The event is in-person and there is no registration fee. 

### What to expect at ARCHER2 Celebration of Science 

ARCHER2 Celebration of Science is annual event that brings together the ARCHER2 user community to celebrate their scientific achievements on ARCHER2. You can explore the [highlights of previous events here]({{ base-url }}/community/events/#previous-events) and view the science showcased in the previous years. 


The two-day programme of ARCHER2 Celebration of Science 2026 will include: 

-    **Invited talks**: a variety of talks from the invited speakers highlighting their impactful research using ARCHER2. 
-    **Poster programme**: a platform for the ARCHER2 community to present and discuss their successes delivered on ARCHER2 through the lightning talks and the poster session. A Best Poster Prize will be awarded. - [Call for Posters]({{ base-url }}/community/events/celebration-of-science-2026#call-for-posters) is now open!  
-    **Keynote**: the keynote will be given by Professor Mark Parsons, Director of EPCC. 
-    **Panel Session**: focuses on key topics for the ARCHER2 and UK research community. 
-    **ARCHER2 User Forum**: learn about the latest service updates and engage directly with the ARCHER2 team. 
-    **Diversity Session**: an interactive session to discuss the equality, diversity and inclusion challenges related to the delivery of HPC services. 

[Registration](https://forms.office.com/e/bYHMcP8KLc), and [Call for posters]({{ base-url }}/community/events/celebration-of-science-2026#call-for-posters) are open now.  [Full details here ](https://www.archer2.ac.uk/community/events/celebration-of-science-2026/)


## GPU programming with kernels

Online, 29-30 October, 5-7 November 09:30 - 12:00

This course, taking place over five morning sessions, will provide an introduction to GPU computing with HIP aimed at scientific application programmers wishing to develop their own software. The course will give a background on the difference between CPU and GPU architectures as a prelude to introductory exercises in HIP programming. The course will discuss the execution of kernels, memory management, among other topics.

The course will not discuss programming with compiler directives, but does provide a concrete basis of understanding of the underlying principles of the HIP model which is useful for programmers ultimately wishing to make use of OpenMP or OpenACC. The course will not consider graphics programming, nor will it consider machine learning packages.

Note that the course is also appropriate for those wishing to use NVIDIA GPUs via the CUDA API, although we will not specifically use CUDA.
Pre-requisite Programming Languages:

Attendees must be able to program in C or C++. A familiarity with threaded programming models would be useful, but no previous knowledge of GPU programming is required.

Course attendees do not need GPU hardware, access to ARCHER2 will be provided.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/251029-gpu-kernels/)




## Efficient Parallel IO

Online, 25 November 2025 09:30 - 16:00 

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. Standard Unix IO routines are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems are optimised for large volumes of data, but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

This hands-on course explores a range of issues related to parallel IO. It uses ARCHER2 and its parallel Lustre file system as a platform for the exercises; however, almost all the IO concepts and performance considerations are applicable to any parallel system.

We will give a general overview of the Lustre filesystem and how parallel IO is implemented in MPI-IO since these are the routines ultimately used by many higher-level libraries such as HDF5 and NetCDF. A good understanding of the performance characteristics of MPI-IO is therefore very useful in optimising the IO performance of most parallel applications.

The course does not teach the detailed syntax of the various parallel IO libraries, but the Fortran source code provided for the benchmarking application used in the practical sessions should be useful reference material.
Prerequisites:

The course assumes an understanding of basic MPI programming in C, C++ or Fortran. Knowledge of MPI derived datatypes would be useful but not essential.

[Full details and registration](https://www.archer2.ac.uk/training/courses/251125-efficient-parallel-io/)


## NetDRIVE Second Call for Community Projects and Champions 

The NetDRIVE 2nd call for community projects has been published, offering over £1m for activities contributing towards sustainable research computing for UKRI: 
-	For guidance and application forms see: https://eng.ox.ac.uk/netdrive/netdrive-calls/second-funding-call/  
-	The total budget for community projects will be £1m (100% FEC, with projects being awarded 80% FEC). 
-	The 2nd call will have two components: around 20% of funds will be reserved for projects led by early career applicants (submissions of full proposals close October 24th , but applications to join a sandpit event should be submitted by September 10th) and the remainder will be open to all (submissions close October 10th). 
-	There is also funding in this call for 3 champions with social science qualifications, with two of these positions reserved for early career applicants.   


## Understanding the dRTP Training Landscape Workshop

The Understanding the dRTP Training Landscape Workshop will take place on 5th - 6th November 2025 at Bidborough House, UCL, London.

- Event: Understanding the dRTP Training Landscape Workshop
- Date: 5th - 6th November 2025
- Location: Bidborough House, 38–50 Bidborough Street, London, WC1H 9BT
- [Registration form link:]( https://bit.ly/dRTP_landscape_workshop)
- Registration deadline: **Extended to Noon on Tuesday 28th October 2025**

This event, funded by the UKRI dRTP Skills NetworkPlus Programme, aims to

- Identify existing dRTP roles,
- Identify existing training courses and resources,
- Link those roles to specific skills / competencies,
- Align those skills / competencies with the existing training materials.

The workshop will also identify gaps in provision and areas where new or adapted content is needed, and where teams are working on similar materials and could fruitfully collaborate. Those efforts are another step towards making professional skill development easier and improving career prospects across the whole dRTP ecosystem. The workshop outcomes will be shared with the dRTP community. 

We are hoping to better outline and understand the whole dRTP ecosystem, therefore, we would like to extend an invitation to dRTPs working in different roles and at different institution types, and engaging with a wide range of research communities. 

There will be plenty of opportunities for discussion during the interactive sessions and we look forward to seeing many of you at the event. Please complete the registration form to join. There is no registration fee for the event. The detailed agenda will be circulated close to the event date. 

We would be happy to provide support for a few participants whose organisation/projects cannot cover travel costs. If you would like to attend the event but need any travel support, please apply for the travel support by answering the relevant questions in the registration form.

If there are any questions for the registration, please contact the event organiser.

This event is co-organised by the following NetworkPlus projects: 

- [CHARTED]( https://drtp-skills.ac.uk)
- [DisCouRSE]( https://discourse-network.github.io)
- SCALE UP

This event is not organised by the ARCHER2 team but may be of interest to members of the ARCHER2 user community.


## ARCHER2 Image and Video Competition 2025 results

We are very pleased to announce [the results of the ARCHER2 Image and Video Competition 2025](
https://www.archer2.ac.uk/news/2025/10/21/image-competition-2025-results.html)

Do visit the [gallery of images and videos]( https://www.archer2.ac.uk/about/gallery/2025-image-comp/)


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

Following the ACF outage, most services have been returned to service successfully, however the [ARCHER2 GPU nodes are still unavailable](https://www.archer2.ac.uk/support-access/status.html#service-alerts)



## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br> 
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/251023-hpc-carpentry/), Edinburgh, 23 and 30 October 2025 10:00 - 16:00
- [GPU programming with kernels](https://www.archer2.ac.uk/training/courses/251029-gpu-kernels/), Online, 29-30 October, 5-7 November 09:30 - 12:00
- [Parallel Python](https://www.archer2.ac.uk/training/courses/251119-python-vt/), online webinar, Wednesday 19th November 2025 15:00 - 16:00
- [Efficient Parallel IO](https://www.archer2.ac.uk/training/courses/251125-efficient-parallel-io/), Online, 25 November 2025 09:30 - 16:00



[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)

	
