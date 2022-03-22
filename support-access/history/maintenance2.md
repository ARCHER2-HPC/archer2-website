---
layout: section
title: Maintenance
summary: Log of ARCHER2 Service Maintenance
banner: web_banners_03.jpg
---

- [Q4 2021](#maintenance-sessions-quarter-4-2021-1st-october---31st-december-2021)
- [Q3 2021](#maintenance-sessions-quarter3-2021-1st-july---30th-september-2021)
- [Q2 2021](#maintenance-sessions-quarter2-2021-1st-april---30th-june-2021)
- [Q1 2021](#maintenance-sessions-quarter1-2021-1st-january---31st-march-2021)


{% assign maintenance_2021_q4 = site.maintenance | where_exp: "maintenance", "maintenance.quarter == '2021_q4'" %}
{% for maintenance in maintenance_2021_q4 reversed %}

    {% if forloop.first == true %}

## Maintenance Sessions: Quarter 4 2021 (1st October - 31st December 2021)
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Type</th>
        <th>Start</th>
        <th>End</th>
        <th>System</th>
        <th>User Impact</th>
        <th>Reason</th>
      </tr>
    </thead>

    <tbody>
    {% endif %}
      <tr>
      <td>
        {{ maintenance.status }}
      </td>
      <td>
        {{ maintenance.type }}
      </td>
      <td>
        {{ maintenance.start_date }}
      </td>
      <td>
        {{ maintenance.end_date }}
      </td>
      <td>
        {{ maintenance.system }}
      </td>
      <td>
        {{ maintenance.impact }}
      </td>
      <td>
        {{ maintenance.reason }}
      </td>
      </tr>
    {% if forloop.last == true %}
    </tbody>
  </table>
</div>
    {% endif %}


{% endfor %}





{% assign maintenance_2021_q3 = site.maintenance | where_exp: "maintenance", "maintenance.quarter == '2021_q3'" %}
{% for maintenance in maintenance_2021_q3 reversed %}

    {% if forloop.first == true %}
## Maintenance Sessions: Quarter3 2021 (1st July - 30th September 2021)

<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Type</th>
        <th>Start</th>
        <th>End</th>
        <th>System</th>
        <th>User Impact</th>
        <th>Reason</th>
      </tr>
    </thead>

    <tbody>
    {% endif %}
      <tr>
      <td>
        {{ maintenance.status }}
      </td>
      <td>
        {{ maintenance.type }}
      </td>
      <td>
        {{ maintenance.start_date }}
      </td>
      <td>
        {{ maintenance.end_date }}
      </td>
      <td>
        {{ maintenance.system }}
      </td>
      <td>
        {{ maintenance.impact }}
      </td>
      <td>
        {{ maintenance.reason }}
      </td>
      </tr>
    {% if forloop.last == true %}
    </tbody>
  </table>
</div>
    {% endif %}


{% endfor %}






{% assign maintenance_2021_q2 = site.maintenance | where_exp: "maintenance", "maintenance.quarter == '2021_q2'" %}
{% for maintenance in maintenance_2021_q2 reversed %}

    {% if forloop.first == true %}
## Maintenance Sessions: Quarter2 2021 (1st April - 30th June 2021)

<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Type</th>
        <th>Start</th>
        <th>End</th>
        <th>System</th>
        <th>User Impact</th>
        <th>Reason</th>
      </tr>
    </thead>

    <tbody>
    {% endif %}
      <tr>
      <td>
        {{ maintenance.status }}
      </td>
      <td>
        {{ maintenance.type }}
      </td>
      <td>
        {{ maintenance.start_date }}
      </td>
      <td>
        {{ maintenance.end_date }}
      </td>
      <td>
        {{ maintenance.system }}
      </td>
      <td>
        {{ maintenance.impact }}
      </td>
      <td>
        {{ maintenance.reason }}
      </td>
      </tr>
    {% if forloop.last == true %}
    </tbody>
  </table>
</div>
    {% endif %}


{% endfor %}





{% assign maintenance_2021_q1 = site.maintenance | where_exp: "maintenance", "maintenance.quarter == '2021_q1'" %}
{% for maintenance in maintenance_2021_q1 reversed %}

    {% if forloop.first == true %}
## Maintenance Sessions: Quarter1 2021 (1st January - 31st March 2021)

<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Type</th>
        <th>Start</th>
        <th>End</th>
        <th>System</th>
        <th>User Impact</th>
        <th>Reason</th>
      </tr>
    </thead>

    <tbody>
    {% endif %}
      <tr>
      <td>
        {{ maintenance.status }}
      </td>
      <td>
        {{ maintenance.type }}
      </td>
      <td>
        {{ maintenance.start_date }}
      </td>
      <td>
        {{ maintenance.end_date }}
      </td>
      <td>
        {{ maintenance.system }}
      </td>
      <td>
        {{ maintenance.impact }}
      </td>
      <td>
        {{ maintenance.reason }}
      </td>
      </tr>
    {% if forloop.last == true %}
    </tbody>
  </table>
</div>
    {% endif %}


{% endfor %}



