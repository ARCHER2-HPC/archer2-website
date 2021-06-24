---
layout: course
title: QM/MM simulation with GROMACS + CP2K 
banner: web_banners_05.jpg 
human_dates: 22 - 23 April 2021  9:30-15:00 CEST (8:30-14:00 BST)
start_date: 2021-04-22 08:30:00
end_date: 2021-04-23 14:00:00
trainers: Dmitry Morozov (Chemistry, University of Jyväskylä),<br /> Emiliano Ippoliti (Computational Biomedicine, Forschungszentrum Jülich),<br />  Holly Judge (EPCC, University of Edinburgh)
course_type: course
registration_status: closed
registration_url: https://events.prace-ri.eu/event/1204/registrations/878/
location: Online
location_url:
prace_course: true
---

This course is organised and funded by BioExcel - the Centre of Excellence for [Computational Biomolecular Research](http://bioexcel.eu) and PRACE, and delivered in collaboration with [ARCHER2 - the UK national supercomputing service](https://www.archer2.ac.uk/).

<div><img src="../../img/bioexcel_logo.png" alt="BioExcel Logo" width="20%" /></div>




### Learning outcomes
----------------------------
This course will equip participants to perform hybrid QM/MM simulations using the molecular dynamics code GROMACS in combination with the quantum chemistry package CP2K through an interface developed by one of the instructors from the [BioExcel Centre of Excellence](http://www.bioexcel.eu).

### Prerequisites
-------------------
Participants should be familiar with using GROMACS to perform molecular dynamics simulations. A background in computational quantum chemistry is not strictly required since an introduction of key aspects will be provided, but previous familiarity is beneficial. You should be familiar with connecting to a remote machine using ssh and will benefit from experience using an HPC facility as you will execute hands-on practicals on the UK supercomputer ARCHER2.

### Description
-----------------
Most classical molecular mechanics (MM) force fields are not sufficiently flexible to model processes in which chemical bonds are broken or formed. Instead, some level of quantum mechanical (QM) description is needed to gain detailed mechanistic insights into reaction mechanisms, e.g. the catalytic action of enzymes, and to compute photochemical properties
such as absorption and emission spectra of fluorescent proteins. However biochemical systems (including solvent) are too large to be solved in their entirety at ab initio QM level or efficiently even with a high-quality density functional theory (DFT) approximation. To overcome the cost of a QM description on the one hand versus the limitations of a MM treatment on the other hand, methods have been developed that treat a small critical region
of interest at QM level while retaining the computationally cheaper MM force field for the majority of the system.

Despite the simplicity of the QM/MM concept, its application is currently restricted to a relatively small group of specialised expert users often using in-house codes. To unlock the power of QM/MM simulations for the wider biomolecular simulation community, the BioExcel Centre of Excellence has developed an interface between the molecular dynamics code
GROMACS, which is widely used in the biomolecular simulation community, and the quantum chemistry package CP2K, which supports calculations under periodic boundary conditions with DFT methods.

This course explains key aspects relating to the use of QM/MM for biomolecular simulation with these two codes and equips participants with the ability to start using GROMACS and CP2K for this purpose in their own research. Participants are provided with the opportunity to gain hands-on practical experience running several example calculations on ARCHER2, the
UK national supercomputing service.

Topics that will be covered are:
-  Introduction to QM/MM a brief overview of:
    -  Relevant computational quantum chemistry
    -  QM-MM coupling
    -  Functionals, basis sets, pseudopotentials, and dispersion
-  How to use GROMACS+CP2K to perform biomolecular QM/MM simulations, including:
    -  Umbrella sampling
    -  Energy minimisation
    -  Large phytochrome protein system setup
    -  Calculation of photochemical properties
-  CP2K parameter choice guidance, including:
    -  Checking convergence
    -  Modifying functional and basis set
    -  Performance
 
### Schedule
--------------
(all times CEST)
#### Day 1
- 9:30 Welcome
- 9:45 Lecture: Introduction to QM/MM I: computational quantum chemistry
- 10:15 Q&A
- 10:30 Break
- 10:45 GROMACS+CP2K Practical 1
- 12:00 Lunch
- 13:00 Lecture: Introduction to QM/MM II: QM-MM coupling
- 13:30 Q&A
- 13:45 Break
- 14:00 GROMACS+CP2K Practical 2
- 15:00 Wrap up

#### Day 2
- 9:30 Lecture: Introduction to QM/MM III: functionals, pseudopotentials, dispersion corrections
- 10:00 Q&A
- 10:15 Break
- 10:30 Lecture & practical: CP2K parameter choice guidance
- 12:00 Lunch
- 13:00 GROMACS+CP2K Practical 3
- 14:30 Q&A
- 15:00 Wrap up


### Requirements:

Participants must bring a laptop with a Mac, Linux, or Windows operating system (not a tablet, Chromebook, etc.) that they have administrative privileges on.

They are also required to abide by the [ARCHER2 Training Code of Conduct](../../code-of-conduct/). 



## Registration
------------------
We expect high demand for this course and places are limited to 30, so we urge potential participants to register only if they meet the prerequisites and expect to be able to take part.

Recordings will be made available after the course on the [BioExcel YouTube channel](https://www.youtube.com/c/bioexcelcoe). Training materials such as practicals/tutorials will appear on the [BioExcel Github](https://github.com/bioexcel), however these will require installation of a [custom version of GROMACS](https://gitlab.com/aracsmd/gromacs/-/tree/2021.1-plumed-qmmm) that links with CP2K (this will be provided on ARCHER2).



<section id="service">

<h2><a name="materials">Course materials</a></h2>



    <div class="row">	

 		
      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" 
          href="https://bioexcel.github.io/2021-04-22-qmmm-gromacs-cp2k">
          <strong>Course materials</strong>   <br />
			     
        </a>
      </div>


<!--  
      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://pad.archer2.ac.uk/p/210422-gromacs">
          <strong>Course Chat</strong>       
        </a>
      </div>
		
 -->
 	</div>
		
		
					


 		
<h2><a name="videos">Videos</a></h2>

<h3>Playlist</h3>

<div>
	<iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzLqYW5ci-2dvlvgySfQDu-TKkr3fHSIA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>








<h2><a name="feedback">Feedback</a></h2>


    <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 


		   href="https://events.prace-ri.eu/event/1204/surveys/787"

		>
          <strong>Feedback</strong><br/>
          Please let us know what was great about this course and anything we can improve
        </a>
      </div>
    </div>
		
		

 
</section>


