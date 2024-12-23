---
layout: course
title: Coupling LAMMPS and OpenFOAM for Multi-Scale Models
banner: web_banners_05.jpg
human_dates: Wednesday 19th July 2023  14:00 - 16:00 BST
start_date: 2023-07-19 15:00:00
end_date: 2023-07-19 16:00:00
trainers: Mirco Magnini and Gabriele Gennari (University of Nottingham), Edward Smith (Brunel University London), Gavin Pringle (EPCC, University of Edinburgh)
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
video: true
ecse: eCSE06-01
---

The next generation of science depends on solving the problem of linking simulations at different scales. In many physical processes, phenomena happening at the molecular scale determine the large-scale dynamics of the system. Boiling represents one such problem, where bubbles nucleating at the nanoscale depart from hot surfaces owing to fluid dynamics forces originating from millimetre-scale flow structures. To date, there is no existing modelling framework that can simultaneously capture all the relevant scales of this flow, that require molecular dynamics simulations at the nanoscale coupled with traditional continuum-scale techniques based on the control-volume formulation of the Navier-Stokes equations.

The objective of this project is to deliver a coupling platform, optimised for parallel computing, linking two popular molecular-scale and continuum-scale simulation tools  that are already supported on ARCHER2, namely LAMMPS for molecular dynamics simulations (MD) and OpenFOAM for computational fluid dynamics (CFD) simulations. This will be achieved by extending the functionality of the [coupling framework CPL library ](https://www.cpl-library.org), developed by one of the investigators. 
The coupling is oriented towards the multi-scale simulation of nucleate boiling, where molecular dynamics resolves the near-wall field where nucleation occurs and continuum-scale fluid dynamics is used far from the wall where the bubble develops.

In this webinar, we will:

- Introduce the project and the rationale behind MD-CFD coupling.
- Present CPL library and the coupling framework.
- Demonstrate how to evoke CPL library via the ARCHER2 module through examples including minimal dummy scripts, Couette flow and finally the full boiling case.

<!--
If you are interested in attending the seminar, please add you name and email address to the [sign up sheet :](https://brunel.onlinesurveys.ac.uk/cpl-library-archer2-webinar)

You can also include any suggestions for topics or content you would like to see included.
-->

This webinar forms part of the ARCHER2 eCSE project: Hybrid Atomistic-Continuum Simulations of Boiling Across Scales (eCSE06-01) 



This online session is open to all. It will use the Blackboard Collaborate platform.

{% if page.ecse.size > 1 %}
<a href="{{ site.baseurl }}/ecse/reports/{{ page.ecse }}">eCSE project {{ page.ecse }}</a>
{% endif %}

<section id="service">

<!--
  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/1937a70947e3461f8d9112beb3c7f55e">
          <strong>Join Session</strong><br/>
          Join this online session in your browser
        </a>
      </div>

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="courses/"
           href="myevents.ics">
          <strong>Add to Calendar</strong><br/>
          Download ICS file to add this event to your calendar complete with join link
        </a>
      </div>

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="courses/"
           href="https://pad.archer2.ac.uk/p/230719-lammps-openfoam">
          <strong>Discussion board</strong><br/>
          Shared document for asking questions and making comments - open to all
        </a>
      </div>

											
    </div>

-->



<h2><a name="video">Video</a></h2>

<div>

<iframe title="Video"  width="560" height="315" src="https://www.youtube.com/embed/wZLrQNX5wuM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>



<section id="service">
    <div class="row ">	
		<div> 
		
<h3>Timeline</h3>
<ul>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=149s">2:29</a> Hybrid Atomistic-Continuum Simulations of Boiling (Mirco)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=394s">6:34</a> The CPL Library (Ed)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=1377s">22:57</a> Running CPL lirbrary on ARCHER2, installation overview, using the modules (Gavin)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=1841s">30:41</a> Coupled OpenFOAM's solvers (Mirco)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=2433s">40:33</a> LAMMPS and coupling with CPL (Ed)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=3094s">51:34</a> The coupled Couette flow case (Ed)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=3771s">1:02:51</a> The coupled boiling case (Gabriele)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=4469s">1:14:29</a> Demo on ARCHER2 (Gabriele)</li>
<li><a href="https://www.youtube.com/watch?v=wZLrQNX5wuM&t=4993s">1:23:13</a> Q & A</li>
</ul>		
		</div>
	</div>
    <div class="row ">	



      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="courses/"
           href="SmithE_Part_EPCC.pdf">
          <strong>Slides</strong><br/>
          Edward Smith
        </a>
      </div>



      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="courses/"
           href="eCSE_boiling_webinar_GJP_slides.pdf">
          <strong>Slides</strong><br/>
          Gavin Pringle
        </a>
      </div>
										
    </div>

    <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="courses/"
           href="magnini_EPCC - webinar version.pdf">
          <strong>Slides</strong><br/>
          Mirco Magnini
        </a>
      </div>
	


      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="courses/"
           href="gennari_EPCC.pdf">
          <strong>Slides</strong><br/>
		  Gabriele Gennari
        </a>
      </div>
	

										
    </div>

</section>

