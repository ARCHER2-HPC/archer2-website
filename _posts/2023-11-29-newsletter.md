---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2023-11-29 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [ARCHER2 MFA Implementation](#mfa-implementation)
- [ARCHER2 Celebration of Science]({{ page.url }}#archer2-celebration-of-science)
- [ARCHER2 Calendar 2024]({{ page.url }}#archer2-calendar-2024---sign-up-for-your-copy) - sign up for your copy
- [ARCHER2 User Survey 2023]({{ page.url }}#archer2-user-survey-2023) - £50 Amazon voucher prize draw
- [Forge license boost]({{ page.url }}#forge-license-boost) - w/b 11th December
- [ARCHER2 for Package Users]({{ page.url }}#archer2-for-package-users), Online, 7 December 2023 09:30 - 15:30 GMT 
- [ARCHER2 for Software Developers]({{ page.url }}#archer2-for-software-developers), Online, RESCHEDULLED 7 - 8 December 2023 10:00 - 16:00 GMT
- [ISC’24 Student Volunteer Program]({{ page.url }}#isc24-student-volunteer-program)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)

<!--more-->





## MFA Implementation 

To enhance the security of ARCHER2, we will be implementing mandatory multi-factor authentication (MFA) on the ARCHER2 service on Wednesday 6th December. This will take place between 0900 and 1000 and an email will be sent once the implementation has taken place.

We appreciate that this will be a change of process for all users but implementing MFA significantly increases the security of accounts, and therefore helps keep your personal and research data secure.

This means that once the switch has happened, SSH keys will work as before, but instead of your ARCHER2 password, a Time-based One-Time Password (TOTP) code will be requested. This is a six digit number, refreshed every 30 seconds, which is generated typically by an app running on your mobile phone or laptop. Thus authentication will require two factors, i.e. SSH key and passphrase (the first factor), plus TOTP (the second factor).

The SAFE documentation includes [details on how to set up MFA on machine accounts (ARCHER2)](
https://epcced.github.io/safe-docs/safe-for-users/#how-to-turn-on-mfa-on-your-machine-account)

The documentation includes how to set this up without the need of a personal smartphone device.

We have also updated the ARCHER2 documentation with details of the
 [new connection process](https://docs.archer2.ac.uk/user-guide/connecting-totp/)  and 
[quickstart guide](https://docs.archer2.ac.uk/quick-start/quickstart-users-totp/)

We will have additional support available during the rollout period but please take the time to read and follow the documentation carefully. If there are any issues or concerns please [contact us](mailto: support@archer2.ac.uk).



## ARCHER2 Celebration of Science

We are pleased to announce that the ARCHER2 Celebration of Science will take place on the 7th – 8th March 2024 in Edinburgh at South Hall, The University of Edinburgh.

The event will provide ARCHER2 users with the opportunity to showcase their science achievements on ARCHER2. The two-day programme will include a variety of talks from members of the ARCHER2 research consortia and other invited presenters involved in the ARCHER2 service, a poster session and a panel session focusing on preparing the UK science community for future Exascale systems. All attendees are welcome to join the drink reception on the evening of the first day.

The event is in-person and there is no registration fee.

[Full details and registration]( https://www.archer2.ac.uk/community/events/celebration-of-science-2024)



## ARCHER2 Calendar 2024 - sign up for your copy


[Sign up for your copy of the ARCHER2 Calendar 2024](https://bit.ly/ARCHER2-Calendar-2024) and it will be posted straight to your desk.



## ARCHER2 User Survey 2023

We are committed to continually improving the ARCHER2 Service and would like to request your input to help us understand what is important to you, where the Service is working well and where there is scope for improvement.

The ARCHER2 Annual User Survey consists of just a few questions and should take only a few minutes of your time to complete. There are opportunities to add more detailed comments if you wish.

For each survey response received, we will donate £1 to Save The Children.<br/>
Additionally, if you enter your ARCHER2 username in the final question, then you will be **entered into the prize draw to win one of five £50 Amazon vouchers**.

[Complete the survey](https://bit.ly/ARCHER2-User-Survey-2023)

Thank you in advance for taking the time to complete this survey. The responses will be used to try and improve the service for you and to help identify key areas for service development.


## Forge license boost

Week beginning 11th December

The Forge license will be increased from 16 nodes to 64 nodes for one week beginning 11th December. 

[Details of DDT and MAP]( https://docs.archer2.ac.uk/data-tools/arm-forge/)





## ARCHER2 for Package Users

Online, 7 December 2023 09:30 - 15:30 GMT 

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

[Full details and registration](https://www.archer2.ac.uk/training/courses/231207-package-users/)


## ARCHER2 for Software Developers

Online, RESCHEDULLED 7th - 8th December 2023 10:00 - 16:00 GMT

The lesson follows on from the above Package User course and aims to answer the following questions:

-  What does the ARCHER2 application development environment look like and how do I use it?

[Full details and registration]( https://www.archer2.ac.uk/training/courses/231211-software-developers/)



## ISC’24 Student Volunteer Program


ENCOURAGE YOUR STUDENT to BECOME A STUDENT VOLUNTEER

The call for applications for the ISC’24 Student Volunteer Program opens on December 1. The ISC High Performance 2024 conference will be held in 12-14 May, in Hamburg, Germany. Being a volunteer is a wonderful opportunity for the students to experience one of the biggest HPC conferences, giving them access to world-class speakers, cutting-edge technology, and unparalleled networking opportunities. The volunteers are only responsible for covering their travel expenses. 

If you know any students who might be interested in applying, please make them aware of this opportunity! The program offers a unique blend of experience, learning, and networking that can significantly impact their career trajectory. For more information please visit the [relevant ISC’24 pages]( https://www.isc-hpc.com/student-volunteer-program-2024.html)




## Recently added known issues
 
The "[Known Issues](https://docs.archer2.ac.uk/known-issues/)" page of the ARCHER2 Documentation
<https://docs.archer2.ac.uk/known-issues/>
lists all current open known issues including a description of the issue, its symptoms and any work-arounds.

- No recent issues


## Upcoming ARCHER2 Training

- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/210000-mpi-self-service/), Online, always-open self-service course
- [Shared Memory Programming with OpenMP](https://www.archer2.ac.uk/training/courses/210000-openmp-self-service/), Online, always-open self-service course
- [QM/MM with GROMACS + CP2K](https://www.archer2.ac.uk/training/courses/220000-gromacs-self-service/), Online, Always open - self-service course <br><br>
- [ARCHER2 for Package Users](https://www.archer2.ac.uk/training/courses/231207-package-users/), online, 7 December 2023 09:3 - 15:30 GMT
- [ARCHER2 for Software Developers](https://www.archer2.ac.uk/training/courses/231211-software-developers/), online, RESCHEDULED 7th - 8th December 2023 10:00 - 16:00 GMT
- [Advanced OpenMP](https://www.archer2.ac.uk/training/courses/240123-advanced-openmp/), online, 23 - 24 January 2024 09:00 - 17:00 GMT

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
