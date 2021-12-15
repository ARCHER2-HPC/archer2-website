---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-12-15 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 Full System Transition](#archer2-full-system-transition)
- [ARCHER2 Festive Period](#archer2-festive-period)
- [ARCHER2 login nodes](#archer2-login-nodes)
- [ARCHER2 Embedded CSE (eCSE) call](#archer2-embedded-cse-ecse-call)
- [Efficient Parallel IO on ARCHER2, Online 11 January 2022 09:30 - 17:00](#efficient-parallel-io-on-archer2)
- [Upcoming ARCHER2 training](#upcoming-archer2-training) 


## ARCHER2 Full System Transition

Charging will be enabled on ARCHER2 full system on 4th January 2022.

As the future of the ARCHER2 4-Cabinet system is unclear beyond 4th January 2022, please remove all required data from /work on ARCHER2 4Cabinet to ARCHER2 full system before that date. Full instructions on how to do this can be found at:
<https://docs.archer2.ac.uk/archer2-migration/data-migration/>


## ARCHER2 Festive Period

The ARCHER2 Service will observe the UK Public holidays and will be closed for Christmas Day, Boxing Day and New Year's Day. We fully expect the ARCHER2 service to be available during these holidays but we will not have staff on the Service Desk to deal with any queries or issues you may experience. Users will be able to connect to the system and submit jobs as usual. The Service Desk will be open as usual on all other workdays (Monday - Friday from 0800-1800) excluding these holidays.

### Key Dates:
- **Monday 27th December** - ARCHER2 Service Desk Closed 
- **Tuesday 28th December** - ARCHER2 Service Desk Closed 
- **Monday 3rd January** - ARCHER2 Service Desk Closed 
- **Tuesday 4th January** - Charging will be enabled on ARCHER2 full system 
- **Tuesday 4th January** - Please ensure all /work data is removed from ARCHER2 4 Cabinet

As always please contact [support@archer2.ac.uk](mailto: support@archer2.ac.uk) if you have any questions or problems and please check the [ARCHER2 Status page for updates](https://www.archer2.ac.uk/support-access/status.html) 


## ARCHER2 login nodes

A reminder to all users that the ARCHER2 login nodes are a shared resource; running heavy processing jobs on the login nodes will impact all other users of the system.

Interactive jobs can be run on the compute nodes - see
<https://docs.archer2.ac.uk/user-guide/scheduler/#interactive-jobs>
or your job may be suitable for running on the data analysis (serial) nodes
<https://docs.archer2.ac.uk/user-guide/scheduler/#options-for-jobs-on-the-data-analysis-nodes>

Please do not hesitate to ask the [Service desk](mailto: support@archer2.ac.uk) if you would like any advice about the best way to run your work


## ARCHER2 Embedded CSE (eCSE) call

We are very pleased to announce that the 6th ARCHER2 eCSE call (ARCHER2 eCSE06) is now open for proposals. The deadline for submitting documents for technical evaluation is 16:00 on 22nd Feb 2022 with the final deadline for proposal submission being 16:00 on 15th Mar 2022.

Embedded CSE (eCSE) support provides funding to the ARCHER2 user community to develop software in a sustainable manner to run on the ARCHER2 system. For this call, software which results in research which is within the remit of EPSRC is eligible. Funding can be requested for staff located at the institution of the PI, third parties, or can include staff from the centralised CSE support team or a mixture of the above. Proposals may request effort from between 1 and 12 person months (inclusive).

More details of how to apply are available by following the link to the eCSE calls page from here

<https://www.archer2.ac.uk/ecse/>

together with details of the application and review process, assessment criteria eligibility, etc.

### eCSE call dates


Deadline for submitting eCSE06 documents for technical evaluation: 16:00 on Tuesday 22nd February 2022

Deadline for final eCSE06 submission: 16:00 Tuesday 15th March 2022

A recent webinar can be found here:
<https://www.archer2.ac.uk/training/courses/210203-ecse-webinar/>

which includes a walk through of the submission of a proposal.


## Efficient Parallel IO on ARCHER2

Online 11 January 2022 09:30 - 17:00

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. Standard Unix IO routines are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems are optimised for large volumes of data, but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

This hands-on course explores a range of issues related to parallel IO. It uses ARCHER2 and its parallel Lustre file system as a platform for the exercises; however, almost all the IO concepts and performance considerations are applicable to any parallel system.

Full details and registration  <https://www.archer2.ac.uk/training/#upcoming-training>


## Upcoming ARCHER2 Training

- Efficient Parallel IO on ARCHER2, Online, 11 January 2022 9:30 - 17:00 GMT
- Integrating discrete exterior calculus (DEC) into the ParaFEM library, Online webinar, Thursday 13th January 2022 15:00 - 16:00 
- Reproducible computational environments using containers: Introduction to Docker and Singularity, 	Online, 19 - 20 January 2022 10:00 - 16:00 GMT 	
- HPC Carpentry, Online, 27 - 28 January 2022 9:30 - 16:00 GMT
- Introduction to ARCHER2 for Software Developers, Online, 31 January - 1 February 2022 10:00 - 16:00 GMT 
- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)
