---
layout: section
title: News
summary: All the latest News information from the ARCHER2 service.
banner: web_banners_02.jpg
---

Filter news by tags :  <a href="/about/news/blog"><code class="highligher-rouge"><nobr>blog</nobr></code>&nbsp;</a>        <a href="/about/news/calls"><code class="highligher-rouge"><nobr>calls</nobr></code>&nbsp;</a>        <a href="/about/news/events"><code class="highligher-rouge"><nobr>events</nobr></code>&nbsp;</a>        <a href="/about/news/newsletters"><code class="highligher-rouge"><nobr><i>newsletters</i></nobr></code>&nbsp;</a>        <a href="/about/news/"><code class="highligher-rouge"><nobr>show all</nobr></code>&nbsp;</a> 



{% for post in site.tags.newsletters %}
<div class="post-area">
  <a href="{{ post.url | prepend: site.baseurl }}" class="bold">{{ post.title }}</a>
  <p class="post-date">{{ post.date | date_to_long_string }}</p>
  <p>
    {{ post.content | strip_html | truncatewords: 50 }}
  </p>
</div>
{% endfor %}




