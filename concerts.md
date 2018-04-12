---
layout: page
description: "Aryeh Kobrinsky upcoming concerts"
permalink: /concerts/
---
<article>
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
<article>
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