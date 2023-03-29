---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-03-29 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [RDFaaS maintenance]({{ page.url }}#rdfaas-maintenance-3rd---5th-april-2023)  3rd - 5th April 2023
- [Major software Upgrade]({{ page.url }}#major-software-upgrade)
- [The Science Behind the Image Competition 2]({{ page.url }}#the-science-behind-the-image-competition)  - Wednesday 5th April 2023 14:00 - 15:00
- [Recently added Known Issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->
 



## RDFaaS maintenance 3rd - 5th April 2023

RDFaaS will be undergoing maintenance and so will be unavailable to users.

This means that the filesystems `/epsrc` and `/general` will not be available.

It will be made unavailable to users from 14:00 on Monday 3rd April.

It should be fully restored by 18:00 on Wednesday 5th April though we hope most services will be restored before this. 

Further information will be available on the[ Status page]( https://www.archer2.ac.uk/support-access/status.html)


## Major software Upgrade


The ARCHER2 team are making good progress completing final technical work and preparation ahead of the upcoming major software upgrade on the service. HPE have recently told us that they are planning an additional system software release within the next couple of weeks and that they advise that the ARCHER2 system should be upgraded to this more recent version rather than the version that was originally planned. This further update will require some additional testing and so we expect the start of the upgrade on the main system to be delayed by a few weeks, with the exact timescale depending on the release and install schedule for the new versions of the system software. We will let users know the confirmed date for the start of the main system upgrade as soon as the new versions of software have been released and installed on the ARCHER2 test and development system.
 
This essential upgrade will ensure access to security updates; improvements to interconnect reliability and performance; improvements to upgradeability, maintainability and monitoring; and access to more recent compilers, software libraries and tools. Unfortunately, the major software upgrade will cause a long outage, but we have endeavoured to minimise the outage.
 
During the upgrade, users will be unable to connect to ARCHER2 via the login nodes, jobs will not run on the compute nodes and users will not be able to access any data on the system which include the /home, /work, NVMe and RDFaaS (/epsrc and /general) file systems.
 
Following the upgrade, we would advise users to recompile and test your codes as the new software will be based on a new operating system and new versions of compilers and libraries. The ARCHER2 CSE team will be recompiling and testing all centrally installed software. There will be no Python 2 installation available as part of supported software following the upgrade. Python 3 will continue to be fully supported.
 
We will include weekly reminders of the software upgrade in the ARCHER2 weekly newsletter and a further notification will be sent to all users once the final upgrade start date is confirmed. We are also planning a user forum which will provide an opportunity to ask any questions to HPE and EPCC staff and learn about new features and changes to the user environment following the upgrade.
 
We have created a [webpage  with further details of the upgrade](https://docs.archer2.ac.uk/faq/upgrade-2023/) which will be updated throughout the upgrade process. As always, please contact the [service desk ](mailto:support@archer2.ac.uk) if you have any questions.


## The Science Behind the Image Competition

Wednesday 5th April 2023 14:00 - 15:00

In these webinars we invite entrants from the 2022 ARCHER2 Image and Video Competition to talk about their work, and the science behind their stunning images and videos.

[Join link]( https://eu.bbcollab.com/guest/28a7a30423e7469a91a2b1d2f931964e)

This online session is open to all. It will use the Blackboard Collaborate platform.

     
## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [ARCHER2 for Data Scientists](https://www.archer2.ac.uk/training/courses/230411-data-scientists/), Online, 11 April 2023 10:00 - 17:30 BST 
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/230411-hpc-carpentry/), Edinburgh, 11 - 12 April 2023 09:30 - 16:00 BST 
- [Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/230417-modern-c/), 17-20 April 2023, 09:30 - 12:30 BST
- [ Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/230424-modern-c/), Online, 24 - 27 April 2023 13:00 - 16:00 BST 
- [Data Carpentry](https://www.archer2.ac.uk/training/courses/230424-data-carpentry/), Online, 24th - 27th April 2023 09:30 - 13:00 BST

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)