---
layout: section
title: ARCHER2 Onboarding
summary: How we are supporting users in transferring to ARCHER2
banner: web_banners_03.jpg
---


## Projects

### Existing ARCHER2 Projects:  

* A list of active UKRI projects on the prospective ARCHER Service end date will be provided to the Authority. 
* At the end of the ARCHER Service, a snapshot will be taken of the remaining allocations for every active project. 
* These allocations will be put through the agreed exchange rate for the allocation unit (provisionally set to 1 CU = 1000 AUs = 1 kAUs). 
* Allocations will be available from the point at which charging starts on the system
* Adjustments to the planned end date for allocation periods may be required to allow for downtime and consortia may need to be reimbursed allocations. 
* The Authority will provide details where required.  

### New ARCHER2 Projects:  
* EPSRC users will submit proposals to a formally combined version of the ARCHER RAP and Tier-2 Open access, an ‘Access to HPC call’. ARCHER allocations on EPSRC Grants will continue. 
* NERC users will be allocated time via the NERC HPC Steering Committee
* Default allocations are still being considered. Initial thought is that ARCHER is at least 5 times bigger and thus 1200 kAUs for an Instant Access Project on ARCHER = 1200 CU, would be multiplied by 5 to 6000 CU on ARCHER2. The figure needs to ensure that enough node hours are given to the users to enable them to see if their code scales suitably. This will be further discussed with the Authority. 

## Users
### Existing ARCHER2 Users:  

* Existing ARCHER2 Users will be required to register for a new user account on ARCHER2 within their existing project, this will ensure all users will agree to Terms and Conditions when requesting a new account
* To alleviate work for Principal Investigators and/or Consortia Chairs, the SAFE would not require them to approve any existing ARCHER accounts to the new ARCHER2 project  
* Corresponding ARCHER2 and ARCHER accounts will have the same  UIDs and GIDs to ease data migration

### New ARCHER2 Users:  
* New ARCHER2 Users will apply for ARCHER2 accounts via the SAFE. 

## Further Resources:
EPCC has produced [ARCHER2 documentation for the SAFE](../documentation/safe-guide/)


Please [contact the ARCHER2 Service Desk](mailto:support@archer2.ac.uk) if you have any questions or concerns.

## Data Migration Plan: ARCHER->ARCHER2

The current ARCHER service has three different filesystems available to ARCHER users: 

### /home filesystem - NFS filesystem

The ARCHER2 Systems Team will take a copy of the ARCHER /home filesystem to the ARCHER2 filesystem. 

* An initial copy of the /home ARCHER filesystem will be taken as soon as the ARCHER2 filesystem is in place 
* At the end of the ARCHER service, the copy will be updated to give as up-to-date copy of the data as possible
* The copy of the ARCHER /home directories will be made available in a distinct area of the new /home filesystem on ARCHER2, separate from standard user directories. 
* This data will be read only (where possible). 
* Users should copy out any data which they require into their ARCHER2 /home directories 
* The copy of the ARCHER /home filesystem will be deleted on an advertised date – an initial suggested date is three months after the commencement date of the ARCHER2 service.


### /work filesystem - High-performance, Lustre filesystem. 
* Users are responsible for the transfer of their /work data
* This may involve users moving the data to users home institutions or the RDF (for non-NERC users). 
* /work will not be available once the ARCHER service is closed 


### RDF filesystems -  Resilient, long-term, GPFS data storage.
* Non-NERC users will be still able to access data within /epsrc and agreed /general projects from ARCHER 
* The ARCHER2 Systems team will migrate the /epsrc and agreed /general data to the new RDFasaservice System. Further details will be provided when available

       
### Further Resources:
EPCC has produced a [Data Management Guide](http://archer.ac.uk/documentation/data-management/) with advice on Data Transfer


EPCC delivered a webinar on Transferring Data from ARCHER at End of Service 


<div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/2t4mv8TwYMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

[Slides:](http://www.archer.ac.uk/training/virtual/2020-01-29-data-transfer/2020_01_ARCHER_data_transfer.pdf "PDF of slides") 



Please contact the [ARCHER2 Service Desk](support@archer2.ac.uk ) if you have any questions or concerns



