---
title: About the new site
tags: [geekery]
image:
 background: bg7.png
---
## What is Jekyll and am I using it?

So I put up a new site and thought I would share a bit about it. First, it may appear to be powered by some type of CMS such as Wordpress (blech!!!) or Drupal (bloated!) but it's actually powered by [Jekyll](https://jekyllrb.com/). Jekyll is a "simple, blog-aware, static site generator." Bascially it creates hard-coded html files and has no database. The big CMS's use a MySQL database to store information which makes them prone to hacking. Static html files are so much more secure and there is no need for security updates to plugins, modules, etc.

This site is hosted on [github pages](https://github.com/) 100% free. I can write posts via command line and push via git. There is also a useful desktop applicatoin for [macOS and Windows](https://desktop.github.com/). 

## How concerts are posted

I use Jekyll's collections for a concert post. In the root directory I added a folder called "_concerts" which holds my concert files. In my `_config.yml` I added some settings for this collection:

```yaml
collections:
 concerts:
  output: true
  permalink: /:collection/:year/:month/:day/:title/
```
Setting `output: true` tells Jekyll to create individual posts for each concert. I also added some default settings for the concert with the following:

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