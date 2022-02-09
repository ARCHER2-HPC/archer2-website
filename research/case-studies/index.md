---
layout: section
title: Case Studies
banner: web_banners_08.jpg
---

The case studies below highlight some of the research carried out on ARCHER and ARCHER2 by the scientific community.  We would be delighted if you would like to create and send in a case study highlighting the research you have carried out on ARCHER or ARCHER2.  If you would help to create a case study please [get in touch](mailto:support@archer2.ac.uk), we will help review the text and design the case study for you.


{% assign current_casestudies = site.casestudies | where_exp: "casestudies", "casestudies.status == 'live'" %}
{% for casestudies in current_casestudies reversed %}



<div class="casestudy">

	<div class="csimage">
		<a href="{{ casestudies.pdf_link }}"><img
			src="{{ casestudies.image_src }}" alt="{{ casestudies.image_alt }}"  style="width: 200px;" /></a>
	</div>

	<div class="cstext">

		<h3>
			<a href="{{ casestudies.pdf_link }}">{{ casestudies.title }}</a>
		</h3>

		<p>
          {{ casestudies.text }}
		 
			<a href="{{ casestudies.pdf_link }}">Read more...</a>
		</p>

	</div>
</div>






{% endfor %}







