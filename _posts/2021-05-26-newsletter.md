---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-05-26 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [HPC Carpentry course](#hpc-carpentry-course), 2 - 3 June 2021 09:30 - 16:00 BST 
- [Data Carpentry course](#data-carpentry-course), 14 - 17 June 2021 09:30 - 13:00 BST
- [Software Carpentry course](#software-carpentry-course), 21 - 24 June 2021 09:30 - 13:00 BST
- [Changes to OpenMPI modules on ARCHER2](#changes-to-openmpi-modules-on-archer2)
- [Upcoming ARCHER2 training](#other-upcoming-archer2-training) 


## HPC Carpentry course

2 - 3 June 2021 09:30 - 16:00 BST 

This course introduces accessing remote advanced computing facilities via the command line and High Performance Computing (HPC). After completing this course, participants will:

- Understand motivations for using HPC in research.
- Understand how HPC systems are put together to achieve performance and how they differ from desktops/laptops.
- Know how to connect to remote HPC systems and transfer data.
- Be able to use the Bash command line on remote systems.
- Know how to use a scheduler to work on a shared system.
- Be able to use software modules to access different HPC software.
- Be able to work effectively on a remote shared resource.

There are no prerequisites for this workshop.

Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


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

There are currently three OpenMPI modules available on ARCHER2:
`openmpi/4.0.1-ofi-gcc10`, `openmpi/4.1.0-ofi-gcc10(default)` and
`openmpi/4.1.0-ucx-gcc10`. 

As OpenMPI is not officially supported
as an option for MPI on ARCHER2 (the supported MPI option is 
HPE Cray MPICH) we are planning to move these modules into
the `other-software` module to help avoid confusion and to ensure
users are aware that OpenMPI is not a supported MPI option on 
the service. We plan to make this change on 1 June 2021. 

This change
means that you will now need to use the sequence:

       module load other-software
       module load openmpi

to access this functionality from Wednesday 1 June 2021.


## Other upcoming ARCHER2 Training

- HPC Carpentry, Online, 2 - 3 June 2021 09:30 - 16:00 BST 
- Data Carpentry, Online, 14 - 17 June 2021 09:30 - 13:00 	BST
- Software Carpentry, Online, 21 - 24 June 2021 09:30 - 13:00 BST
- Message-passing Programming with MPI, Online,  always-open self-service course  
- Shared Memory Programming with OpenMP, Online, always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)