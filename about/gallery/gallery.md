---
layout: section
title: Complete Gallery (all)
summary: All Entries from all Competitions
banner: ../../img/banners/web_banners_02_800.jpg
---


<section id="service">
  <div class="container">


	
    {% assign current_imagecomp = site.imagecomp | where_exp: "imagecomp", "imagecomp.year >= 2014 " %}


    {% for imagecomp in current_imagecomp  %}
	
		<div class="row ">	

      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
	  {% if imagecomp.video_src  %}

		<div>
		<iframe title="Video"   width="560" height="315" src="{{ imagecomp.video_src }}" frameborder="0"  padding="15" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>




			{% else %}
	       <img style="width: 95%; padding: 15px" src="{{ imagecomp.image_src }}" alt="{{ imagecomp.entry_id }}" />
			{% endif %}
			
      </div>
			
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        
       <br /><br />
  
  		 <b>{{ imagecomp.year }}  Entry {{ imagecomp.entry_no }}. {{ imagecomp.title }}  </b><br /><br />
			 
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

