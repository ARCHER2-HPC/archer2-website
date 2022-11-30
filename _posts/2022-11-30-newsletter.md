---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-11-30 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Application programming interface for density functional theory software](#application-programming-interface-for-density-functional-theory-software), webinar, Wednesday 7th December 2022 15:00 - 16:00 
- [ARCHER2 for Software Developers](#archer2-for-software-developers) Online, 2 & 5 December 2022 10:00 - 16:00 GMT
- [Introduction to Modern Fortran, now Online](#introduction-to-modern-fortran-now-online),  13 - 14 December 2022 09:30 - 16:30 GMT 	 
- [ARCHER2 solid state storage](#archer2-solid-state-storage---trial-access-for-users) - trial access for users
- [ARCHER2 2023 calendar](#archer2-2023-calendar) - sign up for your copy now
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 

## Application programming interface for density functional theory software

Wednesday 7th December 2022 15:00 - 16:00
Pavel Stishenko, University of Cardiff

The density functional theory (DFT) is a workhorse of modern computational chemistry and materials science. It has brought practically useful accuracy to models of catalysis, electrochemistry, photonics, etc. Computing power growth along with emergence of machine learning (ML) methods raised the demand of complex simulation workflows that include DFT codes. Efficient data exchange with DFT software is challenging due to size of arrays that describe electronic structure of simulated systems. Aiming to provide a fast and portable way to import and export large data structures of DFT codes we have developed a new applications programming interface, Atomic Simulation Interface (ASI), and implemented it in established electronic structure software packages. ASI offers a set of functions that are of utility for interoperation with ML models and for embedding in multi scale simulation frameworks. ASI is designed to be easily and efficiently implemented in existing DFT codes. A Python wrapper is provided to simplify ASI usage by client codes.

This online session is open to all. It will use the Blackboard Collaborate platform.

[Details and join link](https://www.archer2.ac.uk/training/courses/221207-dft-vt/)


## ARCHER2 for Software Developers

Online, 2 & 5 December 2022 10:00 - 16:00 GMT 

The lesson aims to answer the following questions:

-     What hardware is available on ARCHER2?
-     What does they consist of (login nodes, compute nodes, file systems, backup)?
-     How does this impact me as a user?
-     How can I access ARCHER2 interactively and transfer data?
-     What does the ARCHER2 application development environment look like and how do I use it?
-     How do I write job submission scripts and submit them to the ARCHER2 scheduler?
-     How can I be a good ARCHER2 citizen?
-     How can I check what resources I am using and look at historical usage?

Target Audience:

This lesson provides an introduction to using ARCHER2 for user who:

-     have already used other HPC systems; and
-     want to compile (and possibly) develop HPC software on ARCHER2.
	
[Full details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## Introduction to Modern Fortran, now Online 

13 - 14 December 2022 09:30 - 16:30 GMT 

This course was previously planned to be delivered face-to-face in Oxford.  However, due to proposed rail disruption, we have now made this **an online only event**.

[Further details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## ARCHER2 2023 calendar


<a href="https://bit.ly/ARCHER2-Calendar-2023">
![[image]]({{ site.baseurl }}/img/splash/221117-calendar.jpg)</a>
{: .img-center style="width: 30%" 
alt="ARCHER2 calendar 2023" 
title="ARCHER2 calendar 2023" }


As in previous years, we plan to produce a printed calendar featuring some of the images from the competition – you are most warmly [invited to sign up to receive a copy](https://bit.ly/ARCHER2-Calendar-2023), and these will be posted out in time for the new year.


## ARCHER2 solid state storage - trial access for users

The ARCHER2 solid state storage is now in a state where we can offer trial access to ARCHER2 users. To determine the level of interest and assign resources we have created this short survey for users to complete if they are interested in testing the solid state storage on ARCHER2. Testing by the ARCHER2 CSE team at EPCC has shown that you may see I/O performance improvements from the solid state storage compared to the standard Lustre file systems on ARCHER2 if your I/O model has the following characteristics or similar:

 - You read/write lots of files in parallel (e.g. your software uses a file-per-process model or similar)
 - You use the  [ADIOS 2](https://adios2.readthedocs.io/en/latest/)  I/O system

Note: if you use MPI-IO approaches to reading/writing data - this includes parallel HDF5 and parallel NetCDF - then you very unlikely to see any performance improvements from using the solid state storage over the standard parallel Lustre file systems on ARCHER2.

[Complete the survey:](https://edin.ac/3DAhpJQ)

The deadline for completing the survey is 1600 GMT, 30 Nov 2022. Although we will do our best to meet all requests for trial access, we cannot guarantee that all requests for trial access will be able to be met.


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

