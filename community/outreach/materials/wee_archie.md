---
layout: section
title: Wee Archie
summary: A Suitcase-Sized Supercomputer
banner: web_banners_07.jpg
---

ARCHER2 is made of 23 cabinets containing 5,848 nodes. It requires specialist staff and facilities to run, plus a massive power supply - it's not possible to transport parts of it to science festivals and other events! For that reason, we have created Wee Archie to help teach people of all ages about Supercomputers.

## Hardware
Wee Archie is made-up of 18 Raspberry Pi computers, which behave like supercomputer nodes. Each one is a tiny, single-board computer, size 85mm x 56mm x 17mm. Each has a central processing unit (CPU) to execute computer code, with 4 cores, meaning a node can run 4 different processes in parallel. ARCHER2 nodes are much larger than this - they have 2 CPUs with 128 cores total - more than the whole of Wee Archie. 16 of the nodes in Wee Archie are compute nodes, the other two are controller nodes.

<p align="center">
  <img src="images/181107_ARCHER_30.jpg" width="1000" title="Wee Archie Blue, connected to a laptop running the aerofoil simulation">
  <figcaption>(Image by Roberto Ricciuti).</figcaption>
</p>


Each node also has a board of coloured LED lights that have been programmed to show the status of each node. There are 4 bars to indicate usage for each CPU core, plus others for memory, temperature, and reading and writing data to storage.

The Raspberry Pis are able to communicate with each other with a series of Ethernet cables and 3 switches. Each node has 1GB on-board memory that is not accessible to the other 17 nodes. In order to share data with other nodes, they must send messages to one another across the Ethernet network. Programs on ARCHER2 are run in the same way, but the network (known as the interconnect) is much faster.

Wee Archie requires more power than a usual PC or laptop does to work. Each individual node and each switch needs its own power supply, there are a multisocket adaptors plus a transformer so Wee Archie can get the power it needs from one power socket.

All these parts are housed in a clear perspex case so people can see all of the component parts.

## Apps
There are currently two games available for Wee Archie for users to play. They are inspired by real life simulation experiments that were run on the previous ARCHER system, and designed to show users the kind of real-world problems scientists use supercomputers to solve. They are also good examples of how computer simulations make design and testing quicker, safer, and cheaper than doing the same experiments in real life.
### 1. Design an Aerofoil
An aerofoil is the cross-section of an aeroplane wing. The user uses three sliders to experiment with different angles, curvatures, and thicknesses and their impact on take-off and fuel consumption. As well as calculating the lift and drag properties of each design, the game makes a small animation, demonstrating whether an aeroplane with this design can take off (or not!) and how far it can fly on a full tank of petrol. Many designs are only good for one of the two!

### 2. Coastal Defenses
The user is given a budget, and a coastal town prone to tidal waves, and is asked to place defences in the sea to reduce the size much as possible. The smaller the waves, the smaller the cost of repairs to damaged buildings after the emergency. The further from the coast and the deeper the ocean, the more expensive each defence becomes, so it's important to weigh up the cost versus effectiveness of each placement.

Once the user has placed their defences, Wee Archie simulates a wave approaching, and how the height is affected by the user's design. It also calculates the cost of damage vs no defences, and savings made after five disasters.
