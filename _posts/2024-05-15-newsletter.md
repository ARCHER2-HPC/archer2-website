---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-05-15 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Webinar : ARCHER2 eCSE03-02: Developing in-situ analysis capabilities for pre-exascale simulations with Xcompact3D]({{ page.url }}#webinar--archer2-ecse03-02-developing-in-situ-analysis-capabilities-for-pre-exascale-simulations-with-xcompact3d) - Today - Wednesday 15th May  15:00 - 16:00
- [ARCHER2 Capability Days 2]({{ page.url }}#archer2-capability-days-2-4-6-june-2024): 4-6 June 2024
- [Cray Programming Environment Version 23.09]({{ page.url }}#cray-programming-environment-version-2309-available-from-21st-may) available from 21st May
- [MSSC2024 - Ab initio Modelling in Solid State Chemistry - Discovering quantum-mechanical simulations with CRYSTAL ]({{ page.url }}#mssc2024---ab-initio-modelling-in-solid-state-chemistry---discovering-quantum-mechanical-simulations-with-crystal)
- [2024 Educational Award For Outstanding Contribution to Computational Science Education]({{ page.url }}#2024-educational-award-for-outstanding-contribution-to-computational-science-education)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)


<!--more-->

## Webinar : ARCHER2 eCSE03-02: Developing in-situ analysis capabilities for pre-exascale simulations with Xcompact3D

Today - Wednesday 15th May  15:00 - 16:00

This talk will present the work conducted during the ARCHER2 eCSE03-2 project to integrate ADIOS2 into the Xcompact3D framework to facilitate in-situ analysis. Historically there has been an emphasis on solver development, with solver scaling being an oft-quoted metric to demonstrate a code’s capability to run efficiently on HPC systems. Equally important, especially when considering the purpose of scientific software to answer questions, is the performance of the code’s I/O system. However, this is often overlooked, and can become a bottleneck, particularly when running at scale. In addition to performance concerns, as computational capabilities and correspondingly simulation sizes grow, managing the data volumes generated may be impractical. To address these issues, in-situ analysis methods reduce the data to only that required by the numerical experiment being conducted, however these are frequently strongly tied to the code implementation, requiring significant familiarity to modify to a user’s needs.

In this ARCHER2 eCSE project the ADIOS2 I/O framework was added to the high-order open-source CFD code Xcompact3D. The ADIOS2 abstractions over I/O operations enables redirecting output as desired, whether writing to disk or a concurrently running program, and similarly read input from disk or another program. By integrating this into Xcompact3D and Py4Incompact3D, a Python framework for postprocessing Xcompact3D simulation data, in-situ analyses will no longer need to be implemented within the Xcompact3D codebase, instead being run in Py4Incompact3D. The aim of this work is to make implementing custom analyses easier for end users, and improve code portability as local changes will be kept separate from the main source code. In addition to demonstrating in-situ capabilities up to O(16k) cores on ARCHER2, we also found performance benefits over the original MPI-IO backend when using ADIOS2.

[Further details and join link](https://www.archer2.ac.uk/training/courses/240515-eCSE03-02-vt/)


## ARCHER2 Capability Days 2: 4-6 June 2024

The second ARCHER2 Capability Days session will run from 4-6 June 2024. ARCHER2 Capability Days are a mechanism to allow users to run large scale tests on the system free of charge. The motivations behind Capability Days are:

- Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
- Enabling capability use cases that are not possible on other UK HPC services.
- Providing a facility that can be used to test scaling to help prepare software and communities for future exascale resources.

Capability Days are made up of two parts:

- 0800-2000 BST, 4 June 2024 - pre-Capability Days session (pre-capabilityday QoS) to allow users to test scaling and job setup ahead of full Capability Day
  - Supports jobs 256-1024 nodes, 20 min maximum run time
  - Jobs are uncharged
- 2000 BST 4 Jun - 1400 6 Jun 2024 - Capability Days session (capabilityday QoS)
  - Supports jobs 512-4096 nodes, 1 hour maximum run time
  - Jobs are uncharged
For both Capability Days QoS jobs can be submitted ahead of time and will start when the session starts.

A full description of the Capability Days, including example job submission scripts can be found in the ARCHER2 Documentation at:
[ARCHER2 Capability Days](https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days)


## Cray Programming Environment Version 23.09 available from 21st May

We will be installing a new version of the Cray Programming Environment (CPE) onto ARCHER2 on 20th May. CPE Version 23.09 will be available as a non-default programming environment from 21st May on both the main (CPU) system and the GPU development cluster.

Your login session will continue to default to the current default version (that is, CPE Version 22.12), though you can opt to switch to the newer CPE using the Module system. Full details will be provided in the [ARCHER2 documentation](https://docs.archer2.ac.uk/).

The new CPE version includes new versions of the Cray and AMD compiler suites (Version 16.0.1 and Version 4.0.0, respectively), as well as various other minor improvements. Full details are available in the [HPE release notes](https://github.com/PE-Cray/cpe-changelog).

While this is a non-default installation, the default versions of the module system (Lmod) and the CrayPAT profiling suite do change. CSE has tested the new versions of Lmod and CrayPAT and has not identified any significant, user-visible changes.

If you have any questions or comments about the Cray Programming Environment, please contact the [ARCHER2 Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html).

## MSSC2024 - Ab initio Modelling in Solid State Chemistry - Discovering quantum-mechanical simulations with CRYSTAL 

This course may be of interest to some ARCHER2 users

London (UK), September 16-20,2024
Directors: S. Casassa - A. Erba - N.M. Harrison - G. Mallia
[MSSC2024](https://www.imperial.ac.uk/mssc/mssc2024/)

The Department of Chemistry and the Thomas Young Centre at Imperial College London
and the Theoretical Chemistry Group of the University of Torino, in collaboration
with the Computational Materials Science Group of the Science and Technology
Facilities Council (STFC), are organising the 2024 MSSC Summer School
on the "ab initio modelling of crystalline and defective solids with the CRYSTAL code".

The workshop is hybrid: both on-line and in-person.

The week long school is designed for new users of CRYSTAL, PhD students,
Post-Docs and researchers with interests in solid state chemistry,
physics, materials science, surface science, catalysis, magnetism
and nano-science. It will provide an introduction to the capabilities
of quantum mechanical simulations and to the practical use of CRYSTAL.

CRYSTAL is a general-purpose program for the study of periodic systems.
It uses a local basis set comprised of Gaussian type functions and can be used
to perform calculations at the Hartree-Fock, density functional or global and
range-separated hybrid functionals (e.g. B3LYP, HSE06), double hybrid levels of theory.
Analytical first derivatives with respect to the nuclear coordinates and cell parameters
and analytical derivatives, up to fourth order, with respect to an applied electric field
(CPHF/CPKS) are available.

The [programme](https://www.imperial.ac.uk/mssc/mssc2024/programme/) consists of lectures in the morning sessions and hand-on tutorials in the afternoon.

[Registration:](https://www.imperial.ac.uk/mssc/mssc2024/registration/ )


## 2024 Educational Award For Outstanding Contribution to Computational Science Education

The ACM SIGHPC Education Chapter is seeking nominations for candidates for the 2024 Educational Award For Outstanding Contribution to Computational Science Education. We are seeking candidates who have led projects or programs that have made significant contributions to computational science education defined broadly to include all disciplines and all education levels.

The award will be presented at SC24. The recipient will receive a $2,000 cash award and travel support to attend the SC24 conference. Nominations will include a statement endorsing the nominee, and up to three letters of endorsement. Applications are due by Friday June 28, 2024, by end of day anywhere on earth. The chapter will choose up to one award winner and up to two honorable mentions.

[More details, including the application forms and instructions](https://sighpceducation.acm.org/events/award24_nominations/ ) 

[Questions concerning award eligibility and nominations](mailto:award@sighpceducation.acm.org).



## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- When close to storage quota, jobs may slow down or produce corrupted files (Added: 2024-02-27)
For situations where users are close to user or project quotas on work (Lustre) file systems we have seen cases of the following behaviour:
    - Jobs run very slowly as IO slows down
    - IO calls seem to complete successfully but not all data is written (so output is corrupted)
    - No "disk quota exceeded" error is seen

If you see these symptoms: slower than expected performance, data corruption; then you should check if you are close to your storage quota (either user or project quota). If you are, you may be experiencing this issue. Either remove data to free up space or request more storage quota.


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
