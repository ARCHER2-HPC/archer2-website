---
layout: course
title: Efficient Parallel IO on ARCHER2
banner: web_banners_05.jpg 
human_dates: 11 January 2022  9:30 - 17:00  GMT
start_date: 2022-01-11 09:30:00
end_date: 2022-01-11 17:00:00
trainers: David Henty EPCC
course_type: course
registration_status: open
registration_url: https://events.prace-ri.eu/event/1299/
location: Online
location_url:
prace_course: true
---

One of the greatest challenges to running parallel applications on
large numbers of processors is how to handle file IO. Standard Unix IO
routines are not designed with parallelism in mind, and IO overheads
can grow to dominate the overall runtime. Parallel file systems are
optimised for large volumes of data, but performance can be far from
optimal if every process opens its own file or if all IO is funnelled
through a single controller process.


This hands-on course explores a range of issues related to parallel
IO. It uses ARCHER2 and its parallel Lustre file system as a platform
for the exercises; however, almost all the IO concepts and performance
considerations are applicable to any parallel system.

We will give a general overview of how parallel IO is implemented in
MPI-IO as these are the routines ultimately used by higher-level
libraries such as HDF5 and NetCDF. A good understanding of the
performance characteristics of MPI-IO is therefore very useful in
optimising the IO performance of most parallel applications.

#### Prerequisites:

Prerequisites: The course assumes a good understanding of basic MPI
programming in C, C++ or Fortran. Knowledge of MPI derived datatypes
would be useful but not essential.


### Requirements:

Participants must bring a laptop with a Mac, Linux, or Windows operating system (not a tablet, Chromebook, etc.) that they have administrative privileges on.

They are also required to abide by the [ARCHER2  Code of Conduct](../../../about/policies/code-of-conduct.html). 


### Timetable:

[Draft timetable](https://github.com/EPCCed/archer2-parallelIO-2022-01-11#timetable-all-times-are-in-gmt)

<section id="service">

 

<h2><a name="materials">Course materials</a></h2>



    <div class="row ">	

		
      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-green" 
          href=" https://github.com/EPCCed/archer2-parallelIO-2022-01-11  ">
          <strong>Course materials</strong><br>
			Includes timetable         
        </a>
      </div>


 
      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://pad.archer2.ac.uk/p/220111-efficient-parallel-io">
          <strong>Course Chat</strong>       
        </a>
      </div>
		

 	</div>
		
		
					


<!-- 		
<h2><a name="videos">Videos</a></h2>

<h3>Session 1</h3>

<div>
	<iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/xxxxxxxxxxx" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

 -->





<!-- 
<h2><a name="feedback">Feedback</a></h2>


    <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 


		   href="https://events.prace-ri.eu/event/1299/surveys/884  "

		>
          <strong>Feedback</strong><br/>
          Please let us know what was great about this course and anything we can improve
        </a>
      </div>
    </div>
		
 -->		

 
</section>


