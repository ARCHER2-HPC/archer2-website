---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2026-07-15 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [HPC-CONEXS: Towards advancing the analysis of X-ray Spectroscopic Data using High Performance Computing]({{ page.url }}#hpc-conexs-towards-advancing-the-analysis-of-x-ray-spectroscopic-data-using-high-performance-computing), free webinar, Wednesday 22nd July 2026 15:00 - 16:00
- [Data Carpentry]({{ page.url }}#data-carpentry), Online, 21st - 24th July 2026 13:00 - 16:30 BST
- [Intermediate Modern Fortran]({{ page.url }}#intermediate-modern-fortran), Online, 27, 29 and 31 July 2026 10:00 - 16:00 BST
- [Advanced MPI]({{ page.url }}#advanced-mpi), Online, 28 July 2026 10:00 - 16:00 BST
- [ARCHER2 end of service: 21 Nov 2026]({{ page.url }}#archer2-end-of-service-21-nov-2026)
- [ARCHER2 User Survey 2026]({{ page.url }}#archer2-user-survey-2026)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->



## HPC-CONEXS: Towards advancing the analysis of X-ray Spectroscopic Data using High Performance Computing

Free webinar, Wednesday 22nd July 2026 15:00 - 16:00

The rapid development of high-brilliance X-ray sources is transforming the capabilities of X-ray spectroscopy (XS), enabling unprecedented insight into the local geometric, electronic, and spin structure of matter across a wide range of chemical, biological, and materials systems. Realising the full potential of these experimental advances requires equally sophisticated theoretical approaches capable of establishing robust links between measured spectra and their underlying physical origins. However, accurate simulations of core-level spectroscopies remain computationally demanding, particularly for medium- to large-scale systems where numerous calculations are often required to describe all relevant core excitations and final states. The UK High-End Computing Consortium for X-ray Spectroscopy (HPC-CONEXS) has been established to address these challenges by leading the development, optimisation, and dissemination of advanced computational tools for X-ray spectroscopy. By bringing together expertise from across the UK XS community, HPC-CONEXS aims to strengthen the synergy between experiment and theory, enabling more detailed interpretation of spectroscopic measurements and maximising the scientific impact of the substantial UKRI investment in next-generation X-ray facilities. In this webinar I would spotlight some of the work and progress that has been made by the Consortium, including the development of high-level first principles method, machine learning models and collaborations with experimental groups.

This online session is open to all. It will use Teams and you can join from your browser (no account required).


[Full details and join link]( https://www.archer2.ac.uk/training/courses/260722-hpc-conexs-vt/ )




## Data Carpentry

Online, 21st - 24th July 2026 13:00 - 16:30 BST

Data Carpentry develops and teaches workshops on the fundamental data skills needed to conduct research. Its target audience is researchers who have little to no prior computational experience, and its lessons are domain specific, building on learners’ existing knowledge to enable them to quickly apply skills learned to their own research. Participants will be encouraged to help one another and to apply what they have learned to their own research problems.

This workshop uses a tabular ecology dataset from the Portal Project Teaching Database and teaches data cleaning, management, analysis, and visualization. There are no pre-requisites, and the materials assume no prior knowledge about the tools. We use a single dataset throughout the workshop to model the data management and analysis workflow that a researcher would use.

The workshop will cover:
- Data Organization in Spreadsheets 	Learn how to organize tabular data, handle date formatting, carry out quality control and quality assurance and export data to use with downstream applications.
- Data Cleaning with OpenRefine 	Explore, summarize, and clean tabular data reproducibly.
- Data Analysis and Visualization in R 	Import data into R, calculate summary statistics, and create publication-quality graphics.
- Data Management with SQL 	Structure data for database import. Query data within a relational database.

Please note that the first two lessons are more introductory and are covered on the first day of the workshop. The third lesson is delivered over two days, while the last one is taught on the last day of the workshop.

[Full details and registration ]( https://www.archer2.ac.uk/training/courses/260721-data-carpentry/ )


## Intermediate Modern Fortran

Online, 27, 29 and 31 July 2026 10:00 - 16:00 

Fortran (a contraction of Formula Translation) was the first programming language to have a standard (in 1954), but has changed significantly over the years. More recent standards (the latest being Fortran 2018) come under the umbrella term “Modern Fortran”. Fortran retains very great significance in many areas of scientific and numerical computing, particularly for applications such as quantum chemistry, plasmas, engineering and fluid dynamics, and in numerical weather prediction and climate models.

This intermediate course concentrates on some of the more recent features which are central to Modern Fortran. Attendees should be familiar with the basics of Fortran programming.

There are two main topics in this intermediate course: the facilities in Fortran for abstraction and polymorphism provided by classes and interfaces, and the facilities for formal interoperability with ANSI C. The course will cover type extension (“classes” and “inheritance”), type-bound procedures (“methods”), generic procedures (“polymorphism”), and so on. The standard iso_c_binding module provides facilities for interoperability with C; this allow the communication of Fortran entities with direct analogues C, and also Fortran objects (particularly arrays) which have no direct analogue in C.

Further language features concerning arrays, pointers, and facilities for structured programming using submodules will also be covered along the way.

Knowledge of the object-oriented paradigm would be useful, but is not essential. Knowledge of C is required for the material on C/Fortran interoperation. The course will allow programmers interested in working on larger, structured, software projects to make use of (almost) a full complement of Modern Fortran features.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/260727-intermediate-modern-fortran/ )


## Advanced MPI

Online, 28 July 2026 10:00 - 16:00 BST

This course is aimed at programmers seeking to deepen their understanding of MPI and explore some of its more recent and advanced features. We cover functionality including exploiting shared-memory access from MPI programs and advanced use of collectives. We also look at performance aspects such as MPI internal implementation issues and which MPI point-to-point routines to use for scalability.

Intended learning outcomes:

-    Understanding of how internal MPI implementation details affect performance
-    Advanced use of collectives via derived datatypes
-    Using the MPI shared-memory model to optimise per-node memory usage

Attendees should be familiar with MPI programming in C, C++ or Fortran, e.g. have attended the ARCHER2 MPI course.

[Full details and registration:]( https://www.archer2.ac.uk/training/courses/260728-advanced-mpi/ )


## ARCHER2 end of service: 21 Nov 2026

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



## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, Always open - self-service  
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, Always open - self-service
- [Hands-on Introduction to HPC](https://www.archer2.ac.uk/training/courses/240000-intro-hpc-self-service/), Online, Always open - self-service     <br><br>  
 - [Data Carpentry](https://www.archer2.ac.uk/training/courses/260721-data-carpentry/), Online, 21st - 24th July 2026 13:00 - 16:30 BST
- [HPC-CONEXS: Towards advancing the analysis of X-ray Spectroscopic Data using High Performance Computing](https://www.archer2.ac.uk/training/courses/260722-hpc-conexs-vt/), free webinar, Wednesday 22nd July 2026 15:00 - 16:00
- [Intermediate Modern Fortran](https://www.archer2.ac.uk/training/courses/260727-intermediate-modern-fortran/), Online, 27, 29 and 31 July 2026 10:00 - 16:00 BST
- [Advanced MPI](https://www.archer2.ac.uk/training/courses/260728-advanced-mpi/), Online, 28 July 2026 10:00 - 16:00 BST

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
