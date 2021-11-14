---
layout: section
title: ARCHER2 Hardware &amp; Software
summary: Information on ARCHER2 hardware and software
banner: web_banners_02.jpg
---

The full ARCHER2 system will be an HPE Cray EX supercomputing system with an estimated peak performance of 28 PFLOP/s. The machine will have 5,860 compute nodes, each with dual AMD EPYC Zen2 (Rome) 64 core processors at 2.2GHz, giving 750,080 cores in total. 

ARCHER2 should be capable, on average, of over eleven times the science throughput of its predecessor, [ARCHER](http://www.archer.ac.uk). This estimate is based on benchmarks of five of the most heavily used research software packages on ARCHER. As with all new systems, the relative speedups over ARCHER vary by software and problem size. The research software applications used for the benchmarking evaluation are estimated to improve science throughput by the following factors: 8.7x for CP2K, 9.5x for OpenSBLI, 11.3x for CASTEP, 12.9x for GROMACS, and 18.0x for the HadGEM3 climate model.

## Hardware details: full ARCHER2 system

Note that the full ARCHER2 system is not yet available to users. The current ARCHER2 service is provided by a preview system consisting of 4 cabinets of HPE Cray EX. Details of the preview, 4 cabinet system are provided below.

### Compute nodes

| Nodes | 5,860 nodes: 5,276 standard memory, 584 high memory |
| Processor | 2&times; AMD Zen2 7742, 2.25 GHz, 64-core |
| Cores per node | 128 (2&times; 64-core processors) |
| NUMA structure | 8 NUMA regions per node (16 cores per NUMA region) |
| Memory per node | 256 GiB (standard memory), 512 GiB (high memory) |
| Memory per core | 2 GiB (standard memory), 4 GiB (high memory) |
| Interconnect | HPE Cray Slingshot, 2&times; 100 Gbps bi-directional per node |

### Login and data analysis nodes

| Processor | 2&times; AMD Zen2 7742, 2.25 GHz, 64-core |
| Cores per node | 128 (2&times; 64-core processors) |
| NUMA structure | 8 NUMA regions per node (16 cores per NUMA region) |
| Memory per node | 512 GiB |
| Memory per core | 4 GiB |

### GPU nodes

16&times; AMD MI100 GPU. More details to be provided in due course.

### Storage

| home File Systems | 1 PB NetApp NFS | Available on login and data analysis nodes |
| work File Systems | 14.5 PB HPE Cray ClusterStor | Available on login, data analysis and compute nodes |
| Solid state | 1.1 PB HPE Cray ClusterStor E1000 | Available on login, data analysis and compute nodes |

## Hardware details: preview 4-cabinet ARCHER2 system

The preview 4-cabinet ARCHER2 system is currently providing the ARCHER2 service.

### Compute nodes

| Nodes | 1,024 nodes |
| Processor | 2&times; AMD Zen2 7742, 2.25 GHz, 64-core |
| Cores per node | 128 (2&times; 64-core processors) |
| NUMA structure | 8 NUMA regions per node (16 cores per NUMA region) |
| Memory per node | 256 GiB |
| Memory per core | 2 GiB |
| Interconnect | HPE Cray Slingshot, 2&times; 100 Gbps bi-directional per node |

### Login nodes

| Processor | 2&times; AMD Zen2 7742, 2.25 GHz, 64-core |
| Cores per node | 128 (2&times; 64-core processors) |
| NUMA structure | 8 NUMA regions per node (16 cores per NUMA region) |
| Memory per node | 512 GiB |
| Memory per core | 4 GiB |

### Storage

| home File Systems | 1 PB NetApp NFS | Available on login and data analysis nodes |
| work File System | 3.6 PB HPE Cray ClusterStor | Available on login and compute nodes |

## Software details

The software available is the similar on both the ARCHER2 preview 4 cabinet system and the full ARCHER2 system.

* Operating system: HPE Cray Linux Environment (based on SLES 15)
* Scheduler: Slurm configured to be node exclusive (smallest unit of resource is a full node)
* Compilers:
  * HPE Cray Compiling Environment (CCE)
  * GNU Compiler Collection (GCC)
  * AMD Optimizing Compiler Collection (AOCC)
* Parallel libraries:
  * MPI: HPE Cray MPICH2
  * HPE Cray OpenSHMEM
  * Global Arrays Toolkit
* HPE Cray scientific and numerical libraries:
  * HPE Cray LibSci: BLAS, LAPACK, ScaLAPACK
  * FFTW 3
  * NetCDF
  * HDF5
* Programming tools:
  * gdb4hpc parallel debugger
  * valgrind4hpc parallel memory debugging
  * STAT stack trace analysis tool
  * ATP abnormal program termination analysis tool
  * HPE Cray Performance Analysis Toolkit (CrayPAT)

Information on software packages and libraries installed by the ARCHER2 CSE team at EPCC can be
found in the [ARCHER2 Documentation](https://docs.archer2.ac.uk).



