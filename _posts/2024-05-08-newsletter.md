---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-05-08 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [ARCHER2 maintenance]({{ page.url }}#archer2-maintenance) 8th May 09:00 - 21:00
- [Cray Programming Environment Version 23.09]({{ page.url }}#cray-programming-environment-version-2309-available-from-21st-may) available from 21st May
- [2024 Educational Award For Outstanding Contribution to Computational Science Education]({{ page.url }}#2024-educational-award-for-outstanding-contribution-to-computational-science-education)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)


<!--more-->



## ARCHER2 maintenance

There will be a full ARCHER2 maintenance on Wednesday 8th May from 0900 - 2100.
This is to allow an essential system update to take place.

During this maintenance, users will not be able to connect to the login nodes, jobs will not run and users will be unable to access data.

We will notify users once ARCHER2 is returned to service.


## Cray Programming Environment Version 23.09 available from 21st May


We will be installing a new version of the Cray Programming Environment (CPE) onto ARCHER2 on 20th May. CPE Version 23.09 will be available as a non-default programming environment from 21st May on both the main (CPU) system and the GPU development cluster.

Your login session will continue to default to the current default version (that is, CPE Version 22.12), though you can opt to switch to the newer CPE using the Module system. Full details will be provided in the [ARCHER2 documentation](https://docs.archer2.ac.uk/).

The new CPE version includes new versions of the Cray and AMD compiler suites (Version 16.0.1 and Version 4.0.0, respectively), as well as various other minor improvements. Full details are available in the [HPE release notes](https://github.com/PE-Cray/cpe-changelog).

While this is a non-default installation, the default versions of the module system (Lmod) and the CrayPAT profiling suite do change. CSE has tested the new versions of Lmod and CrayPAT and has not identified any significant, user-visible changes.

If you have any questions or comments about the Cray Programming Environment, please contact the [ARCHER2 Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html).



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

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
