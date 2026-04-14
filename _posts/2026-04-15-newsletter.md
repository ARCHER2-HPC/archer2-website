---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2026-04-15 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Discrete element method simulations on national HPC facilities]({{ page.url }}#discrete-element-method-simulations-on-national-hpc-facilities), Free webinar, Wednesday 15th April 2026 15:00 - 16:00
- [Modern C++ for Computational Scientists]({{ page.url }}#modern-c-for-computational-scientists), Online, 15 - 17 April 2026 09:30 - 16:30 
- [ARCHER2 Capability Days]({{ page.url }}#archer2-capability-days-12-14-may-2026): 12-14 May 2026
- [Message Passing programming with MPI]({{ page.url }}#message-passing-programming-with-mpi), Imperial College London, Wednesday 22nd - Thursday 23rd Apil 10:00 - 17:00 (In Person); Friday 1st May 10:00 - 12:30 (online)
- [Workflows]({{ page.url }}#workflows),  Online, 	27 - 28 April 2026 10:00 - 12:00 
- ["Accelerating Earth System Modeling by Leveraging a Standardized Coupling Framework for Hybrid Physics-ML Models" CONTINENTS webinar]({{ page.url }}#accelerating-earth-system-modeling-by-leveraging-a-standardized-coupling-framework-for-hybrid-physics-ml-models),  Thursday the 16th of April at 16h00 UK 
- [VI-HPS Tuning Workshop (TW49)]({{ page.url }}#vi-hps-tuning-workshop-tw49), April 27, 2026 to April 29, 2026, Durham
- [Durham HPC Days 2026]({{ page.url }}#durham-hpc-days-2026)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->



## Discrete element method simulations on national HPC facilities

Free webinar, Wednesday 15th April 2026 15:00 - 16:00

The discrete element method (DEM) is used to model particulate solids (granular materials) with particle sizes typically larger than 1 micron. These materials are highly diverse, including soils, pharmaceutical powders and many food ingredients. DEM models individual particles and their interactions over time, and is algorithmically similar to molecular dynamics.

The presenter has been running DEM simulations on national HPC facilities since 2012 (HECToR). He has principally used the Granular package of LAMMPS, adapting the source code as required. In this webinar, he will present examples of his and collaborators’ research in two areas which have been enabled by DEM on national HPC facilities: the simulation of triaxial tests to gain insights into sand behaviour, and current research on abrasion in particle systems.

The second part of the webinar will discuss broader trends in DEM and their effect on HPC usage. The desire to simulate larger systems and increase particle shape fidelity are both motivating the adoption of HPC.

DEM code developments are being undertaken to ensure that codes can efficiently run on GPUs, which will be essential to exploit the next generation of HPC systems.

The webinar will close with a summary of CCC-ParaSolS: an STFC-funded project to create a multi-disciplinary Collaborative Computational Community in particulate solids simulations for the UK. A code development project is being undertaken within CCC-ParaSolS to enable the MercuryDPM code to be run efficiently on GPUs. Since early 2025, CCC-ParaSolS has delivered bespoke training at network events to reduce the barriers to adopting open-source DEM codes and accessing HPC systems such as ARCHER2.

[Full details and join link]( https://www.archer2.ac.uk/training/courses/260415-dem-vt/ )


## Modern C++ for Computational Scientists

Online 	15 - 17 April 2026 09:30 - 16:30 

With the recent revisions to the C++ language and standard library, the ways it is now being used are quite different. Used well, these features enable the programmer to write elegant, reusable and portable code that runs efficiently on a variety of architectures.

However it is still a very large and complex tool. This course will cover a minimal set of features to allow an experienced non-C++ programmer to get to grips with language.

These include:

-    overloading
-    templates
-    containers
-    iterators
-    lambdas
-    standard algorithms

We will also briefly cover some important libraries for numerical computing.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/260415-modern-c/ )


## ARCHER2 Capability Days: 12-14 May 2026

The fifth ARCHER2 Capability Days session will run from 12-14 May 2026. ARCHER2 Capability Days are a mechanism to allow users to run large scale tests on the system free of charge. The motivations behind Capability Days are:

-	Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
-	Enabling capability use cases that are not possible on other UK HPC services.
-	Providing a facility that can be used to test scaling to help prepare software and communities for future large-scale resources.

Capability Days are made up of two parts:

-	0900-1900 BST, 12 May 2026 - pre-Capability Days session ("pre-capabilityday" QoS) to allow users to test scaling and job setup ahead of full Capability Day
    -	Supports jobs 256-1024 nodes, 1 hour maximum run time
    -	Jobs are uncharged
-	0800 BST, 13 May - 1400 BST, 14 May 2026 - Capability Days session (“capabilityday" QoS)
    -	Supports jobs 512-4096 nodes, 2 hours maximum run time
    -	Jobs are uncharged

More information on [Capability Days and how to submit jobs can be found on the ARCHER2 documentation](
https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days )


## Message Passing programming with MPI 

Imperial College London, Wednesday 22nd - Thursday 23rd Apil 10:00 - 17:00 (In Person); Friday 1st May 10:00 - 12:30 (online)

The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processors to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together. This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers point-to-point communication, non-blocking operations, derived datatypes, virtual topologies, collective communication and general design issues.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/260422-mpi/)


## Workflows

Online, 27 - 28 April 2026 10:00 - 12:00

his short seminar provides an introduction to modern scientific workflows and hands-on practice with two workflow systems. Over two half-days (4 hours each), attendees will:

### Day 1

Understand the role and purpose of scientific workflows, including how and why they are used to structure and automate complex data-processing pipelines. Modules include an introduction to workflow concepts and an extended practical session creating workflows with Common Workflow Language (CWL), including exercises in a Google Colab Jupyter Notebooks to install and run CWL workflows.

### Day 2

Explore dispel4py, a Python-based streaming workflow framework. Participants will work through basic and advanced concepts, build simple examples, and complete hands-on exercises using dispel4py in Google Colab Jupyter Notebooks, including some real-use cases drawn from scientific applications.

### Prerequisites

Attendees should be comfortable with basic Python programming concepts and familiar with using Jupyter notebooks or Google Colab; no prior experience in workflow languages is required.

### Learning objectives

By the end of the course attendees will be able to describe workflow concepts and systems, write and run basic CWL workflows in a notebook environment, and develop and test simple dispel4py workflows for streaming data processing.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/260427-workflows/ )



## "Accelerating Earth System Modeling by Leveraging a Standardized Coupling Framework for Hybrid Physics-ML Models"

The International Collaboration Towards Net Zero Computational Modelling and Simulation (CONTINENTS), is hosting its next webinar on Thursday the 16th of April at 16h00 UK time and will be delivered by Ufuk Turuncoglu from the National Center for Atmospheric Research, with the title "Accelerating Earth System Modeling by Leveraging a Standardized Coupling Framework for Hybrid Physics-ML Models".

[The abstract and calendar invite can be found on their website]( https://continents-project.github.io/ )

There is no registration needed




## VI-HPS Tuning Workshop (TW49)

April 27, 2026 to April 29, 2026, Durham

Not an ARCHER2 course, organised in collaboration with VI-HPS and HPC.NRW, this 3-day workshop is designed to help researchers and developers analyse and optimise the performance of HPC applications.

What you’ll learn:
 -   Performance analysis and diagnosis technique
 -   How to effectively use the VI-HPS tools suite
 -   Hands-on experience with: Score-P, CUBE, Scalasca, Extra-P and MAQAO
	
Practical focus:
Participants are encouraged to bring their own MPI, OpenMP, or hybrid applications (including GPU codes) and receive expert coaching and optimisation advice.

The workshop will run daily from 09:00 - 17:30 and make use of HPC Hardware Lab @Durham, with accounts provided if needed.

-    Free to register and attend
-    Travel support available (up to £300 for eligible UKRI-funded participants)

This work is supported by UKRI Digital Research Infrastructure Programme [grant number UKRI/ST/B000293/1 (HAI-End)]

[Full details and registration]( https://shareing-dri.github.io/events/202604-VIHPS-workshop/ )


## Durham HPC Days 2026

The Durham HPC Days bring together researchers, developers, and practitioners to explore the frontiers of high-performance computing, data analysis, and scientific innovation.

Join EPCC and colleagues from across the community for a week of talks, workshops, and hands-on tutorials. Topics spanning from Green HPC and Quantum Computing to the people who make it all possible.

Registration closes April 20, [secure your spot]( https://hpc-days.github.io/Durham-HPC-Days-2026/ )

Curious about what’s in store? The [programme is now live]( https://hpc-days.github.io/Durham-HPC-Days-2026/programme-week-2026/ )



## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>  
- [Discrete element method simulations on national HPC facilities](https://www.archer2.ac.uk/training/courses/260415-dem-vt/), free webinar, Wednesday 15th April 2026 15:00 - 16:00 	
- [Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/260415-modern-c/), Online, 	15 - 17 April 2026 09:30 - 16:30 
- [Message Passing programming with MPI](https://www.archer2.ac.uk/training/courses/260422-mpi/), Imperial College London, Wednesday 22nd - Thursday 23rd Apil 10:00 - 17:00 (In Person); Friday 1st May 10:00 - 12:30 (online) 
- [An ARCHER2 User's Spack Primer](https://www.archer2.ac.uk/training/courses/260422-spack-vt/), free webinar, Wednesday 22nd April 2026 15:00 - 16:00
- [Workflows](https://www.archer2.ac.uk/training/courses/260427-workflows/), Online, 27 - 28 April 2026 10:00 - 12:00 
- [Learning (from) protein dynamics](https://www.archer2.ac.uk/training/courses/260429-protein-dynamics-vt/), free webinar, Wednesday 29th April 2026 15:00 - 16:00 
- [CCP9/ARCHER2 hackathon on directive-based GPU acceleration of Fortran codes](https://www.archer2.ac.uk/training/courses/260513-hackathon/),  STFC Daresbury Laboratory 	12:00 on 13th May till 12:00 on 15th May 2026 
- [Shaken, not stirred! Influence of external vibration on phase change](https://www.archer2.ac.uk/training/courses/260513-shaken-vt/), free webinar, Wednesday 13th May 2026 15:00 - 16:00 
- [HEC-WSI: From GPU-Accelerated OpenFOAM to High-Fidelity Modelling of Offshore Floating Wind Turbines](https://www.archer2.ac.uk/training/courses/260422-wsi-vt/), free webinar, Postponed, date tbc, Wednesday  15:00 - 16:00 

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
