---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2026-05-20 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 GPU node system image update]({{ page.url }}#archer2-gpu-node-system-image-update)
- [ARCHER2 User Survey 2026]({{ page.url }}#archer2-user-survey-2026)
- [GPU programming with kernels]({{ page.url }}#gpu-programming-with-kernels), online, Date: 27 - 29 May 2026 10:00 - 16:00
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->


## ARCHER2 GPU node system image update

A new system image was applied to the ARCHER2 GPU Development System on Tuesday 19th May. The primary change is the version of the AMD ROCm library and toolkit that is available (moving from Version 5.2 to Version 6.3). This should improve both the support for and performance of various AMD GPU-compatible software applications. 

The update has required a change to the Linux version and Cray Programming Environment, meaning it is no longer possible to build software for the GPU Development System directly on the UANs. The recommendation is to build software on the GPU nodes directly, though the CSE team and HPE Centre of Excellence are investigating the option to provide a containerised version of the environment.

Full details of the update are provided in the [ARCHER2 Documentation ](https://docs.archer2.ac.uk/user-guide/gpu/), which was also updated on 19th May.


## ARCHER2 User Survey 2026


We are committed to continually improving the ARCHER2 Service and would like to request your input to help us understand what is important to you, where the Service is working well and where there is scope for improvement.

The ARCHER2 User Survey consists of just a few questions and should take only a few minutes of your time to complete. There are opportunities to add more detailed comments if you wish.

For each survey response received, we will donate £1 to Save The Children. Additionally, if you enter your ARCHER2 username in the final question, then you will be entered into the prize draw to win one of five £50 Amazon vouchers.


<section id="service">

  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://forms.office.com/e/jPf41prJHR ">
          <strong>Complete the survey</strong>
        </a>
      </div>
											
    </div>

</section>

Thank you in advance for taking the time to complete this survey. The responses will be used to try and improve the service for you and to help identify key areas for service development, and will be shared with UKRI for consideration in planning future services.


## GPU programming with kernels

This three-day course will provide an introduction to GPU computing with HIP aimed at scientific application programmers wishing to develop their own software. The course will give a background on the difference between CPU and GPU architectures as a prelude to introductory exercises in HIP programming. The course will discuss the execution of kernels, memory management, among other topics.

The course will not discuss programming with compiler directives, but does provide a concrete basis of understanding of the underlying principles of the HIP model which is useful for programmers ultimately wishing to make use of OpenMP or OpenACC. The course will not consider graphics programming, nor will it consider machine learning packages.

Note that the course is also appropriate for those wishing to use NVIDIA GPUs via the CUDA API, although we will not specifically use CUDA.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/260527-gpu-kernels/ )


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>  
- [GPU programming with kernels](https://www.archer2.ac.uk/training/courses/260527-gpu-kernels/), online, Date: 27 - 29 May 2026 10:00 - 16:00
- [Digital Oceans: Mapping and Predicting Ireland's Ocean](https://www.archer2.ac.uk/training/courses/260610-digital-oceans-vt/), free webinar, Wednesday 10th June 2026 15:00 - 16:00
- [Containers for Reproducible Research: Introduction to Podman and Singularity](https://www.archer2.ac.uk/training/courses/260622-containers/), online, 22 and 24 June 2026 10:00 - 16:00
- [SEAVEA toolkit: An introduction to verification, validation and uncertainty quantification for computational applications](https://www.archer2.ac.uk/training/courses/260624-seaveatk-vt/), free webinar, Wednesday 24th June 2026 14:00 - 16:00
- [HEC-WSI: From GPU-Accelerated OpenFOAM to High-Fidelity Modelling of Offshore Floating Wind Turbines](https://www.archer2.ac.uk/training/courses/260708-wsi-vt/), free webinar, Wednesday 8th July 2026 15:00 - 16:00 

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
