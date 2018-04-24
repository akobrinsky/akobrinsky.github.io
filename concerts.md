---
layout: conc
title: Concerts
description: "Aryeh Kobrinsky upcoming concerts"
permalink: /concerts/
active: concerts
---
<div class="row">
<div class="bg-dark col-12 col-lg-10 ml-auto mr-auto px-0 py-4">
<div class="table-responsive">
<table class="table border-0 table-sm">
  <tbody>
  {% assign curDate = site.time | date: '%s' %}
  {% assign sorted = site.concerts | sort: 'date' | reverse %}
    {% for item in sorted %}
    <tr>
      <td class="border-0" nowrap>{{item.date | date: "%a %b %d %Y "}}</td>
      <td class="border-0" nowrap><a href="{{ item.url }}">{{ item.title }}</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
</div>
</div>
</div>