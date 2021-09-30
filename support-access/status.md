---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---
#### ARCHER2 4-Cabinet is Open and fully available to users

- [Current System Load](#current-system-load)
- [Known Issues](#known-issues)
- [Recently Resolved Issues](#recently-resolved-issues)
- [Maintenance Sessions](#maintenance-sessions)
- [System Status Mailings](#system-status-mailings)
- [FAQ](#faq)

## Current System Load

The plot below shows the status of nodes on the current ARCHER2 service. A description of each
of the status types is provided below the plot.

![image](https://safe.epcc.ed.ac.uk/Graphs/4cab.png)
{: .img-center style="width: 80%" 
alt="ARCHER2 Node Status over time" 
title="ARCHER2 Node Status over time"}

- *alloc*: Nodes running user jobs
- *idle*: Nodes available for user jobs
- *resv*: Nodes in reservation and not available for standard user jobs
- *down*, *drain*, *maint*, *drng*, *comp*: Nodes unavailable for user jobs
- *mix*: Nodes in multiple states 

Note: the long running reservation visible in the plot corresponds to the *short* QoS which
is used to support small, short jobs with fast turnaround time.

## Known Issues
[Known Issues](https://docs.archer2.ac.uk/known-issues/) that our team are working to resolve but which may take some time to fix.

## Recently Resolved Issues
####  Slow running large jobs.

We were aware of intermittent degraded performance on the High-speed Network, which lead to intermittent slow running of jobs (especially jobs with large node counts). This problem should have been resolved during a maintenance session of Thursday 30th September.
Please report any issues that you may experience after this to support@archer2.ac.uk. 


## Maintenance Sessions: Quarter3 2021 (1st July-30th September 2021)

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Completed | Partial: Compute Nodes | 30/09/21 0830 | 30/09/21 1130 | ARCHER2 4Cabinet: Compute Nodes | Users will be able to connect to User Access Nodes and will be able to submit jobs to the compute nodes. The queued jobs will start once the compute nodes are returned to service. | A switch within the 4 Cabinet Service requires a reboot |
| Completed | Unplanned Full | 14/09/21 1100 | 15/09/21 1600 | ARCHER2 4Cabinet: User Access and Compute Nodes | Users will not be able to connect. | Power Issues within the Edinburgh area |
| Completed | Full (took place within unplanned outage) | 15/09/21 0900 | 15/09/21 1600 | ARCHER2 4Cabinet: User Access and Compute Nodes | Users will not be able to connect. Jobs can be queued and will start once the service returns | Apply a fix for Singularity Issue. |
| Completed | At-risk | 7/9/21 | 9/9/21 | ARCHER2 4Cabinet: User Access and Compute Nodes | Momentary interruptions to connections to UANs |  Allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF) |
| Completed | Full | 25/8/21 1400 | 26/8/21 1115 | ARCHER2 4Cabinet: User Access and Compute Nodes | No access to the UANs and the queues will start to drain on the compute nodes from Monday 23rd August at 1400  |  Allow HPE Systems team to apply an essential security patch to the ARCHER2 4 cabinet system |
| Completed | At-risk | 25/8/21 | 25/8/21 | ARCHER2 4Cabinet: User Access and Compute Nodes | Momentary loss of external network traffic to the User Access Nodes (UAN) on ARCHER2 |  Allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF) |
| Completed | At-risk | 18/8/21 1000 | 18/8/21 1500 | ARCHER2 4Cabinet: User Access and Compute Nodes | Connection to the User Access Nodes (UAN) on ARCHER2 may be lost.  File transfers may be affected. Jobs running on the compute nodes will not be impacted |  Allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF) |

## System Status mailings
If you would like to receive email notifications about system issues and outages, [please subscribe to the *System Status Notificiations* mailing list via SAFE](https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list)

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
