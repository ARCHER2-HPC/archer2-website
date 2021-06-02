---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-06-02 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

 
- [Data Carpentry course](#data-carpentry-course), 14 - 17 June 2021 09:30 - 13:00 BST
- [Software Carpentry course](#software-carpentry-course), 21 - 24 June 2021 09:30 - 13:00 BST
- [Changes to OpenMPI modules on ARCHER2](#changes-to-openmpi-modules-on-archer2)
- [Upcoming ARCHER2 training](#other-upcoming-archer2-training) 


## Data Carpentry course

14 - 17 June 2021 09:30 - 13:00 BST
 
Data Carpentry develops and teaches workshops on the fundamental data skills needed to conduct research. Its target audience is researchers who have little to no prior computational experience, and its lessons are domain specific, building on learners’ existing knowledge to enable them to quickly apply skills learned to their own research. Participants will be encouraged to help one another and to apply what they have learned to their own research problems.

The workshop will cover:

- Data Organization in Spreadsheets. OpenRefine for Data Cleaning.
- Introduction to R. Data analysis and Visualization.
- Data Management with SQL.
	
Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


## Software Carpentry course

21 - 24 June 2021 09:30 - 13:00 BST

Software Carpentry aims to help researchers get their work done in less time and with less pain by teaching them basic research computing skills. This hands-on workshop will cover basic concepts and tools, including program design (Python), version control (Git), data management (SQL), and task automation (Make). Participants will be encouraged to help one another and to apply what they have learned to their own research problems.

Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


## Changes to OpenMPI modules on ARCHER2

There were previously three OpenMPI modules available on ARCHER2:
`openmpi/4.0.1-ofi-gcc10`, `openmpi/4.1.0-ofi-gcc10(default)` and
`openmpi/4.1.0-ucx-gcc10`. 

As OpenMPI is not officially supported
as an option for MPI on ARCHER2 (the supported MPI option is 
HPE Cray MPICH) we have moved these modules into
the `other-software` module to help avoid confusion and to ensure
users are aware that OpenMPI is not a supported MPI option on 
the service. We made this change on 1 June 2021. 

This change
means that you will now need to use the sequence:

       module load other-software
       module load openmpi

to access this functionality from Wednesday 2 June 2021.


## Other upcoming ARCHER2 Training


- Data Carpentry, Online, 14 - 17 June 2021 09:30 - 13:00 	BST
- Software Carpentry, Online, 21 - 24 June 2021 09:30 - 13:00 BST
- Message-passing Programming with MPI, Online,  always-open self-service course  
- Shared Memory Programming with OpenMP, Online, always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)