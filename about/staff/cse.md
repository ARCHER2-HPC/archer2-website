---
layout: section
title: ARCHER2 CSE Staff 
summary: The Computational Science and Engineering (CSE) team are responsible for providing expert technical advice to users and prospective users of ARCHER2 so that they can get the most benefit from the service for their work. Typical work for the team includes helping people to port their software and workflows to ARCHER2, getting the best performance from the service, writing and improving the documentation and providing technical advice to people applying for access to ARCHER2. The team includes experts from EPCC and HPE working closely together.
banner: web_banners_02.jpg
teams:  [Servicedesk, User Admin, CSE, Systems, eCSE, Training, Outreach,  Quality & Feedback, Web & Docs, Coordination]
---


<div>
Filter staff by teams :
{% for team in page.teams %}
<a href="/about/staff/{{ team | slugify }}" ><code  style="font-size:15px;"><nobr>{{ team }}</nobr></code>&nbsp;</a>
{% endfor %} 
<a href="/about/staff/" ><code  style="font-size:15px;"><nobr>All Staff</nobr></code>&nbsp;</a>   
</div>
 


{% assign sorted_staff = site.staff | sort:"surname" %}
{% for staff in sorted_staff  %}
{% if staff.tags contains 'CSE' %}



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
				<a href="/about/staff/{{ tag | slugify }}" >{{ tag }}</a>
				{% if forloop.last %}{% else %},{% endif %}
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
