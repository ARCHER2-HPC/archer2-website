---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---

## Known Issues
[Known Issues](https://docs.archer2.ac.uk/known-issues/) that our team are working to resolve but which may take some time to fix.


###  Current Issues
#### Singularity Issue: Thursday 26th August
As part of the security patch work we have had to disable the Singularity containers software on the ARCHER2 compute nodes. We will continue to investigate this issue with HPE and plan to re-enable to the functionality on the compute nodes as soon as possible. Singularity containers on the login nodes are unaffected by this issue and continue to work as expected.


### Recently Resolved Issues
There are no recently resolved issues. 

### Upcoming Maintenance Sessions: Tuesday 7th - Thursday 9th September
This week there will be two periods of at-risk maintenance to allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF). 

#### Tuesday 7th September AM, 
The inactive User Access Node (UAN), UAN02 will be moved to the new network. The Domain Name Server (DNS) will be changed and the UAN02 will be opened and will become an active UAN. Existing sessions on UAN01 will be unaffected.

#### Thursday 9th September AM, 
Conenctions to UAN01 will be blocked and all new conenctions will use UAN02. 

#### Thursday 9th September PM, 
A warning message will be sent to all remaining sessions on UAN01 and then all connections on the UAN01 will be terminated. The UAN01 and the backend “CAN” connections will then be migrated to the new network. The CAN migration will involve a short outage to external DNS lookups for around 5 mins.

Once this has completed, the DNS will be changed to make UAN01 the active UAN again.

Please report any issues you may experience to support@archer2.ac.uk. 

 
### Completed Maintenance Sessions
#### Wednesday 25th August 1400 - Friday 27th August 1400 : Essential Security Maintenance: 
#### Completed and Service returned: Thursday 26th August 1115

A full service maintenenace to allow HPE to apply an essential security patch to the operating system.  

The queues on the system will start to drain from 1400 on Monday 23rd August to ensure that all running jobs will have completed by the start of the maintenance session.  

Please submit jobs to the batch scheduler until the start of the maintenance and jobs will either run to completion before the start of the maintenance session or if your requested wall time does not allow,  they will run once the service is returned. 

We apologise for the short notice and any inconvenience caused by this maintenance session. 


#### Wednesday 25th August: Networking Maintenance
The final phase of the essential network maintenance at the Advanced Computing Facility (ACF) will be on Wednesday 25th August. 
We expect this change will involve a momentary loss of external network traffic to the User Access Nodes (UAN) on ARCHER2 which we anticipate will not be noticed by users although it may interrupt file transfers. The work will only affect external communications and jobs running on the compute nodes will not be impacted. 

#### Wednesday 18th August: Networking Maintenance 
The networking maintenance has now been completed successfully at the Advanced Computing Facility (ACF). 
We expect the outage will be very short, and will take place between 10:00 and 15:00. 

During this period, your connection to the User Access Node (UAN) may be lost. Please wait a couple of minutes and then try to reconnect. 
File transfers may be affected. Jobs running on the compute nodes will not be impacted. 




## System Status mailings
If you would like to receive email notifications about system issues and outages, please subscribe to the "System Status Notificiations" mailing list via SAFE <https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list>

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
