---
layout: section
title: Wee Archie
summary: A Suitcase-Sized Supercomputer
banner: web_banners_07.jpg
---

ARCHER2 is made up of 23 cabinets and 5,848 nodes. It requires specialist staff and facilities to run, plus a massive power supply - it's not possible to transport parts of it to science festivals and other events! For that reason, we have created Wee Archie to help teach people of all ages about Supercomputers.

## Hardware
Wee Archie is made-up of 18 Raspberry Pi computers, or nodes. Each one is a tiny, single-board computer, size 85mm x 56mm x 17mm. Each has a central processing unit (CPU) to execute computer code, with 4 cores, meaning it can run 4 different processes in parallel on a single node. ARCHER2 nodes are much larger than this - they have 2 CPUs per node and 128 cores total, which is more than the whole of Wee Archie. 16 of the nodes in Wee Archie are compute nodes, the other two are controller nodes.

Each node also has a board of coloured LED lights that have been programmed to show the status of each node. There are 4 bars to indicate usage for each CPU core, plus others for memory, temperature, and reading and writing data to storage. 

The Raspberry Pis are able to communicate with each other with a series of Ethernet cables and 3 switches. Each node has 1GB on-board memory that is not accessible to the other 17 nodes. In order to share data with other nodes, they must send messages to one another across the Ethernet network. Programs on ARCHER2 are run in the same way, but the network (known as the interconnect) is much faster.

Wee Archie requires more power than a usual PC or laptop does to work. Each individual node and each switch needs its own power supply, there are a multisocket adaptors plus a transformer so Wee Archie can get all the power it needs from one power socket.

All these parts are housed in a clear perspex case so people can see all of the component parts.
