---
layout: course
title: ARCHER2/Cirrus lightning talks
banner: web_banners_05.jpg
human_dates: Wednesday 22nd November 2023  15:00 - 16:00 
start_date: 2023-11-22 15:00:00
end_date: 2023-11-22 16:00:00
trainers: Michael Bareford EPCC
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
video: 
ecse:
---

This presentation will combine four lightning-talks, each one relating to some aspect of code performance on HPC platforms.


## Running Python code at scale

Running Python code at scale (e.g., > 10,000 MPI ranks) can overload the file system metadata server if every process is
working through the same sequence of Python imports. The Spindle tool is intended to mitigate this issue by caching data
within node memory. We demonstrate how to use Spindle on ARCHER2 and on Cirrus.

## Realistic ML benchmarks

Realistic ML benchmarks are a useful means for checking the performance of complex HPC software stacks that encompass
Python, MPI, and GPU support. We show how to use the MLPerf CosmoFlow benchmark on ARCHER2 using a centrally-installed
TensorFlow (Lmod) module.

## Roofline Models with Intel Advisor

The roofline plot can be a succinct way to identify underperforming elements within your code. Further, such a plot shows whether
a particular element (e.g., subroutine, function or loop) is under the memory-bound or compute-bound rooflines, thereby indicating
how a code element's design could be altered for improved performance. We present, for Cirrus and ARCHER2, the use of the
Intel Advisor tool for generating roofline plots.

## Fortran-based OpenMP offloading

Lastly, we present a worked example of Fortran-based OpenMP offloading for the Cirrus machine. It is likely that the next generation
of HPC machines will feature GPU hardware, so, we hope this example will be useful for any users who are thinking about
accelerating their code in this way. OpenMP offloading has the advantage of not being tied to a particular GPU vendor.


This online session is open to all. It will use the Blackboard Collaborate platform.

{% if page.ecse.size > 1 %}
<a href="{{ site.baseurl }}/ecse/reports/{{ page.ecse }}">eCSE project {{ page.ecse }}</a>
{% endif %}

<section id="service">

  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/895e55ba767a4adf8df9ed0c3edb3b73">
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
