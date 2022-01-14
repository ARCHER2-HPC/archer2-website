---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
--- 

- [Current System Load - Full System](#current-system-load---full-system)
- [Service Alerts](#service-alerts)
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

<!--

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

-->


## Service Alerts

The ARCHER2 documentation also covers some [Known Issues](https://docs.archer2.ac.uk/known-issues/) which users may encounter when using the system.

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Ongoing | Issue | 2021-12-31 10:00 |  | ARCHER2 Full System: Downed nodes  | A number of nodes downed due to hardware issue, running jobs on downed nodes failed  | Hardware issue |

### Recent Service Alerts

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Resolved | Notice | 2022-01-10 12:00 | 2022-01-10 12:00 | ARCHER2 4-cabinet system  | Users can no longer use the 4-cabinet ARCHER2 system | The ARCHER2 4-cabinet system was removed from service as planned |
| Resolved | Issue | 2022-01-09 10:00 | 2022-01-10 10:30 | ARCHER2 full system, ARCHER2 4-cabinet system, SAFE  | Outgoing network access from ARCHER2 systems to external sites was not working. SAFE response was slow or degraded.  | DNS issue at datacentre |

### Service Alerts for previous periods

[Previous service alerts](history/alerts)

## Maintenance Sessions 

###Quarter 1 2022 (1st January - 31st March 2022)

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Planned: RFC0093 | Partial : UANs and Serial| 2022-01-26 10:00|2022-01-26 12:00 | ARCHER2 UANs and Serial Nodes | Users will be unable to connect to ARCHER2 and no jobs will run on the serial nodes.  | To attach the ARCHER2 /home filesystem to a new network at the Advanced Computing Facility   |


### Maintenance Logs for previous periods

[Previous maintenance logs](history/maintenance)

## System Status mailings
If you would like to receive email notifications about system issues and outages, [please subscribe to the *System Status Notifications* mailing list via SAFE](https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list)

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
