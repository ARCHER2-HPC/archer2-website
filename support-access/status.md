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
- [Usage statistics](#usage-statistics)

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
- *plnd*: Nodes are planned to be used for a future jobs. If pending jobs can fit in the space before the future job is due to start they can run on these nodes (often referred to as *backfilling*).
- *down*, *drain*, *maint*, *drng*, *comp*, *boot*: Nodes unavailable for user jobs
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



{% assign current_alerts = site.alerts | where_exp: "alert", "alert.status != 'Resolved'" %}
{% assign date_now = "now" | date: "%s" %}
{% assign date_thresh = date_now | minus: 2592000 | date: "%s" %}
{% assign count = 0 %}
{% for alert in current_alerts reversed %}
    {% assign sd = alert.start_date | date: "%s" %}
    {% if sd <= date_now %}
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
        {{ alert.start_date | date: "%Y-%m-%d %H:%M"  }}
      </td>
      <td>
        {{ alert.end_date | date: "%Y-%m-%d %H:%M"  }}
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
<p>No current service alerts</p>
{% endif %}



{% assign future_alerts = site.alerts | where_exp: "alert", "alert.status != 'Resolved'" %}
{% assign date_now = "now" | date: "%s" %}
{% assign date_thresh = date_now | minus: 2592000 | date: "%s" %}
{% assign count = 0 %}
{% for alert in future_alerts reversed %}
    {% assign sd = alert.start_date | date: "%s" %}
    {% if sd > date_now %}
        {% if count == 0 %}
#### Planned Sessions
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
        Planned
      </td>
      <td>
        {{ alert.type }}
      </td>
      <td>
        {{ alert.start_date | date: "%Y-%m-%d %H:%M"  }}
      </td>
      <td>
        {{ alert.end_date | date: "%Y-%m-%d %H:%M"  }}
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
<p></p>
{% endif %}




### Previous Service Alerts

This table lists resolved service alerts from the past 30 days. 
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
        {{ alert.start_date | date: "%Y-%m-%d %H:%M"  }}
      </td>
      <td>
        {{ alert.end_date | date: "%Y-%m-%d %H:%M"  }}
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



{% assign maintenance_2022_q2 = site.maintenance | where_exp: "maintenance", "maintenance.quarter >= '2022_q2'" %}
{% for maintenance in maintenance_2022_q2 reversed %}

    {% if forloop.first == true %}
### Quarter 2 2022 (1st April - 30th June 2022)

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
{% else %}
<p>No scheduled maintenance</p>

{% endfor %}




### Maintenance Logs for previous periods

[Previous maintenance logs](history/maintenance)

## System Status mailings
If you would like to receive email notifications about system issues and outages, [please subscribe to the *System Status Notifications* mailing list via SAFE](https://epcced.github.io/safe-docs/safe-for-users/#how-to-get-added-to-or-removed-from-the-email-mailing-list)

## FAQ
* [Frequently asked questions](https://docs.archer2.ac.uk/faq/)

## Usage statistics

{% assign period = site.usage.last %}

This section contains data on ARCHER2 usage for {{ period.date | date: "%b %Y"  }}. Access to historical usage data
is available at the end of the section.

- [Usage by job size and length](#usage-by-job-size-and-length)
- [Queue length data](#queue-length-data)
- [Software usage data](#software-usage-data)
- [Historical usage data](#historical-usage-data)

### Usage by job size and length

<img width="60%" src="{{ period.base_url }}/{{ period.usage_heatmap }}" alt="Heatmap of usage job size versus job length" />

### Queue length data

The colour indicates scheduling coefficient which is computed as [run time] divided by [run time + queue time]. A scheduling
coefficient of 1 indicates that there was zero time queuing, a scheduling coefficient of 0.5 means that the job spent as long
queuing as it did running.

<img width="60%" src="{{ period.base_url }}/{{ period.sc_heatmap }}" alt="Heatmap of scheduling coefficient job size versus job length" />

### Software usage data

Plot and table of % use and job step size statistics for different software on ARCHER2 for {{ period.date | date: "%b %Y" }}.
This data is also [available as a CSV file]({{ period.base_url }}/{{ period.code_usage_data }}).

<img width="60%" src="{{ period.base_url }}/{{ period.code_usage_plot }}" alt="Plot of usage by different software" />

This table shows job step size statistics in cores weighted by usage, total number of job steps and percent usage broken
down by different software for {{ period.date | date: "%b %Y" }}.

{% include_relative size-tables/{{ period.code_usage_table }} %}

### Historical usage data

{% for period in site.usage reversed %}
  {% if forloop.first %}
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Period</th>
        <th>Usage Heatmap</th>
        <th>Queue Heatmap</th>
        <th>Software usage plot</th>
        <th>Software usage data</th>
      </tr>
    </thead>
    <tbody>
  {% endif %}
      <tr>
      <td>
        {{ period.date | date: "%b %Y" }}
      </td>
      <td>
        <a href="{{ period.base_url }}/{{ period.usage_heatmap }}">Usage heatmap (PNG)</a>
      </td>
      <td>
        <a href="{{ period.base_url }}/{{ period.sc_heatmap }}">Queue heatmap (PNG)</a>
      </td>
      <td>
        <a href="{{ period.base_url }}/{{ period.code_usage_plot }}">Software usage plot (PNG)</a>
      </td>
      <td>
        <a href="{{ period.base_url }}/{{ period.code_usage_data }}">Software usage and size data (CSV)</a>
      </td>
      </tr>
{% endfor %}

