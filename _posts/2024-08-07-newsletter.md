---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2024-08-07 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Shared memory programming with OpenMP]({{ page.url }}#shared-memory-programming-with-openmp), Online,  19th - 29th August 2024 9.30 - 12:30
- [ARCHER2 Image and Video competition 2024]({{ page.url }}#archer2-image-and-video-competition-2024)
- [Centrally supported software refresh]({{ page.url }}#centrally-supported-software-refresh)
- [The 20th International Women in HPC Workshop: Diversity and Inclusion for All]({{ page.url }}#the-20th-international-women-in-hpc-workshop-diversity-and-inclusion-for-all) 
- [UKRI are advertising for new members of the ARCHER2 User Advisory Group]({{ page.url }}#ukri-are-advertising-for-new-members-of-the-archer2-user-advisory-group)
- [The 2nd GPU eCSE software development call ]({{ page.url }}#the-2nd-gpu-ecse-software-development-call)
- [RDFaaS tape backup unavailable : Friday 2nd - Friday 9th August]({{ page.url }}#rdfaas-tape-backup-unavailable--monday-2nd---friday-9th-august)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  

<!--more-->



## Shared memory programming with OpenMP

Mornings, Mon 19th, Tue 20th, Thu 22nd, Tue 27th  and Thu 29th August 2024 9.30 - 12:30
Online

Almost all modern computers now have a shared-memory architecture with multiple CPUs connected to the same physical memory, for example multicore laptops or large multi-processor compute servers. This course covers OpenMP, the industry standard for shared-memory programming, which enables serial programs to be parallelised easily using compiler directives. Users of desktop machines can use OpenMP on its own to improve program performance by running on multiple cores; users of parallel supercomputers can use OpenMP in conjunction with MPI to better exploit the shared-memory capabilities of the compute nodes.

This course will cover an introduction to the fundamental concepts of the shared variables model, followed by the syntax and semantics of OpenMP and how it can be used to parallelise real programs. Hands-on practical programming exercises will be included, with access to HPC provided for the duration of the course.

- Session 1 (Mon 19) - Shared memory concepts and Introduction to OpenMP
- Session 2 (Tue 20) – Parallel regions and Worksharing
- Session 3 (Thu 22) – Synchronisation and Further Topics 
- Session 4 (Tue 27) – Tips, Tricks and Gotchas, and Performance Issues
- Session 5 (Thu 29) – Practical exercise tutorial 

This course is aimed at attendees with prior experience of programming in C, C++ or Fortran. Some familiarity with HPC systems is helpful but not essential.

At the end of the course, attendees should be equipped with the skills to write correct parallel programs using the core functionality of OpenMP, and understand the main issues affecting performance of shared memory parallel programs

[Futher details and registration](https://www.archer2.ac.uk/training/#upcoming-training)


## ARCHER2 Image and Video competition 2024


Share your images and videos to support excellence and promote the contribution of ARCHER2 to outstanding research. The winner of the competition will be awarded £250.

The winning image or video, along with a selection of other entries, will also be featured on the ARCHER2 website and in EPCC and ARCHER2 publications. Credit will be given to the entrant in all cases.
Key Details

- Competition Opens: 22nd July 2024
- Submission Deadline: 2 September 2024
- Judging: September/October 2024
- Prizes:
    - Best image : £150
    - Best video : £150
    - Best early career researcher submission : £150
    - Overall winner, selected from the above three winners : additional £100

The ARCHER2 Image and Video Competition is an event for all users of ARCHER2 to share their images or videos of “ARCHER2 Enabling Research”

[Full details and entry forms](https://www.archer2.ac.uk/community/image-comp/)


## Centrally supported software refresh

The CSE team is refreshing the catalogue of centrally supported software, based on user feedback and usage. The following changes are being made during August:
- ADIOS Version 2 is being installed, replacing ADIOS Version 1
- Blender is being added
- Likwid is being added 
- PyTorch has recently been added (w/ support for the GPU Development System)
- ARPACK, GLM, Matio and Trilinos are being removed.

We are also updating some existing centrally support software with the following new versions:
- CP2K Version 2024.01
- GROMACS Version 2022.4 for the GPU Development System
- FHI-aims Version 231212_1
- LAMMPS Version 2Aug2024 for the GPU Development System
- VASP 6.4.3
- MKL Version 2023.0.0
- PETSc Version 3.21
- SuperLU Version 6.01

These changes are being made during August. For more information please see the [ARCHER2 documentation](https://docs.archer2.ac.uk/user-guide) or contact the [ARCHER2 Service Desk](mailto: support@archer2.ac.uk).


## The 20th International Women in HPC Workshop: Diversity and Inclusion for All  

The Women in HPC Workshop is the leading SC event focused on Diversity, Equity and Inclusion (DEI). This year we celebrate our 20th international workshop, aiming to raise awareness and address issues around diversity and inclusion within the HPC community and workforce.

### Early Career Opportunities:  

An important part of our workshop is offering a platform for early-career researchers to present at an international conference, build valuable networks, and experience their first SC. We invite anyone from an underrepresented group who considers themselves to be ‘early career’ to submit an extended abstract (up to 2 pages) in any area involving High-Performance Computing. Successful authors will be asked to provide a version of their work highlighting its goals, accomplishments, and impact to present in a short lightning talk (3 minutes) at the workshop.

### Benefits for successful authors:  

- Showcase your research at an international conference.
- Receive mentorship from experienced colleagues.
- Apply for a travel fellowship of up to $3,800 (approximately £3,000).
- Have your extended abstract published in our proceedings.
- **DEADLINE FOR SUBMISSIONS: AUGUST 16, 2024 – ANYWHERE ON EARTH**  

[More information and submit](https://womeninhpc.org/events/sc-2024-workshop)

### Call for Volunteers:
We are assembling a committee of volunteers to help review the submissions and mentor our early career participants. If you are interested in contributing, please contact [e.broadway@epcc.ed.ac.uk](mailto:e.broadway@epcc.ed.ac.uk).



## UKRI are advertising for new members of the ARCHER2 User Advisory Group

[Please follow this link for more details on how to apply](https://www.ukri.org/who-we-are/work-for-us/join-an-advisory-committee-panel-or-network/academic-research-computing-high-end-resource-archer2-user-advisory-group-vacancies/)


## The 2nd GPU eCSE software development call 

GPU eCSE support provides funding to the UKRI research community to develop software in a sustainable manner to run on GPU-based architectures. We invite proposals to develop software that facilitates research targeted at UKRI’s digital research infrastructure e.g. future Exascale supercomputing services, UK national AI services, national Tier-2 HPC services. The call is open to research across all of UKRI’s remit. 

The 2nd GPU eCSE call (GPU-eCSE02) opened on the 2 July 2024. The final deadline for proposal submission is 16:00 on 17 September 2024 via the ARCHER2 SAFE. Please note that for this call there is no separate technical evaluation stage or separate technical evaluation form. Funding will enable the employment of an RSE (a Research Software Engineer, PDRA or equivalent) to work specifically on the relevant software to enable new features or improve the performance of the software to be run on GPU-based architectures. Funding can be requested for up to 24 person months of effort per project for a duration of up to 2 calendar years. There is flexibility in the way the effort is requested. For example, a project may have more than one person working on it or the effort could be spread over a greater number of calendar months, i.e. a staff member could work on the project at less than 100% alongside other commitments or it could be worked on by a staff member who doesn’t work full time. Please just get in contact with the ARCHER2 Service Desk (support@archer2.ac.uk) if you wish to discuss possible scenarios. Projects are expected to start between 1 January and 1 July 2025, and be completed by 31 March 2027. Funding can be requested for staff located at the institution of the PI, third parties, or can include staff from the ARCHER2 centralised CSE support team at EPCC or a mixture of the above.

Projects may utilise the GPU component of ARCHER2 or other suitable GPU resources to complete the technical work. If the proposal plans to use the GPU component of ARCHER2, successful projects will be given access to these resources. If projects plan to utilise other systems, you should ensure you have suitable resources available to complete the project successfully. Please contact and arrange this access with the relevant service provider before submission.

More details of how to apply are available by following the link to the [eCSE calls page](https://www.archer2.ac.uk/ecse/calls/)

Deadline for final GPU-eCSE02 submission: 16:00 on 17 Sep 2024 (via the [ARCHER2 SAFE](https://safe.epcc.ed.ac.uk/))


## RDFaaS tape backup unavailable : Friday 2nd - Friday 9th August

Due to work taking place at the Advanced Computing Facility (ACF) , the tape backup system will be unavailable for the week of 2nd - 9th August 2024. 

This means that no new data added to the RDFaaS file systems /epsrc and /general will be backed up during this week. Normal backups will recommence once the work is completed.


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues.


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>
- [GPU programming with HIP](https://www.archer2.ac.uk/training/courses/240807-gpu-hip), Online, 7 - 9 August 2024 09:30 - 16:30 
- [Shared memory programming with OpenMP](https://www.archer2.ac.uk/training/courses/240819-openmp), Online, Mornings, Mon 19th, Tue 20th, Thu 22nd, Tue 27th  and Thu 29th August 2024 9.30 - 12:30 
- [Re-Introducing WHPC: How We're Driving Change and How You Can Help](https://www.archer2.ac.uk/training/courses/240821-whpc-vt/), online webinar, Tuesday 21st August 2024 15:00 - 16:00 


[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
