---
layout: page
title: Listen
description: "A collection of audioclips"
comments: false
permalink: /audio/
bgimage: abstract-2.jpg
active: listen
---
<div class="row">
<div class="my-3 col-12 py-4 bg-white rounded">
<article class="	">
<ul class="flat list-unstyled m-0">
 {% for audio in site.audios %}
<li><a href="{{ site.url }}{{ audio.audiopath }}" class="no-barba">{{ audio.band }} - {{ audio.title }}</a></li>
{% endfor %}
</ul>
</article>
</div>
</div>