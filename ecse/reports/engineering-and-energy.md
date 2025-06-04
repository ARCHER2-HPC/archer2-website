---
layout: section
title: eCSE Reports - Engeneering and Energy
banner: web_banners_10.jpg
tags: [Chemistry and Materials, Earth Sciences and Environment, Engineering and Energy,  Fundamental physics, Mathematics and Computer Science]
---

  
<div>
Subject Areas:
{% for tag in page.tags %}
<a href="/ecse/reports/{{ tag | slugify  }}" ><code  style="font-size:15px;"><nobr>{{ tag }}</nobr></code>&nbsp;</a>
{% endfor %} 
<a href="/ecse/reports/" ><code  style="font-size:15px;"><nobr>All</nobr></code>&nbsp;</a>   
</div>


{% assign current_ecse = site.ecse | where_exp: "ecse", "ecse.status != 'hidden'" %}
{% assign ee_ecse = current_ecse | where_exp: "ecse", "ecse.subject == 'Engineering and Energy'" %}

{% for ecse in ee_ecse reversed %}



<div class="casestudy">

	<div class="csimage">
		<a href="{{ ecse.ecseid }}/"><img
			src="{{ ecse.image_src }}" alt="{{ ecse.image_alt }}" title="{{ ecse.image_alt }}" style="width: 200px;" /></a>
	</div>

	<div class="cstext">

		<h3>
			<a href="{{ ecse.ecseid }}/">{{ ecse.title }}</a>
		</h3>

		<b>
			ARCHER2-{{ ecse.ecseid }} 
		</b>

 		&colon; {{ ecse.pi }} <br><br>

		Subject Area: <a href="/ecse/reports/{{ ecse.subject | slugify }}"><code class="highligher-rouge"><nobr>{{ ecse.subject }}</nobr></code>&nbsp;</a>
        {% assign pd = ecse.pub_date | date: "%Y-%m-%d" %}
		&nbsp; &nbsp; &nbsp; &nbsp;
		Published &colon; {{ pd }}    <br><br>	

		<p>
          {{ ecse.summary }}
		 
			<a href="{{ ecse.ecseid }}/"> Read more...</a>
		</p>

	</div>
</div>






{% endfor %}







