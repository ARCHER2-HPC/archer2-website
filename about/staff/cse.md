---
layout: section
title: ARCHER2 CSE Staff
summary: The Computational Science and Engineering provide technical support to users.
banner: web_banners_02.jpg
---

Filter staff by teams :  <a href="/about/staff/sp"><code class="highligher-rouge"><nobr>SP Group</nobr></code>&nbsp;</a>    <a href="/about/staff/cse"><code class="highligher-rouge"><nobr><i>CSE Group</i></nobr></code>&nbsp;</a>           <a href="/about/staff/servicedesk"><code class="highligher-rouge"><nobr>Servicedesk Operators</nobr></code>&nbsp;</a>    <a href="/about/staff/uadmin"><code class="highligher-rouge"><nobr>User Admin </nobr></code>&nbsp;</a>     <a href="/about/staff/training"><code class="highligher-rouge"><nobr>Training</nobr></code>&nbsp;</a>            <a href="/about/staff/ecse"><code class="highligher-rouge"><nobr>eCSE</nobr></code>&nbsp;</a>       <a href="/about/staff/"><code class="highligher-rouge"><nobr>All staff</nobr></code>&nbsp;</a>  

{% assign sorted_staff = site.staff | sort:"surname" %}
{% for staff in sorted_staff  %}
{% if staff.tags contains 'cse' %}



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
