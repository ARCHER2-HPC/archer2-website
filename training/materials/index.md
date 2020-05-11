---
layout: section
title: ARCHER2 Training Materials and Past Courses
summary: Training 
banner: web_banners_05.jpg
---

This page provides links to the past courses from ARCHER2. Each page also provides links to the 
materials associated with the courses potentially including: slides, video recordings, practical
exercises and solutions.

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
      {% for course in filtered_courses reversed %}
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
