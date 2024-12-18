---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-12-18 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 Festive Period]({{ page.url }}#archer2-festive-period)
- [Low priority queue over the festive break]({{ page.url }}#low-priority-queue-over-the-festive-break)
- [ARCHER2 software module changes]({{ page.url }}#archer2-software-module-changes-15-jan-2025): 15 Jan 2025
- [ARCHER2 Celebration of Science 2025]({{ page.url }}#archer2-celebration-of-science-2025)
- [Meet the ARCHER2 User Advisory Group]({{ page.url }}#meet-the-archer2-user-advisory-group)
- [Forge license boost]({{ page.url }}#forge-license-boost-wb-16th-december) w/b 16th December
- [Using ARCHER2 Efficiently]({{ page.url }}#using-archer2-efficiently), Online, 28 - 30 January 2025 09:00 - 17:00 GMT
- [Data carpentry]({{ page.url }}#data-carpentry), Cardiff, 30 - 31 January 2025 09:30 - 17:00 GMT
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


This will be the final ARCHER2 Weekly news for 2024.  We wish everyone in the ARCHER2 community a peaceful and joyful festive period, and we will resume news mailing in 2025.

<!--more-->


## ARCHER2 Festive Period

The ARCHER2 Service will observe the UK Public holidays and will be closed for Christmas Day, Boxing Day and New Year’s Day.

We fully expect the ARCHER2 service to be available during these holidays but we will not have staff on the Service Desk to deal with any queries or issues you may experience. Users will be able to connect to the system and submit jobs as usual. The Service Desk will be open as usual on all other workdays (Monday - Friday from 0800-1800) excluding these holidays.

Key Dates:

-   Wednesday 25th December - ARCHER2 Service Desk Closed
-    Thursday 26th December - ARCHER2 Service Desk Closed
-   Wednesday 1st January - ARCHER2 Service Desk Closed

As always please contact support@archer2.ac.uk if you have any questions or problems and please check the ARCHER2 Status page for updates
	

## Low priority queue over the festive break


Over the festive break, ARCHER2 may be slightly less busy than usual, so to encourage those of you able to make use of this, we have increased the limits on the Low Priority QoS so each user can have up to 32 running jobs and up to 64 pending or running (compared with current limits of 16 running, 16 pending or running).

We hope this will be beneficial to users and also help keep the machine utilisation high.

Please don't forget, though, that your awarded allocation cannot be moved forward if unused, so please try to utilise that first - but keeping enough to maintain a positive CU balance as required to access the Low Priority queue.


## ARCHER2 software module changes: 15 Jan 2025

From 10:00-11:00 GMT on Wednesday 15 Jan 2025, we will be making some changes to the software modules on ARCHER2:

- Moving the software installations to a different file system to improve reliability
- Removing some old software versions
- Updating the default versions of some software in the modules system

The following old software versions will be removed (versions to be kept in parenthesis:
 
- CASTEP 22.11 (keep: 23.11, 24.1)
- Code_Saturne 7.0.1 (keep: 8.0.3)
- py-chemshell 23.0.1, a4cfb310, cee39100 (keep: 23.0.3)
- FHI-aims 210716.3 (keep: 221103.0, 240920.0)
- VASP 6.3.2 (keep: 5.4.4.pl2-vtst, 5.4.4.pl2, 6.4.1-vtst, 6.4.1, 6.4.2, 6.4.2-mkl19, 6.4.3)
- GMP 6.2.1 (keep: 6.3.0)
- GSL 2.7 (keep: 2.8)
- PyTorch 2.0.0 (keep: 2.2.0)


The following versions will be made default versions:

- CASTEP 24.1
- CP2K 2024.3
- py-chemshell 23.0.3
- FHI-aims 240920.0
- NWChem 7.2.2
- ONETEP 6.1.43.0-CCE-LibSci
- Quantum Espresso 7.1
- VASP 6.4.3
- GMP 6.3.0
- GSL 2.8
- CMake 3.29.4
- Paraview 5.13.0
- PyTorch v2.2.0

If you have any questions about this work, please contact the [ARCHER service desk](mailto: support@archer2.ac.uk)

	
## ARCHER2 Celebration of Science 2025

Following the success of ARCHER2 Celebration of Science 2024, we are pleased to announce that ARCHER2 Celebration of Science 2025 will take place on the 14th - 15th May 2025 in Edinburgh at South Hall, The University of Edinburgh. Further details will be available soon and registration will be opened in early 2025. 
	

## Meet the ARCHER2 User Advisory Group

We have recently added a page to the website with details of members of the [ARCHER2 User Advisory Group (UAG)](https://www.archer2.ac.uk/about/uag/)
 
The ARCHER2 User Advisory Group represents the current and prospective user base of ARCHER2, the UK national supercomputing service. The group provides recommendations and feedback to UKRI with the aim of improving the user experience of the service. Any ARCHER2 user is able to contact UAG members if they want to provide input into the service.


## Forge license boost w/b 16th December

The Forge license will be increased from 16 nodes to 64 nodes for one week beginning 16th December. [Full details of DDT and MAP]( https://docs.archer2.ac.uk/data-tools/forge/)


## Using ARCHER2 Efficiently

Online, 28 - 30 January 2025 09:00 - 17:00 GMT 

This three day workshop will provide attendees with the knowledge required to understand the most optimal way to port, execute and optimize applications for ARCHER2. The workshop is a mixture of lectures and practical hands-on sessions. Example exercises will be provided but attendees are encouraged to bring their own applications.

This is an opportunity to learn about the system hardware and software architecture, direct from HPE Cray Centre of Excellence experts, and we do not expect to be able to repeat this opportunity in the near future. No recordings will be provided so we encourage you to sign up now to ensure your place.

[Full details and registration]( https://www.archer2.ac.uk/training/#upcoming-training)



## Data carpentry

Cardiff, 30 - 31 January 2025 09:30 - 17:00 GMT

Data Carpentry workshops will focus on introductory computational skills needed for data management and analysis in all domains of research. It is ideal training for researchers wishing to learn how to use open source tools to make their research open and reproducible. you do not need to have any previous knowledge of the tools that will be presented at the workshop. Participants will be encouraged to help one another and to apply what they have learned to their own research problems.

This two-day workshop will cover:

-     Data Organization in Spreadsheets
-     Data Cleaning with OpenRefine
-     Data Analysis and Visualization in R
-     Data Management with SQL

This workshop uses a tabular ecology dataset from the Portal Project Teaching Database and teaches data cleaning, management, analysis, and visualization. would use.

There are no pre-requisites, and the materials assume no prior knowledge about the tools. We use a single dataset throughout the workshop to model the data management and analysis workflow that a researcher

[Full details and registration]( https://www.archer2.ac.uk/training/#upcoming-training)


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues.


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>
- [Using ARCHER2 Efficiently](https://www.archer2.ac.uk/training/courses/250128-hpe-archer2/), Online, 28 - 30 January 2025 09:00 - 17:00 GMT 
- [Data Carpentry](https://www.archer2.ac.uk/training/courses/250130-data-carpentry/), Cardiff, 30 - 31 January 2025 09:30 - 17:00 GMT

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
