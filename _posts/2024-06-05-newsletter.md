---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-06-05 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [ARCHER2 Capability Days 2]({{ page.url }}#archer2-capability-days-2-4-6-june-2024): 4-6 June 2024
- [SIGHPC Education Webinar: HPC Carpentry]({{ page.url }}#sighpc-education-webinar-hpc-carpentry)
- [HPE Cray  Programming Environment (CPE) Feedback Form]({{ page.url }}#hpe-cray--programming-environment-cpe-feedback-form)
- [2024 Educational Award For Outstanding Contribution to Computational Science Education]({{ page.url }}#2024-educational-award-for-outstanding-contribution-to-computational-science-education)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  

<!--more-->


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



## SIGHPC Education Webinar: HPC Carpentry

Wednesday, 12th June, 5pm BST
Speakers: Andrew Reid, Juan Herrera

This talk will describe the current state of the HPC Carpentry project, its strategic development plan, current challenges, and interactions with the larger HPC community, and will also include a deeper dive into the current offerings of EPCC at The University of Edinburgh.

[More details](https://sighpceducation.acm.org/events/hpccarpentry/)


## HPE Cray  Programming Environment (CPE) Feedback Form

HPE would like to hear your feedback on the HPE Cray Programming Environment (CPE). The survey consists of 25 questions; most are multiple choice.

[Complete the survey](https://forms.office.com/r/usSQj3daTz)

This is entirely voluntary, is not specific to the ARCHER2 service, and we are not involved in the collection or processing of any responses.


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
- [Introduction to Data Science & Machine Learning](https://www.archer2.ac.uk/training/courses/240618-data-science-ml/),  Online, 18 - 19 June 2024 09:30-16:30 and 09:30-14:30 
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/240619-hpc-carpentry/), Southampton, 19-20 June 2024
- [Advanced MPI](https://www.archer2.ac.uk/training/courses/240627-advanced-mpi/), Online, 27 - 28 June 2024 09:30 - 17:30

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
