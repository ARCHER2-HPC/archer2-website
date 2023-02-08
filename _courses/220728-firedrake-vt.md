---
layout: course
title: Goal-oriented mesh adaptation for Firedrake
banner: web_banners_05.jpg
human_dates: Thursday 28th July 2022  15:00 - 16:00 BST
start_date: 2022-07-28 15:00:00
end_date: 2022-07-28 16:00:00
trainers: Joe Wallwork, Imperial College London
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
ecse: eCSE03-04
---

Mesh adaptation can be a very powerful tool for improving the accuracy and/or efficiency of numerical simulations, but it is still not widely used. This is largely because commonly available approaches require experience and an in-depth understanding of both the problem at hand and its interaction with the discretisation method being used. The goal-oriented mesh adaptation framework reduces the required level of experience, since it is driven by error estimates determined by the PDE and a user-specified quantity of interest that we seek to accurately approximate, such as the power output of a turbine or the drag on an aeroplane wing.
 
The primary output of this eCSE is a new goal-oriented error estimation module, Pyroteus, which handles the solution of PDEs and their adjoints on sequences of meshes and enables the automatic computation of error indicators. In addition, both the PETSc solver library and Firedrake finite element library have been extended to support metric-based mesh adaptation, to facilitate goal-oriented mesh adaptation using Pyroteus. In this webinar, we will describe the new functionality introduced by this eCSE and demonstrate its use in a variety of test cases related to geoscientific modelling.



This online session is open to all. It will use the Blackboard Collaborate platform.


{% if page.ecse.size > 1 %}
<a href="{{ site.baseurl }}/ecse/reports/{{ page.ecse }}">eCSE project {{ page.ecse }}</a>
{% endif %}

<section id="service">
<!--
  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/0ec864585cf54f14aa623ecbd42181f4">
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

											
    </div>

-->



<h2><a name="video">Video</a></h2>

<div>

<iframe title="Video"  width="560" height="315" src="https://www.youtube.com/embed/bXkOVYh4j3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>





<section id="service">
  <div class="container">
    <div class="row ">	







      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="courses/"
           href="eCSE_Presentation_Joe_Wallwork.pdf">
          <strong>Slides</strong><br/>
          Download pdf of the presentation.
        </a>
      </div>
										
    </div>
  </div>
</section>

