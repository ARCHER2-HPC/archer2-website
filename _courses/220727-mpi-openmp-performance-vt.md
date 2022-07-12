---
layout: course
title: Performance of MPI+OpenMP on ARCHER2
banner: web_banners_05.jpg
human_dates: Wednesday 27th July 2022  15:00 - 16:00 BST
start_date: 2022-07-27 15:00:00
end_date: 2022-07-27 16:00:00
trainers: Holly Judge EPCC
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
---


 
Commonly, parallel applications on ARCHER2 are run using the message passing interface (MPI), where one process (or task) is spawned on each core. For ARCHER2 (which has 128 cores per node) this means that a large number of processes are used when running on many nodes. Using this many processes can have a negative impact on the performance of MPI communications for some applications and use cases. As an alternative, in some cases it is possible to use a combination of MPI processes and OpenMP threads (known as MPI+OpenMP). This approach naturally results in using fewer processes overall, and this can improve the performance of applications by reducing the overhead of communications, and also have other positive effects, such as lowering the memory requirements.
 
This talk will present a study of the performance of MPI+OpenMP in a variety of applications on ARCHER2. In doing so different configurations of processes and threads will be explored for various benchmark systems. This will aim to provide guidance to users about which applications and use cases can see a performance benefit from using MPI+OpenMP. The main applications we will present results for are CASTEP, CP2K, LAMMPS, GROMACS and Quantum EPRESSO.



This online session is open to all. It will use the Blackboard Collaborate platform.



<section id="service">

  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/b8cacfdee89a4fc5adbbb4aa01d8f5e3">
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
