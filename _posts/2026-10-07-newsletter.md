---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2026-10-07 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---



- [Transferring data from ARCHER2]({{ page.url }}#transferring-data-from-archer2), free webinar, Wednesday 7th October 2026 15:00 - 16:00
- [ARCHER2 Enabled...]({{ page.url }}#archer2-enabled) survey
- [ARCHER2 Capability Days]({{ page.url }}#archer2-capability-days-20---22-october-2026): 20-22 October 2026
- [Modern C++ for Computational Scientists]({{ page.url }}#modern-c-for-computational-scientists), Online, 14 - 16 October 2026 09:30 - 16:30
- [Containers for Reproducible Research: Introduction to Podman and Apptainer]({{ page.url }}#containers-for-reproducible-research-introduction-to-podman-and-apptainer), Newcastle University, 12 November 2026 09:30 - 16:00
- [ARCHER2 end of service: 17:00 GMT Friday 20th November 2026]({{ page.url }}#archer2-end-of-service-1700-gmt-friday-20th-november-2026)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->


## Transferring data from ARCHER2

Free webinar, Wednesday 7th October 2026 15:00 - 16:00 

The ARCHER2 service will end on Friday 20 November. 

Prior to this date, all users must ensure that any data they wish to keep have been moved off the /home, /work and solid state scratch file systems. 

There are several approaches to data transfer, depending on how much data you have and how it is organised. This webinar will provide advice and examples to users on how they might do so, using scp and rsync for direct site-to-site copying, rclone to copy data to the cloud or other HPC sites, as well as Globus for especially large transfers. 

[Full details and join link]( https://www.archer2.ac.uk/training/courses/261007-archer2-data-transfer-vt/ )



## ARCHER2 Enabled...

As the ARCHER2 service draws to a close, we would like to capture all the wonderful things that ARCHER2 enabled our community to achieve.

We invite you to share with us one (or more!) things that having access to ARCHER2 enabled in your work.

<section id="service">

  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href=" https://forms.cloud.microsoft/e/kqmWZWEZkW ">
          <strong>Complete the survey</strong><br><br>
        </a>
      </div>
											
    </div>

</section>



## ARCHER2 Capability Days: 20 - 22 October 2026

The next ARCHER2 Capability Days session will run from 20 - 22 October 2026. ARCHER2 Capability Days are a mechanism to allow users to run large scale tests on the system free of charge. The motivations behind Capability Days are:

- Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
- Enabling capability use cases that are not possible on other UK HPC services.
- Providing a facility that can be used to test scaling to help prepare software and communities for future large-scale resources.

Capability Days are made up of two parts:

- 0900-1900 BST, 20 Oct 2026 - pre-Capability Days session (“pre-capabilityday” QoS) to allow users to test scaling and job setup ahead of full Capability Day
    - Supports jobs 256-1024 nodes, 1 hour maximum run time
    - Jobs are uncharged
- 0800 BST, 21 Oct - 1400 BST, 22 Oct 2026 - Capability Days session (“capabilityday” QoS)
    - Supports jobs 512-4096 nodes, 2 hours maximum run time
    - Jobs are uncharged

[More information on Capability Days and how to submit jobs can be found on the ARCHER2 documentation](https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days)


## Modern C++ for Computational Scientists

Online, 14 - 16 October 2026 09:30 - 16:30

With the recent revisions to the C++ language and standard library, the ways it is now being used are quite different. Used well, these features enable the programmer to write elegant, reusable and portable code that runs efficiently on a variety of architectures.

However it is still a very large and complex tool. This course will cover a minimal set of features to allow an experienced non-C++ programmer to get to grips with language.

These include:

-    overloading
-    templates
-    containers
-    iterators
-    lambdas
-    standard algorithms

We will also briefly cover some important libraries for numerical computing.

[Full details and registration ]( https://www.archer2.ac.uk/training/courses/261014-modern-c/ )



## Containers for Reproducible Research: Introduction to Podman and Apptainer

Newcastle University, 12 November 2026 09:30 - 16:00

This course aims to introduce the use of containers with the goal of using them to effect reproducible computational environments. Such environments are useful for ensuring reproducible research outputs and for simplifying the setup of complex software dependencies across different systems. The course will introduce the use of Podman and Apptainer containers but the material will be of use for whatever container technology you plan to, or end up, using. On completion of this course attendees should:

- Have an understanding of what Podman/Apptainer containers are, why they are useful and the common terminology used
- Have a working Podman installation on your local system to allow you to use containers
- Understand how to use existing container images for common tasks
- Be able to build your own Podman/Apptainer container images by understanding both the role of a Contianerfile recipe in building container images, and the syntax used in Contianerfiles
- Understand how to manage Podman/Apptainer containers on your local system
- Appreciate decisions that need to be made around containerising research workflows
- Understand the differences between Podman and Apptainer containers and why Apptainer is often more suitable for multi-user systems (e.g. HPC)
- Appreciate issues around reproducibility in software, understand how containers can address some of these issues and what the limits to reproducibility using containers are

[Full details and registration](https://www.archer2.ac.uk/training/courses/261112-containers/)




## ARCHER2 end of service: 17:00 GMT Friday 20th November 2026

To help users, we have compiled [a set of documentation specifically covering the end of the ARCHER2 service]( 
https://docs.archer2.ac.uk/end-of-service-2026/ )

The documentation covers:

- Timeline for the end of the ARCHER2 service
- Data on ARCHER2: what do I need to do to save data I have stored on ARCHER2 file systems?
- EPCC SAFE: what happens to my personal data in SAFE?
- HPC access beyond ARCHER2

Key impacts for ARCHER2 users:

- Data on home, work, solid state scratch file systems will not be accessible beyond the end of the ARCHER2 service
- RDFaaS will continue beyond the lifetime of ARCHER2 but users will need to transfer data from /epsrc and /general to a different local mount point on ARCHER2 - more details will be provided as soon as they are available
- No login access will be available beyond the end of the ARCHER2 service

If you have questions about the end of service that are not answered by [the documentation](https://docs.archer2.ac.uk/end-of-service-2026/), then please [contact the ARCHER2 service desk](mailto:support@archer2.ac.uk)



## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>  
- [Transferring data from ARCHER2](http://localhost:4000/training/courses/261007-archer2-data-transfer-vt/), free webinar, Wednesday 7th October 2026 15:00 - 16:00
- [Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/261014-modern-c/), online, 14 - 16 October 2026 09:30 - 16:30
- [Containers for Reproducible Research: Introduction to Podman and Apptainer](https://www.archer2.ac.uk/training/courses/261112-containers/), Newcastle, 12 November 2026 09:30 - 16:00

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
