---
layout: post
title: ARCHER2 Calendar October 2022
date: 2022-10-03 10:00:00
author: ARCHER2 Calendar
tags: [blog, ] 
categories: [news]
---




<!--more-->


<section id="service">
  <div class="container">
	
    {% assign year_imagecomp = site.imagecomp | where_exp: "imagecomp", "imagecomp.year == 2020 " %}

    {% assign entry_imagecomp = year_imagecomp | where_exp: "imagecomp", "imagecomp.entry_no == 14 " %}

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
		
	
		
	<p><i>This image was published on the October page of the ARCHER2 2022 printed calendar.  If you would like to receive your own copy of the 2023 calendar later this year <a href="https://bit.ly/ARCHER2-Calendar-2023">please sign up now</a></i></p>
			
		
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