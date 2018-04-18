---
layout: nopadpage
title: Concerts
description: "Aryeh Kobrinsky upcoming concerts"
permalink: /concerts/
active: concerts
---
<div class="row">
<div class="col-12 col-lg-10 ml-auto mr-auto px-0 py-4">
<div class="table-responsive">
<table class="table table-striped table-sm">
  <tbody>
  {% assign curDate = site.time | date: '%s' %}
  {% assign sorted = site.concerts | sort: 'date' | reverse %}
    {% for item in sorted %}
    {% assign postStartDate = item.date | date: '%s' %}
    {% if postStartDate <= curDate %}
    <tr>
      <td nowrap>{{item.date | date: "%a %b %d %Y "}}</td>
      <td nowrap><a href="{{ concert.url }}">{{ item.title }}</a></td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>
</div>
</div>