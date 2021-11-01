---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---

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

## Name change for ARCHER2 4 Cabinet System

The name for the ARCHER2 4 Cabinet service is being changed to **login-4c.archer2.ac.uk** from Wednesday 6th October

This is to allow login.archer2.ac.uk to be used for the full ARCHER2 23 Cabinet service when the service opens. login.archer2.ac.uk will no longer function for the 4 cabinet service so please change to using login-4c.archer2.ac.uk now.

- login-4c.archer2.ac.uk - ARCHER2 4 Cabinet Service 
- login.archer2.ac.uk – Full ARCHER2 Service (when the service opens)

## Known Issues

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Ongoing | Issue | 2021-11-01 0930 | tbc | ARCHER2 4-cabinet | There are currently 285 nodes down so queue times may be longer | HPE are investigating the cause.  |   
| Ongoing | Issue | 2021-10-28 1130 BST | 2021-10-28 tbc | ARCHER2 4-cabinet | Some external connections are unavailable such as git pull, pushes | Network changes at the ACF have caused issues. The University network team are working to resolve these. |


[Known Issues](https://docs.archer2.ac.uk/known-issues/) that our team are working to resolve but which may take some time to fix.


## Maintenance Sessions:Quarter 4 2021 (1st Oct - 31st December 2021)

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Planned | Full  | 26/10/21 0900 BST | 26/10/21 1700 BST | ARCHER2 4-cabinet | Users will be unable to run jobs and the /work filesystem will not be available | Reboot of the High Speed Network (HSN). The River (support) rack was moved to a new protected power supply. The 4cabinet filesystem move to a protected power supply will be completed next week when additional power supplies are available. |
| Planned | Partial: RDFaaS | 21/10/21 0900 | 21/10/21 1700 | RDFaaS: /epsrc and /general | Users will be unable to access their files on the RDFaaS i.e. the /epsrc and /general filesystems. | Software upgrade of E1000 System which hosts the RDFaaS |
| Planned | Partial: RDFaaS | 18/10/21 0900 | 18/10/21 1700 | RDFaaS: /epsrc and /general | Users will be unable to access their files on the RDFaaS i.e. /epsrc and /general filesystems. | Upgrade and reconfiguration of high speed switches |
| Unplanned | Partial: Compute Nodes | 01/10/21 0952 | 01/10/21 1544 | ARCHER2 4Cabinet: Compute Nodes | Users will be able to connect to User Access Nodes and will be able to submit jobs to the compute nodes. The queued jobs will start once the compute nodes are returned to service. | A power issue at a substation local to the Advanced Computing Facility (ACF) |
| Planned | Partial: RDFaaS | 18/10/21 0900 | 18/10/21 1700 | RDFaaS: /epsrc and /general | Users will be unable to access their files on the RDFaaS i.e. /epsrc and /general filesystems. | Upgrade and reconfiguration of high speed switches |



## Maintenance Logs for previous periods

[Previous maintenance logs](maintenance/)

## System Status mailings
If you would like to receive email notifications about system issues and outages, [please subscribe to the *System Status Notifications* mailing list via SAFE](https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list)

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
