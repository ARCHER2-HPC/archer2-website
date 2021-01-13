---
layout: post
title: ARCHER2 Early Access - communication and community
date: 2020-12-16 12:00:00
author: Andy Turner
categories: [news]
---

We are currently in (or have recently finished, depending on when you read this) the Early Access period for the ARCHER2 service. During this period, users nominated by their peers and the ARCHER2 teams at EPCC and HPE Cray have had access to the ARCHER2 4-cabinet system. 

> The Early User Access programme is very useful ... It allows us to get familiar with the new configuration and greatly improve the efficiency of the work. Many thanks. (ARCHER2 Early Access User)

Different people have been using this early access for different things, but most uses fall into one or more of the following categories: 

- Porting software 
- Porting research workflows 
- Testing existing software with particular use cases 
- Evaluating performance 

 

In this blog I am going to look at our experience of using Slack to communicate and build community during ARCHER2 Early Access; but first I will give some context by saying why this Early Access period was a bit different for those from previous UK national supercomputing services and why we thought we had to run Early Access a little differently this time. 

## ARCHER2 overview 

The ARCHER2 system is an HPE Cray EX supercomputer and there are several changes from the previous ARCHER system (a Cray XC30 supercomputer) that might have a large impact on application development and compilation, user workflows and application performance. Early Access is a key mechanism for major user groups to be able to assess the impact and amount of work required to port their key workflows from ARCHER to ARCHER2. It is also an important process to allow the ARCHER2 partners to assess where user issues are likely to arise and where there are gaps or issues with system configuration, software available, documentation and support. 

This Early Access period differed somewhat from those for previous UK national supercomputing services as this is one of the first production installations of the HPE Cray EX technology in the world (for previous services mature technology was being deployed). So, in this case, Early Access was also required to assess system stability and help iron out functionality issues. 

### Changes on ARCHER2 compared to ARCHER 

From a hardware perspective, the main changes are: 

- An increase in the number of cores per node from 24 on ARCHER to 128 on ARCHER2 
- The change from the Cray Aries interconnect on ARCHER to the new HPE Cray Slingshot interconnect on ARCHER2 

 

From a software perspective: 

- A change from the PBS Pro scheduler on ARCHER to the Slurm scheduler on ARCHER2 
- Non-availability of the Intel compilers and performance libraries (e.g. MKL) 
- A change from the Cray ALPS parallel application launcher (i.e. aprun) to the native Slurm parallel application launcher srun 
- A change to only allow dynamic linking of executables 
- A change in the way that different compiler environments are provided via modules 


With this large amount of change it is even more important than usual that the Early Access period allowed a range of users and user groups to evaluate the new system and provide feedback. 

## Communication during Early Access 

Given the new nature of the technology and the large number of changes, the opportunity for the Early Access users to have access to support and be able to provide feedback in an agile way was thought to be critical to the success of Early Access. The ARCHER2 service desk is the usual method of support for users but we wanted to provide a way for Early Access users to interact with each other and the ARCHER2 team. To provide this, we created a Slack instance that all Early Access users and the ARCHER2 team could use to get quick feedback on questions and issues and discuss the work they were doing. 

The use of Slack for support in this was does provide some challenges, these include: 

- Getting the balance right in terms of direct support through Slack and escalating to the service desk for investigation through the standard channels. 
- Making sure this additional communication channel is monitored properly by the support teams and that responses are provided in a timely manner. 
- Ensuring that the interactions on the, more informal, Slack are respectful to all. 
- Capturing the wealth of technical insight and information provided through Slack after the Early Access period ends and ensuring that is made available to the wider ARCHER2 user community in an appropriate way. 


We managed to make this work pretty smoothly by solving the easy questions through Slack and then migrating the more in-depth investigations to the ARCHER2 service desk. Slack also provided a really useful way of being able to keep users in touch with what was happing with the system if it was down for work or had intermittent issues. We also used it to get immediate feedback from the Early Access users on potential changes to the availability of the development queues on the system to make sure they met their requirements as well as possible. 

We have been taking periodic exports of the Slack content and, once the Early Access period is complete, we will review the contents and capture any useful technical details in the documentation or in blog posts. 

Users seemed the really appreciate Slack and we have had a number of positive comments about its use. 

> The Slack channel is greatly helpful - I like the atmosphere in the channel, and people in the channel are very nice and willing to help/offer suggestions and comments whenever someone needs help. (ARCHER2 Early Access user) 

> The Slack channel was very helpful, since it provided a more dynamic and responsive way of communicating, making announcements, and sharing benchmarks. (ARCHER2 Early Access user) 

For the Early Access Slack, all of the communication was in a single channel and we did have feedback that it might have been better to organise the discussion by topic into different channels. The downside to this approach is that some users may miss some useful information if it is in a channel that they are not monitoring. 

We also had feedback that some users preferred getting information via email rather than in Slack as email is more persistent. All key communications about system downtime were also sent to Early Access users via email as we are aware that not everyone uses Slack frequently. 

Overall, the Early Access Slack proved to be a really useful addition to our normal communication channels and support routes and is something that we will definitely use in future Early Access periods. There is also a case to be made for having such discussion channels in place for users throughout the remainder of the ARCHER2 service but there are a number of resourcing implications for this that need to be considered carefully before such a service could be made available. 

## Early, early access 

In summary, this Early Access period has really been more like “early, early access” given where the technology is in its maturity and stability and so building a community composed of the Early Access users and the ARCHER2 team allowed the period to be as useful as possible for both the users and the service itself. We have definitely learned a lot about the technology with the help and insight from the user community and their feedback indicates that they have valued the more direct connection to the ARCHER2 support team during this period. 

I particularly want to say a big thank you to all the Early Access users who have given their advice and insight generously throughout the Early Access period and to the ARCHER2 staff from UKRI, HPE Cray and EPCC who have worked hard to make Early Access as productive as possible for the user community. 

> Very helpful with fast responses from EPCC experts. It is particularly useful to have sight of issues raised by the whole community. (ARCHER2 Early Access user) 