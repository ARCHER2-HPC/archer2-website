---
layout: section
title: ARCHER2 Staff
summary: Meet the ARCHER2 service support teams.
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
				{{ tag }}
				{% if forloop.last %}{% else %},{% endif %}
			{% endfor %}
			]</i>
		</p>
		<p>
	        {{ staff.bio }}		 		
		</p>

	</div>
</div>



{% endfor %}




