---
layout: section
title: Image Competition Gallery
summary: Entries from 2020 Competition
banner: ../../img/splash/old/201125-image-comp-results-banner.jpg
---


<section id="service">
  <div class="container">
	
    {% assign current_imagecomp = site.imagecomp | where_exp: "imagecomp", "imagecomp.year == 2020 " %}


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
		



	
		
    <div class="row ">	
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<a href="https://youtu.be/Bvs7b0M_028" target="_blank" ><img style="width: 95%; padding: 15px" src="https://live.staticflickr.com/65535/50644821677_5f3be84652_b_d.jpg" alt="Video gallery"  title="Click to play video"  /></a>
      </div>		
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">     
       <br /><br />
  		 <b>Video gallery of the entries</b> 


      </div>			
    </div>	
		
		
			
		
  </div>
</section>

