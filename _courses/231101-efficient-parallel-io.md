---
layout: course
title: Efficient Parallel IO
banner: web_banners_05.jpg 
human_dates: 1 November 2023  09:30 - 16:30  GMT
start_date: 2023-11-01 09:30:00
end_date: 2023-11-01 16:30:00
trainers: David Henty EPCC
course_type: course
registration_status: open
registration_url: https://www.archer2.ac.uk/training/register/?course=231101-efficient-parallel-io
location: Online
location_url:
prace_course: false
audience: [  developer ]
level: [  intermediate ]
video: true
---



One of the greatest challenges to running parallel applications on large numbers of processors is how to handle file IO. Standard Unix IO routines are not designed with parallelism in mind, and IO overheads can grow to dominate the overall runtime. Parallel file systems are optimised for large volumes of data, but performance can be far from optimal if every process opens its own file or if all IO is funnelled through a single controller process.

This hands-on course explores a range of issues related to parallel IO. It uses ARCHER2 and its parallel Lustre file system as a platform for the exercises; however, almost all the IO concepts and performance considerations are applicable to any parallel system.

We will give a general overview of the Lustre filesystem and how parallel IO is implemented in MPI-IO since these are the routines ultimately used by many higher-level libraries such as HDF5 and NetCDF. A good understanding of the performance characteristics of MPI-IO is therefore very useful in optimising the IO performance of most parallel applications.

The course does not teach the detailed syntax of the various parallel IO libraries, but the Fortran source code provided for the benchmarking application used in the practical sessions should be useful reference material.

 
#### Prerequisites:

The course assumes an understanding of basic MPI programming in C, C++ or Fortran. Knowledge of MPI derived datatypes would be useful but not essential.

All attendees will be given access to ARCHER2 for the duration of the course.

### Requirements:

Participants must bring a laptop with a Mac, Linux, or Windows operating system (not a tablet, Chromebook, etc.) that they have administrative privileges on.

They are also required to abide by the [ARCHER2  Code of Conduct](../../../about/policies/code-of-conduct.html). 


#### Timetable:

Wednesday 1st November 2023

-    09:30 - 10:15 : Challenges of Parallel IO
-     10:15 - 10:45 : Lustre file system on ARCHER2
-     10:45 - 11:00 : Practical: Basic IO performance
-     11:00 - 11:30 : Break
-     11:30 - 12:00 : Practical: Basic IO performance (cont)
-     12:00 - 12:45 : Overview of MPI-IO
-     12:45 - 13:00 : Practical: MPI-IO performance
-     13:00 - 14:00 : Lunch
-     14:00 - 14:30 : Configuring the Lustre filesystem
-     14:30 - 15:00 : Practical: MPI-IO performance (cont)
-     15:00 - 15:30 : Higher-level parallel IO libraries
-     15:30 - 16:00 : Break
-     16:00 - 16:30 : Q&A / Finish exercises
-     16:30 : CLOSE


<!--
[Schedule](https://github.com/EPCCed/archer2-parallelIO-2022-08-23#timetable-all-times-are-in-bst-gmt1)
-->
<section id="service">

<!--

<h2><a name="materials">Course materials</a></h2>



    <div class="row ">	

 		
      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" 
          href="https://github.com/EPCCed/archer2-parallelIO-2022-08-23   ">
          <strong>Course materials</strong>         
        </a>
      </div>


 
      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://pad.archer2.ac.uk/p/231101-efficient-parallel-io">
          <strong>Course Chat</strong>       
        </a>
      </div>
		

 	</div>
		
		
-->					

<!--
 		
<h2><a name="videos">Videos</a></h2>

<h3>Session 1</h3>

<div>
	<iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/BesJednvy64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


<h3>Session 2</h3>

<div>
	<iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/xA1OCqTeuu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>



-->

<!--
 
<h2><a name="feedback">Feedback</a></h2>


    <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 


		   href="https://www.archer2.ac.uk/training/feedback/?course=231101-efficient-parallel-io"

		>
          <strong>Feedback</strong><br/>
          Please let us know what was great about this course and anything we can improve
        </a>
      </div>
    </div>
		
-->		

 
</section>


