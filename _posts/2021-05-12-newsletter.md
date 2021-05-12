---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2021-05-12 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---


- [Removal of VASP MKL modules and new versions available](#removal-of-vasp-mkl-modules-and-new-versions-available)
- [Low priority jobs on ARCHER2](#low-priority-jobs-on-archer2)
- [ARCHER2 Embedded CSE (eCSE) call](#archer2-embedded-cse-ecse-call)
- [HPC-Europa3 Transnational Access visitor programme](#hpc-europa3-transnational-access-visitor-programme) Call closes tomorrow 
- [Upcoming ARCHER2 training](#other-upcoming-archer2-training) 



## Removal of VASP MKL modules and new versions available

Investigation of the output from VASP compiled with the Intel MKL libraries on ARCHER2 has shown that these versions can lead to differences from reference output values for some calculations. They can also crash with numerical errors in some cases. Versions compiled with HPE Cray LibSci libraries are stable and give results that match reference values. Due to this, we have removed all VASP versions on ARCHER2 compiled with the Intel MKL libraries. In particular, the following modules have been removed from the service:

- vasp/5/5.4.4-gcc10-mkl
- vasp/5/5.4.4-gcc10-mkl-cpe2103
- vasp/6/6.2.0-gcc10-mkl

We recommend that users use the updated versions of VASP that have been compiled against the latest versions of HPE Cray MPICH and HPE Cray LibSci. The latest version of HPE Cray MPICH addresses a known bug that can lead to out-of-memory errors. The recommended modules are:

- vasp/5/5.4.4-gcc10-cpe2103
- vasp/6/6.2.0-gcc10-cpe2103

These updated versions will be made the default versions on ARCHER2 on Tuesday 18 May 2021.




## Low priority jobs on ARCHER2

The ARCHER2 system now supports low priority jobs which allow users to run jobs at no charge when there is space on the system. To run low priority jobs, users should specify the “lowpriorty” QoS in their job scripts (e.g. #SBATCH –qos=lowpriority) or Slurm commands (--qos=lowpriority). Charged jobs will always take priority over low priority jobs in the scheduler but once a low priority job has started it will be allowed to run to completion. Low priority jobs are subject to the following limits:

- 256 node maximum job size
- 256 nodes maximum in use by any one user
- 512 nodes maximum in use by low priority at any one time
- Maximum 4 low priority jobs in the queue per user
- Maximum 1 low priority job running per user (of the 4 queued)
- Maximum runtime of 3 hours

These details are also available in the ARCHER2 User and Best Practice Guide at: [https://docs.archer2.ac.uk/user-guide/scheduler/#low-priority-access](https://docs.archer2.ac.uk/user-guide/scheduler/#low-priority-access)


## ARCHER2 Embedded CSE (eCSE) call

We are very pleased to announce that the 4th ARCHER2 eCSE call (ARCHER2
eCSE04) is now open for proposals. The deadline for submitting documents for technical evaluations is 16:00 on 18 May 2021 with the final deadline for proposal submission being 16:00 on 8 Jun 2021.

Embedded CSE (eCSE) support provides funding to the ARCHER2 user community to develop software in a sustainable manner to run on the
ARCHER2 system. For this call software which results in research which is within the remit of EPSRC or NERC is eligible.

For the first three ARCHER2 eCSE calls the programme has awarded projects of between 3 and 12 person months (inclusive). We recognise that in some cases there may be a need for work requiring less effort than this so we are now accepting proposals requesting effort from between 1 and 12 person months (inclusive). The process of submission is the same for all proposals. However, we recognise that the number of objectives and the way in which impacts and benefits will be realised may differ depending on the length of the project. This is all explained in the guidance for the call.

We are very keen to encourage software developers at the early stage of their careers. At this stage, an RSE will be developing expertise. This will be taken into account when a proposal is assessed and in such cases, the Panel will be looking at what support is on offer from PI and any Co-Is. Again, this is all explained in the guidance for the call.

More details of how to apply are available by following the link to the eCSE calls page from here

[https://www.archer2.ac.uk/ecse/](https://www.archer2.ac.uk/ecse/)

together with details of the application and review process, assessment criteria eligibility, etc. Please note that the process for applying for an eCSE project under ARCHER2 has been updated since the ARCHER eCSE programme. More details available via the above link.

The 4th ARCHER2 eCSE call (eCSE04) opened on: Tuesday 20 April 2020

Deadline for submitting documents for technical evaluation: 16:00 on Tuesday 18 May 2021

Deadline for final submission: 16:00 Tuesday 8 Jun 2021

A recent webinar can be found here:
[https://www.archer2.ac.uk/training/courses/210203-ecse-webinar/](https://www.archer2.ac.uk/training/courses/210203-ecse-webinar/)
which includes a walk through of the submission of a proposal.
 


## HPC-Europa3 Transnational Access visitor programme 

Call for applications: next closing date 13th May 2021. 

HPC-Europa3 funds collaborative research visits for computational scientists in any discipline which can use High Performance Computing (HPC). Visits can be made to research institutes in Finland, Germany, Greece, Ireland, Italy, the Netherlands, Spain or the UK. UK-based researchers can benefit in two ways: either by visiting a research group elsewhere in Europe, or by hosting a research visitor from another country. 

### What does HPC-Europa3 provide? 

- Funding for travel, living and accommodation expenses for visits of up to 13 weeks. 
- Access to world-class High Performance Computing (HPC) facilities. 
- Technical support to help you make best use of the HPC systems. 
- Collaborative environment with an expert in your field of research. 

### Who can apply? 

- Researchers of all levels, from postgraduate to full professors. 
- Researchers from academia or industry. 
- Researchers currently working in a European Union country or Associated State (see [http://bit.ly/AssociatedStates](http://bit.ly/AssociatedStates) for full list of Associated States). 
- Researchers may not visit a group in the country where they currently work. 
- A small number of places may be available for researchers working outside these countries - please contact [staff@hpc-europa.org](mailto:staff@hpc-europa.org) for more information. 

### How do I apply? 

Apply online at [http://www.hpc-europa.org ](http://www.hpc-europa.org )

The next closing date is 13th May 2021. Applicants are likely to receive the decision in late June, so visits should be planned no earlier than July, but must be complete by 30th April 2022 when the programme ends.

There will be 2 further closing dates in September and November. Applications can be submitted at any time. You should receive a decision approximately 6 weeks after the closing date. 

For more information and to apply online, visit: [http://www.hpc-europa.org/ ](http://www.hpc-europa.org/ )
Follow us on Twitter for project news: [https://twitter.com/HPCEuropa3 ](https://twitter.com/HPCEuropa3 )



## Other upcoming ARCHER2 Training

- Shared Memory Programming with OpenMP, Online, always-open self-service course


Further details [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

New virtual tutorials will be announced soon via: ARCHER2 website: [https://www.archer2.ac.uk/training/#upcoming-training](https://www.archer2.ac.uk/training/#upcoming-training)

Twitter: [https://twitter.com/ARCHER2_HPC](https://twitter.com/ARCHER2_HPC)

Recordings of past virtual tutorials can be found here: [https://www.archer2.ac.uk/training/materials/](https://www.archer2.ac.uk/training/materials/)