---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-11-02 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Debugging on ARCHER2: Introduction to the gdb4hpc and ccdb debugging tools on ARCHER2](#debugging-on-archer2-introduction-to-the-gdb4hpc-and-ccdb-debugging-tools-on-archer2), online Webinar, Wednesday 2nd November 2022 15:00 - 16:00
- [ARCHER2 solid state storage](#archer2-solid-state-storage---trial-access-for-users) - trial access for users
- [ARCHER2 Image and Video Competition 2022 Results](#archer2-image-and-video-competition-2022-results)
- [ARCHER2 for Package Users](#archer2-for-package-users), Online, 24 November 2022 10:00 - 16:00 GMT 
- [ARCHER2 for Software Developers](#archer2-for-software-developers) Online, 2 & 5 December 2022 10:00 - 16:00 GMT
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 

## Debugging on ARCHER2: <br>Introduction to the gdb4hpc and ccdb debugging tools on ARCHER2.

Free online webinar, Wednesday 2nd November 2022 15:00 - 16:00 BST<br>
Harvey Richardson, Douglas Shanks HPE Cray

This webinar, delivered by the HPE Centre of Excellence, will be an introduction to the [gdb4hpc](https://docs.archer2.ac.uk/user-guide/debug/#gdb4hpc) and [ccdb](https://docs.archer2.ac.uk/user-guide/debug/) debugging that are provided in the HPE Cray Programming Environment on ARCHER2. 

The webinar aims to answer the following questions:
-	What debugging tools are available on ARCHER2?
-	What is gdb?
-	How do I use gdb and what are its capabilities?
-	What does gdb4hpc add to gdb?
-	How do I use gdb4hpc on ARCHER2?
-	How would I debug a hanging/crashing application with gdb4hpc?
-	What is the Cray Comparative Debugger (ccdb)?
-	When and how would I use ccdb?
-	How would I create an assertion script and compare two programs with ccdb?

[Details and join link](https://www.archer2.ac.uk/training/courses/221102-hpe-debugging-vt/)


## ARCHER2 solid state storage - trial access for users

The ARCHER2 solid state storage is now in a state where we can offer trial access to ARCHER2 users. To determine the level of interest and assign resources we have created this short survey for users to complete if they are interested in testing the solid state storage on ARCHER2. Testing by the ARCHER2 CSE team at EPCC has shown that you may see I/O performance improvements from the solid state storage compared to the standard Lustre file systems on ARCHER2 if your I/O model has the following characteristics or similar:

 - You read/write lots of files in parallel (e.g. your software uses a file-per-process model or similar)
 - You use the  [ADIOS 2](https://adios2.readthedocs.io/en/latest/)  I/O system

Note: if you use MPI-IO approaches to reading/writing data - this includes parallel HDF5 and parallel NetCDF - then you very unlikely to see any performance improvements from using the solid state storage over the standard parallel Lustre file systems on ARCHER2.

[Complete the survey:](https://edin.ac/3DAhpJQ)

The deadline for completing the survey is 1600 GMT, 30 Nov 2022. Although we will do our best to meet all requests for trial access, we cannot guarantee that all requests for trial access will be able to be met.


## ARCHER2 Image and Video Competition 2022 Results


Thank you to everyone who submitted images and videos to this year’s competition. The outstanding range of entries once again made judging a most enjoyable experience with so many great demonstrations of the important work being done using ARCHER2 .

We are pleased to announce the winners as follows:

Winning Image and Overall Winner: Aleksandra Monka, University of Birmingham, Department of Civil Engineering with their image "Expiratory particle dispersion by turbulent exhalation jet during speaking ".

Winning Video: Noam Vogt-Vincent, Department of Earth Sciences, University of Oxford with their video "One year in the southwestern Indian Ocean ".

Winning Early Career Researcher entry : Dr Nikolaos Bempedelis, Imperial College London, Department of Aeronautics with their image "Flow within and around a large wind farm ".  

Congratulations!

View the [gallery of all the submitted images and videos](https://www.archer2.ac.uk/about/gallery/2022-image-comp/)

Thanks to the entrants, judges and all involved in making the competition such a great success.  We hope you will take a few moments to enjoy looking at the gallery.

As in previous years, we plan to produce a printed calendar featuring some of the images from the competition – you are most warmly invited to [sign up to receive a copy](https://bit.ly/ARCHER2-Calendar-2023), and these will be posted out in time for the new year.


## ARCHER2 for Package Users 	

Online 	24 November 2022 10:00 - 16:00 GMT 

This lesson provides an introduction to using ARCHER2 for users who:

- have already used other HPC systems; and
- want to use pre-installed simulation/modelling packages rather than compiling their own.

The lesson aims to answer the following questions:

- What hardware is available on ARCHER2?
- What does it consist of (login nodes, compute nodes, file systems, backup)?
- How does this impact me as a user?
- How can I access ARCHER2 interactively and transfer data?
- What does the ARCHER2 software environment look like and how do I access software?
- How do I write job submission scripts and submit them to the ARCHER2 scheduler?
- How can I be a good ARCHER2 citizen?
- How can I check what resources I am using and look at historical usage?
- What are the next steps for me using ARCHER2 and how can I get more help?

[Full details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


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



## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course
- Debugging on ARCHER2: Introduction to the gdb4hpc and ccdb debugging tools on ARCHER2, online Webinar, Wednesday 2nd November 2022 15:00 - 16:00
- ARCHER2 for Package Users, Online, 24 November 2022 10:00 - 16:00 GMT 
- Advanced OpenMP, Online, 29 - 30 November 2022 09:00 - 17:00 GMT 
- ARCHER2 for Software Developers, Online, 2 & 5 December 2022 10:00 - 16:00 GMT 
- Software Carpentry 	Queen's University, Belfast, 5 - 8 December 2022 09:30 - 17:00 GMT 
- Reproducible computational environments using containers, Newcastle University, 7 - 8 December 2022 10:30 - 16:30 GMT 	
- Introduction to Modern Fortran, Oxford e-Science Research Centre, 13 - 14 December 2022 09:30 - 16:30 GMT 	 
- Performance Optimisation on AMD EPYC, Online, 13 - 14 December 2022 09:30 - 16:30 GMT


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)


[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses and virtual tutorials](https://www.archer2.ac.uk/training/materials/)

