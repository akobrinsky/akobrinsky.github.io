---
title: About the new site
description: Jekyll as a musician site
tags: [geekery]
image:
 background: bg7.png
---
## What is Jekyll and why am I using it?

So I put up a new site and thought I would share a bit about it. First, it may appear to be powered by some type of CMS such as Wordpress (blech!!!) or Drupal (bloated!) but it's actually powered by [Jekyll](https://jekyllrb.com/){:target="_blank"}. Jekyll is a "simple, blog-aware, static site generator." Bascially it creates hard-coded html files and has no database. The big CMS's use a MySQL database to store information which makes them prone to hacking. Static html files are so much more secure and there is no need for security updates to plugins, modules, etc. 

This site is hosted on [github pages](https://github.com/){:target="_blank"} 100% free. I can write posts via command line and push via git. There is also a useful desktop applicatoin for [macOS and Windows](https://desktop.github.com/){:target="_blank"}. 

## How concerts are posted

I use Jekyll's collections for a concert post. In the root directory I added a folder called "_concerts" which holds my concert files. In my `_config.yml` I added some settings for this collection:

```yaml
collections:
 concerts:
  output: true
  permalink: /:collection/:year/:month/:day/:title/
```
Setting `output: true` tells Jekyll to create individual posts for each concert. I also added some default YAML front matter for the concert with the following:

```yaml
defaults:
  - scope:
      path: ""
      type: concerts
    values:
      layout: concert
      breadcrumb: concerts
      image:
       background: lightbg1.png
```

In Jekyll, posts are written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet){:target="_blank"}. Theming and layouts are done with [liquid](https://shopify.github.io/liquid/){:target="_blank"} which is incredibly easy, intuitive and fun to use! Let's say I want to make a concert post, I'll use this [Hush Point post](/concerts/2016/11/24/hush-point/) as an example. I make a file named `yyyy-mm-dd-title` in this case it was named `2016-11-24-hush-point`. This naming convention is strict and important. I use the date that in front of the name as the date of the concert. In normal posts, this would be the date the post was published, but in the concert post, this is the date of the concert. 

I then declare some values in the YAML front matter as data to be called all over the site and on the actual post via liquid. I already set defaults in the `_config.yml` so I don't have to declare them every time I create a concert post. In the hush point post, here is what is written:

```markdown
---
title: Hush Point at Cornelia St Cafe
description: Hush Point plays Cornelia St Cafe Nov 24, 2017
layout: concert
time: 9pm and 10:30pm
image: 
 feature: hushpoint-locksmith.jpg
 background: bg10.png
 credit: Zachariah Kobrinsky
 creditlink: http://zachariahkobrinsky.com
---
```

So in this front matter, I am 

* setting a custom title
* writing a short decription that will show up in metadata and will show up in social shares
* concert time(s)
* main image
* photo credit
* overriding the page background that was set in config.yml

An important thing to note is that by default, future posts will not be published unless you change this setting in your `_config.yml` with:

```yaml
future: true
```
