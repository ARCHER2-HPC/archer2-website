---
layout: post
title: ARCHER2 Weekly Newsletter
date: 2026-08-26 11:00:00
author: ARCHER2 Service
tags: [newsletters] 
categories: [news]
---

- [Message-passing Programming with MPI]({{ page.url }}#message-passing-programming-with-mpi), Durham, 9-10 September 2026, 9:30 - 17:00
- [Data Analysis and Visualisation in Python]({{ page.url }}#data-analysis-and-visualisation-in-python), Online, 28 - 29 September 2026 09:30 - 16:30
- [Modern C++ for Computational Scientists]({{ page.url }}#modern-c-for-computational-scientists), Online, 14 - 16 October 2026 09:30 - 16:30
- [CHARTED]({{ page.url }}#charted---all-funds-open-for-application) - All Funds Now Open to Applications
- [Announcing PowerSched trial]({{ page.url }}#announcing-powersched-trial-3rd-10th-september) (3rd-10th September) 
- [ARCHER2 Image and Video competition 2026]({{ page.url }}#archer2-image-and-video-competition-2026)
- [ARCHER2 end of service: 21 Nov 2026]({{ page.url }}#archer2-end-of-service-21-nov-2026)
- [ARCHER2 User Survey 2026]({{ page.url }}#archer2-user-survey-2026)
- [Recently added known issues]({{ page.url }}#recently-added-known-issues)
- [Upcoming ARCHER2 training]({{ page.url }}#upcoming-archer2-training)  


<!--more-->



## Message-passing Programming with MPI

Durham, 9-10 September 2026, 9:30 - 17:00

The world’s largest supercomputers are used almost exclusively to run applications which are parallelised using Message Passing. The course covers all the basic knowledge required to write parallel programs using this programming model, and is directly applicable to almost every parallel computer architecture.

Parallel programming by definition involves co-operation between processors to solve a common task. The programmer has to define the tasks that will be executed by the processors, and also how these tasks are to synchronise and exchange data with one another. In the message-passing model the tasks are separate processes that communicate and synchronise by explicitly sending each other messages. All these parallel operations are performed via calls to some message-passing interface that is entirely responsible for interfacing with the physical communication network linking the actual processors together. This course uses the de facto standard for message passing, the Message Passing Interface (MPI). It covers point-to-point communication, non-blocking operations, derived datatypes, virtual topologies, collective communication and general design issues.

The course is delivered in an intensive two-day face-to-face format, followed by a half-day online follow up session. It is taught using a variety of methods including formal lectures, practical exercises, programming examples and informal tutorial discussions. This enables lecture material to be supported by the tutored practical sessions in order to reinforce the key concepts.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/260909-mpi/ )




## Data Analysis and Visualisation in Python 

Online, 28 - 29 September 2026 09:30 - 16:30

Python is a general purpose programming language that is useful for writing scripts to work effectively and reproducibly with data.

This is an introduction to Python designed for participants with no programming experience.

This course covers:

-    Some basic information about Python syntax.
-    The Jupyter notebook interface.
-    How to import CSV files.
-    Using the Pandas package to work with data frames.
-    How to calculate summary information from a data frame.
-    Brief introduction to plotting.
-    How to work with databases directly from Python.

[Full details and registration]( https://www.archer2.ac.uk/training/courses/260928-analysis-visualisation-python/ )


## Modern C++ for Computational Scientists

Online, 14 - 16 October 2026 09:30 - 16:30

With the recent revisions to the C++ language and standard library, the ways it is now being used are quite different. Used well, these features enable the programmer to write elegant, reusable and portable code that runs efficiently on a variety of architectures.

However it is still a very large and complex tool. This course will cover a minimal set of features to allow an experienced non-C++ programmer to get to grips with language.

These include:

-    overloading
-    templates
-    containers
-    iterators
-    lambdas
-    standard algorithms

We will also briefly cover some important libraries for numerical computing.

[Full details and registration ]( https://www.archer2.ac.uk/training/courses/261014-modern-c/ )




## CHARTED - All funds open for application 

CHARTED (https://drtp-skills.ac.uk/about/charted/) aims to make the dRTP training landscape easier to navigate for all members of the community, to improve the understanding of skills and roles within the space and improve visibility and accessibility of training resources.   This is being achieved by supporting a range of initiatives via four funds:

Recently opened funds for larger projects:
- [Fund 1 ](https://drtp-skills.ac.uk/funds-fair/) :  FAIR Ecosystem - projects up to £40,000 (first deadline 30th September 2026) 
- [Fund 3 ](https://drtp-skills.ac.uk/funds-tools/):  Tools and Frameworks - large projects up to £150k and small projects up to £15k (first deadline 30th September 2026)

Ongoing funds for smaller projects:
- [Fund 2 ](https://drtp-skills.ac.uk/funds-community/):  Community Activities - projects up to £5,000 (rolling deadline 15th of alternate months) 
- [Fund 4 ](https://drtp-skills.ac.uk/funds-prof-dev/):  Professional Development - projects up to £5,000 (rolling deadline 15th of each month)

More details are available via the individual fund links above and also from webinar recordings on this page:  [Funding Overview ](https://drtp-skills.ac.uk/funds/)
If you are interested in joining our reviewing team, please register here to receive more information:  [Reviewer Call ](https://drtp-skills.ac.uk/funds-reviewers/)
To subscribe to the CHARTED mailing list and receive updates on funding calls and events, sign up here:  [Sign up to CHARTED ](https://mailchi.mp/aec876699acd/subscribe-to-charted)



## Announcing PowerSched trial (3rd-10th September) 


During 3rd-10th September, the CSE will be trailing a new power-management technology, called PowerSched, on ARCHER2. In simple terms, PowerSched eliminates the need for [manually controlling CPU frequencies ](https://docs.archer2.ac.uk/user-guide/energy/#controlling-cpu-frequency), plus has other interesting power-management features we wish to exploit.

CSE has been testing PowerSched over recent weeks and, working with the developers at HPE and HLRS (Stuttgart), CSE has identified a configuration that we believe will provide a very similar behaviour to the current manual CPU frequency control.

During the trial, users should see little or no change, though people interested in benchmarking software should be aware that jobs may run slightly slower or slightly faster during the trial.

Subject to progress with the trial, on the final day (10th September), we may adjust the PowerSched configuration aiming to reduce topical system power draw. This will lead to a modest increase (several percent) in job runtimes, but will allow us to gather important information on PowerSched's ability to dynamically reduce system power draw.

CSE would be interested to hear of any users who see performance differences during the trial. Feedback (as well as concerns about trial) may be raised with the ARCHER2 Service Desk.


## ARCHER2 Image and Video competition 2026

Share your images and videos to support excellence and promote the contribution of ARCHER2 to outstanding research. The winner of the competition will be awarded £250.

The winning image or video, along with a selection of other entries, will also be featured on the ARCHER2 website and in EPCC and ARCHER2 publications. Credit will be given to the entrant in all cases. Key Details

- Competition Opens: 28 July 2026
- Submission Deadline: 4th September 2026
- Judging: September/October 2026
- Prizes:
    - Best image : £150
    - Best video : £150
    - Best early career researcher submission : £150
    - Overall winner, selected from the above three winners : additional £100

The ARCHER2 Image and Video Competition is an event for all users of ARCHER2 to share their images or videos of “ARCHER2 Enabling Research”

[Full details and entry forms]( https://www.archer2.ac.uk/community/image-comp/ )



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
- [Message-passing Programming with MPI](https://www.archer2.ac.uk/training/courses/260909-mpi/), Durham, 9-10 September 2026, 9:30 - 17:00
- [Running GeoChemFoam on HPC: From Micro-CT Images to Remote Visualisation](https://www.archer2.ac.uk/training/courses/260916-geochemfoam-vt/), free webinar, Wednesday 16th September 2026 14:00 - 15:30
- [Data Analysis and Visualisation in Python](https://www.archer2.ac.uk/training/courses/260928-analysis-visualisation-python/), Online, 28 - 29 September 2026 09:30 - 16:30
- [Modern C++ for Computational Scientists](https://www.archer2.ac.uk/training/courses/261014-modern-c/), online, 14 - 16 October 2026 09:30 - 16:30

[Further details of upcoming training](https://www.archer2.ac.uk/training/#upcoming-training)

We always welcome researchers wishing to present their work in a webinar - please contact the [Service Desk](https://www.archer2.ac.uk/support-access/servicedesk.html) if you would be interested in presenting your work.

[Twitter](https://twitter.com/ARCHER2_HPC)

[Recordings of past courses](https://www.archer2.ac.uk/training/materials/)

[Recordings of past virtual tutorials](https://www.archer2.ac.uk/training/materials/webinars)
