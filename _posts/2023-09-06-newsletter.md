---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-09-06 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Network Upgrade Maintenance]({{ page.url }}#network-upgrade-maintenance): Monday 18th September – Friday 22nd September
- [Forge license ]({{ page.url }}#forge-license)
- [Reproducible research using containers - introduction to Singularity/Apptainer]({{ page.url }}#reproducible-research-using-containers---introduction-to-singularityapptainer), University of Nottingham, 21 September 2023 09:30 - 16:00 BST 
- [ARCHER2 Image and Video Competition 2023]({{ page.url }}#archer2-image-and-video-competition-2023)  - closing date extended
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

The Forge license will be increased from 16 nodes to 64 nodes for one week beginning 11th September.

[Details of DDT and MAP]( https://docs.archer2.ac.uk/data-tools/arm-forge/)



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




## ARCHER2 Image and Video Competition 2023

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
