---
layout: course
title: A review of OpenFOAM collated I/O performance on ARCHER
banner: web_banners_05.jpg
human_dates: Wednesday 24th June 2020  15:00 - 16:00 BST
start_date: 2020-06-24 15:00:00
end_date: 2020-06-24 16:00:00
trainers: Julien Sindt EPCC
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
---

OpenFOAM is a widely-used program for performing computational fluid dynamics simulations, and is 
regularly among the top 20 most-used applications on ARCHER. One historical quirk of OpenFOAM is its 
need to write a file per variable per MPI-process when running in parallel on multiple processors - this quickly 
becomes an issue when running simulations on ARCHER or other HPC facilities where the number of processors used is 
high and the number of files produced can quickly run into the 10,000s-100,000s (and clog up a user's file number quota). With the 
release of v1706, the OpenFOAM developers have addressed this by adding an option to have all writing done to a 
single master file per variable (greatly reducing the total number of files generated). In this talk, I will be 
comparing the I/O performance of this new, collated writing method with the performance of the file-per-process 
method. Hopefully, this will help inform OpenFOAM users on ARCHER and elsewhere of the best method to use for their systems.

This online session is open to all. It will use the Blackboard Collaborate platform.




<section id="service">
<!--
  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/42cc4a3bb70548e9bde9458c539ea1dc">
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

<iframe width="560" height="315" src="https://www.youtube.com/embed/4iSOkN9N824" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>





<section id="service">
  <div class="container">
    <div class="row ">	

<!--

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="  ">
          <strong>Transcript</strong><br/>
          Download a transcript of the video audio
        </a>
      </div>

-->

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" href="courses/"
           href="20200624_OpenFOAM.pdf">
          <strong>Slides</strong><br/>
          Download pdf of the presentation.
        </a>
      </div>
										
    </div>
  </div>
</section>

