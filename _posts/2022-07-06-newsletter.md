---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2022-07-06 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Performance of Parallel IO on ARCHER2](#performance-of-parallel-io-on-archer2), Online webinar, Wednesday 13th July 2022 15:00 - 16:00 BST 
- [Data Carpentry](#data-carpentry), Online training,  18 - 21 July 2022 09:30 - 13:00 BST
- [Plotting and Programming with Python](#plotting-and-programming-with-python), Online training, 25 July 2022 10:00 - 17:00 BST
- [Performance of different routing protocols on ARCHER2: OpenFabrics and UCX](#performance-of-different-routing-protocols-on-archer2-openfabrics-and-ucx), Online webinar, Wednesday 20th July 2022 15:00 - 16:00 BST 
- [Recently added Known Issues](#recently-added-known-issues)
- [Upcoming ARCHER2 training](#upcoming-archer2-training)

<!--more-->
 
 
## Performance of Parallel IO on ARCHER2

Wednesday 13th July 2022 15:00 - 16:00 BST

File input and output often become a severe bottleneck when parallel applications run on large numbers of processors. Simple methods such as writing a separate file-per-process or performing all IO via a single controller process are no longer feasible at scale. In order to take advantage of the full potential of modern parallel file systems such as Lustre, IO also needs to be done in parallel.

This talk will cover investigations of the parallel IO performance that can be achieved on ARCHER2 and compare to results on its predecessor, ARCHER, which was a Cray XC30. Popular parallel IO libraries such as MPI-IO, HDF5 and NetCDF will be benchmarked.

Results are obtained using the simple benchio benchmark - <https://github.com/davidhenty/benchio>, which writes a large, regular, three-dimensional distributed dataset to file.

The aim is to be able to give users advice on the best parallel IO settings for their own applications. As the Lustre filesystem on ARCHER2 (an HPE Cray EX) has very different performance characteristics to that of ARCHER, previous experience may not be useful in achieving good IO rates.

Full details and join link: <https://www.archer2.ac.uk/training/courses/220713-parallel-io-vt/>


## Data Carpentry

Online training,  18 - 21 July 2022 09:30 - 13:00 BST

Data Carpentry develops and teaches workshops on the fundamental data skills needed to conduct research. Its target audience is researchers who have little to no prior computational experience, and its lessons are domain specific, building on learners’ existing knowledge to enable them to quickly apply skills learned to their own research. Participants will be encouraged to help one another and to apply what they have learned to their own research problems.

The workshop will cover:
- Data Organization in Spreadsheets. OpenRefine for Data Cleaning.
- Introduction to R.
- Continuation of R: Data analysis and Visualization.
- Data Management with SQL.

Full details and registration: <https://www.archer2.ac.uk/training/courses/220718-data-carpentry/>


## Plotting and Programming with Python

Online training,  25 July 2022 10:00 - 17:00 BST

This lesson is an introduction to programming in Python for people with little or no previous programming experience. It uses plotting as its motivating example. Please note that this lesson uses Python 3.

This one-day course aims to answer the following questions:

How do I…

-     …read tabular data?
-     …plot a single vector of values?
-     …create a time series plot?
-     …create one plot for each of several data sets?
-     …get extra data from a single data set for plotting?
-     …write programs I can read and re-use in future?

Full details and registration: <https://www.archer2.ac.uk/training/#upcoming-training>


## Performance of different routing protocols on ARCHER2: OpenFabrics and UCX, 

Online webinar, Wednesday 20th July 2022 15:00 - 16:00 BST

In this presentation, we report on a comparison on performance between different routing protocols underlying the Cray MPICH library on a HPE Cray EX system for a variety of application and synthetic benchmarks. The ARCHER2 system allows users to select, at runtime, between two different underlying routing protocols: OpenFabrics (OFI) and Mellanox UCX (UCX). The CSE team have compared the performance of OFI and UCX for different applications from a variety of research areas (CASTEP, CP2K, GROMACS, NEMO, OpenSBLI, VASP) and the performance of the OSU MPI benchmarks. We find that the choice of routing protocol can have a profound effect on application performance and that the best choice is dependent on the number of nodes, the application and the benchmark case used for the performance evaluation. This makes providing general advice to users challenging. We summarise the data we have gathered so far and the advice we provide to users; and provide an overview of what future investigations we have planned.

Full details and join link: <https://www.archer2.ac.uk/training/courses/220720-routing-protocols-vt/>


## Recently added Known Issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- Message-passing Programming with MPI, Online, always-open self-service course
- Shared Memory Programming with OpenMP, Online, always-open self-service course
- QM/MM with GROMACS + CP2K, Online, Always open - self-service course <br><br>
- Performance of Parallel IO on ARCHER2, Online  webinar, Wednesday 13th July 2022 15:00 - 16:00 BST 
- Data Carpentry, Online, 18 - 21 July 2022 09:30 - 13:00 BST
- Performance of different routing protocols on ARCHER2: OpenFabrics and UCX, Online, Wednesday 20th July 2022 15:00 - 16:00 BST (Note change of date)
- Plotting and Programming with Python, Online, 25 July 2022 10:00 - 17:00 BST
- Reproducible computational environments using containers, Imperial College London, 26 - 27 July 2022 10:00 - 16:00 BST
- HPC Carpentry, Online, 26 - 27 July 2022 09:30 - 16:00 BST
- Goal-oriented mesh adaptation for Firedrake, Online webinar, Thursday 28th July 2022 15:00 - 16:00 BST 



Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)


Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)

