---
layout: course
title: Adventures and misadventures in hybrid programming
banner: web_banners_05.jpg
human_dates: Wednesday 25th September 2024 15:00 - 16:00
start_date: 2024-09-25 15:00:00
end_date: 2024-09-25 16:00:00
trainers: Kevin Stratford EPCC
course_type: vt
registration_status:
registration_url:
location: Online
location_url:
prace_course: false
video: 
ecse: eCSE01-26
---

Parallelism is central to modern scientific computing in that it provides
the potential both to increase problem size and to reduce time to solution.
At the level of the application, parallelism is typically expressed as a
mixture of two levels (at least): MPI for distributed memory and a shared
memory model at the node level, be it OpenMP for host parallelism
or some GPU model for device parallelism. Thus "hybrid programming".

This presentation will focus on a series of practical problems arising
in the development of [Ludwig](https://github.com/ludwig-cf/ludwig), a lattice Boltzmann code aimed at complex
fluids. First, I will give an overview of the abstraction adopted at
the shared memory level to cope with the advent of GPUs. Second, a
general measure of performance will be discussed in the context of ARCHER2
to show that the hybrid approach is effective at the socket level.
Third, the interaction between the two levels of parallelism at the
point of the nearest-neighbour halo exchange will be examined to
consider a [number of strategies including the use of tasks](https://www.archer2.ac.uk/ecse/reports/ARCHER2-eCSE01-26-technical-report.pdf). Fourth,
the task picture will be extended to the use of graph execution in the
GPU context. Fifth, results will be presented on the performance including
i/o in the high-scaling regime on ARCHER2.

The talk will illustrate approaches have been found useful, but will also
describe misadventures which lead to relatively poor performance. The
talk is aimed primarily at application programmers.  


This online session is open to all. It will use the Blackboard Collaborate platform.

{% if page.ecse.size > 1 %}
<a href="{{ site.baseurl }}/ecse/reports/{{ page.ecse }}">eCSE project {{ page.ecse }}</a>
{% endif %}

<section id="service">

<!--
  <div class="row ">	

      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" 
          href="https://eu.bbcollab.com/guest/fdc3dd1378d84824955b4b28a11d60eb">
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

<iframe title="Video"  width="560" height="315" src="https://www.youtube.com/embed/6xwXlOlS6Rk  " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>



<!--

<section id="service">

    <div class="row ">	


      <div class="col-xs-6 col-sm-4">
        <a class="ar2_linkbox ar2_linkbox-teal" href="courses/"
           href="   ">
          <strong>Slides</strong><br/>
          Download pdf of the presentations.
        </a>
      </div>
										
    </div>

</section>

-->