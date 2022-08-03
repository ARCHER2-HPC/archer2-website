---
layout: course
title: Performance of Parallel IO on ARCHER2
banner: web_banners_05.jpg
human_dates: Wednesday 13th July 2022  15:00 - 16:00 BST
start_date: 2022-07-13 15:00:00
end_date: 2022-07-13 16:00:00
trainers: David Henty, EPCC
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
---

File input and output often become a severe bottleneck when parallel applications run on large numbers of processors. Simple methods such as writing a separate file-per-process or performing all IO via a single controller process are no longer feasible at scale. In order to take advantage of the full potential of modern parallel file systems such as Lustre, IO also needs to be done in parallel.

This talk will cover investigations of the parallel IO performance that can be achieved on ARCHER2 and compare to results on its predecessor, ARCHER, which was a Cray XC30. Popular parallel IO libraries such as MPI-IO, HDF5 and NetCDF will be benchmarked. 

Results are obtained using the simple benchio benchmark - <https://github.com/davidhenty/benchio>, which writes a large, regular, three-dimensional distributed dataset to file.

The aim is to be able to give users advice on the best parallel IO settings for their own applications. As the Lustre filesystem on ARCHER2 (an HPE Cray EX) has very different performance characteristics to that of ARCHER, previous experience may not be useful in achieving good IO rates.


This online session is open to all. It will use the Blackboard Collaborate platform.



<section id="service">

<!--

  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/c8ac04f82b3840c59db657aed98ca407">
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

<iframe title="Video"  width="560" height="315" src="https://www.youtube.com/embed/Ut_F5Frp2fE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
           href="parallelIO-archer2-VT-2022-07-13.pdf">
          <strong>Slides</strong><br/>
          Download pdf of the presentation.
        </a>
      </div>
										
    </div>
  </div>
</section>

