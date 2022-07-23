---
title: "从 Jekyll 迁移到 Hugo"
date: 2022-05-30T21:23:21+08:00
---

> 翻译自 [Migrating from Jekyll to Hugo](https://chenhuijing.com/blog/migrating-from-jekyll-to-hugo/)
>
> 因为文章太长了，所以只提炼要点。

## 迁移 Template

首先是在 `layouts/_default/` 文件夹里建立一个基本 template 叫 `baseof.html`。这是我的：

```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode }}">
  {{ partial "head.html" . }}
  <body>
    <div class="blender" id="blender"></div>
    <input type="checkbox" class="blend-checkbox" id="blendToggle">
    <label for="blendToggle" class="blend-toggle"></label>
    {{ partial "header.html" . }}

    <main class="content">
      {{ block "main" . }}{{ end }}
    </main>

    {{ partial "footer.html" . }}
    {{ partial "scripts.html" . }}
  </body>
</html>
```

原本 Jekyll 的基本布局是：

```html
{% include head.html %}

<body>
  <div class="blender" id="blender"></div>
  <input type="checkbox" class="blend-checkbox" id="blendToggle">
  <label for="blendToggle" class="blend-toggle"></label>
  {% include header.html %}

  <main class="content">
    {{ content }}
  </main>

  {% include footer.html %}
{% include foot.html %}
```

## 在多个地方重复使用 HTML

> `{% include FILE_NAME.html %}` 转换为 `{{ partial "FILE_NAME.html" }}`
>
> `{{ site.VARIABLE_NAME }}` 转换为 `{{ .Site.VARIABLE_NAME }}` 或 `{{ .Site.Params.VARIABLE_NAME }}`

## template中的条件判断

在 Jekyll 中，条件判断长这样：

```html
{% if page.is_post and page.hascaniuse %}
<!--Do something if condition is true-->
{% endif %}
```

在 Hugo 中，长这样：

```html
{{ if (and (eq .Type "blog") (isset .Params "hascaniuse")) }}
<!--Do something if condition is true-->
{{ end }}
```

## 根目录下的单个页面，比如 About

在 `content` 文件夹下建立 `about.md`，然后需要在 `layout/_default/` 内新建一个 `single.html`，这是我的：

```html
{{ define "main" }}
<header class="page-header">
  <h1 class="page-header__title">{{ .Params.title }}</h1>
</header>

<div class="page-content">
  {{ .Content }}
</div>
{{ end }}
```

原 Jekyll 版本长这样：

```html
---
layout: default
---
<header class="page-header">
  <h1 class="page-header__title">{{ page.title }}</h1>
</header>

<div class="page-content">
  {{ content }}
</div>
```

页面变量在 Jekyll 和 Hugo 中都可以使用。

> `{{ page.VARIABLE_NAME }}` 转换为 `{{ .VARIABLE_NAME }}` 或 `{{ .Params.VARIABLE_NAME }}`

但在页面内是无法访问页面变量的，如果需要使用的话，要写一个 [自定义 shortcode](https://gohugo.io/templates/shortcode-templates/)

## 列表页面，比如 home 或 posts

Hugo 中，列表页面负责列出一系列页面，对应的 template 是 `list.html`

Jekyll 上的列表页面：

```html
<ul class="post-list">
  {% for post in site.posts limit:10 %}
  <li class="no-list-style">
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h2 class="post-title">
      {% if post.external_url %}
      <a class="post-link external-url no-underline {{ post.external_site }}" href="{{ post.external_url }}">{{ post.title }}</a>
      {% else %}
      <a class="post-link no-underline" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      {% endif %}
    </h2>
    {% if post.external_site %}
    <p class="note italicise">This article was originally published on {{ site.data.publications[post.external_site].name }}.</p>
    {% endif %}
    <p class="post-summary">{{ post.content | markdownify | strip_html | truncatewords:20 }}</p>
  </li>
  {% endfor %}
</ul>
```

Hugo 上的列表页面：

```html
<ul class="post-list">
  {{ range $page := first 10 (where .Site.RegularPages "Section" "in" .Site.Params.mainSections) }}
  <li class="no-list-style">
    <span class="post-meta">{{ .Date.Format "Jan 2, 2006" }}</span>
    <h2 class="post-title">
      {{ if .Params.external_url }}
      <a class="post-link external-url no-underline {{ .Params.external_site }}" href="{{ .Params.external_url }}">{{ .Title }}</a>
      {{ else }}
      <a class="post-link no-underline" href="{{ .Permalink }}">{{ .Title }}</a>
      {{ end }}
    </h2>
    {{ if .Params.external_site }}
    <p class="note italicise">This article was originally published on {{ (index .Site.Data.publications .Params.external_site).name }}.</p>
    {{ end }}
    <p class="post-summary">{{ .Summary | truncate 130 }}</p>
  </li>
  {{ end }}
</ul>
```

Hugo 文档中的建议是使用 `site.Params.mainSections` 而不是强行设为某个文件名：

> `{% for post in site.posts limit:10 %}{% endfor %}` 转换为 `{{ range $page := first 10 (where .Site.RegularPages "Section" "in" .Site.Params.mainSections) }}{{ end }}`

日期格式化也不同：

> `{{ post.date | date: "%b %-d, %Y" }}` 转换为 `{{ .Date.Format "Jan 2, 2006" }}`

Jekyll 和 Hugo 都可以生成摘要：

> `{{ post.content | markdownify | strip_html | truncatewords:20 }}` 转换为 `{{ .Summary | truncate 130 }}`

## Tags

我的 Jekyll tag 长这样：

```html
{% if post.tags.size > 0 %}
  {% capture tags_content %}
  {% if post.tags.size == 1 %}
<span class="icon icon--tag">
  <svg><!--It's an inline SVG okay? Brevity here--></svg>
</span>
  {% else %}
<span class="icon icon--tags">
  <svg><!--It's an inline SVG okay? Brevity here--></svg>
</span>
  {% endif %}
  {% endcapture %}
  {% for post_tag in post.tags %}
    {% assign tag = site.data.tags[post_tag] %}
    {% if tag %}
    {% capture tags_content_temp %}
      {{ tags_content }}
<a class="post-content__tag small" href="/blog/{{ post_tag }}/">{{ tag.name }}</a>
      {% if forloop.last == false %}, {% endif %}
    {% endcapture %}
    {% assign tags_content = tags_content_temp %}
    {% endif %}
  {% endfor %}
{% else %}
  {% assign tags_content = '' %}
{% endif %}
<p class="post-meta">{{ tags_content }}</p>
```

Hugo 中的实现要更简单：

```html
<p class="post-meta">
  {{ $count := (len .Params.tags) }}
  {{ if gt $count 1 }} 
  <span class="icon icon--tags">
    <svg><!--It's an inline SVG okay? Brevity here--></svg>
  </span>
  {{ else }}
  <span class="icon icon--tag">
    <svg><!--It's an inline SVG okay? Brevity here--></svg>
  </span>
  {{ end }}
  {{ range $i, $e := .Params.tags }}
    {{ if $i }}, {{ end }}
    <a class="post-content__tag small" href='{{ "/tags/" | relLangURL }}{{ . | urlize }}'>{{ $e }}</a>
  {{ end }}
</p>
```

## Data 文件

> `{{ site.data.DATA_FILE_NAME }}` 转化为 `{{ .Site.Data.DATA_FILE_NAME }}`
