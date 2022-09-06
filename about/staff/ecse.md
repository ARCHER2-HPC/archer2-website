---
layout: section
title: ARCHER2 eCSE Staff
summary: The Embedded Computational Science and Engineering (eCSE) team coordinate the eCSE programme, a programme that provides funding to the ARCHER2 user community to develop software in a sustainable manner to improve research on the ARCHER2 service. The team organise the regular calls, working with panel members to deliver a fair and objective funding programme. They support successful projects and arrange for final reports to be published and disseminated. 
banner: web_banners_02.jpg
---

Filter staff by teams :  <a href="/about/staff/servicedesk"><code class="highligher-rouge"><nobr>Servicedesk</nobr></code>&nbsp;</a>          <a href="/about/staff/uadmin"><code class="highligher-rouge"><nobr>User Admin </nobr></code>&nbsp;</a>           <a href="/about/staff/cse"><code class="highligher-rouge"><nobr>CSE</nobr></code>&nbsp;</a>            <a href="/about/staff/systems"><code class="highligher-rouge"><nobr>Systems</nobr></code></a> &nbsp;          <a href="/about/staff/ecse"><code class="highligher-rouge"><nobr><i>eCSE</i></nobr></code>&nbsp;</a>          <a href="/about/staff/training"><code class="highligher-rouge"><nobr>Training</nobr></code>&nbsp;</a>          <a href="/about/staff/outreach"><code class="highligher-rouge"><nobr>Outreach</nobr></code>&nbsp;</a>          <a href="/about/staff/quality"><code class="highligher-rouge"><nobr>Quality &amp; Feedback</nobr></code>&nbsp;</a>          <a href="/about/staff/web"><code class="highligher-rouge"><nobr>Web &amp; Docs</nobr></code>&nbsp;</a>                  <a href="/about/staff/coordination"><code class="highligher-rouge"><nobr>Coordination</nobr></code>&nbsp;</a>          <a href="/about/staff/"><code class="highligher-rouge"><nobr>All staff</nobr></code>&nbsp;</a>

{% assign sorted_staff = site.staff | sort:"surname" %}
{% for staff in sorted_staff  %}
{% if staff.tags contains 'ecse' %}



{% assign this_image_src = staff.image_src %}

{% if this_image_src.size < 2 %}
	{% assign this_image_src = "null.jpg" %}
{% endif %}


<div class="casestudy">
 
	<div class="csimage">
		<img src="{{ site.baseurl }}/img/staff/{{ this_image_src }}" alt="{{ staff.title }} {{ staff.forename }} {{ staff.surname }}"  
        style="width: 200px;" />

	</div>

	<div class="cstext">

		<h3>
			{% if staff.title.size > 1 %}
			    {{ staff.title }} 
			{% endif %}

            {{ staff.forename }} {{ staff.surname }}
		</h3>
		<p><b>{{ staff.role }}</b><br>
			<i>[
			{% for tag in staff.tags %}
				{{ tag }},
			{% endfor %}
			]</i>
		</p>
		<p>
	        {{ staff.bio }}		 		
		</p>

	</div>



</div>
{% endif %}
{% endfor %}
