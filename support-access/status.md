---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
---

## Current Issues

No current issues.

## Recently Resolved Issues


### 20:00, 27 Feb 2021 - 12:30, 28 Feb 2021: Login node issues

The login nodes (UAN) have lost connection to some management services. This means that
some commands will not work on the login nodes. In particular, all commands to the
Slurm scheduler (e.g. `sbatch`, `squeue`) will not work and will return an error similar
to:

```
slurm_load_partitions: Unable to contact slurm controller (connect failure)
```

A workaround was put in place on 28 Feb 2021 to resolve this issue.

## Upcoming Maintenance Sessions

### 1st March 2021 14:00 - Reconnect management switch on login nodes (UAN)

The workaround put in place yesterday, 28th February, to restore access to management services means that interactive jobs are currently unable to run.

The switch has now been rebooted and is working, so will now be restored allowing interactive jobs once more.

This will be done at 14:00 today, Monday 1st March.

Most users should see no impact from this work; it will very briefly interrupt job submission and some disc mounts.  Please alert the [Service desk](mailto: support@archer2.ac.uk) if you see any further issues.

## Completed Maintenance Sessions

### 19 Feb 2021, 10:30 ARCHER2 Returned to service

We are pleased to confirm that ARCHER2 is now back in service, following yesterday's maintenance and you may now login and begin running work again.  We have updated the DNS but it appears that users of some ISPs may require some time for their DNS to update. We expect these issues to clear in the next hour or so.

The maintenance was completed successfully and ARCHER2 is now running Version 1.3.3 of the system software, which includes bug fixes and resilience improvements.

During yesterday's maintenance, some users may have been surprised to see their compute jobs begin to run. We apologise for this, it was due to a mistake in the maintenance configuration. Jobs that ran to completion during the maintenance will have been able to write their outputs and close successfully, so the output of such jobs should be valid. However, jobs that were running beyond approximately 10pm last night, will have been deleted when the high-speed network was rebooted, and will need to be resubmitted.

Thank you all for your patience during the maintenance. If you encounter any problems, please contact the [ARCHER2 Service Desk as usual](https://www.archer2.ac.uk/support-access/).


