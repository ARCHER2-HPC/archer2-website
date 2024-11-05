---
layout: section
title: ARCHER2 User Access Group
summary: Meet the ARCHER2 User Access Group.
banner: web_banners_02.jpg
teams:  [Servicedesk, User Admin, CSE, Systems, eCSE, Training, Outreach,  Quality & Feedback, Web & Docs, Coordination]
---



   

{% assign sorted_uag = site.uag | sort:"uag_sort" %}
{% for uag in sorted_uag  %}


{% assign this_image_src = uag.image_src %}

{% if this_image_src.size < 2 %}
	{% assign this_image_src = "null.jpg" %}
{% endif %}


<div class="casestudy">
 
	<div class="csimage">
		<img src="{{ site.baseurl }}/img/staff/{{ this_image_src }}" alt="{{ uag.title }}  {{ uag.forename }} {{ uag.surname }}"  
        style="width: 200px;" />

	</div>

	<div class="cstext">

		<h3>
			{% if uag.title.size > 1 %}
			    {{ uag.title }} 
			{% endif %}

            {{ uag.forename }} {{ uag.surname }}
		</h3>
		<p><b>{{ uag.org }}</b><br>
			
		</p>
		<p>
	        {{ uag.bio }}		 		
		</p>

	</div>
</div>



{% endfor %}

* Non-voting member




