---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2025-11-26 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 Calendar 2026 ]({{ page.url }}#archer2-calendar-2026)- sign up for your copy now
- [ARCHER2 publication database]({{ page.url }}#archer2-publication-database)
- [ARCHER2 Celebration of Science 2026]({{ page.url }}#archer2-celebration-of-science-2026)
- [Knowledge Exchange Funding Opportunities]({{ page.url }}#knowledge-exchange-funding-opportunities)
- [Updates to library modules]({{ page.url }}#updates-to-library-modules)
- [JAX for scientific computing]({{ page.url }}#jax-for-scientific-computing), free webinar, Wednesday 17th December 2025 15:00 - 16:00
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->


## ARCHER2 Calendar 2026

As in previous years, we have produced a printed calendar featuring some of the images from the competition – you are most warmly invited to sign up to receive a copy, and these will be posted out in time for the new year.

[Sign up here](https://forms.office.com/e/YXPcA0X0N4)



## ARCHER2 publication database

The ARCHER2 service maintains a [publication database](https://docs.archer2.ac.uk/publish/) of works that have arisen from ARCHER2 and links them to project IDs that have ARCHER2 access. We ask all users of ARCHER2 to register any publications in the database - all you need is your publication's DOI.

Registering your publications in SAFE has a number of advantages:

-    For large projects in particular, it allows the project lead to collect publications from all the project members to assist with ResearchFish submissions
-    Your publication automatically gets added to the ARCHER2 publications page
-    Your publication is included in reports to UKRI
-    The better the record we have of publications arising from the ARCHER2 service, the easier it is to demonstrate the impacts and benefits of the service; allowing UKRI to secure funding for future national supercomputing services.

[Find out more ](https://docs.archer2.ac.uk/publish/)


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

[Further information](https://engagementhub.ukri.org/ukri-infrastructure/phase2-national-compute-resource-expression-of-int/)


## Knowledge Exchange Funding Opportunities

The Computational Abilities Knowledge Exchange (CAKE) network aims to provide knowledge exchange for UK digital computing activities and is excited to announce the opening of the first round of calls for applications for our flexible funds.

We have opportunities to become a knowledge exchange fellow (deadline end of November) with funds to help champion knowledge exchange, to undertake placements or visits within the UK or the wider world (a rolling call, we review on the 1st of each month) and a call for reviewers. 

[More information can be found on our website](https://www.cake.ac.uk/opportunities/ )



## Updates to library modules

The following library modules have been added:

-  hypre/2.33.0
-  mumps/5.8.1
-  petsc/3.24.1 (*)
-  scotch/7.0.10
-  slepc/3.24.0
-  superlu-dist/9.1.0
-  superlu/7.0.1

Relevant dependencies between the modules have been updated.
These modules are available in all programming environments, and integrate
with the standard compiler wrappers.
See https://docs.archer2.ac.uk/software-libraries/ for further details.

The default versions of these modules are unchanged.

(*) Note that MUMPS support in PETSc/3.24.1 has been disabled to improve
    robustness at the link stage in all programming environments.

We intend to remove the following older, non-default, library versions:

-  hypre/2.18.0
-  mumps/5.3.5
-  petsc/3.14.2
-  scotch/6.1.0
-  slepc/3.14.1
-  superlu-dist/6.4.0

Please contact the service desk if you have any concerns about these
changes.


## JAX for scientific computing

Free webinar, Wednesday 17th December 2025 15:00 - 16:00

JAX is an open-source Python package for high-performance numerical computing. It provides a familiar NumPy style interface but with the advantages of allowing computations to be dispatched to accelerator devices such as graphics and tensor processing units, and supporting transformations to automatically differentiate, vectorize and just-in-time compile functions. While extensively used in machine learning applications, JAX’s design also makes it ideal for scientific computing tasks such as simulating numerical models and fitting them to data.

This webinar will introduce JAX’s interface, its computation model and functional transforms, and illustrate how it can be used in an example task of fitting the parameters of a numerical model given data. The webinar will also demonstrate how the Array API can be used to write portable code which works across JAX, NumPy and other array backends.

[More details and join link]( https://www.archer2.ac.uk/training/courses/251217-jax-vt/)


## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No current issues



## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service 
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br> 
- [JAX for scientific computing](https://www.archer2.ac.uk/training/courses/251217-jax-vt/), free webinar, Wednesday 17th December 2025 15:00 - 16:00
- [Data Carpentry](https://www.archer2.ac.uk/training/courses/260122-data-carpentry/), Cardiff, 22nd - 23rd January 2026 09:30 - 17:00



[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)

	
