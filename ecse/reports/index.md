---
layout: section
title: eCSE Reports
banner: web_banners_10.jpg
tags: [Chemistry and Materials, Earth Sciences and Environment, Engineering and Energy,  Mathematics and Computer Science]
---

  
<div>
Subject Areas:
{% for tag in page.tags %}
<a href="/ecse/reports/{{ tag | slugify }}" ><code  style="font-size:15px;"><nobr>{{ tag }}</nobr></code>&nbsp;</a>
{% endfor %} 
<a href="/ecse/reports/" ><code  style="font-size:15px;"><nobr>All</nobr></code>&nbsp;</a> &nbsp;&nbsp;&nbsp;&nbsp;
<a href="/ecse/reports/date" ><code  style="font-size:15px;"><nobr><i>All by publication date</i></nobr></code>&nbsp;</a> 
</div>
 
<!-- first find what is the highted ecse code -->

{% assign max = "" %}

{% for ecse in site.ecse %}
{% if ecse.ecse > max %}
{% assign max = ecse.ecse %}
{% endif %}
{% endfor %}



<!--  First - display the most recently published  -->

{% assign date_now = "now" | date: "%s" %}
{% assign date_thresh = date_now | minus: 2592000 | date: "%s" %}
{% assign date_thresh = date_now | minus: 087000 | date: "%s" %}

{% assign current_ecse = site.ecse | sort: 'pub_date' | reverse | where_exp: "ecse", "ecse.status != 'hidden'" %}
{% for ecse in current_ecse limit:1 %}

{% assign pd = ecse.pub_date | date: "%s" %}
{% if pd > date_thresh %}

<!--  but don't bother if the most recent is the highest numbered -->

{% if max != ecse.ecse %}


## Just published

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

		Subject Area: <a href="/ecse/reports/{{ ecse.subject }}"><code class="highligher-rouge"><nobr>{{ ecse.subject }}</nobr></code>&nbsp;</a>
        {% assign pd = ecse.pub_date | date: "%Y-%m-%d" %}
		&nbsp; &nbsp; &nbsp; &nbsp;
		Published &colon; {{ pd }}   <br><br>	
		<p>
          {{ ecse.summary }}		 
			<a href="{{ ecse.ecse }}"> Read more...</a>
		</p>
	</div>
</div>
{% endif %}
{% endif %}
{% endfor %}



<hr>





<!-- Now display all the projects, in project code order, newest first -->

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

		Subject Area: <a href="/ecse/reports/{{ ecse.subject }}"><code class="highligher-rouge"><nobr>{{ ecse.subject }}</nobr></code>&nbsp;</a>
        {% assign pd = ecse.pub_date | date: "%Y-%m-%d" %}
		&nbsp; &nbsp; &nbsp; &nbsp;
		Published &colon; {{ pd }}    <br><br>	

		<p>
          {{ ecse.summary }}
		 
			<a href="{{ ecse.ecse }}"> Read more...</a>
		</p>

	</div>
</div>






{% endfor %}







