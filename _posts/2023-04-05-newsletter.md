---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-04-05 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Service desk over Easter]({{ page.url }}#service-desk-over-easter)
- [Access to HPC Call open]({{ page.url }}#access-to-hpc-call-open)
- [Delayed - Major software upgrade]({{ page.url }}#delayed-major-software-upgrade)
- [The Science Behind the Image Competition 2]({{ page.url }}#the-science-behind-the-image-competition)  - Wednesday 5th April 2023 14:00 - 15:00
- [Spring HPC Days]({{ page.url }}#spring-hpc-days)
- [CompBioMed Conference, CBMC23]({{ page.url }}#compbiomed-conference-cbmc23)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->
 

## Service desk over Easter

The ARCHER2 service desk will be closed on Friday 7th April and Monday 10th April 2023, reopening at 8:00am on Tuesday 11th April.


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


Previously scheduled: Fri 14th April - w/b Mon 8th May New Upgrade Date: TBC but expected to start in May 

The delay to the upgrade is due to HPE planning an additional system software release within the next couple of weeks and they recommend that we upgrade to this latest version rather than the one originally planned.

As soon as the software is released we will be able to formulate a timetable and will notify users of the revised upgrade dates. We expect the upgrade to start in May.

Despite, the ARCHER2 team making good progress completing final technical work and preparation ahead of the originally planned upgrade, this further update will require some additional testing and so we expect the start of the upgrade on the main system to be delayed by a few weeks, with the exact timescale depending on the release and install schedule for the new versions of the system software.

This essential upgrade will ensure access to security updates; improvements to interconnect reliability and performance; improvements to upgradeability, maintainability and monitoring; and access to more recent compilers, software libraries and tools. Unfortunately, the major software upgrade will cause a long outage, but we have endeavoured to minimise the outage.

During the upgrade, users will be unable to connect to ARCHER2 via the login nodes, jobs will not run on the compute nodes and users will not be able to access any data on the system which include the /home, /work, NVMe and RDFaaS (/epsrc and /general) file systems.

Following the upgrade, we would advise users to recompile and test your codes as the new software will be based on a new operating system and new versions of compilers and libraries. The ARCHER2 CSE team will be recompiling and testing all centrally installed software. There will be no Python 2 installation available as part of supported software following the upgrade. Python 3 will continue to be fully supported.

We will include weekly reminders of the software upgrade in the ARCHER2 weekly newsletter and a further notification will be sent to all users once the final upgrade start date is confirmed. We are also planning a user forum which will provide an opportunity to ask any questions to HPE and EPCC staff and learn about new features and changes to the user environment following the upgrade.

We have created a [webpage ](https://docs.archer2.ac.uk/faq/upgrade-2023/) with further details of the upgrade which will be updated throughout the upgrade process. As always, please [contact the service desk ](mailto:support@archer2.ac.uk) if you have any questions.

We apologise for any inconvenience which may have been caused by the delay and will provide any further updates as soon as they become available.


## The Science Behind the Image Competition

Wednesday 5th April 2023 14:00 - 15:00

In these webinars we invite entrants from the 2022 ARCHER2 Image and Video Competition to talk about their work, and the science behind their stunning images and videos.

[Details and join link](https://www.archer2.ac.uk/training/courses/230405-science-image-2/)

This online session is open to all. It will use the Blackboard Collaborate platform.

## Spring HPC Days

In the week before ISC 2023, Durham is hosting a set of HPC-related events with guests from all over the UK and from abroad.

Our overarching motto this year is "Embracing (hardware, domain and people) diversity at the high end".

Registration is open free of charge. Register here: https://forms.gle/dv8t6pDfu86Rx6W27

While we will stream the talks, the core event will run face-to-face in Durham.

Events include:
  - PAX-HPC Project Meeting.
  - Kitware vendor seminar and fireside chat.
  - 2023 Performance Analysis Workshop – Feedback and Wrap-up session.
  - Discussion session on workforce diversity, organised by the N8 CIR WHPC chapter.
  - ExCALIBUR Workshop: Programming the next generation of supercomputers.

Keynotes by:
  - Emma Barnes (Head of Research IT & Acting Head of Faculty IT, University of York).
  - David Keyes (Extreme Computing Research Center, KAUST).
  - Dan Stanzione (Associate Vice President for Research, Executive Director, TACC).

Detailed information and sign-up can be found on the [event website:](https://tobiasweinzierl.webspace.durham.ac.uk/research/workshops/durham-hpc-days-spring-2023/)


## CompBioMed Conference, CBMC23

Registration and abstract submission open for CompBioMed Conference, CBMC23,  on 12-14 September 2023 at the Science Congress Center Munich, Garching, Germany.

[Event page](https://www.compbiomed-conference.org)
     
## Recently added known issues
 
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
