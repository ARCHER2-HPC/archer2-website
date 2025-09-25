---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2025-09-24 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Capability Days]({{ page.url }}#archer2-capability-days-7-9-october-2025) 7-9 October 2025
- [Autumn 2025 UKRI Access to HPC Call open]({{ page.url }}#autumn-2025-ukri-access-to-hpc-call-open) (deadline 6 November 2025)
- [ARCHER2 Celebration of Science 2026]({{ page.url }}#archer2-celebration-of-science-2026)
- [Forge license boost]({{ page.url }}#forge-license-boost) - week beginning 22nd September 2025
- [Green software use on HPC]({{ page.url }}#green-software-use-on-hpc), Birmingham, 22 October 2025 10:00 - 15:30 BST
- [Single Node Performance Optimisation]({{ page.url }}#single-node-performance-optimisation), Online, 21 - 22 October 2025 09:30 - 17:30 Day 1, 09:30 - 16.30 Day 2  
- [NetDRIVE Second Call for Community Projects and Champions]({{ page.url }}#netdrive-second-call-for-community-projects-and-champions) 
- [Monitoring jobs]({{ page.url }}#monitoring-jobs)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->


## ARCHER2 Capability Days: 7-9 October 2025

The fifth ARCHER2 Capability Days session will run from 7-9 October 2025. ARCHER2 Capability Days are a mechanism to allow users to run large scale tests on the system free of charge. The motivations behind Capability Days are:

-	Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
-	Enabling capability use cases that are not possible on other UK HPC services.
-	Providing a facility that can be used to test scaling to help prepare software and communities for future large-scale resources.

Capability Days are made up of two parts:

-	0900-1900 BST, 7 October 2025 - pre-Capability Days session ("pre-capabilityday" QoS) to allow users to test scaling and job setup ahead of full Capability Day
-	Supports jobs 256-1024 nodes, 1 hour maximum run time
-	Jobs are uncharged
-	0800 BST, 8 October - 1400 BST, 9 October 2025 - Capability Days session (“capabilityday" QoS)
-	Supports jobs 512-4096 nodes, 3 hours maximum run time
-	Jobs are uncharged

[Further details]( https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days )


## Autumn 2025 UKRI Access to HPC Call open

Deadline: 6 November 2025 4:00pm UK time

[ARCHER2 access page]( https://www.archer2.ac.uk/support-access/access.html)

[Full details of UKRI call]( https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-autumn-2025/)


## ARCHER2 Celebration of Science 2026


We are pleased to announce that [ARCHER2 Celebration of Science 2026](https://www.archer2.ac.uk/community/events/celebration-of-science-2026/) will take place on the 19th - 20th March 2026 in Edinburgh at South Hall, The University of Edinburgh. Registration will be opened in October 2025 and further details will be available soon.

## Forge license boost

The Forge license will be increased from 16 nodes to 64 nodes for one week beginning 22nd September. 

[Details of DDT and MAP]( https://docs.archer2.ac.uk/data-tools/forge/)



## Green software use on HPC

Birmingham, 22 October 2025 10:00 - 15:30 BST

This lesson introduces environmental sustainability principles in the context of high performance computing (HPC) systems. Understanding the scale of emissions from different sources is critical to being able to make changes to work in a more environmentally sustainable way. This lesson will give you the ability to understand emissions arising from use of HPC system and how to quantify them. We will use practical examples and real data from an existing HPC facility to illustrate the concepts. By the end of this lesson you should:

-   Be able to understand the concept of carbon efficiency and how it relates to energy efficiency including cases where energy efficiency can be at odds with carbon efficiency
-   Know about how HPC systems potentially reduce emissions
-   Understand carbon intensity of electricity generation and the implications for carbon aware use of HPC
-   Appreciate the embodied emissions associated with HPC hardware and how they impact carbon aware use of HPC
-   Be aware of the frameworks used to measure and report on carbon emissions and how the terms used in these frameworks map onto HPC
-    Gain practical advice on how you can measure and improve the carbon efficiency of your use of HPC

We use the UK National Supercomputing Service, ARCHER2 as an example throughout this lesson but the principles and learning should be applicable to any HPC system.
Target Audience:

This lesson is aimed at all stakeholders in HPC use (e.g. researchers, RSEs, funders). No knowledge of environmental sustainability principles is assumed.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/251022-green-computing/)



## Single Node Performance Optimisation

Online, 21 - 22 October 2025 09:30 - 17:30 Day 1, 09:30 - 16.30 Day 2 

This course covers techniques for improving the performance of parallel applications by optimising of the code that runs within each node.

Modern HPC systems such as ARCHER2 are being constructed using increasingly powerful nodes, with larger and larger numbers of cores and enhanced vector capabilities. To extract maximum performance from applications, it is therefore necessary to understand, and be able to overcome, on-node performance bottlenecks. This course will cover the main features of modern HPC nodes, including multiple cores, vector floating point units, deep cache hierarchies, and NUMA memory systems. We will cover techniques for efficient programming of these features, using batch processing options and compiler options as well as hand tuning of code. The course will also contain an introduction to the use of Cray performance analysis tools.

[Full details and registration](https://www.archer2.ac.uk/training/courses/251021-single-node/)


## NetDRIVE Second Call for Community Projects and Champions 

The NetDRIVE 2nd call for community projects has been published, offering over £1m for activities contributing towards sustainable research computing for UKRI: 
-	[Guidance and application forms]( https://eng.ox.ac.uk/netdrive/netdrive-calls/second-funding-call/ ) 
-	The total budget for community projects will be £1m (100% FEC, with projects being awarded 80% FEC). 
-	The 2nd call will have two components: around 20% of funds will be reserved for projects led by early career applicants (submissions of full proposals close October 24th , but applications to join a sandpit event should be submitted by September 10th) and the remainder will be open to all (submissions close October 10th). 
-	There is also funding in this call for 3 champions with social science qualifications, with two of these positions reserved for early career applicants.   


## Monitoring jobs

We provide advice on how to [monitor running jobs]( 
https://docs.archer2.ac.uk/user-guide/scheduler/#squeue-monitoring-jobs)

In particular, we would remind users that the `watch` command can cause heavy load on the slurm system, impacting all users of ARCHER2.   If it is essential to poll slurm in this way, please ensure that you set a time period of 60 seconds or longer.




## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

Following the ACF outage, most services have been returned to service successfully, however the [ARCHER2 GPU nodes are still unavailable](https://www.archer2.ac.uk/support-access/status.html#service-alerts)



## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>
- [Data Carpentry](https://www.archer2.ac.uk/training/courses/250925-data-carpentry/), Heriot Watt University, Edinburgh, 25th - 26th September 2025 09:00 - 16:30 BST 
- [Introduction to LAMMPS on ARCHER2](https://www.archer2.ac.uk/training/courses/251014-lammps/), Abingdon, 14th and 15th October 2025 09:00 - 17:00 BST
- [Single Node Performance Optimisation](https://www.archer2.ac.uk/training/courses/251021-single-node/), Online, 21 - 22 October 2025 09:30 - 17:30 Day 1, 09:30 - 16.30 Day 2 (Registration opens this week)
- [Green software use on HPC](https://www.archer2.ac.uk/training/courses/251022-green-computing/), Birmingham, 22 October 2025 10:00 - 15:30 BST


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)

	
