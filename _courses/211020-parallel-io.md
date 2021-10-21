---
layout: course
title: Parallel IO on ARCHER2
banner: web_banners_05.jpg
human_dates: Wednesday 20th October 2021  15:00 - 16:00 BST
start_date: 2021-10-20 15:00:00
end_date: 2021-10-20 16:00:00
trainers: David Henty EPCC
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
---

One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. The IO routines provided by your favourite serial programming language are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems, such as ARCHER2's Lustre, are optimised for large data transfers but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

Many libraries allow for true parallel IO, including MPI-IO, HDF5, NetCDF and ADIOS. However, the user must call them correctly and configure the filesystem appropriately to obtain good performance.

This talk will cover:

- the challenges of parallel IO;
- parallel filesystems and the Lustre configuration on ARCHER2;
- efficient use of Lustre;
- initial results from the ARCHER2 production system.

The presentation will be kept relatively short to allow for interactive discussions and a Q&A session.


This online session is open to all. It will use the Blackboard Collaborate platform.



<section id="service">

<!--
  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/13a109b5662f4fda8b111ac74c03833b">
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

<iframe title="Video"  width="560" height="315" src="https://www.youtube.com/embed/2TjL2_oXZ0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>



<!--

<section id="service">
  <div class="container">
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
  </div>
</section>
-->
