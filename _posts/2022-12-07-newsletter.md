---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-12-07 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Application programming interface for density functional theory software](#application-programming-interface-for-density-functional-theory-software), webinar, Wednesday 7th December 2022 15:00 - 16:00 
- Change to default CPU frequency for compute nodes on 12 Dec 2022
- CASTEP 22.1.1 available
- [ARCHER2 2023 calendar](#archer2-2023-calendar) - sign up for your copy now
- ARCHER2 9th Embedded CSE (eCSE)  call
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 

## Application programming interface for density functional theory software

Wednesday 7th December 2022 15:00 - 16:00
Pavel Stishenko, University of Cardiff

The density functional theory (DFT) is a workhorse of modern computational chemistry and materials science. It has brought practically useful accuracy to models of catalysis, electrochemistry, photonics, etc. Computing power growth along with emergence of machine learning (ML) methods raised the demand of complex simulation workflows that include DFT codes. Efficient data exchange with DFT software is challenging due to size of arrays that describe electronic structure of simulated systems. Aiming to provide a fast and portable way to import and export large data structures of DFT codes we have developed a new applications programming interface, Atomic Simulation Interface (ASI), and implemented it in established electronic structure software packages. ASI offers a set of functions that are of utility for interoperation with ML models and for embedding in multi scale simulation frameworks. ASI is designed to be easily and efficiently implemented in existing DFT codes. A Python wrapper is provided to simplify ASI usage by client codes.

This online session is open to all. It will use the Blackboard Collaborate platform.

[Details and join link](https://www.archer2.ac.uk/training/courses/221207-dft-vt/)



## Change to default CPU frequency for compute nodes on 12 Dec 2022

We are always looking for ways to improve the energy efficiency of the ARCHER2 service and, as part of this ongoing work, we plan to change the default CPU frequency on ARCHER2 compute nodes used through "srun" commands to 2.0 GHz on Monday 12 December 2022. Users will still be able to reset the CPU frequency for their jobs to a different value, if they wish.

The default CPU frequency is currently unset on the service and so compute nodes are free to select the highest value possible within the constraints of the power configuration for the nodes - typically the base frequency of the processor: 2.25 GHz. The AMD 7742 processors on ARCHER2 support three choices of frequency: 2.25, 2.0 and 1.5 GHz. Recent benchmarking work by the ARCHER2 CSE team has indicated that reducing the CPU frequency to 2.0 GHz typically has a minimal effect on application performance (1-5% reduction in performance) but can lead to larger savings in energy consumption (10-20% reduction in energy consumption). This result is consistent with other similar findings at other HPC centres. Reducing the frequency further to 1.5 GHz has a larger impact on performance and often actually increases the total energy consumption.

Some benchmarks, which are heavily compute-bound, do not show the same energy efficiency improvements by decreasing the CPU frequency and so we will also be updating the modules for GROMACS, LAMMPS and NAMD to retain a higher default frequency setting (2.25 GHz).

Although we expect many jobs to show the same trends as our benchmarks, we advise that you should test the relationship between energy use and CPU frequency for your own jobs and choose the CPU frequency appropriately. The link to the Energy Use section of the User Guide shared below shows how to extract information on energy use and CPU frequency from the Slurm database. If you do not wish to use your budget to run these tests, you can use the "lowpriority" QoS which allows you to run for free.

Documentation on how you can set and query the CPU frequency and energy for jobs (or individual job steps) is available in the [ARCHER2 User Guide](https://docs.archer2.ac.uk/user-guide/energy/)

If you have questions on this upcoming change, please contact the ARCHER2 Service Desk.


## CASTEP 22.1.1 available

The ARCHER2 CSE service at EPCC have recently installed the 22.1.1 release of CASTEP. Users who have a CASTEP licence can access this version using the:

module load castep/22.11

command in their job submission scripts. Information on how to gain access to CASTEP on ARCHER2 can be found in the documentation at:

https://docs.archer2.ac.uk/research-software/castep/


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


## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course
- ARCHER2 for Software Developers, Online, 2 & 5 December 2022 10:00 - 16:00 GMT 
- Application programming interface for density functional theory software, webinar, Wednesday 7th December 2022 15:00 - 16:00
- Reproducible computational environments using containers, Newcastle University, 7 - 8 December 2022 10:30 - 16:30 GMT 	
- Introduction to Modern Fortran, Oxford e-Science Research Centre, 13 - 14 December 2022 09:30 - 16:30 GM	 
- Performance Optimisation on AMD EPYC, Online, 13 - 14 December 2022 09:30 - 16:30 GMT


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)


[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses and virtual tutorials](https://www.archer2.ac.uk/training/materials/)

