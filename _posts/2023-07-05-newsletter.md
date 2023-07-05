---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-07-05 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Python overhead: Reducing the burden]({{ page.url }}#python-overhead-reducing-the-burden), online, Wednesday 5th July 2023 15:00 - 16:00 BST   Today
- [Change to default version of ONETEP on ARCHER2]({{ page.url }}#change-to-default-version-of-onetep-on-archer2)
- [Scientific Computing in Rust 2023]({{ page.url }}#scientific-computing-in-rust-2023)
- [CompBioMed Conference 2023 and Student Visualisation Competition]({{ page.url }}#compbiomed-conference-2023-and-student-visualisation-competition)
- [ARCHER2 Publication Database]({{ page.url }}#archer2-publication-database)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->


## Python overhead: Reducing the burden

Online, Wednesday 5th July 2023 15:00 - 16:00 BST

Support queries involving Python are becoming more and more common in HPC. Python can feature within traditional HPC workflows and is particularly popular for machine learning tasks. However, those Python packages involved with inter-process communications (mpi4py) and low-level computation (pycuda/cupy) must be linked to code libraries built specifically for the host system. It is more convenient therefore to maintain such packages within a centralized location, and, at the same time, provide users with a straightforward way to access those packages from within their own local Python environments.

This talk explains how this can be accomplished and then proceeds through several use cases implemented on the two main HPC systems delivered by EPCC, namely ARCHER2 and Cirrus.

[Details and join link](https://www.archer2.ac.uk/training/courses/230705-python-vt/)


## Change to default version of ONETEP on ARCHER2

The default version of ONETEP on ARCHER2 will be changed to a newer version `onetep/6.1.43.0-CCE-LibSci` on Mon 17 July 2023. The current default version is `onetep/6.1.9.0-CCE-LibSci` 

If you wish to continue to use the older version after this change, you will need to change your job submission scripts to explicitly load the older version.


## Scientific Computing in Rust 2023

The Scientific Computing in Rust 2023 workshop will take place on Thursday 13 July and Friday 14 July between 13:00 BST and 17:00 BST.

Not an ARCHER2 event but likely to be of interest to ARCHER2 users.

This workshop will be held virtually and is free to attend. 
 
[Full details](https://scientificcomputing.rs/)


## CompBioMed Conference 2023 and Student Visualisation Competition

September 12th-14th (Garching, Germany)

Not an ARCHER2 event but likely to be of interest to some ARCHER2 users.

The CompBioMed Conference 2023 addresses the rapidly burgeoning domain of computational biomedicine, from genome through organ to whole human and population levels, embracing data driven, mechanistic modelling and simulation, machine learning and combinations thereof. 

[Further information]( https://www.compbiomed-conference.org/)

Deadlines:
- Abstract submission:  July 31st
- Student Visualisation competition submission:  August 15th


## ARCHER2 Publication Database: 

The ARCHER2 service maintains a publication database of works that have arisen from ARCHER2 and links them to project IDs that have ARCHER2 access. We ask all users of ARCHER2 to register any publications in the database - all you need is your publication's DOI.

Registering your publications in SAFE has a number of advantages:
-	For large projects in particular, it allows the project lead to collect publications from all the project members to assist with ResearchFish submissions
-	Your publication automatically gets added to the ARCHER2 publications page
-	Your publication is included in reports to UKRI
-	The better the record we have of publications arising from the ARCHER2 service, the easier it is to demonstrate the impacts and benefits of the service; allowing UKRI to secure funding for future national supercomputing services.

[Further details and instructions on how to add publications](https://docs.archer2.ac.uk/publish/)


    

## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [Python overhead: Reducing the burden](https://www.archer2.ac.uk/training/courses/230705-python-vt/), online, Wednesday 5th July 2023 15:00 - 16:00 BST
- [Coupling LAMMPS and OpenFOAM for Multi-Scale Models](https://www.archer2.ac.uk/training/courses/230719-openfoam-lammps-vt/), Online, Wednesday 19th July 2023 14:00 - 16:00 BST
- [Parallel Performance Analysis using Scalasca](https://www.archer2.ac.uk/training/courses/230822-scalasca/) , Oxford, 22 - 23 August 2023 09:30 - 16:30 BST 

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
