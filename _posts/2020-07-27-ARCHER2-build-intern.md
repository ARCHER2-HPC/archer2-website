---
layout: post
title: ARCHER2 Build Intern log
date: 2020-07-27 12:00:00
author: Gregor Muir
tags: [blog]
categories: [news]
---


A full week on from the 4 Cab Archer2 installation (affectionately dubbed Mini-Archer2, due to only having 18% of the full Shasta system’s 5848 compute nodes), and life is beginning to quiet down again for the temporary Summer Team at the ACF.

This is now the second year that the ACF have kindly had me back as a part of the team during summer - while I work towards my master’s degree (Electrical and Electronic Engineering). However I’d only been here for three weeks when the installation began.

The weeks and months prior to delivery was full of planning and works, all pertaining to the smooth operation of the installation, everything from running large power supplies, installing goliath cooling pipework and the strengthening of the flooring for the 3500kg cabinets…all the way to vacuuming the entire computer room. We also pre-emptively set up a time-lapse camera to capture every minute of the system arriving.

However, upon my arrival on Monday, an hour early to make sure we had ample time to prepare the site, myself and the rest of the team were greeted by four enormous trucks and three regular sized Americans. So, after a mad dash to open site, I headed to the roof to try capture as many photos as possible.

<img src="{{ site.baseurl }}/img/news/2020-07-27-pic1.png" alt="Trucks arrive" title="Trucks arrive"/>


Thankfully between the Cray team (who helped ship and pack the original trucks) and the exceedingly helpful Carry Gently staff, by 2PM everything was unpacked and at least sitting in the right place! All of which was impressive, considering the size of the cabinets which had to squeeze down the rather tight corridors.


<img src="{{ site.baseurl }}/img/news/2020-07-27-pic2.png" alt="Moving everything into place" title="Moving everything into place"/>


I have been trying my best to think of any great problems that had to be overcome in the face of adversity from that Monday for the sake of a good story, but honestly everything went seemingly flawlessly. 

The day after was fairly quiet as well, power connections were quickly made in the morning (after a few helpful electricians from Arthur McKay stepped in to fix a small flaw with a connector). And then finally, we could actually start powering up the system! Except of course that’s not true, the few gallons of de-ionised water had not arrived yet for the systems’ internal cooling. However, the CDU (Cooling Distribution Unit) could be powered up, an equally exciting prospect. 

The CDU can be oversimplified into two parts, one half gets attached to the site’s water supply, incoming at 16 degrees, this chilled water travels through a heat exchanger, effectively two large radiators (their surfaces interlinked, but entirely separate water supplies). The other half pumps Mini-Archer’s internal cooled water around- through the prior mentioned heat exchanger, maintaining a specified temperature without ever connecting its own water circuit to the site, for the sake of both robustness and for the sake of the more expensive ‘water’ needed to cool the super computer. On that Tuesday, while powering up the CDU, the site’s water was connected and proved to all be working perfectly

Wednesday marked a continuation on this theme, with the de-ionised, additive enhanced water arriving. Well that and lots of configuring and some troubleshooting. But by the end of the day Miro had management and storage sorted, and the CDU was now operating on the site’s water supply and circulating the Mini-Archer2 supply.


<img src="{{ site.baseurl }}/img/news/2020-07-27-pic3.png" alt="Configuring and troubleshooting" title="Configuring and troubleshooting"/>


Thursday marked the last day for all the American friends and HPE’s installation team, which meant all the trouble shooting had to be finished. I was lucky enough to walk in with my camera as they were repairing/diagnosing blades that appeared to have faults. The first one was opened and closed again within less than two minutes, quite literally just a direct swap of two DIMMs with two fresh spares. However, then I noticed everything was beautifully over engineered. The workbench trolley that the blade was sitting on was hinged, and with the aid of a pneumatic arm lifted the blade from horizontal to a vertical position for ease of access to the blade lifter. The lifter itself was also preprogrammed to the perfect height of each row of blades, allowing for a perfect matching up though the use of clever magnetic sensors.


<img src="{{ site.baseurl }}/img/news/2020-07-27-pic4.png" alt="Repairing blades and slotting back into place" title="Repairing blades and slotting back into place"/>


The only other blade I witnessed being fixed had some form of network problem, so the network interface cards were swapped, again a seamless and exceedingly quick job…I think I always assumed maintenance on a blade would take at least five minutes. 


<img src="{{ site.baseurl }}/img/news/2020-07-27-pic5.png" alt="Blade" title="Blade"/>



Since that day, the system has only just begun to be load tested, and so far, everything is working as expected. If you call drawing 600,000 Watts expected that is!

Elsewhere on site we’ve gone from having around 12 staff members, always busy with a colossal installation (that I feel very fortunate to have witnessed), all the way back down to 4-5 staff members running a reduced skeleton crew thanks to the global pandemic. Rather a stark change, but at least I am still being kept busy, just with slightly less exciting work in comparison to working alongside completely ground-breaking tech!

<img src="{{ site.baseurl }}/img/news/2020-07-27-pic6.png" alt="Back and front of the cabinets" title="Back and front of the cabinets"/>

Now the system is running optimally, there will be a period of training before Mini-Archer2 is made available to the users and will operate concurrently with Archer for a few months before it all kicks off later this year to deliver, build and commission the full 23 cabinet system which is potentially an even more exciting prospect for the ACF Team.

Gregor Muir

EPCC systems intern


