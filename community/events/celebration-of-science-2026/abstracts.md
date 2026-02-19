---
layout: section
title: ARCHER2 Celebration of Science 2026
summary:  19th - 20th March 2026
banner: web_banners_07.jpg
---

<p align="center">
<a href="./"><img src="./img/260319-celebration-of-science-with-date.jpg"  alt="Celebration of Science" style="width: 80%"></a>
</p>
<br>


## Talk Abstracts


<a name="1"></a>
## Alexander Morozov (University of Edinburgh) 

### Narwhals and their blessings on ARCHER2 

Solutions of long, flexible polymer molecules are complex fluids that simultaneously exhibit fluid-like and solid-like behaviour. When subjected to external flows, dilute polymer solutions develop elastic turbulence – a unique chaotic flow state absent in Newtonian fluids such as water. Unlike turbulence in Newtonian fluids, elastic turbulence arises from polymer stretching and alignment in the flow, and can occur even at vanishing inertia. While experimental realisations of elastic turbulence are well documented, its underlying mechanism remains poorly understood.

Here, we present a perspective on the transition to elastic turbulence in pressure-driven channel flows, drawing on recent large-scale direct numerical simulations performed by our group. We outline our current understanding of the transition centred on two key building blocks: (i) narwhals, exact coherent states of the flow, and (ii) blessings, spatio-temporal intermittent states made up of several localised narwhal solutions. We will discuss the implications of these findings for the transition scenario.
 

 
<a name="2"></a>
## Xin Zhou (University of Leeds) 

### Quantifying the long-term decay of Hunga stratospheric water vapour using chemistry transport modelling on ARCHER2 

High-performance computing on ARCHER2 (and predecessor machines) has played a central role in advancing global atmospheric chemistry modelling that is essential for understanding changes in air quality and climate. It has underpinned a wide range of studies in our group using in the TOMCAT 3-D chemical transport model (CTM) (tomcat.leeds.ac.uk/tomcat), including quantification of greenhouse gases emissions, the impact of ozone-depleting substances and recent work on the global impacts of the 2022 Hunga volcanic eruption. 

The eruption of Hunga (20°S) injected an unprecedented amount (150 Tg) of water vapour into the stratosphere. Using global 3-D TOMCAT simulations on ARCHER2 and satellite observations, we have quantified the removal pathways, long-term decay, and ozone impacts of the additional H2O. We showed (Zhou et al., GRL, 2024) that Antarctic polar stratospheric cloud (PSC) dehydration during winter 2023 caused the first substantial (~20 Tg) removal of Hunga H2O from the stratosphere. Additional springtime ozone depletion due to H2O-related chemistry was small and maximised at the vortex edge (10 DU in column). Efficient ice cloud dehydration in the core of the vortex limited the impact of the additional H2O. With extended observations we further demonstrated (Zhou et al., Communications Earth & Environment, 2026) a pronounced decline from 2024 to early 2025, the largest drop since the eruption, indicating that the perturbation has entered a new decay phase in which stratosphere–troposphere exchange increasingly dominates over PSC dehydration. We constrained the effective e-folding residence time of the perturbation at approximately 9 years. 

We will also show other high-profile examples of TOMCAT modelling enabled by Archer which has addressed major global pollution issues. We used model simulations of the ozone-layer-depleting chlorofluorocarbon CFC-11 to quantify regional contributions to the mid-2010s reversal in the global declining trend (Montzka et al., Nature, 2021). We have also used model simulations in conjunction with satellite observations to quantify the release of methane from the sabotaged Nord Stream pipeline in 2022 (Harris et al., Nature, 2025). 

Together, these studies illustrate how national HPC infrastructure such as ARCHER2 is critical for addressing major challenges in atmospheric composition, climate, and environmental change. 

References 

Harris, S.J., et al., Methane emissions from the Nord Stream subsea pipeline leaks, Nature, 637, 1124-1130, [doi:10.1038/s41586-024-08396-8](https://www.nature.com/articles/s41586-024-08396-8), 2025. 

Montzka, S.A., G.S. Dutton, R.W. Portmann, M.P. Chipperfield, et al., A decline in global CFC-11 emissions during 2018−2019, Nature, 590, 428-432, [doi:10.1038/s41586-021-03260-5](https://www.nature.com/articles/s41586-021-03260-5), 2021. 

Zhou, X. S.S. Dhomse, W. Feng, G. Mann, S. Heddell, H. Pumphrey, et al., Antarctic vortex dehydration in 2023 as a substantial removal pathway for Hunga Tonga-Hunga Ha’apai water vapor, Geophysical Research Letters, 51, [e2023GL107630, doi:10.1029/2023GL107630](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023GL107630), 2024. 

Zhou, X., Q. Chen, W. Feng, S. Heddell, S.S. Dhomse, G. Mann, H.C. Pumphrey, et al., Residence time of Hunga stratospheric water vapour perturbation quantified at 9 years. Communications Earth & Environment, [doi:10.1038/s43247-026-03216-5](https://www.nature.com/articles/s43247-026-03216-5), 2026. 
 
<a name="3"></a>
## Caitlin McAuley (EPSRC-UKRI) 

### ARCHER2 (TBC) 

TBC 

 
<a name="4"></a>
## Marc A. Little (Heriot-Watt University) 

### TBC 

TBC 

 
<a name="5"></a>
## Nunzio Palumbo (Rolls Royce) 

### Towards Exascale Multiphysics Simulation of Sustainable Jet Engines Using Archer2 

TBC 

 
<a name="6"></a>
## Paul Bartholomew (EPCC) 

### Implementing a portable GPU backend for x3d2 using OpenMP offloading 

TBC 

 
<a name="7"></a>
## TBC (University of Manchester) 

### Porting and Optimizing DualSPHysics for Heterogeneous Architectures Using Kokkos and SYCL  

DualSPHysics is a state-of-the-art open-source solver of Smoothed Particle Hydrodynamics (SPH) for free-surface flow applications.  Accelerated on graphics processing units (GPUs), the code is widely used in academia and industry with 160,000+ downloads.  However, the acceleration has been only on a single GPU and tied to a specific vendor.  Future target applications require significantly more particles (e.g. billions), along with the associated memory and compute requirements, than what is currently possible with the latest version of the code. The aim of this project, therefore, is to extend both the availability and capability of DualSPHysics by providing a hardware-agnostic implementation that can run on heterogenous large-scale distributed systems. This talk will present the progress made in porting the code to both Kokkos and SYCL to create a performance-portable high-fidelity fluid-structure simulation software.  

 
<a name="8"></a>
## Paddy Roddy (UCL) 

### Porting GLASS to the Python Array API   

GLASS is a Python-based code used in Cosmology to generate full-universe simulations for large galaxy surveys. We are enhancing GLASS by porting it to Python's Array API, replacing its current NumPy and Healpy dependencies to enable execution on GPUs. This involves developing a compatibility layer for spherical harmonic transforms and optimising scientific models for GPU architecture. The resulting GPU-enabled GLASS will offer a significant performance boost, ease integration with other GPU codes, and support advanced techniques like auto-differentiable simulations using JAX, crucial for future cosmological analyses.  

 
<a name="9"></a>
## Ian Bush (STFC) 

###  GCRYSTAL - A GPU enabled CRYSTAL 

TBC 

 
<a name="10"></a>
## Nick Brown (EPCC, the University of Edinburgh) 

### MONC: Gaining greater insights into clouds and turbulent processes via GPUs   

The Met Office NERC Cloud model (MONC) is a high resolution atmospheric model for simulating clouds and turbulent flows. Used by a range of UK scientists, the demand is always to simulate higher resolution domains at reduced time to solution. Developed over a decade ago as a CPU only code targeting the original ARCHER supercomputer, I will describe our eCSE-GPU project that is modernising the code for both AMD and Nvidia GPUs. With the ultimate objective of making the code ready for future exascale supercomputer(s), the highly modular architecture of MONC in theory makes it easier to port to GPUs but of course the devil is in the detail! In this talk I will share the approach we have been undertaking to result in a GPU vendor agnostic port, highlight some of the challenges and share early performance results on both AMD and Nvidia GPUs. 

 
<a name="11"></a>
## James Panton (University of Cologne) - Remote 

### Blobs at the base of the mantle: Using HPC to uncover the evolutionary history of great geophysical structures.    

The large low velocity provinces (LLVPs) are seismically observed structures which sit at the base of Earth's mantle beneath Africa and Pacific Ocean. It is suggested that through the process of subduction, oceanic crust is transported from the surface and incorporated into the LLVPs, but the relative distribution of oceanic crust between the African and Pacific LLVP is an open question. Sadly, we cannot travel to the base of the mantle to directly sample these structures, and the timescales over which they develop is measured in 100's of millions of years, making it impossible to monitor changes to them. 

 

Here we present the coming together of 3-D mantle circulation simulations and 1-billion-year reconstructions of tectonic plate histories, allowing us to simulate the cycling of oceanic crust through the mantle. We find that the African and Pacific LLVPs form naturally as a result of subduction, but that they are compositionally distinct. Their compositional differences are hidden in seismic tomography due to the dominant effect of temperature on seismic velocity over composition. We find the Pacific LLVP has been continually replenished by subducted ocean crust for the last 300 Myr, leading to higher oceanic crust concentrations compared to the African LLVP, which comprises older and better mixed material. The compositional disparity implies a density difference between the two regions, which could explain differences in the observed heights of the structures.  

 
<a name="12"></a>
## Gabriele C. Sosso (University of Warwick) 

### First Steps Toward Understanding Ice Formation in Plants   

Understanding how ice forms and spreads in plants is crucial to reducing crop losses amid increasing climate extremes. Unlike in animal tissues, the microscopic determinants of freezing within plant cell walls remain poorly understood. Here, we combine plant biology experiments, mathematical modelling, and ARCHER2-enabled molecular simulations to link the chemistry of homogalacturonan (HG) pectin cross-linking to cell wall porosity and, ultimately, ice propagation. Building on our multidisciplinary framework for quantifying how cross-linking reshapes pore networks in vivo , we use large-scale simulations on ARCHER2 to resolve how HG functionalisation states (deprotonated, protonated, methylesterified) and Ca²⁺-mediated ordering control pore size and connectivity, and to model percolation of an advancing ice front through nanoconfined pectin pores. These results provide a physical basis for freezing tolerance via cell wall remodelling and illustrate how HPC-enabled, multiscale modelling can connect molecular interactions to tissue-scale freezing outcomes, suggesting strategies to concretely improve crop frost resistance by tuning pectin architecture. 

 
<a name="13"></a>
## Niamh O’Neill (Max Planck Institute for Polymer Research) 

### From Accurate Quantum Mechanics to Converged Thermodynamics for Ions in Solution with Machine Learning Potentials 

Obtaining accurate predictions of thermodynamic properties, especially free energies that define the state of a system, is a key goal in atomistic simulations. This demands pushing the frontiers of two paradigmatic problems: (1) achieving high electronic structure accuracy and (2) reaching converged sampling of the nuclear motion. Coupling advances across electronic structure theory, machine learning potentials and enhanced sampling, I will discuss approaches to obtain quantitative insight into the properties of ions in solution. 

I will begin by using NaCl in water as a prototypical example, highlighting short-comings with the work-horse method - density functional theory (DFT) - for ion pairing and transport properties, and approaches to go towards accurate correlated wavefunction descriptions [1]. I will then demonstrate a data-efficient approach to perform finite temperature simulations at the ’gold-standard’ CCSD(T) level. This approach has been applied to constant pressure simulations of liquid water, combined with nuclear quantum effects to enable agreement with experiments for structural and transport properties [2]. I further extend this framework to ions in solution, achieving excellent experimental agreement for the ion pair association free energy of CaCO3 in water - a challenging property for both classical force fields and DFT. This framework sets the stage for routine CCSD(T)-quality predictions for complex aqueous systems. 

[1] O’Neill, N.; Shi, B. X.; Fong, K.; Michaelides, A.; Schran, C. To Pair or Not to Pair? Machine-Learned Explicitly-Correlated Electronic Structure for NaCl in Water. J. Phys. Chem. Lett. 2024, 15 (23), 6081–6091. [https://doi.org/10.1021/acs.jpclett.4c01030](https://doi.org/10.1021/acs.jpclett.4c01030). 

[2] O’Neill, N.; Shi, B. X.; Baldwin, W. J.; Witt, W. C.; Csányi, G.; Gale, J. D.; Michaelides, A.; Schran, C. Towards Routine Condensed Phase Simulations with Delta-Learned Coupled Cluster Accuracy: Application to Liquid Water. J. Chem. Theory Comput. 2025, 21 (22), 11710–11720. [https://doi.org/10.1021/acs.jctc.5c01377](https://doi.org/10.1021/acs.jctc.5c01377) 

 

 