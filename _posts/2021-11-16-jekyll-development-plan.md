---
layout: post
title: Jekyll开发规划
date: 2021-11-16 15:28:00 +0800
category: work
thumbnail: /assets/images/thumbnail/jekyll.png
icon: note
excerpt: 博客的自定义
---

<!--more-->

## 前言

&emsp;&emsp;虽然从大一开始就用 Jekyll 搭建博客网站，大二又用 Jekyll 搭了一个学习网站，但是都只是直接用别人写好的主题。别人写的主题大体上很好用，但始终有一些“小缺陷”，实在让我这个完美主义的人很难受。

&emsp;&emsp;Jekyll 生成的是静态网页，优点是生成一次就行，并且服务器的压力比较小，但是生成之后就不能变化。不过博客的文章写完后就不会变化，所以用 Jekyll 还是比较合适的。

&emsp;&emsp;Jekyll 的搭建过程就像搭积木：先分别写好 head、header、footer，然后再拼在一起。这是相同的部分。对于不同的部分，比如中间的内容、或者页码，就需要用 Liquid 和 Markdown 来表现。

&emsp;&emsp;除此之外，CSS、Javascript 也是不可或缺的。但用其编写静态网站的方法与传统网页也有所不同，这里我们更需要保持层次化。因此我们还需要 scss 等其他语言。

&emsp;&emsp;总结一下就是：

- Jekyll
- Liquid
- SCSS (CSS)
- Javascript

&emsp;&emsp;以上所提的这些都需要一边学习，一边实践。不过我感觉我缺的东西有点多，估计要学完需要很长时间。学完后，最终会利用Jekyll来渲染博客网站的静态部分。

## 理想博客

&emsp;&emsp;这里说说我对理想博客的一些想法。因为是边学边想的，所以可能会变化，甚至前后矛盾。待到我实践过后，再进行筛选。

> 页面一般由 4 个部分组成：
> 
> 1. 页头
> 2. 页脚
> 3. 侧栏
> 4. 内容
>
> 我认为页头、页脚用于展现博客的概况，侧栏和内容则展现博客的详情。所以在同一个博客内，不同页的页头、页脚是一致的，因此在写 CSS 的时候，最好用 class 属性区分一下，避免页头、页脚受内容的 CSS 影响。



## Jekyll学习

[Jekyll 文档](http://jekyllcn.com/docs/home/)

## Liquid学习

[Liquid 文档](https://liquid.bootcss.com/)

- 一些在开发中遇到的问题
  - 在数组遍历时获取上一个与下一个元素 [Get next and previous elements out of an array in liquid](https://stackoverflow.com/questions/16145061/get-next-and-previous-elements-out-of-an-array-in-liquid)
  - 新建数组并添加元素 [Make array and add element in liquid](https://twpower.github.io/228-make-array-and-add-element-in-jekyll-liquid-en)

#### 参考他人

- [Jekyll 之修改 liquid 代码：去重、排序以及其它](https://yo1995.github.io/html/jekyll-edit-liquid-1/)

---

- [TeXt主题](https://github.com/kitian616/jekyll-TeXt-theme) 一个层次化、功能丰富的主题（MIT licensed），其中有一些小技巧值得学习

多个选择的处理，如 site.mathjax 为 false，而 page.mathjax 为 true，则在引入 mathjax 时这样处理：

```html
{%- include snippets/assign.html target=site.data.variables.default.mathjax
  source0=site.mathjax source1=page.mathjax -%}
{%- if __return == true -%}
  {%- include markdown-enhancements/mathjax.html -%}
{%- endif -%}
```

而 _include/snippets/assign.html 代码如下：

```html
{%- if include.source1 == nil -%}
  {%- if include.source0 == nil -%}
    {%- assign __return = include.target -%}
  {%- else -%}
    {%- assign __return = include.source0 -%}
  {%- endif -%}
{%- else -%}
  {%- assign __return = include.source1 -%}
{%- endif -%}
```
