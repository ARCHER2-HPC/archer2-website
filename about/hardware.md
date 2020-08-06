---
layout: section
title: ARCHER2 Hardware &amp; Software
summary: Information on ARCHER2 hardware and software
banner: web_banners_02.jpg
---
**Note:** This is initial information on the hardware and software. Further details will 
be added as they become available.

ARCHER2 will be a Cray Shasta system with an estimated peak performance of 28 PFLOP/s. The machine will have 5,848 compute nodes, each with dual AMD EPYC Zen2 (Rome) 64 core CPUs at 2.2GHz, giving 748,544 cores in total and 1.57 PBytes of total system memory.

ARCHER2 should be capable on average of over eleven times the science throughput of ARCHER, based on benchmarks which use five of the most heavily used codes on the current service. As with all new systems, the relative speedups over ARCHER vary by benchmark. The ARCHER2 science throughput codes used for the benchmarking evaluation are estimated to reach 8.7x for CP2K, 9.5x for OpenSBLI, 11.3x for CASTEP, 12.9x for GROMACS, and 18.0x for HadGEM3.

## Key hardware specs
*	5,848 compute nodes, each with dual AMD Rome 64 core CPUs at 2.2GHz and 256 or 512 GB DDR 3200, giving 748,544 cores in total and 1.57 PBytes of total system memory
*	23x Shasta Mountain direct liquid cooled cabinets
*	14.5 PBytes of Lustre work storage in 4 file systems
*	1.1 PByte all-flash Lustre BurstBuffer file system
*	1+1 PByte home file system in Disaster Recovery configuration using NetApp FAS8200
*	Cray next-generation Slingshot 100Gbps network in a diameter-three dragonfly topology, consisting of 46 compute groups, 1 I/O group and 1 Service group
*	Shasta River racks for management and post processing
*	Test and Development System (TDS) platform, to be installed in advance
*	Collaboration platform with 4 x compute nodes attached to 16 x Next Generation AMD GPUs

## Software stack
*	Cray Programming Environment including optimizing compilers and libraries for the AMD Rome CPU
*	Cray Linux Environment optimized for the AMD CPU blade based on SLES 15
*	Shasta Software Stack
*	SLURM work load manager
*	CrayPat as profiler
*	GDB4HPC as debugger



