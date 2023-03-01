---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-03-01 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Update of centrally supported applications and libraries]({{ page.url }}#update-of-centrally-supported-applications-and-libraries)
- [Spring 2023 Training opportunities published]({{ page.url }}#spring-2023-training-opportunities-published)
- [ARCHER2 Training Forum meeting]({{ page.url }}#archer2-training-forum-meeting ), Wednesday 8th March 2023y 2023 15:00 - 16:00
- [Major software Upgrade]({{ page.url }}#major-software-upgrade-fri-14th-april---wb-mon-8th-may): Fri 14th April - w/b Mon 8th May
- [Message Passing programming with MPI]({{ page.url }}#message-passing-programming-with-mpi), Imperial College London, 22 - 24 February 2023
- [Recently added Known Issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->
 

## Update of centrally supported applications and libraries

CSE will be updating the versions of some centrally supported applications and libraries, during week beginning 6th March. This is to provide users with access to topical functionality and bug fixes from the relevant development teams. The following changes are proposed:

1. CASTEP Version 22.11 will be made default, and Versions 20.11 and 21.11 will be removed.
2.  CP2K Version 2023.1 will be made default and Versions 8.x, 9.x, and 2022.1 will be removed.
3.  GROMACS Version 2022.4 will be installed and made default.
4.  LAMMPS to Version 17/FEB/23 will be installed and made default.
5.  Nektar++ Version 5.0.3 will be removed (it has been deprecated). Nektar++ Version 5.2.0 remains the default.
6.  Quantum Espresso Version 7.1 will be installed and made default.
7.  VASP Version 6.3.2 with VTST will be installed. Version 6.3.2 (no VTST) will be made default. Versions 6.2.1, 6.3.0, and 6.3.1 will be removed.

and, for libraries and tools:

1.  MKL Version 2023.0.0 will be made default and Versions 19.5 and 21.2 will be removed
2.  Climate Data Operators Version 2.1.1 will be installed and made default. Version 1.9.9 will be removed.
3.  ARM Forge Version 22.1.3 will be installed and made default. Versions 20.0.2 and 22.1.1 will be removed.


If you have any questions or comments, please [contact the Service Desk](mailto: support@archer2.ac.uk). 

## Spring 2023 Training opportunities published

See [bottom of page]({{ page.url }}#upcoming-archer2-training) for a full list of all the Training Courses just opened for registration.

## ARCHER2 Training Forum meeting

Wednesday 8th March 2023 15:00 - 16:00

Do you want to take part in the development of the next ARCHER2 training programme?

Please join our next ARCHER2 Training Forum meeting, which will take place online at 3pm on Wednesday, 8th March 2023.

- What courses would you like to attend?
- What courses would you like to include?
- Have your say!

The ARCHER2 training programme is designed every year based on feedback from previous course attendees, the ARCHER2 training forum and the ARCHER2 training panel. The ARCHER2 training forum is formed by the ARCHER2 Service Director, the ARCHER2 training function lead, the EPCC Director of Education, and representatives from the EPSRC HEC Consortia and NERC Consortia, among others.

In order to give the opportunity for anyone to express their feedback on the draft for the upcoming training year (May 2023 - April 2024), the ARCHER2 Training Forum meeting will be public. The meeting will not be recorded, although the outcomes will be published on the event page.

[Full details and join link](http://www.archer2.ac.uk/training/courses/230308-archer2-training-forum/)


## Major software Upgrade: Fri 14th April - w/b Mon 8th May


A reminder that there will be a major software upgrade on ARCHER2 from Friday 14th April - week beginning 8th May. This major software upgrade includes the base operating system, the Slingshot interconnect system software, the HPE Cray Programming Environment and the HPE Cray Management Software.

This essential upgrade will ensure access to security updates; improvements to interconnect reliability and performance; improvements to upgradeability, maintainability and monitoring; and access to more recent compilers, software libraries and tools. Unfortunately, the major software upgrade will cause a long outage but we have endeavoured to minimise the outage as well as give as much notice to users as possible so that you can plan accordingly.

During the upgrade, users will be unable to connect to ARCHER2 via the login nodes, jobs will not run on the compute nodes and users will not be able to access any data on the system which include the /home, /work, NVMe and RDFaaS (/epsrc and /general) file systems.

Following the upgrade, we would advise users to recompile and test your codes as the new software will be based on a new operating system and new versions of compilers and libraries. The ARCHER2 CSE team will be recompiling and testing all centrally installed software. There will be no Python 2 installation available as part of supported software following the upgrade. Python 3 will continue to be fully-supported.  

We will include weekly reminders of the software upgrade in the ARCHER2 weekly newsletter and a further notification will be sent to all users two weeks prior to the upgrade. We are also planning a user forum which will provide an opportunity to ask any questions to HPE and EPCC staff and learn about new features and changes to the user environment following the upgrade.

We have created a [webpage with further details of the upgrade](https://docs.archer2.ac.uk/faq/upgrade-2023/) which will be updated throughout the upgrade process:  

Please [contact the service desk](mailto:support@archer2.ac.uk) if you have any concerns regarding the upgrade. 

               

## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [ARCHER2 Training Forum meeting](https://www.archer2.ac.uk/training/courses/230308-archer2-training-forum/), Wednesday 8th March 2023 15:00 - 16:00
- [Introduction to LAMMPS](https://www.archer2.ac.uk/training/courses/230314-lammps), Online, 14 March 2023 10:00 - 16:30 GMT 
- [ARCHER2 for Software Developers](https://www.archer2.ac.uk/training/courses/230316-software-developers), Online, 16 - 17 March 2023 10:00 - 16:00 GMT
- [Efficient use of the HPE Cray EX Supercomputer ARCHER2](https://www.archer2.ac.uk/training/courses/230321-hpe-cray-ex), Online, 21 - 23 March 2023 09:00 - 17:00 BST 	
- [ARCHER2 for Package Users](https://www.archer2.ac.uk/training/courses/230328-package-users), Online, 28 March 2023 10:00 - 16:00 GMT 
- [Data Analysis and Visualisation in Python](https://www.archer2.ac.uk/training/courses/230330-data-analysis-python/), Online, 30 - 31 March 2023 09:30 - 17:00 GMT 
- [ARCHER2 for Data Scientists](https://www.archer2.ac.uk/training/courses/230411-data-scientists/), Online, 11 April 2023 10:00 - 17:30 GMT 
- [HPC Carpentry](https://www.archer2.ac.uk/training/courses/230411-hpc-carpentry/), Edinburgh, 11 - 12 April 2023 09:30 - 16:00 GMT 

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses and virtual tutorials](https://www.archer2.ac.uk/training/materials/)

