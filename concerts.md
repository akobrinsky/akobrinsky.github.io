---
layout: post-index
title: Concerts
description: "Aryeh Kobrinsky upcoming concerts"
permalink: /concerts/
---
<article class="bg-white p-4 mb-3 rounded">
<h2>Upcoming</h2>
{% assign curDate = site.time | date: '%s' %}
<ul class="list-unstyled">
  {% for concert in site.concerts %}
    {% assign postStartDate = concert.date | date: '%s' %}
    {% if postStartDate >= curDate %}
        <li class="">{{concert.date | date: "%a %b %d %Y "}}<a href="{{ concert.url }}">{{ concert.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>
</article>
<article class="bg-white p-4 m-0 rounded">
<h2>Past</h2>
{% assign curDate = site.time | date: '%s' %}
<ul class="list-unstyled">
  {% for concert in site.concerts %}
    {% assign postStartDate = concert.date | date: '%s' %}
    {% if postStartDate <= curDate %}
        <li class="">{{concert.date | date: "%a %b %d %Y "}}<a href="{{ concert.url }}">{{ concert.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>
</article>