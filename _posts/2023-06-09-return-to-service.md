---
layout: post
title: ARCHER2 Return to Service&colon; Monday 12th June around noon
date: 2023-06-09 14:30:00
author: ARCHER2 Service Desk Team
tags: [newsletters] 
categories: [news]
---


We are planning to open the ARCHER2 Service to all users around noon on Monday (12th June) following the successful completion of the major software upgrade.

<!--more-->

There are some important points to note when you do reconnect to ARCHER2 which have been [documented in the FAQ]( https://docs.archer2.ac.uk/faq/upgrade-2023/)


## Updated login node host keys

If you previously logged into the ARCHER2 system before the upgrade you may see an error from SSH that looks like:


    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @   WARNING: POSSIBLE DNS SPOOFING DETECTED! @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    The ECDSA host key for login.archer2.ac.uk has changed, and the key for the
    corresponding IP address 193.62.216.43 has a different value. This could 
    either mean that DNS SPOOFING is happening or the IP address for the host and
    its host key have changed at the same time.
    Offending key for IP in /Users/auser/.ssh/known_hosts:11


If you see this, you should delete the offending host key from your ```~/.ssh/known_hosts``` file (in the example above the offending line is line #11). The [current login node host keys can be found in the docs.](https://docs.archer2.ac.uk/user-guide/connecting/#host-keys)

## Recompile and test software

As the major software upgrade included a new OS version and new versions of compilers and libraries we strongly recommend that all users recompile and test all of their software on the service. The ARCHER2 CSE service have recompiled all centrally installed software.

## ARCHER2 User Forum Recording

A recording is now available of the recent User Forum where EPCC and HPE Staff presented information regarding the upgrade including [new features and changes to the user environment](https://www.archer2.ac.uk/training/courses/230607-user-forum/)

## Changes to EPSRC Project allocations (excluding consortia) 

All EPSRC projects will have a 1 month extension added to their current period (future periods will be shifted accordingly) to ensure that this outage does not impact on current projects. The extension will be added automatically to your project but please do [contact the service desk](mailto:support@archer2.ac.uk) if you have any questions regarding this.

We apologise for any inconvenience that has been caused by this major software upgrade.


ARCHER2 Service Desk Team
