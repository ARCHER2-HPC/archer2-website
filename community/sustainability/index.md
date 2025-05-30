---
layout: section
title: Environmental Sustainability
summary: Continual work to improve carbon efficiency and biodiversity
banner: web_banners_07.jpg
---

Environmental sustainability is a key focus for the ARCHER2 service—both in terms of day-to-day operation and research and development activities—to understand how the environmental sustainability of ARCHER2 can continue to be improved over its lifetime and to develop improvements for future services. This includes work on understanding and communicating emissions from ARCHER2 within the [Greenhouse Gas (GHG) Protocol framework](https://ghgprotocol.org/) to support improving the carbon efficiency of the service and awareness among users; and working to ensure that biodiversity is promoted at the ACF data centre where ARCHER2 is housed.

## Emissions

We are committed to reducing our carbon footprint within the ARCHER2 service and
contributing to the University of Edinburgh’s commitment to being zero carbon by
2040.

In this section we provide more information on the estimated greenhouse gas (GHG)
emissions from the ARCHER2 service.

### Impact on reducing emissions

As well as a producer of GHG emissions, HPC systems like ARCHER2 also contribute
to reducing emissions. The main source of reduced emissions from services such as
ARCHER2 is in the research that leads to new technology, policies and approaches
to reducing emissions. Some examples include:

- HPC services run the climate models that are used to provide evidence for setting
  emissions reductions policies and targets across the world.
- Research and modelling on HPC services leads to development of improved zero
  emission energy generation by, for example, modelling new wind turbine and wind
  farm designs.
- Modelling to support the development of new energy storage technologies such as
  improved batteries.

The emissions reductions from such activities are extremely difficult to 
quantify for a number of reasons so, at the moment, these are not factored in
to the emissions estimates for ARCHER2.

As well as the research activities on the service leading to reductions in emissions,
there are other activities that HPC services can potentially take. For example:

- Using the waste heat generated by large scale HPC services as a heat source for
  homes, businesses or farming. For the ACF data centre where ARCHER2 is hosted
  we are looking for options on how to do this.
- Incorporating environmental and biodiversity improvements into the service. For
  the ACF data centre (which is in a rural location) we have been working to
  improve the site biodiversity and improve habitats. Responsible carbon offset
  schemes could also potentially be used to reduce emissions if they were undertaken
  as part of the service. 

### Estimating emissions from ARCHER2

#### Scope 3 emissions

Scope 3 emissions from the ARCHER2 hardware have been estimated from a subset of
the components that are expected to make up the majority of the emissions. Note that
there is a large amount of uncertainty for Scope 3 emissions due to lack of high quality
Scope 3 emissions data from vendors. In particular, the number used for the compute node
emissions is at the high end of estimated values and the actual value could be as much
as 15% lower at around 900 kgCO<sub>2</sub>e/node.

| Component | Count | Estimated kgCO<sub>2</sub>e per unit | Estimated kgCO<sub>2</sub>e | % Total Scope 3 | References |
|---|--:|--:|--:|--:|---|
| Compute nodes | 5,860 nodes | 1,100 | 6,400,000 | 84% | (1) |
| Interconnect switches | 768 switches | 280 | 150,000 | 2% | (2) |
| Lustre HDD | 19,759,200 GB | 0.02 | 400,000 | 6% | (3) |
| Lustre SSD | 1,900,800 GB | 0.16 | 300,000 | 4% | (3) |
| NFS HDD | 3,240,000 GB | 0.02 | 70,000 | 1% | (3) |
| Total | | | 7,320,000 | 100% | |

We then estimate the per-CU (nodeh) Scope 3 emissions by assuming a service lifetime
of 6 years and 100% availability:

```
7,320,000 kgCO2e / (5,860 nodes * 6 years * 365 days * 24 hours) = 0.023 kgCO2e/CU
```

All the tools described below use a value of **0.023 kgCO<sub>2</sub>e/CU** for Scope 3
emissions from ARCHER2.

References:

1. [IRISCAST Final Report](https://doi.org/10.5281/zenodo.7692451)
2. Estimate taken from IBM z16™ multi frame 24-port Ethernet Switch Product Carbon Footprint
3. [Tannu and Nair, 2023](https://arxiv.org/abs/2207.10793)

#### Scope 2 emissions

Scope 2 emissions from ARCHER2 are zero as the service is supplied by 100% certified renewable energy.
For information purposes we can calculate what the Scope 2 emissions would have been if the energy
was not 100% renewable energy using the methodology described below.

We are aware that there is ongoing discussion in the sustainability community about the impact and
effectiveness of certified renewable energy contracts that are supplied through UK National Grid
connections. We are monitoring these discussions and taking advice from sustainability professionals
on how we report and estimate ARCHER2 emissions.

UK National Grid based Scope 2 emissions are calculated using the compute node energy use for particular
jobs along with the carbon intensity of the South Scotland region of the UK National Grid at the start
time of the job. The carbon intensity is retrieved from the [carbonintensity.org.uk](https://carbonintensity.org.uk/)
web API.

If the energy use of a job is not available (which happens occasionally due to, e.g. counter failures) then
the mean per node power draw from 1 Jan 2024 - 30 Jun 2024 on ARCHER2 is used to compute the energy
consumption. This corresponds to a value of 0.41 kW per node.

Estimates of power draw of individual components of ARCHER2 suggest that the compute node power draw makes up
around 85% of the system power draw so we also add 15% of the measured energy to the 
value to estimate the contribution from other components.

| Component | Count | Loaded power draw per unit (kW)| Loaded power draw (kW) | % Total | Notes |
|---|--:|--:|--:|--:|---|
| Compute nodes | 5,860 nodes | 0.41 | 2,400 | 85% | Measured by on system counters |
| Interconnect switches | 768 switches | 0.24 | 240 | 9% | Measured by on system counters |
| Lustre storage | 5 file systems | 8 | 40 | 1% | Estimate from vendor |
| NFS storage | 4 file systems | 8 | 32 | 1% | Estimate from vendor |
| Coolant distribution units | 6 CDU | 16 | 96 | 3% | Estimate from vendor |
| Total | | | 2,808 | 99% | |

Overheads from the electrical and cooling plant will vary with outside weather conditions at
the data centre but are typically less than 10%. As a conservative estimate in the tools we 
develop we add 10% of the total energy to get the estimated energy use including plant 
overheads.

The final process for calculation the energy use of a job is

1. Retrieve the measured job energy from Slurm (or compute energy based on a node power draw of
   0.41 kW if the value is not available from Slurm).
2. Add 15% of this value to estimate energy use by other components.
3. Add 10% of the new value to estimate overheads from the plant.

#### Tools available to users

Please see the ARCHER2 documentation:
[Estimating your emissions](https://docs.archer2.ac.uk/user-guide/energy/#estimating-your-emissions)
for information on the tools available on ARCHER2 to estimate emissions from use of
the service.


## Biodiversity

The UK is ranked as the lowest G7 nation for biodiversity intactness and has seen a
19% decline in species abundance since 1970. The University of Edinburgh is a
signatory of the Nature Positive Universities Alliance and EPCC is committed to
understanding the impact our service activities have on biodiversity. We are
investigating the impact on biodiversity from the production of ARCHER2 and looking at
ways to reduce the impact during decommissioning through effective waste management.
As mentioned in the emissions section above, a key aim is also to protect and enhance 
biodiversity on the ACF site. Firstly, we have worked to protect the existing
biodiversity on site, with the machine room built around a traditional central tree
roundel and an area of wetland left untouched for wildlife. We have also worked to
enhance conditions for biodiversity to thrive, planting diverse native hedgerows,
creating wildlife meadows for pollinators and creating wildlife corridors through
fencing. Felled wood has been used to provide habitats for insects on site.





