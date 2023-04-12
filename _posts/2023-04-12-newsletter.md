---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-04-12 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Access to HPC Call open]({{ page.url }}#access-to-hpc-call-open)
- [Delayed - Major software upgrade]({{ page.url }}#delayed-major-software-upgrade)
- [GPU programming with CUDA and HIP training course]({{ page.url }}#gpu-programming-with-cuda-and-hip-training-course)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->
 


## Access to HPC Call open

Access to HPC Call (EPSRC remit only) opened 27th March 2023
ARCHER2 or Tier-2 computing resource 

- <b>Feasibility stream</b>
    + Maximum request of £1,000 notional value (for example, 5,000 CU, 33,000 CPUh or 1,000 GPUh).
    + Projects can be up to six months in length.
- <b>Main stream</b>
    + Projects can be up to 12 months in length.
- <b>Pioneer stream</b> (ARCHER2 only)
    + Projects can be up to 2 years in length.
    + Minimum request of 165,000 CU per year.
	
<b>TA Deadline</b> - 12 May 2023 at 4:00pm UK time<br/>
<b>Submit Deadline</b> - 26 May 2023 at 4:00pm UK time

[More details and application forms]( https://www.archer2.ac.uk/support-access/access#calls-for-archer2-time-only)




## Delayed Major software upgrade


Previously scheduled: Fri 14th April - w/b Mon 8th May New Upgrade Date: TBC but expected to start in mid-May 

The delay to the upgrade is due to HPE planning an additional system software release within the next couple of weeks and they recommend that we upgrade to this latest version rather than the one originally planned.

As soon as the software is released we will be able to formulate a timetable and will notify users of the revised upgrade dates. We expect the upgrade to start in mid-May.

Despite, the ARCHER2 team making good progress completing final technical work and preparation ahead of the originally planned upgrade, this further update will require some additional testing and so we expect the start of the upgrade on the main system to be delayed by a few weeks, with the exact timescale depending on the release and install schedule for the new versions of the system software.

This essential upgrade will ensure access to security updates; improvements to interconnect reliability and performance; improvements to upgradeability, maintainability and monitoring; and access to more recent compilers, software libraries and tools. Unfortunately, the major software upgrade will cause a long outage, but we have endeavoured to minimise the outage.

During the upgrade, users will be unable to connect to ARCHER2 via the login nodes, jobs will not run on the compute nodes and users will not be able to access any data on the system which include the /home, /work, NVMe and RDFaaS (/epsrc and /general) file systems.

Following the upgrade, we would advise users to recompile and test your codes as the new software will be based on a new operating system and new versions of compilers and libraries. The ARCHER2 CSE team will be recompiling and testing all centrally installed software. There will be no Python 2 installation available as part of supported software following the upgrade. Python 3 will continue to be fully supported.

We will include weekly reminders of the software upgrade in the ARCHER2 weekly newsletter and a further notification will be sent to all users once the final upgrade start date is confirmed. We are also planning a user forum which will provide an opportunity to ask any questions to HPE and EPCC staff and learn about new features and changes to the user environment following the upgrade.

We have created a [webpage ](https://docs.archer2.ac.uk/faq/upgrade-2023/) with further details of the upgrade which will be updated throughout the upgrade process. As always, please [contact the service desk ](mailto:support@archer2.ac.uk) if you have any questions.

We apologise for any inconvenience which may have been caused by the delay and will provide any further updates as soon as they become available.


## GPU programming with CUDA and HIP training course

This Cirrus training course may also be of interest to some ARCHER2 users.

3rd - 4th May 2023 in [Edinburgh](https://www.cirrus.ac.uk/training/locations/epcc)

[Further information and registration]( https://www.cirrus.ac.uk/training/courses/230503-cirrus-gpu/)

This short course will provide an introduction to GPU computing with CUDA aimed at scientific application programmers wishing to develop their own software.

     
## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/230417-modern-c/), 17-20 April 2023, 09:30 - 12:30 BST
- [ Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/230424-modern-c/), Online, 24 - 27 April 2023 13:00 - 16:00 BST 
- [Data Carpentry](https://www.archer2.ac.uk/training/courses/230424-data-carpentry/), Online, 24th - 27th April 2023 09:30 - 13:00 BST
- [Cirrus - GPU programming with CUDA and HIP](https://www.cirrus.ac.uk/training/courses/230503-cirrus-gpu/), 	[Edinburgh](https://www.cirrus.ac.uk/training/locations/epcc), 3rd - 4th May 2023 9:30-17:00, 9:00-16:00 

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
