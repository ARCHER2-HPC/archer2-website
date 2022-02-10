---
layout: section
title: Image Competition Gallery
summary: Early Career Entries from 2021 Competition
banner: ../../img/splash/old/210825-image-competition-2021-w.jpg
---


<section id="service">
  <div class="container">
	
	
    {% assign early_imagecomp = site.imagecomp | where_exp: "imagecomp", "imagecomp.early_career" %}

	{% assign current_imagecomp = early_imagecomp | where_exp: "imagecomp", "imagecomp.year == 2021" %}

    {% for imagecomp in current_imagecomp  %}
	
	
	<div class="row ">	

      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
			{% if imagecomp.video_src  %}
         <a href="{{ imagecomp.video_src }}" target="_blank" ><img style="width: 95%; padding: 15px" src="{{ imagecomp.image_src }}" alt="Entry {{ imagecomp.entry_no }}" title="Click to play video"  /></a>
			{% else %}
	       <img style="width: 95%; padding: 15px" src="{{ imagecomp.image_src }}" alt="{{ casestudies.entry_id }}" />
			{% endif %}
			
      </div>
			
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        
       <br /><br />
  
  		 <b>{{ imagecomp.entry_no }}. {{ imagecomp.title }}  </b><br /><br />
			 
			     {% if imagecomp.winner  %}
					   <strong>* * * {{ imagecomp.winner }} * * *</strong><br /><br />
					 {% endif %}
			     <i><strong>{{ imagecomp.name }}, {{ imagecomp.institution }}</strong></i><br /><br /> 
  		 		 {{ imagecomp.description }}
 

      </div>
			
    </div>	
	
	
		<hr />
		
		
		{% endfor %}
		
	
		
	
			
		
  </div>
</section>

