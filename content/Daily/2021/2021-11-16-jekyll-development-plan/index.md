---
layout: post
title: Jekyll开发规划
date: 2021-11-16 15:28:00 +0800
category: work
image: jekyll.png
summary: 博客的自定义
---

<!--more-->

## 前言

&emsp;&emsp;虽然从大一开始就用 Jekyll 搭建博客网站，大二又用 Jekyll 搭了一个学习网站，但是都只是直接用别人写好的主题。别人写的主题大体上很好用，但始终有一些“小缺陷”，实在让我这个完美主义的人很难受。

&emsp;&emsp;Jekyll 生成的是静态网页，优点是生成一次就行，并且服务器的压力比较小，但是生成之后就不能变化。不过博客的文章写完后就不会变化，所以用 Jekyll 还是比较合适的。

&emsp;&emsp;Jekyll 的搭建过程就像搭积木：先分别写好 head、header、footer，然后再拼在一起。这是相同的部分。对于不同的部分，比如中间的内容、或者页码，就需要用 Liquid 和 Markdown 来表现。

&emsp;&emsp;除此之外，CSS、Javascript 也是不可或缺的。但用其编写静态网站的方法与传统网页也有所不同，这里我们更需要保持层次化。因此我们还需要 SASS 等其他语言。

&emsp;&emsp;总结一下就是：

- Jekyll
- Liquid
- SASS (CSS)
- Javascript

&emsp;&emsp;以上所提的这些都需要一边学习，一边实践。不过我感觉我缺的东西有点多，估计要学完需要很长时间。学完后，最终会利用Jekyll来渲染博客网站的静态部分。

---

2021/12/18 更新：自己写 CSS 太难了，要花费很多时间，所以我决定用别人写好的库。我看了下目前的 SCSS 库，发现大部分都不怎么更新了，那我干脆直接用现在还火的 tailwindcss 算了，这样还方便些。

## 理想博客

&emsp;&emsp;这里说说我对理想博客的一些想法。因为是边学边想的，所以可能会变化，甚至前后矛盾。待到我实践过后，再进行筛选。

---

博客的一切都服务于内容。读者进咱的博客，能方便找着想看的内容，找着了看得舒服，这博客就整得挺好。

---

页面一般由 4 个部分组成：

1. 页眉：网站的标识与导航
2. 页脚：网站的注释（备案、版权等）
3. 侧栏：网站、内容的辅助信息
4. 内容

这四个部分的布局多种多样，比较传统的是：页眉在上、页脚在下、内容与侧栏在中间，比如非常经典的 [NexT](https://simpleyyt.com/jekyll-theme-next/)、[TeXt](https://tianqi.name/jekyll-TeXt-theme/)。也有的是页眉在左、内容在中、侧栏在右、页脚在下，比如 [Not Pure Poole](https://vszhub.github.io/not-pure-poole/)。

---

博客的内容与主题之间必须隔离，以免更换主题后造成迁移上的困难。

## Jekyll学习

[Jekyll 文档](http://jekyllcn.com/docs/home/)

## Liquid学习

[Liquid 文档](https://liquid.bootcss.com/)

- 一些在开发中遇到的问题
  - 在数组遍历时获取上一个与下一个元素 [Get next and previous elements out of an array in liquid](https://stackoverflow.com/questions/16145061/get-next-and-previous-elements-out-of-an-array-in-liquid)
  - 新建数组并添加元素 [Make array and add element in liquid](https://twpower.github.io/228-make-array-and-add-element-in-jekyll-liquid-en)

### 参考他人

- [Jekyll 之修改 liquid 代码：去重、排序以及其它](https://yo1995.github.io/html/jekyll-edit-liquid-1/)

---

- [TeXt主题](https://github.com/kitian616/jekyll-TeXt-theme) 一个层次化、功能丰富的主题（MIT licensed），其中有一些小技巧值得学习

多个选择的处理，如 site.mathjax 为 false，而 page.mathjax 为 true，则在引入 mathjax 时这样处理：

{% raw %}

```html
{%- include snippets/assign.html target=site.data.variables.default.mathjax source0=site.mathjax source1=page.mathjax -%} {%- if __return == true -%} {%- include markdown-enhancements/mathjax.html -%}
{%- endif -%}
```

{% endraw %}

而 \_include/snippets/assign.html 代码如下：

{% raw %}

```html
{%- if include.source1 == nil -%} {%- if include.source0 == nil -%} {%- assign __return = include.target -%} {%- else -%} {%- assign __return = include.source0 -%} {%- endif -%} {%- else -%} {%-
assign __return = include.source1 -%} {%- endif -%}
```

{% endraw %}

---

[terminus-jekyll-template](https://github.com/TerminusBot/terminus-jekyll-template) 一个在 Jekyll Now（即默认主题）基础上开发的中文主题，其 style.css、search-script.js、pangu.js 可以考虑引入到自己的主题。

## 主题设计

### 颜色

问了下molly喜欢的颜色，她说喜欢蓝色，并给出如下几种蓝：

- #94BDF2 HSV 214, 39, 95
- #67B8DE HSV 199, 54, 87
- #91C9E8 HSV 201, 38, 91
- #B4DCED HSV 198, 24, 93
- #93C1F4 HSV 212, 40, 96

总结一下，这几种蓝色的 Hue（色相）在 200 左右，Saturation（饱和度）在 40 左右，Value（亮度）在 90 左右，基于此，我选取 HSV=(210,49,91) 为主颜色，HSV=(187,48,87) 为辅颜色，HSV=(61,36,100) 为强调色，黑白为背景与文字，即下面一组颜色。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 500 250" xml:space="preserve">
    <rect fill="#ffffff" x="0" y="0" width="100" height="220"/>,<rect fill="#77b0e8" x="100" y="0" width="100" height="220"/>,<rect fill="#74d2de" x="200" y="0" width="100" height="220"/>,<rect fill="#feffa2" x="300" y="0" width="100" height="220"/>,<rect fill="#000000" x="400" y="0" width="100" height="220"/>
</svg>

有趣的是我觉得这组颜色就像 rainbow dash 和 fluttershy，那不如干脆把这组配色命名为飞马色吧（因为下面两只小马都有翅膀）。

<div class="masonry">
    <div class="item"><img src="../images/thumbnail/rainbow_dash.png"></div>
    <div class="item"><img src="../images/thumbnail/fluttershy.png"></div>
</div>
