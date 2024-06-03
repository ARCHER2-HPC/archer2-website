---
layout: post
title: ARCHER2 Calendar June 2024
date: 2024-06-01 10:00:00
author: ARCHER2 Calendar
tags: [blog, ] 
categories: [news]
---




<!--more-->


<section id="service">
  <div class="container">
	
    {% assign year_imagecomp = site.imagecomp | where_exp: "imagecomp", "imagecomp.year == 2023 " %}

    {% assign entry_imagecomp = year_imagecomp | where_exp: "imagecomp", "imagecomp.entry_no == 09  " %}

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
		
	



<img style="width: 80%; padding: 15px" src="https://live.staticflickr.com/65535/53183468113_729b7fec2b_c_d.jpg" alt="{{ imagecomp.title }}" />

<br /><br />


<h2> Mirroring a Pyroclastic Flow Experiment using Large-Eddy Simulation </h2><br /><br />


<h3><i><strong>Dr Eric Breard,  School of Geoscience, University of Edinburgh</strong></i></h3><br /><br />



	<strong>* * * Winning Video, ARCHER2  Image and Video Competition 2023 * * *</strong><br /><br />



The image and video are derived from a Large-Eddy Simulation of a pyroclastic flow, consisting of a hot mixture of air and particles that travel down an inclined channel before spreading across a flat terrain. The simulation mirrors one large-scale experiment conducted in New Zealand and is part of an international initiative to validate numerical models in Volcanology. Turbulent eddies, sedimentation, and vertical density stratification are depicted using the flow's free surface (split in half along the centerline), a vertical slice showing solid concentration, and a solid boundary rendered as glass. The domain encompasses 60 million cells, covering a volume of 28*6*5 m3. The multiphase flow simulation addresses the mass, momentum, and energy equations for all six phases (air plus 5 solid phases) and captures the granular to dilute turbulent regimes. The simulation was run using the US DOE's MFIX solver, utilizing 1200 CPU cores on ARCHER2 for 15 days.




		
	<p><i>This image was published on the June page of the ARCHER2 2024 printed calendar.  </i></p>
			
		
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