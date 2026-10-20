---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2026-10-21 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 Enabled...]({{ page.url }}#archer2-enabled) survey
- [ARCHER2 Capability Days]({{ page.url }}#archer2-capability-days-20---22-october-2026): 20-22 October 2026
- [Extending containers to reference or include additional software or data]({{ page.url }}#extending-containers-to-reference-or-include-additional-software-or-data), webinar, Wednesday 4th November 2026 15:00 - 16:00 
- [Containers for Reproducible Research: Introduction to Podman and Apptainer]({{ page.url }}#containers-for-reproducible-research-introduction-to-podman-and-apptainer), Newcastle University, 12 November 2026 09:30 - 16:00
- [Porting HPC applications to GPUs: choosing a programming model]({{ page.url }}#porting-hpc-applications-to-gpus-choosing-a-programming-model), webinar, Wednesday 18th November 2026 14:00 - 15:00 (Note earlier than usual start time) 
- [PowerSched trial]({{ page.url }}#powersched-trial)
- [ARCHER2 Calendar and Image Competition results]({{ page.url }}#archer2-calendar-2027-and-image-competition-results)
- [ARCHER2 end of service: 17:00 GMT Friday 20th November 2026]({{ page.url }}#archer2-end-of-service-1700-gmt-friday-20th-november-2026)
- [Final Day to Apply: WHPC Breakfast at CIUK 2026]({{ page.url }}#final-day-to-apply-whpc-breakfast-at-ciuk-2026)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->



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


## Extending containers to reference or include additional software or data

Webinar, Wednesday 4th November 2026 15:00 - 16:00 

This webinar will explain how an existing singularity container can be extended to access or incorporate additional data or software. It will cover accessing external data directly or encapsulated in a filesystem image and how data/applications can be incorporated into a new container.

The steps outlined can be accomplished by a non-privileged user and are applicable to apptainer and podman.

[Full details and join link]( https://www.archer2.ac.uk/training/courses/261104-hpe-coe-containers-vt/ )

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



## Porting HPC applications to GPUs: choosing a programming model

Webinar, Wednesday 18th November 2026 14:00 - 15:00 (Note earlier than usual start time) 

This webinar will survey various programming models that can be used to accelerate applications using GPUs. It will cover language parallelism, library usage, directive-based models (OpenMP/OpenACC), grid-based models (CUDA/HIP), and mention high-level frameworks such as Kokkos.

[Full details and join link]( https://www.archer2.ac.uk/training/courses/261118-hpe-coe-porting-to-gpus-vt/  )


## PowerSched trial

From 27th October (10:00 GMT) to 3rd November (16:00 GMT), CSE will trial a new power-management technology called PowerSched.
This is a follow-up to a postponed trial originally scheduled for early September.

In simple terms, [PowerSched eliminates the need to control manually CPU frequencies ](https://docs.archer2.ac.uk/user-guide/energy/#controlling-cpu-frequency),
and has other interesting power-management features we may wish to exploit on future systems.

CSE has been testing PowerSched over recent weeks and, working with the developers at HPE and HLRS (Stuttgart), CSE has identified a configuration that we believe will provide a very similar behaviour to the current manual CPU frequency control.

During the trial, users should see little change in queue times, although people interested in benchmarking software should be aware that jobs may run slightly slower or slightly faster than usual during the trial.

Subject to progress of the trial, on the final day (3rd November), we may adjust the PowerSched configuration aiming to reduce overall system power draw. This will lead to a modest increase (5-10 percent) in job runtimes, but will allow us to gather important information on PowerSched's ability to reduce system power draw dynamically.


## ARCHER2 Calendar 2027 and Image Competition results


We are pleased to announce the winners of the ARCHER2 Image and Video Competition 2026 as follows:

Winning Early Career Researcher entry : Dr Fran Morris, University of Oxford, School of Geography and the Environment, with their video “High-resolution atmospheric dynamics over Southern Africa “.

Winning Video : Caleb J. Li, University of Cambridge, with their video “Large Eddy Simulation of Ignition and Flame Propagation in a Lean-Direct-Injection Hydrogen Combustor “.

Winning Image, and overall competition winner: Dr Abdallah Hasaballa, University of Oxford, Department of Computer Science, with their image “Blueprint of a Beat: The Heart’s Hidden Fibre Architecture “.

[View the gallery of all the submitted images and videos]( https://www.archer2.ac.uk/about/gallery/2026-image-comp/ )


<a href="https://forms.cloud.microsoft/e/3S43HBkiLr">
![[image]]({{ site.baseurl }}/img/splash/261008-calendar.jpg)</a>
{: .img-center style="width: 30%" 
alt="ARCHER2 calendar 2027" 
title="ARCHER2 calendar 2027" }


As in previous years, we plan to produce a printed calendar featuring some of the images from the competition – you are most warmly invited to [sign up to receive a copy](https://forms.cloud.microsoft/e/3S43HBkiLr), and these will be posted out in time for the new year.


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




## Final Day to Apply: WHPC Breakfast at CIUK 2026


WHPC will host its fifth annual Breakfast at [CIUK 2026 ](https://www.sc.stfc.ac.uk/computing-insight-uk/), the UK’s leading HPC conference.

Poster presentations: Applications are open to early-career researchers, those transitioning roles, and those returning from career breaks. Technical and non-technical topics are welcome. Successful applicants receive free CIUK registration, with travel support available to apply for.

[Submit your poster application]( https://docs.google.com/forms/d/e/1FAIpQLSe6r-CFLRsD5grphXrFnH0EmLYUwnKfrUDYhgWJ5UzUhCe5FA/viewform?pli=1 )

Keynote speaker nominations: Nominate an inspiring individual from any career stage to share their experience with the WHPC community.

[Nominate a speaker]( https://docs.google.com/forms/d/e/1FAIpQLScRctSrL-x8QpjeO-c30Q2Vi_44StTOjFjDZZFTbS2fvXOr9Q/viewform )



## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br> 
- [Extending containers to reference or include additional software or data](https://www.archer2.ac.uk/training/courses/261104-hpe-coe-containers-vt/), webinar, Wednesday 4th November 2026 15:00 - 16:00  
- [Containers for Reproducible Research: Introduction to Podman and Apptainer](https://www.archer2.ac.uk/training/courses/261112-containers/), Newcastle, 12 November 2026 09:30 - 16:00
- [Porting HPC applications to GPUs: choosing a programming model](https://www.archer2.ac.uk/training/courses/261118-hpe-coe-porting-to-gpus-vt/), webinar, Wednesday 18th November 2026 14:00 - 15:00 (Note earlier than usual start time) 

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
