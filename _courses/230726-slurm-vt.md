---
layout: course
title: Slurm&colon; Scheduling jobs on ARCHER2
banner: web_banners_05.jpg
human_dates: Wednesday 26th July 2023  15:00 - 16:00 BST
start_date: 2023-07-26 15:00:00
end_date: 2023-07-26 16:00:00
trainers: David Henty EPCC
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
video: 
ecse:
---


All access to the ARCHER2 compute nodes is via the Slurm workload manager, and writing batch submission scripts for standard MPI programs is relatively straightforward. However, it is useful to understand what actual happens under the hood which is sometimes not as simple as it may first appear.

There will be a 45-minute presentation at the start of this online tutorial, given by David Henty from ARCHER2 CSE support, which will address the following:

- how do batch scripts work?
- what happens to my Slurm job after I type sbatch?
- how do time limits and charging work?
- how do I access special queues?
- where does my job script actually run?
- how are processes and threads distributed across nodes or between the CPU-cores within a node?
- can I issue multiple srun commands in a single Slurm job?
- how do "interactive" batch jobs work?
- common issues; tips and tricks


This online session is open to all. It will use the Blackboard Collaborate platform.

{% if page.ecse.size > 1 %}
<a href="{{ site.baseurl }}/ecse/reports/{{ page.ecse }}">eCSE project {{ page.ecse }}</a>
{% endif %}

<section id="service">


  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/4291d1b05dc2423890eaab788481755c">
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
