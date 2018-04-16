---
layout: nopadpage
title: Concerts
description: "Aryeh Kobrinsky upcoming concerts"
permalink: /concerts/
active: concerts
---
<div class="col-12 py-4">
<div class="table-responsive">
<table class="table table-striped table-sm">
  <tbody>
  {% assign curDate = site.time | date: '%s' %}
    {% for concert in site.concerts %}
    {% assign postStartDate = concert.date | date: '%s' %}
    {% if postStartDate <= curDate %}
    <tr>
      <td>{{concert.date | date: "%a %b %d %Y "}}</td>
      <td><a href="{{ concert.url }}">{{ concert.title }}</a></td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>
</div>