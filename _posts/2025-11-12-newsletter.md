---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2025-11-12 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 Celebration of Science 2026]({{ page.url }}#archer2-celebration-of-science-2026)
- [UKRI National Compute Resources (NCRs): Phase Two Expression of interest]({{ page.url }}#ukri-national-compute-resources-ncrs-phase-two-expression-of-interest)
- [CONTINENTS webinar: Earth Embeddings: Learning Concept Maps in Neural Nets]({{ page.url }}#continents-webinar-earth-embeddings-learning-concept-maps-in-neural-nets)
- [Knowledge Exchange Funding Opportunities]({{ page.url }}#knowledge-exchange-funding-opportunities)
- [Parallel Python]({{ page.url }}#parallel-python-webinar): free webinar, Wednesday 19th November 15:00 - 16:00 
- [Efficient Parallel IO]({{ page.url }}#efficient-parallel-io), Online, 25 November 2025 09:30 - 16:00
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->


## Autumn 2025 UKRI Access to HPC Call open

This opportunity provides an open and flexible route to computational support for high quality projects across the entire UK Research and Innovation (UKRI) remit.

We particularly encourage applications that:

- involve early career researchers
- onboard and train new users
- significantly push the boundaries in computational research using high performance computing (HPC) in your field

This application process is purely for compute resource for up to 12 months. 

You must be based at a UK research organisation eligible for UKRI funding.

**Deadline: 6 November 2025 4:00pm UK time**

[Full details available on the UKRI website](https://www.ukri.org/opportunity/access-to-high-performance-computing-facilities-autumn-2025/)

For all routes to access ARCHER2, see [the ARCHER2 access page](https://www.archer2.ac.uk/support-access/access.html)

## ARCHER2 Celebration of Science 2026

We are pleased to announce that [ARCHER2 Celebration of Science 2026](https://www.archer2.ac.uk/community/events/celebration-of-science-2026/) will take place on the 19th - 20th March 2026 in Edinburgh at South Hall, The University of Edinburgh.

Please **[register here](https://forms.office.com/e/bYHMcP8KLc)** to participate. The event is in-person and there is no registration fee. 


### What to expect at ARCHER2 Celebration of Science 

ARCHER2 Celebration of Science is annual event that brings together the ARCHER2 user community to celebrate their scientific achievements on ARCHER2. You can explore the [highlights of previous events here]({{ base-url }}/community/events/#previous-events) and view the science showcased in the previous years. 


The two-day programme of ARCHER2 Celebration of Science 2026 will include: 

-    **Invited talks**: a variety of talks from the invited speakers highlighting their impactful research using ARCHER2. 
-    **Poster programme**: a platform for the ARCHER2 community to present and discuss their successes delivered on ARCHER2 through the lightning talks and the poster session. A Best Poster Prize will be awarded. - [Call for Posters]({{ base-url }}/community/events/celebration-of-science-2026#call-for-posters) is now open!  
-    **Keynote**: the keynote will be given by Professor Mark Parsons, Director of EPCC. 
-    **Panel Session**: focuses on key topics for the ARCHER2 and UK research community. 
-    **ARCHER2 User Forum**: learn about the latest service updates and engage directly with the ARCHER2 team. 
-    **Diversity Session**: an interactive session to discuss the equality, diversity and inclusion challenges related to the delivery of HPC services. 

[Registration](https://forms.office.com/e/bYHMcP8KLc), and [Call for posters]({{ base-url }}/community/events/celebration-of-science-2026#call-for-posters) are open now.  [Full details here ](https://www.archer2.ac.uk/community/events/celebration-of-science-2026/)


## UKRI National Compute Resources (NCRs): Phase Two Expression of interest

The deadline for submitting an Expression of interest is 20 November 2025.

Hosting entities are also invited to submit expressions of interest for subsequent rounds of NCR opportunities via the engagement hub. A second NCR hosting competition is expected to launch in early 2026, to identify sites for investment in UKRI-wide NCRs. Submission of an EoI is not a mandatory step in order to be eligible for future competitions. However it is encouraged, as the received EoIs will give UKRI vital information and an evidence base for making decisions on the scope of that exercise.

https://engagementhub.ukri.org/ukri-infrastructure/phase2-national-compute-resource-expression-of-int/


## CONTINENTS webinar: Earth Embeddings: Learning Concept Maps in Neural Nets

The International Collaboration Towards Net Zero Computational Modelling and Simulation (CONTINENTS), is hosting its next webinar on Wednesday the 12th of November at 15h30 UK time, and will be delivered by Marc Rußwurm from Wageningen University & Research, with the title: "Earth Embeddings: Learning Concept Maps in Neural Nets"

The abstract and calendar invite can be [found on our website](https://continents-project.github.io/)

There is no registration needed, please share this event with your contacts.



## Knowledge Exchange Funding Opportunities

The Computational Abilities Knowledge Exchange (CAKE) network aims to provide knowledge exchange for UK digital computing activities and is excited to announce the opening of the first round of calls for applications for our flexible funds.

We have opportunities to become a knowledge exchange fellow (deadline end of November) with funds to help champion knowledge exchange, to undertake placements or visits within the UK or the wider world (a rolling call, we review on the 1st of each month) and a call for reviewers. 

[More information can be found on our website](https://www.cake.ac.uk/opportunities/ )


## Parallel Python webinar

Wednesday 19th November 15:00 - 16:00 - free webinar, all welcome.

Make your Python code 10,000 times faster with parallel numpy!

Python is widely used in scientific research for tasks such as data processing, analysis and visualisation. Although many HPC applications have high-level Python interfaces, Python itself it is not yet widely used for implementing large-scale modelling and simulation programs due to issues with performance: Python is primarily designed for ease of use and flexibility, not for speed. For example, a C program naively translated in to Python can often run over 50 times slower.

However, there are techniques that can be used to dramatically increase the speed of Python programs such as fast array processing using numpy, parallelisation using MPI message-passing and running on HPC systems.

In this short webinar we will illustrate these techniques in practice by applying them to a toy application which simulates traffic flow using a simple cellular automaton model. Having tested performance on a latop we will then move to the UK National Supercomputer ARCHER2 which has in excess of 750,000 CPU-cores. With a combination of numpy and mpi4py we will aim for a performance increase of more than a factor of 10,000 compared to the original program.

[Full details and join link]( https://www.archer2.ac.uk/training/courses/251119-python-vt/)




## Efficient Parallel IO

Online, 25 November 2025 09:30 - 16:00 

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. Standard Unix IO routines are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems are optimised for large volumes of data, but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

This hands-on course explores a range of issues related to parallel IO. It uses ARCHER2 and its parallel Lustre file system as a platform for the exercises; however, almost all the IO concepts and performance considerations are applicable to any parallel system.

We will give a general overview of the Lustre filesystem and how parallel IO is implemented in MPI-IO since these are the routines ultimately used by many higher-level libraries such as HDF5 and NetCDF. A good understanding of the performance characteristics of MPI-IO is therefore very useful in optimising the IO performance of most parallel applications.

The course does not teach the detailed syntax of the various parallel IO libraries, but the Fortran source code provided for the benchmarking application used in the practical sessions should be useful reference material.
Prerequisites:

The course assumes an understanding of basic MPI programming in C, C++ or Fortran. Knowledge of MPI derived datatypes would be useful but not essential.

[Full details and registration](https://www.archer2.ac.uk/training/courses/251125-efficient-parallel-io/)



## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No current issues



## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br> 
- [Parallel Python](https://www.archer2.ac.uk/training/courses/251119-python-vt/), online webinar, Wednesday 19th November 2025 15:00 - 16:00
- [Efficient Parallel IO](https://www.archer2.ac.uk/training/courses/251125-efficient-parallel-io/), Online, 25 November 2025 09:30 - 16:00



[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)

	
