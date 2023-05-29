---
layout: course
title: Python overhead&colon; Reducing the burden
banner: web_banners_05.jpg
human_dates: Wednesday 5th July 2023  15:00 - 16:00 BST
start_date: 2023-07-05 15:00:00
end_date: 2023-07-05 16:00:00
trainers:  Michael Bareford EPCC 
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
video: 
ecse:
---

Support queries involving Python are becoming more and more common in HPC. Python can feature within
traditional HPC workflows and is particularly popular for machine learning tasks. However, those Python packages
involved with inter-process communications (mpi4py) and low-level computation (pycuda/cupy) must be linked to
code libraries built specifically for the host system. It is more convenient therefore to maintain such packages within
a centralized location, and, at the same time, provide users with a straightforward way to access those packages
from within their own local Python environments.

This talk explains how this can be accomplished and then proceeds through several use cases implemented on the
two main HPC systems delivered by EPCC, namely ARCHER2 and Cirrus.



This online session is open to all. It will use the Blackboard Collaborate platform.

{% if page.ecse.size > 1 %}
<a href="{{ site.baseurl }}/ecse/reports/{{ page.ecse }}">eCSE project {{ page.ecse }}</a>
{% endif %}

<section id="service">

  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/10e8e0ef1cfd4d588c5c159517ffde8a">
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




<!--
<h2><a name="video">Video</a></h2>

<div>

<iframe title="Video"  width="560" height="315" src="https://www.youtube.com/embed/XXXXXXXXXXX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

-->

<!--

<section id="service">

    <div class="row ">	



      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="  ">
          <strong>Transcript</strong><br/>
          Download a transcript of the video audio
        </a>
      </div>



      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="courses/"
           href="ARCHER2_Training_VT.pdf">
          <strong>Slides</strong><br/>
          Download pdf of the presentation.
        </a>
      </div>
										
    </div>

</section>
-->
