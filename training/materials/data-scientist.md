---
layout: section
title: ARCHER2 past  courses for Data Scientists
summary: Training 
banner: web_banners_05.jpg
course_types: [ VT, Course ]
audience: [Researcher, Data Scientist, Developer]
level: [Introductory, Intermediate, Advanced]
---

This page provides links to the past courses from ARCHER2. Each page also provides links to the 
materials associated with the courses potentially including: slides, video recordings, practical
exercises and solutions.

<div>
Filter courses by course Level :
{% for level in page.level %}
<a href="/training/materials/{{ level | slugify }}" ><code  style="font-size:15px;"><nobr>
<img src="{{ level | slugify }}.png" alt="{{ level }}"/> 
{{ level }}</nobr></code>&nbsp;</a>
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


<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Course</th>
        <th>Level</th>
        <th>Venue</th>
        <th>Dates</th>
      </tr>
    </thead>
    <tbody>
      {% assign filtered_courses = site.courses | where_exp: "course", "course.end_date < site.time" %}
	  {% assign nothidden_courses = filtered_courses | where_exp: "course", "course.registration_status != 'hidden' " %}
	  {% assign advanced_courses = nothidden_courses  | where_exp: "course", "course.audience contains 'data-scientist' " %}
      {% for course in advanced_courses reversed %}
      <tr>
      <td>
        <a href="{{ course.url }}">{{ course.title }}</a>
      </td>
      <td>
		{% if course.level contains 'introductory' %}
			&nbsp;<img src="introductory.png" alt="Introductory"/> 
		{% endif %}
		{% if course.level contains 'intermediate' %}
			&nbsp;<img src="intermediate.png" alt="Intermediate"/> 
		{% endif %}
		{% if course.level contains 'advanced' %}
			&nbsp;<img src="advanced.png" alt="Advanced"/> 
		{% endif %}
      </td>
      <td>
        {{ course.location }}
		{% if course.video %}
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
