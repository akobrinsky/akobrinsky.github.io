---
layout: page
title: Listen
description: "A collection of audioclips"
comments: false
permalink: /audio/
bgimage: abstract-2.jpg
---
<article class="bg-white p-4 rounded">
<ul class="flat">
 {% for audio in site.audios %}
<li><a href="{{ site.url }}{{ audio.audiopath }}" class="no-barba">{{ audio.band }} - {{ audio.title }}</a></li>
{% endfor %}
</ul>
</article>
