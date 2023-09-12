---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-09-13 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Network Upgrade Maintenance]({{ page.url }}#network-upgrade-maintenance): Monday 18th September – Friday 22nd September
- [Forge license ]({{ page.url }}#forge-license)
- [RDFaaS File System]({{ page.url }}#rdfaas-file-system)
- [The 11th ARCHER2 and Exascale eCSE software development call and Early Career eCSE Panel Observers call]({{ page.url }}#the-11th-archer2-and-exascale-ecse-software-development-call-and-early-career-ecse-panel-observers-call)
- [Reproducible research using containers - introduction to Singularity/Apptainer]({{ page.url }}#reproducible-research-using-containers---introduction-to-singularityapptainer), University of Nottingham, 21 September 2023 09:30 - 16:00 BST 
- [Shared memory programming with OpenMP]({{ page.url }}#shared-memory-programming-with-openmp), Imperial College London, 28 - 29 September 2023 10:00 - 17:00 BST
- [ARCHER2 Image and Video Competition 2023]({{ page.url }}#archer2-image-and-video-competition-2023)  - closing this Friday
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->



## Network Upgrade Maintenance

Monday 18th September  09:00 – Friday 22nd September 

There will be a major Data Centre Network (DCN) upgrade which will impact the external network connectivity at the Advanced Computing Facility (ACF). This essential upgrade work will significantly increase the reliability of our DCN and greatly simplify the deployment of new services and network changes to existing services.

During the upgrade, users will be unable to connect to ARCHER2 via the login nodes and will not be able to access any  data on the system which includes the /home, /work, NVMe and RDFaaS (/epsrc and /general) file systems. The serial QoS will also be unavailable. 

The compute nodes will still be available and jobs will run to ensure a good utilisation of the service during this outage.  We will be relaxing the queue limits so that users will be able to submit a greater number of jobs and will notify you once the changes have been implemented. Users will be able to select to use their own allocations or select to use the low priority QoS. Jobs must be submitted before the start of the outage at 0900 on Monday 18th September.

If you would like any assistance, with the submission of jobs to run during the outage, either submitting a large number of jobs or submitting large scale jobs, please [contact the Service Desk](mailto:support@archer2.ac.uk) who can provide assistance.

The SAFE will be available during the outage but there will be reduced functionality due to the unavailability of the connection to ARCHER2 such as resetting of passwords or new account creation.

[We have created a webpage with further details of the upgrade which will be updated throughout the upgrade process]( https://docs.archer2.ac.uk/faq/network-upgrade-2023/).

The Service Desk will be available as usual throughout the outage and we will notify users as soon as ARCHER2 is returned to full service. We apologise for any inconvenience caused by this essential maintenance.



## Forge license

The Forge license is increased from 16 nodes to 64 nodes for this one week beginning 11th September.

[Details of DDT and MAP]( https://docs.archer2.ac.uk/data-tools/arm-forge/)




## RDFaaS file system

The RDFaaS (Research Data Facility as a Service) file systems provide additional capacity for projects to store data that is not currently required on the compute nodes but which is too large for the home file systems. 

If you do not currently have access to the RDFaaS and would like access for your active ARCHER2 project then please [contact the Service Desk](mailto:support@archer2.ac.uk). 

Further information for the RDFaaS can be [found in our documentation](https://docs.archer2.ac.uk/user-guide/data/#rdfaas-file-systems )

Please note the RDFaaS is not currently available for NERC funded projects.




## The 11th ARCHER2 and Exascale eCSE software development call and Early Career eCSE Panel Observers call


We are very pleased to announce that the 11th ARCHER2 eCSE call (ARCHER2 eCSE11) opened on the 12 Sep 2023. For this call, in addition to proposals for codes to run on ARCHER2, we are also accepting proposals looking to prepare codes for a future Exascale successor, including for example GPU development. The deadline for submitting documents for technical evaluations is 16:00 on 10 Oct 2023, with the final deadline for proposal submission being 16:00 on 31 Oct 2023. The early career eCSE Panel Observers opened alongside the eCSE call and the deadline for applications for this call is 16:00 on 10 Oct 2023.

### The 11th ARCHER2 eCSE call


Through a series of regular calls, Embedded CSE (eCSE) support provides funding to the ARCHER2 user community to develop software in a sustainable manner, to run on the ARCHER2 system, or to prepare for a future Exascale successor. Projects targeting a future GPU platform are welcome, as are projects looking at any aspect of preparing the ARCHER2 software stack for Exascale. Note projects that only target improvements for existing platforms (other than ARCHER2), rather than preparing for future Exascale systems, are not in scope.

Funding will enable the employment of an RSE (a Research Software Engineer, PDRA or equivalent) to work specifically on the relevant software to enable new features or improve the performance of the code. Funding can be requested for up to 18 person months of effort per project. There is flexibility in the way the effort is requested. For example, a project may have more than one person working on it or the effort could be spread over a greater number of calendar months, i.e. a staff member could work on the project at less than 100% alongside other commitments or it could be worked on by a staff member who doesn’t work full time. Please just get in contact with the ARCHER2 Service Desk if you wish to discuss possible scenarios.

For this call, software which results in research which is within the remit of EPSRC is eligible. Funding can be requested for staff located at the institution of the PI, third parties, or can include staff from the ARCHER2 centralised CSE support team at EPCC or a mixture of the above.

More details of how to apply are available by following the link to the [eCSE calls page](https://www.archer2.ac.uk/ecse/) together with details of the application and review process, assessment criteria eligibility, etc. 

A [recent webinar can be found on our website](https://www.archer2.ac.uk/training/courses/220428-ecse-webinar/) 
which includes a walk through of the submission of a proposal.

### ARCHER2 Early Career eCSE Panel Observers call


The eCSE Panel Meeting is the meeting where eCSE proposals are reviewed and decisions are made on which proposals to fund. As part of our commitment to encouraging and developing Early Career Researchers, we are offering a small number of places to such researchers to attend the eCSE panel meeting as Early Career Observers. The aim is to give Early Career Researchers a better insight into this competitive selection process, to assist them in the preparation of future funding proposals.

The [deadline for applying to attend the panel meeting as an observer is 16:00 on 10 October 2023 and details of the call ](https://www.archer2.ac.uk/ecse/observers/)

An [insight into the experience from one of our recent Early Career Panel Observers ](https://www.archer2.ac.uk/news/2023/01/18/ecse-ec-obs.html)

### eCSE and observers call dates


Deadline for submitting ARCHER2-eCSE11 documents for technical evaluation: 16:00 on 10 Oct 2023

Deadline for final ARCHER2-eCSE11 submission: 16:00 on 31 Oct 2023

Deadline for Early Career eCSE Panel Observers call: 16:00 on 10 Oct 2023




## Reproducible research using containers - introduction to Singularity/Apptainer

[University of Nottingham](https://www.archer2.ac.uk/training/locations/nottingham), 21 September 2023 09:30 - 16:00 BST 


This course aims to introduce the use of containers with the goal of using them to effect reproducible computational environments. Such environments are useful for ensuring reproducible research outputs and for simplifying the setup of complex software dependencies across different systems. The course will introduce the use of Singularity/Apptainer containers but the material will be of use for whatever container technology you plan to, or end up, using. On completion of this course attendees should:

- Have an understanding of what Singularity/Apptainer containers are, why they are useful and the common terminology used
- Have a working Singularity/Apptainer installation on your local system to allow you to use containers
- Understand how to use existing Docker/Singularity/Apptainer containers for common tasks
- Be able to build your own Singularity/Apptainer containers by understanding both the role of a recipe in building containers, and the syntax used in Singularity/Apptainer recipes
- Understand how to manage Singularity/Apptainer containers on your local system
- Appreciate decisions that need to be made around containerising research workflows
- Appreciate issues around reproducibility in software, understand how containers can address some of these issues and what the limits to reproducibility using containers are

[Full details and registration](https://www.archer2.ac.uk/training/courses/230921-singularity/)


## Shared memory programming with OpenMP

Imperial College London, 28 - 29 September 2023 10:00 - 17:00 BST

Almost all modern computers now have a shared-memory architecture with multiple CPUs connected to the same physical memory, for example multicore laptops or large multi-processor compute servers. This course covers OpenMP, the industry standard for shared-memory programming, which enables serial programs to be parallelised easily using compiler directives. Users of desktop machines can use OpenMP on its own to improve program performance by running on multiple cores; users of parallel supercomputers can use OpenMP in conjunction with MPI to better exploit the shared-memory capabilities of the compute nodes.

This course will cover an introduction to the fundamental concepts of the shared variables model, followed by the syntax and semantics of OpenMP and how it can be used to parallelise real programs. Hands-on practical programming exercises will be included, with access to HPC provided for the duration of the course.

[Full details and registration](https://www.archer2.ac.uk/training/courses/230928-openmp/)



## ARCHER2 Image and Video Competition 2023

Closes this Friday!

Your chance to win prizes, support excellence and promote the contribution of ARCHER2 to outstanding research.

The winning image or video, along with a selection of other entries, will also be featured on the ARCHER2 website and in EPCC and ARCHER2 publications.

### Key Details
- Competition Opens: 24 July 2023
- Submission Deadline: <b>Extended to 15 September 2023</b>
- Judging: September/October 2023
- Prizes:
   + Best image : £150
   + Best video : £150
   + Best early career researcher submission : £150
   + Overall winner, selected from the above three winners : additional £100

### What are we looking for?

The ARCHER2 Image Competition is an event for all users of ARCHER2 to share their images or videos of “ARCHER2 Enabling Research”

[Full details and entry form](https://www.archer2.ac.uk/community/image-comp/)
   


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [Reproducible research using containers - introduction to Singularity/Apptainer](https://www.archer2.ac.uk/training/courses/230921-singularity/), University of Nottingham, 21 September 2023 09:30 - 16:00 BST 
- [Shared memory programming with OpenMP](https://www.archer2.ac.uk/training/courses/230928-openmp/), Imperial College London, 28 - 29 September 2023 10:00 - 17:00 BST

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
