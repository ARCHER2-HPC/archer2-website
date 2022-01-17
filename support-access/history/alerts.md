---
layout: section
title: Resolved Service Alerts
summary: Log of resolved ARCHER2 Service Alerts
banner: web_banners_03.jpg
---

{% assign resolved_alerts = site.alerts | where_exp: "alert", "alert.status == 'Resolved'" %}
{% for alert in resolved_alerts reversed %}

    {% capture curryear %}
    {{ alert.end_date | date: "%Y" }}
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
        <th>Scope</th>
        <th>User Impact</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>      
    {% endif %}

      <tr>
      <td>
        {{ alert.status }}
      </td>
      <td>
        {{ alert.type }}
      </td>
      <td>
        {{ alert.start_date }}
      </td>
      <td>
        {{ alert.end_date }}
      </td>
      <td>
        {{ alert.scope }}
      </td>
      <td>
        {{ alert.impact }}
      </td>
      <td>
        {{ alert.reason }}
      </td>
      </tr>

    {% if forloop.last %}
    </tbody>
  </table>
</div>
    {% endif %}

    {% assign prevyear = curryear %}

{% endfor %}
