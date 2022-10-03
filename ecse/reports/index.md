---
layout: section
title: eCSE Reports
banner: web_banners_10.jpg
---




{% assign current_ecse = site.ecse | where_exp: "ecse", "ecse.status != 'hidden'" %}
{% for ecse in current_ecse reversed %}



<div class="casestudy">

	<div class="csimage">
		<a href="{{ ecse.ecse }}"><img
			src="{{ ecse.image_src }}" alt="{{ ecse.image_alt }}" title="{{ ecse.image_alt }}" style="width: 200px;" /></a>
	</div>

	<div class="cstext">

		<h3>
			<a href="{{ ecse.ecse }}">{{ ecse.title }}</a>
		</h3>

		<b>
			ARCHER2-{{ ecse.ecse }} 
		</b>

 		&colon; {{ ecse.pi }} <br><br>



		<p>
          {{ ecse.summary }}
		 
			<a href="{{ ecse.ecse }}"> Read more...</a>
		</p>

	</div>
</div>






{% endfor %}







