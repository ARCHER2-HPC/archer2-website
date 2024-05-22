---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-05-22 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Service Desk Holiday on Monday 27th May]({{ page.url }}#service-desk-holiday-on-monday-27th-may). Service desk will be closed. 
- [ARCHER2 Capability Days 2]({{ page.url }}#archer2-capability-days-2-4-6-june-2024): 4-6 June 2024
- [Cray Programming Environment Version 23.09]({{ page.url }}#cray-programming-environment-version-2309-available-from-21st-may) available from 21st May
- [Hackathon Workshop on Generative Modelling]({{ page.url }}#hackathon-workshop-on-generative-modelling-in-edinburgh) in Edinburgh 8th -12th of July 2024
- [2024 Educational Award For Outstanding Contribution to Computational Science Education]({{ page.url }}#2024-educational-award-for-outstanding-contribution-to-computational-science-education)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)


<!--more-->


## Service Desk Holiday on Monday 27th May. 

Service desk will be closed. <br>  Service Desk will resume at 08:00 on Tuesday 28th May.


## ARCHER2 Capability Days 2: 4-6 June 2024

The second ARCHER2 Capability Days session will run from 4-6 June 2024. ARCHER2 Capability Days are a mechanism to allow users to run large scale tests on the system free of charge. The motivations behind Capability Days are:

- Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
- Enabling capability use cases that are not possible on other UK HPC services.
- Providing a facility that can be used to test scaling to help prepare software and communities for future exascale resources.

Capability Days are made up of two parts:

- 0800-2000 BST, 4 June 2024 - **pre-Capability Days session** (pre-capabilityday QoS) to allow users to test scaling and job setup ahead of full Capability Day
  - Supports jobs 256-1024 nodes, 20 min maximum run time
  - Jobs are uncharged
- 2000 BST 4 Jun - 1400 6 Jun 2024 - **Capability Days session** (capabilityday QoS)
  - Supports jobs 512-4096 nodes, 1 hour maximum run time
  - Jobs are uncharged
For both Capability Days QoS jobs can be submitted ahead of time and will start when the session starts.

A full description of the Capability Days, including example job submission scripts can be found in the ARCHER2 Documentation at:
[ARCHER2 Capability Days](https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days)


## Cray Programming Environment Version 23.09 available from 21st May

We will be installing a new version of the Cray Programming Environment (CPE) onto ARCHER2 on 20th May. CPE Version 23.09 will be available as a non-default programming environment from 21st May on both the main (CPU) system and the GPU development cluster.

Your login session will continue to default to the current default version (that is, CPE Version 22.12), though you can opt to switch to the newer CPE using the Module system. Full details will be provided in the [ARCHER2 documentation](https://docs.archer2.ac.uk/).

The new CPE version includes new versions of the Cray and AMD compiler suites (Version 16.0.1 and Version 4.0.0, respectively), as well as various other minor improvements. Full details are available in the [HPE release notes](https://github.com/PE-Cray/cpe-changelog).

While this is a non-default installation, the default versions of the module system (Lmod) and the CrayPAT profiling suite do change. CSE has tested the new versions of Lmod and CrayPAT and has not identified any significant, user-visible changes.

If you have any questions or comments about the Cray Programming Environment, please contact the [ARCHER2 Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html).


## Hackathon Workshop on Generative Modelling in Edinburgh 
 
Not an ARCHER2 event but may be of interest to some ARCHER2 users.

We are delighted to announce the upcoming 'Hackathon Workshop on Generative Modelling' which will take place in Edinburgh, UK in the week of 8th -12th of July 2024. This event is part of the Isaac Newton Institute (INI) satellite programme on [Diffusions in machine learning: Foundations, generative models and non-convex optimisation](https://www.newton.ac.uk/event/dml/).

The aim of this ‘Hackathon’ is to provide an opportunity for Early Career Researchers and PhD students to work on challenges with a strong emphasis on generative modeling.

•	The industry-inspired challenges will be provided by Amazon.
•	The progress and final results obtained by the Hackathon teams will be presented in livestreamed sessions to the participants of the INI satellite programme which include leading experts, such as Miranda Cheng (University of Amsterdam & Academia Sinica), Arnaud Doucet (Google DeepMind), Franca Hoffmann (Caltech), Jonathan Mattingly (Duke University), Éric Moulines (École Polytechnique & French Academy of Sciences), Andrew Stuart (Caltech).
•	Support for the workshop will be provided by the [Centre for Investing Innovation](https://efi.ed.ac.uk/ecosystem/centre-for-investing-innovation/) and the London Mathematical Society.
•	The event will take place in the new [Edinburgh Futures Institute](https://efi.ed.ac.uk/about/our-home/) building. 

The [website of the event containing the description of the challenges]( https://www.maths.ed.ac.uk/school-of-mathematics/knowledge-exchange/knowledge-exchange-events/hackathon-workshop-on-generative-modeling )
(The registration will close at 6 pm on the 31st of May 2024). 

We very much welcome applications coming from different disciplines which are relevant to generative modeling and we actively encourage applications from underrepresented groups within the scientific community.

We look forward to seeing you all in Edinburgh,

The Organising Committee
 
- Stefano Bruno (University of Edinburgh), 
- Dong-Young Lim (UNIST), 
- Sotirios Sabanis (University of Edinburgh, Alan Turing Institute & National Technical University of Athens),
- Sara Wade  (University of Edinburgh), 
- Ying Zhang (HKUST-GZ)



## 2024 Educational Award For Outstanding Contribution to Computational Science Education

The ACM SIGHPC Education Chapter is seeking nominations for candidates for the 2024 Educational Award For Outstanding Contribution to Computational Science Education. We are seeking candidates who have led projects or programs that have made significant contributions to computational science education defined broadly to include all disciplines and all education levels.

The award will be presented at SC24. The recipient will receive a $2,000 cash award and travel support to attend the SC24 conference. Nominations will include a statement endorsing the nominee, and up to three letters of endorsement. Applications are due by Friday June 28, 2024, by end of day anywhere on earth. The chapter will choose up to one award winner and up to two honorable mentions.

[More details, including the application forms and instructions](https://sighpceducation.acm.org/events/award24_nominations/ ) 

[Questions concerning award eligibility and nominations](mailto:award@sighpceducation.acm.org).



## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- When close to storage quota, jobs may slow down or produce corrupted files (Added: 2024-02-27)
For situations where users are close to user or project quotas on work (Lustre) file systems we have seen cases of the following behaviour:
    - Jobs run very slowly as IO slows down
    - IO calls seem to complete successfully but not all data is written (so output is corrupted)
    - No "disk quota exceeded" error is seen

If you see these symptoms: slower than expected performance, data corruption; then you should check if you are close to your storage quota (either user or project quota). If you are, you may be experiencing this issue. Either remove data to free up space or request more storage quota.


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/240619-hpc-carpentry/), 19-20 June 2024, Southampton

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
