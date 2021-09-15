---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---

## Known Issues
[Known Issues](https://docs.archer2.ac.uk/known-issues/) that our team are working to resolve but which may take some time to fix.


###  Current Issues

#### Update: Wednesday 15th September 0800
HPE continue to work to resolve issues with the management network following the power issues in the Edinburgh area yesterday. 
We will provide more information on timescales for restoration of service as soon as it is available.

#### Issue: Tuesday 14th September 1100
Power issues in the Edinburgh area have caused ARCHER2 compute nodes and /work file system to be unavailable. This, in turn, means that 
login access to ARCHER2 system is also unavailable.


### Recently Resolved Issues
#### Singularity Issue: Wednesday 15th September
A fix has been applied to restore the functionality of the Singularity containers software on the ARCHER2 compute nodes. Please report any issues that you may experience to support@archer2.ac.uk. 

### Upcoming Maintenance Sessions
#### Full Maintenance: Wednesday 15th September 0900 - 1700 

There will be a full service maintenance session to allow a fix to be applied to resolve the Singularity issue and also to allow HPE to perform some remedial tasks.  
The queues on the system will start to drain from 0900 on Monday 13th September to ensure that all running jobs will have completed by the start of the maintenance session.  

Please submit jobs to the batch scheduler until the start of the maintenance and jobs will either run to completion before the start of the maintenance session or if your requested wall time does not allow,  they will run once the service is returned. 

Users will not be able to connect to the User Access Nodes (UANs) during the full maintenance and you will be notified once the maintenance has completed. 

We apologise for the short notice and any inconvenience caused by this maintenance session. 


 
### Completed Maintenance Sessions

#### Tuesday 7th - Thursday 9th September
The network work has now been completed successfully. 
This week there will be two periods of at-risk maintenance to allow our HPC Systems team to move the ARCHER2 4 cabinet system to a new Network at the Advanced Computing Facility (ACF). 


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
