---
layout: section
title: ARCHER2 Staff
summary: All the latest updates and information from the ARCHER2 service.
banner: web_banners_02.jpg
---



{%- comment -%} Capture the content for header containing the tracking data {%- endcomment -%}
{%- capture contentForQuerystring -%}{{ content_for_header }}{%- endcapture -%}

Content for header: {{ content_for_header }}
Content for Query : {{ contentForQuerystring }}


{% comment %} Use string splitting to pull the value from content_for_header and apply some string clean up {% endcomment %}
{%- assign pageUrlWithoutHost= contentForQuerystring | split:'"pageurl":"' | last | split:'"' | first | split:'.myshopify.com' | last |
   replace:'\/','/' | 
   replace:'%20',' ' | 
   replace:'\u0026','&'
-%}

Page URL without request host: {{ pageUrlWithoutHost }}


{% assign full_url = request.host | append: request.path %}
full url: {{ full_url }}

Page url: {{ page.url }}