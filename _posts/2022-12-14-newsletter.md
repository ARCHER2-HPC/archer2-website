---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-12-14 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Festive period - service information](#festive-period---service-information)
- [Change to default CPU frequency for compute nodes ](#change-to-default-cpu-frequency-for-compute-nodes-on-12-dec-2022)on 12 Dec 2022
- [ARCHER2 2023 calendar](#archer2-2023-calendar) - sign up for your copy now
- [ARCHER2 9th Embedded CSE (eCSE) call](#archer2-9th-embedded-cse-ecse--call)
- [Recently added Known Issues](#recently-added-known-issues)
- [Release the power of exascale using OpenMP](#release-the-power-of-exascale-using-openmp), CompBioMed e-seminar, 18 January 2023 at 14:00CET/13:00GMT
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 

## Festive period - service information

The ARCHER2 Service will observe the UK Public holidays and will be closed for Christmas Day, Boxing Day and New Year’s Day.  Because Christmas Day and New Year's Day fall on Sundays, we will take the official Substitute Day holidays on the 27th and 2nd.

We fully expect the ARCHER2 service to be available during these holidays but we will not have staff on the Service Desk to deal with any queries or issues you may experience. Users will be able to connect to the system and submit jobs as usual. The Service Desk will be open as usual on all other workdays (Monday - Friday from 0800-1800) excluding these holidays.

**Key Dates**:

- **Monday 26th December** - ARCHER2 Service Desk Closed
- **Tuesday 27th December** - ARCHER2 Service Desk Closed
- **Monday 2nd January** - ARCHER2 Service Desk Closed
    
As always please contact [support@archer2.ac.uk](mailto:support@archer2.ac.uk) if you have any questions or problems and please check the [ARCHER2 Status page](https://www.archer2.ac.uk/support-access/status.html#service-alerts) for updates


## Change to default CPU frequency for compute nodes on 12 Dec 2022

We are always looking for ways to improve the energy efficiency of the ARCHER2 service and, as part of this ongoing work, we plan to change the default CPU frequency on ARCHER2 compute nodes used through "srun" commands to 2.0 GHz on Monday 12 December 2022. Users will still be able to reset the CPU frequency for their jobs to a different value, if they wish.

The default CPU frequency is currently unset on the service and so compute nodes are free to select the highest value possible within the constraints of the power configuration for the nodes - typically the base frequency of the processor: 2.25 GHz. The AMD 7742 processors on ARCHER2 support three choices of frequency: 2.25, 2.0 and 1.5 GHz. Recent benchmarking work by the ARCHER2 CSE team has indicated that reducing the CPU frequency to 2.0 GHz typically has a minimal effect on application performance (1-5% reduction in performance) but can lead to larger savings in energy consumption (10-20% reduction in energy consumption). This result is consistent with other similar findings at other HPC centres. Reducing the frequency further to 1.5 GHz has a larger impact on performance and often actually increases the total energy consumption.

Some benchmarks, which are heavily compute-bound, do not show the same energy efficiency improvements by decreasing the CPU frequency and so we will also be updating the modules for GROMACS, LAMMPS and NAMD to retain a higher default frequency setting (2.25 GHz).

Although we expect many jobs to show the same trends as our benchmarks, we advise that you should test the relationship between energy use and CPU frequency for your own jobs and choose the CPU frequency appropriately. The link to the Energy Use section of the User Guide shared below shows how to extract information on energy use and CPU frequency from the Slurm database. If you do not wish to use your budget to run these tests, you can use the "lowpriority" QoS which allows you to run for free.

Documentation on how you can set and query the CPU frequency and energy for jobs (or individual job steps) is available in the [ARCHER2 User Guide](https://docs.archer2.ac.uk/user-guide/energy/)

### A blog post around the impact of this change is available

[Impact of CPU frequency on application performance on ARCHER2](https://www.archer2.ac.uk/news/2022/12/12/CPUFreq.html)

If you have questions on this upcoming change, please contact the ARCHER2 Service Desk.



## ARCHER2 2023 calendar


<a href="https://bit.ly/ARCHER2-Calendar-2023">
![[image]]({{ site.baseurl }}/img/splash/221117-calendar.jpg)</a>
{: .img-center style="width: 30%" 
alt="ARCHER2 calendar 2023" 
title="ARCHER2 calendar 2023" }


As in previous years, we plan to produce a printed calendar featuring some of the images from the competition – you are most warmly [invited to sign up to receive a copy](https://bit.ly/ARCHER2-Calendar-2023), and these will be posted out in time for the new year.

## ARCHER2 9th Embedded CSE (eCSE)  call

We are very pleased to announce that the 9th ARCHER2 eCSE call
(ARCHER2-eCSE09) is now open for proposals. The deadline for submitting documents for technical evaluation is 16:00 on 21st February 2023 with the final deadline for proposal submission being 16:00 on 14th March 2023.

Embedded CSE (eCSE) support provides funding for RSEs (Research Software Engineers, PDRAs or equivalent) to carry out software development of codes to be run on the ARCHER2 system.

Projects can be requested for up to 18 person months of effort per project. We hope that this recent increase in the effort available per project will provide researchers with the opportunity to carry out more in depth improvements to software and to allow for an increase in the scope of a project's objectives. There is flexibility in the way the effort is requested. For example, a project may have more than one person working on it or the effort could be spread over a greater number of calendar months, i.e. a staff member could work on the project at less than 100% alongside other commitments or it could be worked on by a staff member who doesn't work full time. Please just get in contact with the ARCHER2 Service Desk if you wish to discuss possible scenarios.

The code(s) may already be running on ARCHER2, where the aim is to improve performance or scalability, to add functionality or to improve the usability and maintainability, or the code(s) may be running elsewhere (e.g. on a Tier-2 system) and the proposal could be to bring the software up to a level where it would perform well on ARCHER2.

For this call, software which results in research which is within the remit of EPSRC is eligible. Funding can be requested for staff located at the institution of the PI, third parties, or can include staff from the centralised CSE support team or a mixture of the above.

More details of how to apply are available by following the link to the [eCSE calls page](https://www.archer2.ac.uk/ecse/) together with details of the application and review process, assessment criteria eligibility, etc.


### eCSE call dates


Deadline for submitting eCSE09 documents for technical evaluation: 16:00 on Tuesday 21st February 2023

Deadline for final eCSE09 submission: 16:00 Tuesday 14th March 2023

A [recent webinar](https://www.archer2.ac.uk/training/courses/220428-ecse-webinar/) includes a walk through of the submission of a proposal.




## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Release the power of exascale using OpenMP

18 January 2023 at 14:00CET/13:00GMT.

ARCHER2 users may be interested in this CompBioMed e-seminar presented by Dr Mark Bull (EPCC) 

Modern supercomputer nodes now contain more than 100 cores, and often several GPUs. This means that the “MPI only” approach to parallel programming is coming under increasing strain and can no longer deliver the maximum performance from the hardware. OpenMP is the de facto standard for programming shared memory nodes, and now supports offloading to accelerator devices such as GPUs.

In this seminar, Dr Mark Bull will look at some ways that OpenMP can be used in the context of very large scale computing: combining OpenMP and MPI in a single application, portable offloading to GPUs, and using tasks for irregular parallelism.

To register, please visit [CompBioMed's link](https://register.gotowebinar.com/register/4235623781431049741)


## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course
- Message Passing programming with MPI 	Imperial College London 	22 - 24 February 2023 10:00 - 17:30 (Day 1 and 2) 10:00 - 15:00 (Day 3) 


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)


[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses and virtual tutorials](https://www.archer2.ac.uk/training/materials/)

