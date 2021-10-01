---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---
#### ARCHER2 4-Cabinet is Open and login nodes are available to users.  Compute nodes are currently unavailable following a power issue.  Our team are working to restore as soon as possible.

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


## Maintenance Sessions:Quarter 4 2021 (1st Oct - 31st December 2021)

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Unplanned | Partial: Compute Nodes | 01/10/21 0952 | TBA | ARCHER2 4Cabinet: Compute Nodes | Users will be able to connect to User Access Nodes and will be able to submit jobs to the compute nodes. The queued jobs will start once the compute nodes are returned to service. | A power issue at the Advanced Computing Facility (ACF) |

## Maintenance Logs for previous periods

[Previous maintenance logs](maintenance/)

## System Status mailings
If you would like to receive email notifications about system issues and outages, [please subscribe to the *System Status Notificiations* mailing list via SAFE](https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list)

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
