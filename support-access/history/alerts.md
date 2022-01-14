---
layout: section
title: Service Alerts
summary: Log of previous ARCHER2 Service Alerts
banner: web_banners_03.jpg
---

- [Q4 2021](#service-alerts-quarter-4-2021---1st-october---31-december-2021)




##  Service Alerts Quarter 4 2021 - 1st October - 31 December 2021

| Status | Type | Start | End | System | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Resolved | Issue | 2021-12-20 13:00 | 2021-12-20 14:12 | ARCHER2 4-cabinet: Slurm  | Slurm slowdown - slurm rebooted at 14:00. Running jobs continued without issue. | Slurm slowdown |
| Resolved | Issue | 2021-12-16 0405 | 2021-12-16 0941 | ARCHER2 full system: Slurm and outgoing SSH | Slurm commands did not work. Outgoing SSH connections did not work. Running jobs continued without issue. | The ARCHER2 spine switch network became unresponsive. |
| Resolved | Issue | 2021-11-14 0800 | 2021-11-15 0940 | ARCHER2 4-cabinet: status monitoring | The load chart on the website is missing some historical data. | An issue on one of the login nodes caused usage data to not be collected. |
| Resolved | Issue | 2021-11-05 0800 | 2021-11-05 1130 | ARCHER2 4-cabinet: compute nodes | A large number of compute nodes were unavailable for jobs.  | A power incident in the Edinburgh area caused a number of cabinets to lose power. |  
| Resolved | Issue | 2021-11-03 1445 | 2021-11-03 1445 | ARCHER2 4-cabinet | The login-4c.archer2.ac.uk address is unreachable so logins via this address will fail. Users can use the address 193.62.216.1 instead.  | A short network outage at the University of Edinburgh caused issues with resolving the ARCHER2 login host names. |  
| Resolved | Issue | 2021-11-01 0930 | 2021-11-01 1130 | ARCHER2 4-cabinet | There were 285 nodes down so queue times may be longer. The nodes have now been returned to service.  | A user job hit a known bug and brought down 256 nodes. The bug has been fixed in Shasta 1.5 which will be available on the full service. | 