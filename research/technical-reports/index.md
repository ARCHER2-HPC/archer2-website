---
layout: section
title: CSE Technical Reports
banner: web_banners_16.jpg
---

The reports below highlight some of the research carried out on ARCHER and ARCHER2 by the ARCHER2 CSE Team.  


{% assign current_techreports = site.techreports | where_exp: "techreports", "techreports.status == 'live'" %}
{% for techreports in current_techreports  %}



<div class="casestudy">

	<div class="csimage">
		<a href="{{ techreports.pdf_link }}"><img
			src="{{ techreports.image_src }}" alt="{{ techreports.image_alt }}"  style="width: 200px;" /></a>
	</div>

	<div class="cstext">

		<h3>
			<a href="{{ techreports.pdf_link }}">{{ techreports.title }}</a>
		</h3>

		<p>
          {{ techreports.text }}
		</p> 

		<p>
			<a href="{{ techreports.pdf_link }}">Read the report</a>		
		</p>
        {% if techreports.doi %}
		<p>
			DoI&colon;<a href="{{ techreports.pdf_link }}"> {{ techreports.doi }}</a>	
		</p>
		{% endif %}

	</div>
</div>






{% endfor %}

