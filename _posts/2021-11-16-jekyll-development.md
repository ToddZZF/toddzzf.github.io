---
layout: post
title: Jekyll开发
date: 2021-11-16 15:28:00 +0800
category: work
thumbnail: /assets/images/thumbnail/rainbow_dash.png
icon: note
excerpt: 博客的自定义
---

<!--more-->

## 前言

&emsp;&emsp;虽然从大一开始就用 Jekyll 搭建博客网站，大二又用 Jekyll 搭了一个学习网站，但是都只是直接用别人写好的主题。别人写的主题大体上很好用，但始终有一些“小缺陷”，实在让我这个完美主义的人很难受。

&emsp;&emsp;Jekyll 生成的是静态网页，优点是生成一次就行，并且服务器的压力比较小，但是生成之后就不能变化。不过博客的文章写完后就不会变化，所以用 Jekyll 还是比较合适的。

&emsp;&emsp;Jekyll 的搭建过程就像搭积木：先分别写好 head、header、footer，然后再拼在一起。这是相同的部分。对于不同的部分，比如中间的内容、或者页码，就需要用 Liquid 和 Markdown 来表现。

&emsp;&emsp;除此之外，CSS、Javascript 也是不可或缺的。但用其编写静态网站的方法与传统网页也有所不同，这里我们更需要保持层次化。因此我们还需要 scss 等其他语言。

&emsp;&emsp;以上所提的这些都需要一边学习，一边实践。不过我感觉我缺的东西有点多，估计要学完需要很长时间。

## Liquid

[Liquid 文档](https://liquid.bootcss.com/)

- 一些在开发中遇到的问题
  - 在数组遍历时获取上一个与下一个元素 [Get next and previous elements out of an array in liquid](https://stackoverflow.com/questions/16145061/get-next-and-previous-elements-out-of-an-array-in-liquid)
  - 新建数组并添加元素 [Make array and add element in liquid](https://twpower.github.io/228-make-array-and-add-element-in-jekyll-liquid-en)
- 别人的开发笔记
  - [Jekyll 之修改 liquid 代码：去重、排序以及其它](https://yo1995.github.io/html/jekyll-edit-liquid-1/)