---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---

- [Known Issues](#known-issues)
    - [Current Issues](#current-issues)
    - [Recently Resolved Issues](#recently-resolved-issues)
- [Upcoming Maintenance Sessions](#upcoming-maintenance-sessions)
- [Completed Maintenance Sessions](#completed-maintenance-sessions)
- [ARCHER2 Node status](#archer2-node-status)
- [System Status Mailings](#system-status-mailings)
- [FAQ](#faq)

## Known Issues
[Known Issues](https://docs.archer2.ac.uk/known-issues/) that our team are working to resolve but which may take some time to fix.


###  Current Issues
No current issues. 

### Recently Resolved Issues

#### Update: Wednesday 15th September 1600
ARCHER2 4 Cabinet Service has now been returned to service. 
The Singularity work which was scheduled to take place today has also been completed. 

We apologise for the inconvenience caused by this unplanned outage and please do report any issues you may experience to support@archer2.ac.uk. 

#### Update: Wednesday 15th September 0800
HPE continue to work to resolve issues with the management network following the power issues in the Edinburgh area yesterday. 
We will provide more information on timescales for restoration of service as soon as it is available.

#### Issue: Tuesday 14th September 1100
Power issues in the Edinburgh area have caused ARCHER2 compute nodes and /work file system to be unavailable. This, in turn, means that 
login access to ARCHER2 system is also unavailable.


#### Singularity Issue: Wednesday 15th September
A fix has been applied to restore the functionality of the Singularity containers software on the ARCHER2 compute nodes. Please report any issues that you may experience to support@archer2.ac.uk. 


## Upcoming Maintenance Sessions
### Full Maintenance: Wednesday 15th September 0900 - 1700 

There will be a full service maintenance session to allow a fix to be applied to resolve the Singularity issue and also to allow HPE to perform some remedial tasks.  
The queues on the system will start to drain from 0900 on Monday 13th September to ensure that all running jobs will have completed by the start of the maintenance session.  

Please submit jobs to the batch scheduler until the start of the maintenance and jobs will either run to completion before the start of the maintenance session or if your requested wall time does not allow,  they will run once the service is returned. 

Users will not be able to connect to the User Access Nodes (UANs) during the full maintenance and you will be notified once the maintenance has completed. 

We apologise for the short notice and any inconvenience caused by this maintenance session. 


## Completed Maintenance Sessions


| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Completed | Full | 15/09/21 0900 | 15/09/21 1700 | ARCHER2 4Cabinet: User Access and Compute Nodes | Users will not be able to connect. Jobs can be queued and will start once the service returns | Apply a fix for Singularity Issue. |

<!--
| Completed | At risk | 7/9/21 | 9/9/21 | ARCHER2 4Cabinet: User Access and Compute Nodes | Interruptions to connections to UANs |  Allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF) |
| Completed | At risk | 25/8/21 | 25/8/21 | ARCHER2 4Cabinet: User Access and Compute Nodes | Momentary loss of external network traffic to the User Access Nodes (UAN) on ARCHER2 |  Allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF) |
| Completed | At risk | 25/8/21 | 25/8/21 | ARCHER2 4Cabinet: User Access and Compute Nodes | Connection to the User Access Nodes (UAN) on ARCHER2 may be lost.  File transfers may be affected. Jobs running on the compute nodes will not be impacted |  Allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF) |

-->


 


### Tuesday 7th - Thursday 9th September
The network work has now been completed successfully. 
This week there will be two periods of at-risk maintenance to allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF). 


### Completed and Service returned: Thursday 26th August 1115

A full service maintenenace to allow HPE to apply an essential security patch to the operating system.  

The queues on the system will start to drain from 1400 on Monday 23rd August to ensure that all running jobs will have completed by the start of the maintenance session.  

Please submit jobs to the batch scheduler until the start of the maintenance and jobs will either run to completion before the start of the maintenance session or if your requested wall time does not allow,  they will run once the service is returned. 

We apologise for the short notice and any inconvenience caused by this maintenance session. 


### Wednesday 25th August: Networking Maintenance
The final phase of the essential network maintenance at the Advanced Computing Facility (ACF) will be on Wednesday 25th August. 
We expect this change will involve a momentary loss of external network traffic to the User Access Nodes (UAN) on ARCHER2 which we anticipate will not be noticed by users although it may interrupt file transfers. The work will only affect external communications and jobs running on the compute nodes will not be impacted. 

### Wednesday 18th August: Networking Maintenance 
The networking maintenance has now been completed successfully at the Advanced Computing Facility (ACF). 
We expect the outage will be very short, and will take place between 10:00 and 15:00. 

During this period, your connection to the User Access Node (UAN) may be lost. Please wait a couple of minutes and then try to reconnect. 
File transfers may be affected. Jobs running on the compute nodes will not be impacted. 


## ARCHER2 Node Status

![image](https://safe.epcc.ed.ac.uk/Graphs/4cab.png)
{: .img-center style="width: 80%" 
alt="ARCHER2 Node Status over time" 
title="ARCHER2 Node Status over time"}

## System Status mailings
If you would like to receive email notifications about system issues and outages, please subscribe to the "System Status Notificiations" mailing list via SAFE <https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list>

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
