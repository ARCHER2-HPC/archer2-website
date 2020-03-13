---
layout: post
title: UKRI ARCHER2 Hardware Announcement
date: 2019-10-14 12:00:00
author: UKRI
categories: [news]
---

Details of the ARCHER2 hardware which will be provided by Cray (an HPE company).

Following a procurement exercise, UK Research and Innovation (UKRI) are pleased to announce that Cray have been awarded the contract to supply the hardware for the next national supercomputer, ARCHER2.

ARCHER2 should be capable on average of over eleven times the science throughput of ARCHER, based on benchmarks which use five of the most heavily used codes on the current service. As with all new systems, the relative speedups over ARCHER vary by benchmark. The ARCHER2 science throughput codes used for the benchmarking evaluation are estimated to reach 8.7x for CP2K, 9.5x for OpenSBLI, 11.3x for CASTEP, 12.9x for GROMACS, and 18.0x for HadGEM3. Needless to say, ARCHER2 represents a significant step forwards in capability for the UK science community, with the system expected to sit among the fastest fully general purpose (CPU only) systems when it comes into service in May 2020.

As has been previously announced, because ARCHER2 is being installed in the same room as the current ARCHER system, there will be a period of downtime where no service will be available. Therefore, users should plan their work appropriately. ARCHER is due to end operation on 18th February 2020, and ARCHER2 will be operational from 6th May 2020. However, please note that from the 6th May, there will be a period of 30 days continuous running to stress-test the new machine and sort out any issues before full service, where access will be possible but may be limited. We will be providing information about allocations and access routes for ARCHER2 shortly.

## ARCHER2 technical specifications:

* A peak performance estimated at ~ 28 PFLOP/s
* System Design:
  *  5,848 compute nodes, each with dual AMD Rome 64 core CPUs at 2.2GHz, for 748,544 cores in total and 1.57 PBytes of total system memory
  *  23x Shasta Mountain direct liquid cooled cabinets
*    14.5 PBytes of Lustre work storage in 4 file systems
*    1.1 PByte all-flash Lustre BurstBuffer file system
*    1+1 PByte home file system in Disaster Recovery configuration using NetApp FAS8200
*    Cray next-generation Slingshot 100Gbps network in a diameter-three dragonfly topology, consisting of 46 compute groups, 1 I/O group and 1 Service group
*    Shasta River racks for management and post processing
*    Test and Development System (TDS) platform, to be installed in advance
*    Collaboration platform with 4 x compute nodes attached to 16 x Next Generation AMD GPUs
* Software stack:
  *      Cray Programming Environment including optimizing compilers and libraries for the AMD Rome CPU
  *      Cray Linux Environment optimized for the AMD CPU blade based on SLES 15
  *      Shasta Software Stack
  *      SLURM work load manager
  *      CrayPat as profiler
  *      GDB4HPC as debugger

EPSRC and NERC would like to thank the members of the community, Science Board, Project Working Group, Procurement Evaluation Team, Benchmarking Team and Project Assurance Team who have worked hard to identify the science case, build the technical specification and provide advice throughout the procurement stages which has enabled us to get to this point.

