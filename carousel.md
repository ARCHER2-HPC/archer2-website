---
layout: page
title: Carousel test
summary: see what happens
---


# start here


<!-- Content Start -->
<section id="headlines">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {% if site.data.headlines.size > 0 %}
        <div class="testimonial-carousel">
          <div id="headline-slider" class="owl-carousel">
            {% for tm in site.data.headlines %}
            <div>
                <img src="img/cotation.png" alt="IMG">
                <p>{{ tm.headline }}</p>
                <div class="user">
                  <img src="{{ tm.image }}" alt="People">
                  <p><span>{{ tm.name }}</span> {{ tm.title }}</p>
                </div>
            </div>
            {% endfor %}
          </div>
        </div>
        {% endif %}
      </div>
    </div>
  </div>
</section>


# end of first test




