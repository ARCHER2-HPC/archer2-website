---
layout: section
title: ARCHER2 eCSE Webinars
summary: Training Webinars sharing the work from eCSE projects
banner: web_banners_05.jpg
course_types: [ VT, Course ]
audience: [Researcher, Data Scientist, Developer]
level: [Introductory, Intermediate, Advanced]
---

This page provides links to the past webinars and virtual tutorials from ARCHER2 which present work from [eCSE projects]({{ site.baseurl }}/ecse). Each page also provides links to the 
materials, potentially including: slides, video recordings, futher information.

<!--

<div>
Filter courses by course type :
{% for ct in page.course_types %}
<a href="/training/materials/{{ ct | slugify }}" ><code  style="font-size:15px;"><nobr>{{ ct }}</nobr></code>&nbsp;</a>
{% endfor %} 
<a href="/training/materials/" ><code  style="font-size:15px;"><nobr>All courses</nobr></code>&nbsp;</a>   
</div>

<div>
Filter courses by course Level :
{% for level in page.level %}
<a href="/training/materials/{{ level | slugify }}" ><code  style="font-size:15px;"><nobr>{{ level }}</nobr></code>&nbsp;</a>
{% endfor %} 
<a href="/training/materials/" ><code  style="font-size:15px;"><nobr>All courses</nobr></code>&nbsp;</a>   
</div>


<div>
Filter courses by course target audience :
{% for audience in page.audience %}
<a href="/training/materials/{{ audience | slugify }}" ><code  style="font-size:15px;"><nobr>{{ audience }}</nobr></code>&nbsp;</a>
{% endfor %} 
<a href="/training/materials/" ><code  style="font-size:15px;"><nobr>All courses</nobr></code>&nbsp;</a>   
</div>

-->


<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Course</th>
        <th>Venue</th>
        <th>Dates</th>
      </tr>
    </thead>
    <tbody>
<!--
      {% assign filtered_courses = site.courses | where_exp: "course", "course.end_date < site.time" %}
-->
	  {% assign nothidden_courses = site.courses | where_exp: "course", "course.registration_status != 'hidden' " %}
	  {% assign vt_courses = nothidden_courses  | where_exp: "course", "course.course_type == 'vt' " %}
	  {% assign ecse-vt_courses = vt_courses  | where_exp: "course", "course.ecse.size > 1" %}

      {% for course in ecse-vt_courses reversed %}
      <tr>
      <td>
        <a href="{{ course.url }}">{{ course.title }}</a>
{% if course.ecse.size > 1 %}
&nbsp; &nbsp; 
        <a href="{{ site.baseurl }}/ecse/reports/{{ course.ecse }}/">({{ course.ecse }})</a>
{% endif %}
      </td>
      <td>
        {{ course.location }}
		{% if course.video  %}
			<a href="{{ course.url }}#videos">
			&nbsp;<img src="{{ base.url }}/img/video.png" alt="Video available"/>
			</a> 
		{% endif %} 
      </td>
      <td>
        {{ course.human_dates }}
      </td>
     </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

---

* [Historic materials from ARCHER training (on ARCHER website)](http://www.archer.ac.uk/training/past_courses.php){:target="_blank"}
