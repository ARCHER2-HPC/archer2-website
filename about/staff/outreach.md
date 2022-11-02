---
layout: section
title: ARCHER2 Outreach Staff
summary: The outreach team carries out outreach and public engagement activities around HPC, provide an engaging, innovative and diverse programme of activities. The team has two main focus. The first is to deliver outreach activities targeted at young people, with an aim of explaining the relevance and benefit of HPC to society and of encouraging young people to consider a career in STEM. The second is focused on lifelong learning, recognising the benefits this can bring for social inclusion, employability and wellbeing. 
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
{% if staff.tags contains 'Outreach' %}



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
