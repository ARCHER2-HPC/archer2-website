---
layout: section
title: Service Status
summary: Information about ARCHER2 Service Status
banner: web_banners_03.jpg
--- 

- [Current System Load - Full System](#current-system-load---full-system)
- [Service Alerts](#service-alerts)
- [Maintenance Sessions](#maintenance-sessions)
- [System Status Mailings](#system-status-mailings)
- [FAQ](#faq)

## Current System Load - Full System

The plot below shows the status of nodes on the current ARCHER2 Full System service. A description of each
of the status types is provided below the plot.

![image](https://safe.epcc.ed.ac.uk/Graphs/archer2.png)
{: .img-center style="width: 80%" 
alt="ARCHER2 Node Status over time" 
title="ARCHER2 Node Status over time"}

- *alloc*: Nodes running user jobs
- *idle*: Nodes available for user jobs
- *resv*: Nodes in reservation and not available for standard user jobs
- *down*, *drain*, *maint*, *drng*, *comp*: Nodes unavailable for user jobs
- *mix*: Nodes in multiple states 

Note: the long running reservation visible in the plot corresponds to the *short* QoS which
is used to support small, short jobs with fast turnaround time.

<!--

## Current System Load - 4-cabinet

The plot below shows the status of nodes on the current ARCHER2 4-cabinet service. A description of each
of the status types is provided below the plot.

![image](https://safe.epcc.ed.ac.uk/Graphs/4cab.png)
{: .img-center style="width: 80%" 
alt="ARCHER2 Node Status over time" 
title="ARCHER2 Node Status over time"}

- *alloc*: Nodes running user jobs
- *idle*: Nodes available for user jobs
- *resv*: Nodes in reservation and not available for standard user jobs
- *down*, *drain*, *maint*, *drng*, *comp*: Nodes unavailable for user jobs
- *mix*: Nodes in multiple states 

Note: the long running reservation visible in the plot corresponds to the *short* QoS which
is used to support small, short jobs with fast turnaround time.

-->


## Service Alerts

The ARCHER2 documentation also covers some [Known Issues](https://docs.archer2.ac.uk/known-issues/) which users may encounter when using the system.


{% assign current_alerts = site.alerts | where_exp: "alert", "alert.status == 'Ongoing'" %}
{% for alert in current_alerts reversed %}
    {% if forloop.first == true %}
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
    {% if forloop.last == true %}
    </tbody>
  </table>
</div>
    {% endif %}
{% else %}
<p>No current service alerts</p>
{% endfor %}

### Pervious Service Alerts

This table lists resolved service alerts from the past month. 
[A full list of historical resolved service alerts is available](history/alerts).

{% assign resolved_alerts = site.alerts | where_exp: "alert", "alert.status == 'Resolved'" %}
{% assign date_now = "now" | date: "%s" %}
{% assign date_thresh = date_now | minus: 2592000 | date: "%s" %}
{% assign count = 0 %}
{% for alert in resolved_alerts reversed %}
    {% assign ed = alert.end_date | date: "%s" %}
    {% if ed > date_thresh %}
        {% if count == 0 %}
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
        {% assign count = count | plus: 1 %}
    {% endif %}
{% endfor %}
{% if count > 0 %}
    </tbody>
  </table>
</div>
{% else %}
<p>No recent service alerts</p>
{% endif %}

## Maintenance Sessions 

### Quarter 1 2022 (1st January - 31st March 2022)

| Status | Type | Start | End | Scope | User Impact | Reason |
| ---    | ---  | ---   | --- | ---    | ---         | ---    |
| Planned: RFC0093 | Partial : Login and Serial Nodes | 2022-01-26 10:00|2022-01-26 12:00 | ARCHER2 Login and Serial Nodes | Users will be unable to connect to ARCHER2 and no jobs will run on the serial nodes.  | To attach the ARCHER2 /home filesystem to a new network at the Advanced Computing Facility   |

### Maintenance Logs for previous periods

[Previous maintenance logs](history/maintenance)

## System Status mailings
If you would like to receive email notifications about system issues and outages, [please subscribe to the *System Status Notifications* mailing list via SAFE](https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list)

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)
