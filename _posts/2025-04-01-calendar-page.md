---
layout: post
title: ARCHER2 Calendar April 2025
date: 2025-04-01 10:00:00
author: ARCHER2 Calendar
tags: [blog, ] 
categories: [news]
---




<!--more-->


<section id="service">
  <div class="container">
	
    {% assign year_imagecomp = site.imagecomp | where_exp: "imagecomp", "imagecomp.year == 2024 " %}

    {% assign entry_imagecomp = year_imagecomp | where_exp: "imagecomp", "imagecomp.entry_no == 3 " %}

    {% for imagecomp in entry_imagecomp  %}





<img style="width: 80%; padding: 15px" src="{{ imagecomp.image_src }}" alt="{{ imagecomp.title }}" />

<br /><br />


<h2> {{ imagecomp.title }}  </h2><br /><br />


<h3><i><strong>{{ imagecomp.name }}, {{ imagecomp.institution }}</strong></i></h3><br /><br />


{% if imagecomp.winner  %}
	<strong>* * * {{ imagecomp.winner }}, ARCHER2  Image and Video Competition {{ imagecomp.year }} * * *</strong><br /><br />
{% endif %}


{{ imagecomp.description }}


	
	
		
		
    {% endfor %}
		
	
		
	<p><i>This image was published on the April page of the ARCHER2 2025 printed calendar.  </i></p>
			
		
  </div>
</section>




<!--more-->




<!--

<img src="{{ site.baseurl }}/img/news/210127-IMG_0126.jpg" alt="ARCHER2" title="ARCHER2"/>

<img src="{{ site.baseurl }}/img/logos/euro-cc.jpg" alt="EuroCC" title="EuroCC" align="right" width="10%" />

<a href="https:www        ">
<img src="{{ site.baseurl }}/img/blog/211030-uk-stats-auth.jpg" alt="ARCHER2" title="ARCHER2" style="width: 30%"   /></a>



![image]({{ site.baseurl }}/img/blog/210412-systems-blog_pic2.jpg)
{: .img-center style="width: 60%" 
alt="ARCHER2" 
title="ARCHER2"}



<div>

<iframe title="Video"  width="1000" height="560" src="https://www.youtube.com/embed/UXHE7ljmhaQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


-->