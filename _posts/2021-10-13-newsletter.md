---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-10-13 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Preparation for transition to full system](#preparation-for-transition-to-full-system)
- [EPSRC Access to HPC call](#epsrc-access-to-hpc-call) 
- [Parallel IO on ARCHER2](#parallel-io-on-archer2), Online, Wednesday 20th October 2021 15:00 - 16:00 BST 
- [Understanding Package Performance, Online, 28 October 2021 09:30 - 16:30 BST](#understanding-package-performance)
- [ARCHER2 for Software Developers, Online, 29 - 30 November 2021 10:00 - 16:00 GMT](#archer2-for-software-developers) 
- [ARCHER2 Image and Video Competition 2021](#archer2-image-and-video-competition-2021) - Last chance to submit
- [HPC-Europa3 Transnational Access visitor programme](#hpc-europa3-transnational-access-visitor-programme)
- [Upcoming ARCHER2 training](#upcoming-archer2-training) 


## Preparation for transition to full system

We are working behind-the-scenes to prepare projects for the transition to the full ARCHER2 system.

This may result in you receiving emails about your projects and accounts - please do not be alarmed by this but do alert the service desk if you have any concerns.


## EPSRC Access to HPC call 

EPSRC have opened their latest Access to HPC call.

Deadline for submission of TAs is 17 November 2021 16:00 and the closing date for applications is 15 December 2021 16:00.

<https://www.archer2.ac.uk/news/2021/10/07/access-to-hpc.html>

## Parallel IO on ARCHER2

Online 	Wednesday 20th October 2021 15:00 - 16:00 BST 

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. The IO routines provided by your favourite serial programming language are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems, such as ARCHER2’s Lustre, are optimised for large data transfers but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

Many libraries allow for true parallel IO, including MPI-IO, HDF5, NetCDF and ADIOS. However, the user must call them correctly and configure the filesystem appropriately to obtain good performance.

This talk will cover:

- the challenges of parallel IO;
- parallel filesystems and the Lustre configuration on ARCHER2;
- efficient use of Lustre;
- initial results from the ARCHER2 production system.

Full details and join link  <https://www.archer2.ac.uk/training/#upcoming-training>


## Understanding Package Performance

Online   28 October 2021 09:30 - 16:30 BST

As parallel packages for computational science become more sophisticated, it becomes more difficult for a researcher to understand the most important factors that determine end-to-end productivity from initial input data to final result. Aspects such as file IO and data transfer can be just as important in practice as the performance and parallel scalability of the application itself. This course will provide an introduction to understanding your research workflow, the place of HPC application performance within the workflow, an introduction to benchmarking parallel applications and how you can use benchmark data to make decisions on running your research on HPC systems.

The lesson aims to answer the following questions:

- How can I understand the end-to-end performance of my research workflow and, particularly, how does my use of HPC fit into this workflow?
- How do I measure parallel application performance and which metrics should I use and when?
- What decisions on my use of HPC can I make based on performance measurements?

Full details and registration  <https://www.archer2.ac.uk/training/#upcoming-training>


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


## ARCHER2 Image and Video Competition 2021

The ARCHER2 Image and Video Competition is your chance to win prizes of £150 for each of

- Best Image
- Best Video
- Best entry from an Early-career researcher

Plus a bonus prize of £100 for the best overall entry from the above three winners.

Show us how you demonstrate "ARCHER/ARCHER2 Enabling Research"

Full details and entry form at <https://www.archer2.ac.uk/community/image-comp/>

Closing date : **Extended to 17th October 2021**


## HPC-Europa3 Transnational Access visitor programme

FINAL call for applications: closing date 11th November 2021.

HPC-Europa3 funds collaborative research visits for computational scientists in any discipline which can use High Performance Computing (HPC). Visits can currently be made to research institutes in Finland, Germany, Greece, Ireland, Italy, the Netherlands, Spain or the UK. UK-based researchers can benefit in two ways: either by visiting a research group elsewhere in Europe, or by hosting a research visitor from another country.

### What does HPC-Europa3 provide?

- Funding for travel, living and accommodation expenses for visits of up to 13 weeks.
- Access to world-class High Performance Computing (HPC) facilities.
- Technical support to help you make best use of the HPC systems.
- Collaborative environment with an expert in your field of research.

### Who can apply?

- Researchers of all levels, from postgraduate to full professors.
- Researchers from academia or industry.
- Researchers currently working in a European Union country or Associated State (see http://bit.ly/AssociatedStates for full list of Associated States).
- Researchers may not visit a group in the country where they currently work.
- A small number of places may be available for researchers working outside these countries - please contact staff@hpc-europa.org for more information.

### How do I apply?

Apply online at <http://www.hpc-europa.org> by 11th November 2021.

This is the FINAL closing date for applications under HPC-Europa3.

Applicants should receive the selection panel’s decision in late December, so visits should be planned for no earlier than mid-January. However, ALL visits must be complete by 30th April 2022, when the programme ends. 

For more information and to apply online, visit: <http://www.hpc-europa.org/>

For overview videos and interviews with recent visitors, see: <https://www.youtube.com/channel/UC9uOpFQGP9V0TQPXFUOgs_A/playlists>

Follow HPC-Europa3 on Twitter for project news: <https://twitter.com/HPCEuropa3>


## Upcoming ARCHER2 Training

- Parallel IO on ARCHER2, Online Webinar, Wednesday 20th October 2021 15:00 - 16:00 BST 
- Understanding Package Performance, Online, 28 October 2021 09:30 - 16:30 BST
- ARCHER2 for Software Developers, Online, 29 - 30 November 2021 10:00 - 16:00 GMT 
- Message-passing Programming with MPI, Online,  always-open self-service course  
- Shared Memory Programming with OpenMP, Online, always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past courses and virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)
