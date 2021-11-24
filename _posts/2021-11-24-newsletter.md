---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-11-24 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Budgets on ARCHER2 full system](#budgets-on-archer2-full-system)
- [Computing Insight UK 2021](#computing-insight-uk-2021)
- [ARCHER2 Image and Video Competition 2021 results](#archer2-image-and-video-competition-2021-results) 
- [ARCHER2 User drop-in session, Online, 1 December 2021 14:00 - 16:00](#archer2-user-drop-in-session)
- [ARCHER2 for Software Developers, Online, 29 - 30 November 2021 10:00 - 16:00](#archer2-for-software-developers) 
- [ARCHER2 for Package Users, Online, 2 December 2021 10:00 - 16:00](#archer2-for-package-users) 
- [Upcoming ARCHER2 training](#upcoming-archer2-training) 


## Budgets on ARCHER2 full system

All jobs run on the ARCHER2 full system are uncharged at present - however, you do need a positive budget balance in order to submit jobs.  

If your ARCHER2 budget is zero or negative you will see an error:
   
`sbatch: error: Batch job submission failed: Job violates accounting/QOS policy (job submit limit, user's size and/or time limits)`

You can check which budgets you have available and whether they have a positive value, either by checking in SAFE or on ARCHER2 - see <https://docs.archer2.ac.uk/faq/#checking-budgets> for details.


## Computing Insight UK 2021

9-10 December, Manchester Central
<https://www.stfc.ac.uk/ciuk>

CIUK are very excited to release the [main presentation programme](https://www.scd.stfc.ac.uk/Pages/CIUK-2021-PROGRAMME.aspx) for CIUK 2021. The theme for the conference this year is "Heterogeneous Computing" and we have assembled a stellar line-up of speakers.

CIUK begins on Thursday 9 December with presentations from Steve Hindmarsh (The Francis Crick Institute), Phil Hasnip (University of York) and Igor Baratta (University of Cambridge) exploring the question "Why Heterogeneous Computing?" before moving on to a session looking at "Hardware Sub-Systems" with Paul Calleja (University of Cambridge), Alastair Basden (Durham University) and Andrew Edmondson (University of Birmingham). The afternoon session is dedicated to an overview of the ExCALIBUR programme with presentations from UKRI, UKAEA and the Met Office before a panel discussion and Q&A session. The day will finish with Martyn Guest’s traditional CIUK processor presentation and  keynote presentation from Simon McIntosh-Smith “Heterogeneous Computing: past, present and future”.

Day 2 on Friday 10 December will include a presentation and panel session around the current issue of a UK skills gap and in particular how UKRI are looking at this problem with Richard Gunn (UKRI) taking the lead. There will also be sessions on "Co-Design and Environment" and "Emerging Technologies" with input from, amongst others, Jeff Hammond (NVIDIA) who will present on the “Post-CUDA Future of Heterogeneous Compute Programming” and Viv Kendon who will look at “QEVEC: integrating quantum computing with HPC”.

You can register via the conference website…  <https://www.stfc.ac.uk/ciuk> . An online option is available for those unable to travel to Manchester.


## ARCHER2 Image and Video Competition 2021 results

Thank you to everyone who submitted images and videos to this year’s competition. The outstanding range of entries made judging a most enjoyable experience with so many great demonstrations of the important work being done using ARCHER2 .

We are pleased to announce the winners as follows:

Winning Image: Dr Miguel Moratilla-Vega, Loughborough University/Aeronautical and Automotive Engineering Department with their image “Acoustic field (yellow and blue) with overlapped velocity isosurface (red) obtained with a coupled LES-High order Acoustic coupled solver of an installed jet case”.

Winning Video: Dr Panagiotis Tsoutsanis, Centre for Computational Engineering Sciences - Cranfield University with their video “Shock wave interaction with cavitation bubble”.

Winning Early Career Researcher entry and Overall Winner: Dr Mattia Almansi, Marine Systems Modelling - National Oceoanography Centre with their video “Sea surface temperature (colour) and ice concentration (grey shades) in the Greenland-Scotland Ridge region”.

Congratulations!

A gallery of all the submitted images and videos is available to view at <https://www.archer2.ac.uk/about/gallery/2021-image-comp/>

Thanks to the entrants, judges and all involved in making the competition such a great success. We hope you will take a few moments to enjoy looking at the gallery.


## ARCHER2 User drop-in session
 
Online, 1 December 2021 14:00 - 16:00

We ran a webinar last week to introduce the ARCHER2 full system and the recording and slides from that webinar are available at <https://www.archer2.ac.uk/training/courses/211117-archer2-full-system/>

Now that users have access to the ARCHER2 full service, we will be running a drop-in session on Wednesday 1st December from 14:00-16:00, where members of the ARCHER2 support team will be on hand to answer questions about the ARCHER2 full system and transferring data from the 4-cabinet system to the full system.

We’re aware that switching to a new system can be complicated, and we will be on-hand throughout this webinar to answer questions, provide advice, and hear feedback from the ARCHER2 community about this process.

Drop in at any point during the session - it is not expected to attend the full two hours.

Full details and join link <https://www.archer2.ac.uk/training/#upcoming-training>


## ARCHER2 for Software Developers

Online 	29 - 30 November 2021 10:00 - 16:00 GMT 

The lesson aims to answer the following questions:

- What hardware is available on ARCHER2?
   - What does they consist of (login nodes, compute nodes, file systems, backup)?
   - How does this impact me as a user?
- How can I access ARCHER2 interactively and transfer data?
- What does the ARCHER2 application development environment look like and how do I use it?
- How do I write job submission scripts and submit them to the ARCHER2 scheduler?
- How can I be a good ARCHER2 citizen?
- How can I check what resources I am using and look at historical usage?

**Target Audience:**

This lesson provides an introduction to using ARCHER2 for user who:

- have already used other HPC systems; and
- want to compile (and possibly) develop HPC software on ARCHER2.

**Prerequisites:**

You should have used remote HPC facilities before. In particular, you should be happy with connecting using SSH, know what a batch scheduling system is and be familiar with using the Linux command line. You should also be happy editing plain text files in a remote terminal (or, alternatively, editing them on your local system and copying them to the remote HPC system using scp). Finally, you should be comfortable with compiling parallel HPC source code that uses MPI and OpenMP.

Full details and registration  <https://www.archer2.ac.uk/training/#upcoming-training>


## ARCHER2 for Package Users

Online  2 December 2021 10:00 - 16:00 GMT

This lesson provides an introduction to using ARCHER2 for users who:

- have already used other HPC systems; and
- want to use pre-installed simulation/modelling packages rather than compiling their own.

The lesson aims to answer the following questions:

- What hardware is available on ARCHER2?
- What does it consist of (login nodes, compute nodes, file systems, backup)?
- How does this impact me as a user?
- How can I access ARCHER2 interactively and transfer data?
- What does the ARCHER2 software environment look like and how do I access software?
- How do I write job submission scripts and submit them to the ARCHER2 scheduler?
- How can I be a good ARCHER2 citizen?
- How can I check what resources I am using and look at historical usage?
- What are the next steps for me using ARCHER2 and how can I get more help?

Full details and registration  <https://www.archer2.ac.uk/training/#upcoming-training>


## Upcoming ARCHER2 Training

- Introduction to the full ARCHER2 system, Webinar, Wednesday 17th November 2021 15:00 - 16:00 
- ARCHER2 for Software Developers, Online, 29 - 30 November 2021 10:00 - 16:00 
- ARCHER2 for Package Users, Online, 2 December 2021 10:00 - 16:00
- Message-passing Programming with MPI, Online,  always-open self-service course  
- Shared Memory Programming with OpenMP, Online, always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)
