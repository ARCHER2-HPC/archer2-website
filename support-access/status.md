---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---
## Tuesday 4th January: All jobs that finish after 10:00 GMT will be charged on ARCHER2 full system 

## Monday 10th January: ARCHER2 4 Cabinet will be removed from service at 12:00 GMT. Please ensure you remove all require data from /work before this time.  

- [Current System Load - Full System](#current-system-load---full-system)
- [Current System Load - 4-cabinet](#current-system-load---4-cabinet)
- [Known Issues](#known-issues)
- [Recently Resolved Issues](#recently-resolved-issues)
- [Maintenance Sessions](#maintenance-sessions)
- [System Status Mailings](#system-status-mailings)
- [FAQ](#faq)




## Current System Load - Full System

The plot below shows the status of nodes on the current ARCHER2 Full System service. A description of each
of the status types is provided below the plot.

![image](https://safe.epcc.ed.ac.uk/Graphs/archer2.png)
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


## Current System Load - 4-cabinet

The plot below shows the status of nodes on the current ARCHER2 4-cabinet service. A description of each
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



## Name change for ARCHER2 4 Cabinet System

The name for the ARCHER2 4 Cabinet service is being changed to **login-4c.archer2.ac.uk** from Wednesday 6th October

This is to allow login.archer2.ac.uk to be used for the full ARCHER2 23 Cabinet service when the service opens. login.archer2.ac.uk will no longer function for the 4 cabinet service so please change to using login-4c.archer2.ac.uk now.

- login-4c.archer2.ac.uk - ARCHER2 4 Cabinet Service 
- login.archer2.ac.uk – Full ARCHER2 Service (when the service opens)

## Service Alerts

2021-12-31 10:00 Hardware issue has caused some nodes to be downed. This will cause jobs running on those nodes to fail. The hardware issue is being investigated and refunds will be issued for any jobs that have failed.

The ARCHER2 documentation also covers some [Known Issues](https://docs.archer2.ac.uk/known-issues/) which users may encounter when using the system.

## Recent Service Alerts


| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Open | Issue | 2021-12-31 10:00 |  | ARCHER2 Full System: Downed nodes  | A number of nodes downed due to hardware issue, running jobs on downed nodes failed  | hardware issue |
| Resolved | Issue | 2021-12-20 13:00 | 2021-12-20 14:12 | ARCHER2 4-cabinet: Slurm  | Slurm slowdown - slurm rebooted at 14:00. Running jobs continued without issue. | Slurm slowdown |
| Resolved | Issue | 2021-12-16 0405 | 2021-12-16 0941 | ARCHER2 full system: Slurm and outgoing SSH | Slurm commands did not work. Outgoing SSH connections did not work. Running jobs continued without issue. | The ARCHER2 spine switch network became unresponsive. |
| Resolved | Issue | 2021-11-14 0800 | 2021-11-15 0940 | ARCHER2 4-cabinet: status monitoring | The load chart on the website is missing some historical data. | An issue on one of the login nodes caused usage data to not be collected. |
| Resolved | Issue | 2021-11-05 0800 | 2021-11-05 1130 | ARCHER2 4-cabinet: compute nodes | A large number of compute nodes were unavailable for jobs.  | A power incident in the Edinburgh area caused a number of cabinets to lose power. |  
| Resolved | Issue | 2021-11-03 1445 | 2021-11-03 1445 | ARCHER2 4-cabinet | The login-4c.archer2.ac.uk address is unreachable so logins via this address will fail. Users can use the address 193.62.216.1 instead.  | A short network outage at the University of Edinburgh caused issues with resolving the ARCHER2 login host names. |  
| Resolved | Issue | 2021-11-01 0930 | 2021-11-01 1130 | ARCHER2 4-cabinet | There were 285 nodes down so queue times may be longer. The nodes have now been returned to service.  | A user job hit a known bug and brought down 256 nodes. The bug has been fixed in Shasta 1.5 which will be available on the full service. |   
## Maintenance Sessions: Quarter 1 2022 (1st January - 31st March 2022)

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
|        |      |       |     |        |             |        |

## Maintenance Sessions: Quarter 4 2021 (1st October - 31st December 2021)

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Complete | Full  |2021-10-26 0900  |2021-10-26  1700  | ARCHER2 4-cabinet | Users will be unable to run jobs and the /work filesystem will not be available | Reboot of the High Speed Network (HSN). The River (support) rack was moved to a new protected power supply. The 4cabinet filesystem move to a protected power supply will be completed next week when additional power supplies are available. |
| Complete | Partial: RDFaaS |2021-10-21  0900 | 2021-10-21  1700 | RDFaaS: /epsrc and /general | Users will be unable to access their files on the RDFaaS i.e. the /epsrc and /general filesystems. | Software upgrade of E1000 System which hosts the RDFaaS |
| Complete | Partial: RDFaaS | 2021-10-18 0900 | 2021-10-18 1700 | RDFaaS: /epsrc and /general | Users will be unable to access their files on the RDFaaS i.e. /epsrc and /general filesystems. | Upgrade and reconfiguration of high speed switches |
| Complete | Partial: Compute Nodes | 2021-10-01 0952 | 2021-10-01 1544 | ARCHER2 4Cabinet: Compute Nodes | Users will be able to connect to User Access Nodes and will be able to submit jobs to the compute nodes. The queued jobs will start once the compute nodes are returned to service. | A power issue at a substation local to the Advanced Computing Facility (ACF). |



## Maintenance Logs for previous periods

[Previous maintenance logs](maintenance/)

## System Status mailings
If you would like to receive email notifications about system issues and outages, [please subscribe to the *System Status Notifications* mailing list via SAFE](https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list)

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
