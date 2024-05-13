---
layout: post
title: ARCHER2 Capability Day Review
date: 2024-05-13 10:00:00
author: Andy Turner (EPCC)
tags: [blog]
categories: [news]
---

Thursday 14 March 2024 saw the first of the new, regular ARCHER2 Capability Days. The Capability Day facility proved hugely popular, was very oversubscribed and was extremely successful. This blog post reviews the first ARCHER2 capability Day and describes the improvements that have been made for the second Capability Day period starting on Tuesday 4 June 2024.

<!--more-->

- [Why Capability Days?](#why-capability-days)
- [Capability Day design](#capability-day-design)
- [Capability Day usage](#capability-day-usage)
- [Lessons learned and recommendations](#lessons-learned-and-recommendations)
- [Further information](#further-information)

## Why Capability Days?

The motivations and objectives that led to ARCHER2 Capability Days are:

Motivation:

- Enhancing world-leading science from ARCHER2 by enabling modelling and simulation at scales that are not otherwise possible.
- Enabling capability use cases that are not possible on other UK HPC services.
- Providing a facility that can be used to test scaling to help prepare software and communities for future exascale resources.
- Increasing the technical expertise of the UK HPC community in running at large scale and improving documentation and training to support these efforts.

Objectives:

- Enable researchers to test at capability scale to prepare for production research at these large sizes (e.g. through an application for Pioneer time). This testing should allow: 
- Testing without impacting current budgets (i.e. it is free).
- Good turn-around time, to allow for multiple performance profiling tests and/or software development/debugging in a short time period.
- Support users as they develop and prepare codes to run at scale.
- Minimise the impact on normal production research use of ARCHER2, while accepting some impact will occur.

## Capability Day design

The design of the first Capabilty Day was produced to try and meet the objectives. It also drew inspiration from the XXL Day provided on the [Hawk HPC service](https://kb.hlrs.de/platforms/index.php/HPE_Hawk) at [HLRS](https://www.hlrs.de/).

- Largest jobs should have the highest priority.
- Jobs that are subdivided into job steps that are smaller than the minimum size of a capability job (512-nodes) will not be allowed.
- 4352 nodes reserved (17 full cabinets) for capability jobs:
  + Should be chosen as a coherent block of nodes, if possible
  + Leaves a maximum of 1508 nodes available during capability day for standard jobs.
- Jobs that run in the capability section will be uncharged.
- Users can queue up work beforehand.
- Maximum of 24h long - ends as soon as all pending work is complete.
  + Cancelled if no pending work 12h before start of session.
- Only job sizes of 512-nodes (65,536 cores) and above can run.
- Maximum runtime of 3 hours

This design was implemented within the Slurm connfiguration on ARCHER2.

## Capability Day usage

We break down the use in various ways below. The job states we consider are:

- *Submitted* - number of jobs submitted to the `capabilityday` QoS.
- *Not scheduled* - number of jobs that were in the queue but never scheduled to run (due to demand).
- *Scheduled* - number of jobs that were started by the scheduler.
- *Cancelled* - number of jobs that were cancelled by the users while they were running.
- *Completed* - number of jobs that completed without errors detected by the scheduler or Timeout (see below).
- *Failed (hardware)* - number of jobs that failed due to hardware fault detected by the scheduler.
- *Failed (software)* - number of jobs that failed due to software fault detected by the scheduler. These could be user error or system software error (the scheduler does not distinguish between the two).
- *Timeout* - number of jobs that were stopped by the scheduler because they hit their wall time limit. It is impossible to assess if this was intended by the user submitting the job or due to slower runtime than expected.

Table 1 shows the overall breakdown by jobs scheduled or not scheduled. It is clear that Capability Day was extremely popular and actually oversubscribed leading to over 50% of the submitted jobs not getting a chance to run during the 24 h period. This led to some frustration for users. 46% of jobs were scheduled and Table 2 provides a breakdown of scheduled jobs by their final state. The ARCHER2 technology proved to be very reliable, even for the largest jobs: around 80% of these scheduled jobs completed or ran to their defined maximum time. Only a small number of jobs failed with an error: 1 job with a hardware error and 19 jobs with software errors. The software errors could be failures with the job script (e.g. a command typo), failures with user software or failures of system software. Having a facility to test job scripts and executables ahead of Capability Day would provide a clear benefit to users.

Table 1: Capability Day job statistics broken down by whether jobs were scheduled or not.

| Job state | Number | % Total jobs |
|-----------|-------:|-------------:|
| Submitted | 246 | 100% |
| Not scheduled | 133 | 54% |
| Scheduled | 113 | 46% |

Table 2: Scheduled job statistics broken down by job state.

| Job state | Number | % Scheduled jobs |
|-----------|-------:|-------------:|
| Scheduled | 113 | 100% |
| Cancelled | 4 | 4% |
| Completed | 62 | 55% |
| Failed (hardware) | 1 | 1% |
| Failed (software) | 19 | 17% |
| Timeout | 28 | 25% |

Table 3 provides a breakdown by both job size and job state and reveals the high level of success in running all sizes of jobs right up to the very largest jobs. From this data you can see that the prioritisation by job size results in a higher proportion of the largest jobs being run compared to the proportion of jobs submitted in each size category. This prioritisation of large jobs (as also happens during normal operation) was the intention during the Capability Day planning and design. Interestingly, the single hardware failure occurred for the first of the very large jobs that ran on Capability Day suggesting that there was an unidentified bad node in the original reservation set for the Capability Day.

Table 3: Capability Day job statistics broken down by job size and job state.

| Job state | 4096+ nodes | 2048-4095 nodes | 1024-2047 nodes | 512-1023 nodes |
|-----------|--:|--:|--:|--:|
| Submitted | 14 | 22 | 70 | 140 |
| Not scheduled | 4 | 7 | 27 | 95 |
| Scheduled | 10 | 15 | 43 | 45 |
| Cancelled | 0 | 0 | 2 | 2 |
| Completed | 5 | 11 | 27 | 19 | 
| Failed (hardware) | 1 | 0 | 0 | 0 |
| Failed (software) | 2 | 1 | 4 | 12 |
| Timeout | 2 | 2 | 12 | 12 |

The number of nodes reserved for Capability Day, 4352, was chosen to match on to a defined number of full ARCHER2 cabinets/groups. In practice, it was found that very few complete groups were able to be scheduled in the Capability Day reservation due to outstanding failed nodes (there was a maximum of 5 full complete groups in the final reservation set). The side effect of this choice of node count was that when a very large job was running (4096 nodes), there was no space to run another Capability Day job on the remaining 256 nodes as the minimum job size was 512 nodes. We discuss potential changes for future Capability Days to address this issue below.

### Software use

The high level of demand for resources on Capability Day coupled with the broad range of projects that ran jobs, led to a wide range of different software types run by users. Figure 1 shows the percentage CU use during Capability Day broken down by software used, and Table 4 links the different software to the research area in which it is typically used. This data shows that the jobs run during Capability Day covered a good range of the different research areas present on ARCHER2 during normal operation. The "Unknown" category covers executable names from jobs where do not have records of what software package the executable name is linked to.

The job size distribution by software is shown by the boxplots in Figure 2. This data clearly shows that many users used Capability Day to test the performance and scaling of software at very high node counts as the same software packages appear across a range of node counts.

 
Figure 1: % CU use on Capability Day broken down by software used.

![image]({{ site.baseurl }}/img/blog/2024-05_capday_software_use.png)
{: .img-center style="width: 60%" alt="Bar plot of software usage on ARCHER2 Capability Day"  }

Table 4: Research areas associated with software used during Capability Day.

| Research area | Software |
|---------------|----------|
| Materials science | CRYSTAL, VAMPIRE, CASTEP, LAMMPS |
| Computational fluid dynamics | Code_Saturne, Hydro3D |
| Combustion | PeleLMeX |
| Finite element | FEniCS |
| Plasma modelling | Smilei |
| Biomolecular simulation | GROMACS |
| Soft matter physics | ludwig |

Figure 2: Boxplots of job sizes during Capability Day broken down by software. (512 nodes = 65,536 cores; 1024 nodes = 131,072 cores; 2048 nodes = 262,144 cores; 4096 nodes = 524,288 cores). White disks represent the mean values.

![image]({{ site.baseurl }}/img/blog/2024-05_capday_software_size.png)
{: .img-center style="width: 60%" alt="Boxplot of software job size distribution on ARCHER2 Capability Day"  }

## Lessons learned and recommendations

The first ARCHER2 Capability Day proved hugely popular, allowing users to explore very large jobs on ARCHER2. It was also an excellent learing opportunity for the service and we identified a clear set of lessons that could be used to improve future Capability Days:

- *Number of nodes reserved for Capability Day:* the number of nodes reserved was chosen for a good technical reason: to provide access to 34 full 256 node blocks in the interconnect topology. In practice, this provided an additional restriction on the job mix that had a negative impact on the efficiency of use on Capability Day. 
   + **Recommendation:** For future days, the size of the reservation should either be expanded to 4608 nodes (4096 + 512) or the size of the reservation should be reduced to 4096 nodes to improve use efficiency.
   + **Recommendation:**  The length of Capability Day should be extended to 36 or 48 hours.
- *Supporting a wider range of use cases:* From the user feedback and level of demand, there seems to be a clear need for Capability Day to support a more flexible set of use cases.
   + **Recommendation:** Capability Day is preceded by a smaller, shorter reservation for jobs at the smaller end (256 – 512 nodes) to allow people to test at this scale to prepare for the larger jobs during full Capability Day.
- *Debugging and profiling tools at scale:* The debugging and profiling tools provided by HPE already support running at capability scale but the popular Linaro Forge debugging and profiling toolkit is limited to smaller node counts by the licence currently available on ARCHER2.
    + **Recommendation:** We should approach Linaro to see if they are willing to offer free licence extensions during Capability Day to allow ARCHER2 users to use their tools at capability scale.
- *Enabling access for a diversity of projects and consortia:* because of the higher than anticipated demand for resources, projects who wanted to test at the smaller end of job sizes allowed (512 nodes) were not able to successfully run jobs during this Capability Day.
    + **Recommendation:** To provide opportunities for a wider range of projects to test during future Capability Days we propose
        * The maximum runtime for jobs during Capability Day is reduced to 1 hour to provide more throughput.
        * We explore the use of the Slurm "maximum jobs running per account" (Slurm account is equivalent to budget code on ARCHER2) property to allow as wide a range as possible of projects to have access to resources.
- *Regularity of Capability Days:* regular Capability Days would give more opportunity for more users and projects to explore capability use and for the initiative to be improved.
    + **Recommendation:** Capability Days should be run at least once a quarter throughout the remainder of the ARCHER2 service. The next Capability Day should be in May.
- *High memory nodes:* high memory nodes are a scarce resource on ARCHER2 and there are not enough of them on the system to make up even the smallest jobs on Capability Day.
    + **Recommendation:** high memory nodes are excluded from Capability Day reservations.

## Further information

The second ARCHER2 Capability Day will run from 4 - 6 June 2024 and will incorporate many of the recommendations above.

For up to date information on ARCHER2 Capability Days, see the [Capability Days section in the User Guide](https://docs.archer2.ac.uk/user-guide/scheduler/#capability-days).
