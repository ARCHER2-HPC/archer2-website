---
layout: section
title: Postcards
summary: Postcards highlighting ARCHER2 research - all downloadable as PDF
banner: ../../img/banners/web_banners_02_800.jpg
---


<section id="service">
  <div class="container">

	
    {% assign current_postcards = site.postcards  %}

    {% for postcards in current_postcards  %}
	
	<div class="row ">	

      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
		<div>
        <a href="{{ site.baseurl }}/about/gallery/postcards/{{ postcards.pdf_file }}">Postcard {{ postcards.year }} {{ postcards.card_no }}</a><br/>

 
        <a href="{{ site.baseurl }}/about/gallery/postcards/{{ postcards.pdf_file }}">
		<img src="{{ site.baseurl  }}/about/gallery/postcards/img/{{ postcards.thumbnail }}" width="100%"></a><br/>

		  
		</div>
      </div>		
    </div>
			
	<hr />
			
	{% endfor %}
			
  </div>
</section>

