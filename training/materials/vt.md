---
layout: section
title: ARCHER2 past Virtual Tutorials
summary: Training 
banner: web_banners_05.jpg
course_types: [ VT, Course ]
---

This page provides links to the past courses from ARCHER2. Each page also provides links to the 
materials associated with the courses potentially including: slides, video recordings, practical
exercises and solutions.

<div>
Filter courses by course type :
{% for ct in page.course_types %}
<a href="/training/materials/{{ ct | slugify }}" ><code  style="font-size:15px;"><nobr>{{ ct }}</nobr></code>&nbsp;</a>
{% endfor %} 
<a href="/training/materials/" ><code  style="font-size:15px;"><nobr>All courses</nobr></code>&nbsp;</a>   
</div>


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
      {% assign filtered_courses = site.courses | where_exp: "course", "course.end_date < site.time" %}
	  {% assign nothidden_courses = filtered_courses | where_exp: "course", "course.registration_status != 'hidden' " %}
	  {% assign vt_courses = nothidden_courses  | where_exp: "course", "course.course_type == 'vt' " %}
      {% for course in vt_courses reversed %}
      <tr>
      <td>
        <a href="{{ course.url }}">{{ course.title }}</a>
      </td>
      <td>
        {{ course.location }}
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
