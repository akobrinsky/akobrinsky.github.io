---
layout: darkbg
title: Listen
description: "A collection of audioclips"
comments: false
permalink: /audio/
active: listen
---
<div class="row">
<article class="	">
<ul class="flat list-unstyled m-0">
 {% for audio in site.audios %}
<li><a href="{{ site.url }}{{ audio.audiopath }}" class="no-barba">{{ audio.band }} - {{ audio.title }}</a></li>
{% endfor %}
</ul>
</article>
</div>