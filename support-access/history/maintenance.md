---
layout: section
title: Maintenance
summary: Log of ARCHER2 Service Maintenance
banner: web_banners_03.jpg
---

{% for maint in site.maintenance reversed %}

    {% capture curryear %}
    {{ maint.start_date | date: "%Y" }}
    {% endcapture %}

    {% if forloop.first %}
       {% assign prevyear = curryear %}
<h2>{{ curryear }}</h2>
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Type</th>
        <th>Start</th>
        <th>End</th>
        <th>Quarter</th>
        <th>Scope</th>
        <th>User Impact</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
    {% endif %}

    {% if curryear != prevyear %}
    </tbody>
  </table>
</div>
<h2>{{ curryear }}</h2>
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Type</th>
        <th>Start</th>
        <th>End</th>
        <th>Quarter</th>
        <th>Scope</th>
        <th>User Impact</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>      
    {% endif %}

      <tr>
      <td>
        {{ maint.status }}
      </td>
      <td>
        {{ maint.type }}
      </td>
      <td>
        {{ maint.start_date }}
      </td>
      <td>
        {{ maint.end_date }}
      </td>
      <td>
        {{ maint.quarter }}
      </td>
      <td>
        {{ maint.system }}
      </td>
      <td>
        {{ maint.impact }}
      </td>
      <td>
        {{ maint.reason }}
      </td>
      </tr>

    {% if forloop.last %}
    </tbody>
  </table>
</div>
    {% endif %}

    {% assign prevyear = curryear %}

{% endfor %}


