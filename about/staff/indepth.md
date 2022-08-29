---
layout: section
title: ARCHER2 In Depth Staff 
summary: The In Depth team are responsible for providing expert technical advice to users and prospective users of ARCHER2 so that they can get the most benefit from the service for their work. Typical work for the In Depth team includes helping people to port their software and workflows to ARCHER2, get the best performance from the service, write and improve the documentation and provide technical advice to people applying for access to ARCHER2. The In Depth team includes experts from EPCC and HPE working closely together.
banner: web_banners_02.jpg
---

Filter staff by teams :  <a href="/about/staff/servicedesk"><code class="highligher-rouge"><nobr>Servicedesk Operators</nobr></code>&nbsp;</a>          <a href="/about/staff/uadmin"><code class="highligher-rouge"><nobr>User Admin </nobr></code>&nbsp;</a>           <a href="/about/staff/indepth"><code class="highligher-rouge"><nobr><i>In Depth</i></nobr></code>&nbsp;</a>            <a href="/about/staff/technical"><code class="highligher-rouge"><nobr>Technical Operations</nobr></code></a> &nbsp;          <a href="/about/staff/ecse"><code class="highligher-rouge"><nobr>eCSE</nobr></code>&nbsp;</a>          <a href="/about/staff/training"><code class="highligher-rouge"><nobr>Training</nobr></code>&nbsp;</a>          <a href="/about/staff/outreach"><code class="highligher-rouge"><nobr>Outreach</nobr></code>&nbsp;</a>          <a href="/about/staff/management"><code class="highligher-rouge"><nobr>Management</nobr></code>&nbsp;</a>          <a href="/about/staff/"><code class="highligher-rouge"><nobr>All staff</nobr></code>&nbsp;</a>

{% assign sorted_staff = site.staff | sort:"surname" %}
{% for staff in sorted_staff  %}
{% if staff.tags contains 'indepth' %}



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
