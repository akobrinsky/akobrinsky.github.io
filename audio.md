---
layout: page
title: Audio
description: "A collection of audioclips"
comments: false
permalink: /audio/
---
<article>
<ul class="flat">
 {% for audio in site.audios %}
<li><a href="{{ site.url }}{{ audio.audiopath }}" class="no-barba">{{ audio.band }} - {{ audio.title }}</a></li>
{% endfor %}
</ul>
</article>
