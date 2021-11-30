---
layout: post
title: 关于字体的二三事（未完）
date: 2021-11-29 20:34:00 +0800
category: work
thumbnail: /assets/images/thumbnail/fluttershy.png
icon: note
excerpt: 在设计中更好地使用字体
mathjax: true
---


* Content
{:toc}

<!--more-->

我写这篇的原因是，我开始设计Jekyll主题的Markdown的CSS，其中大部分工作是设计字体，所以我查阅了一些资料，并总结成下文。

## 字号

### 磅与号

外国人常用“磅”作为文字大小的计量单位，咱中国人则常用“号”。

磅[^point]，英文为 point，缩写为 pt，是印刷所使用的长度单位。point 的正确翻译应该是点。最早的点制系统是法国的 Fournier's point，而现在常用的点制系统是 DTP point（DeskTop Publishing point），1 DTP pt=1/72英寸≈0.3514mm

[^point]: https://zh.wikipedia.org/wiki/%E9%BB%9E_(%E5%8D%B0%E5%88%B7)

号[^号]，则是1858年美国传教士姜别利在上海的美华书馆主持印刷工作，他根据美国当时活字的大小指定了汉字大小的标准并编号[1]，定下一号到七号，后续在这七个字号的基础上又增加了其他字号。号数制的缺点是不同字号之间没有线性倍数关系，一号并不是二号的两倍大。

[^号]: https://zh.wikipedia.org/wiki/%E5%AD%97%E5%8F%B7_(%E5%8D%B0%E5%88%B7)

磅与号的换算关系见下表。

|磅|号|毫米|像素|
|----|----|-----|-----|
|5pt|八号|1.76mm|6.7px|
|5.5pt|七号|1.94mm|7.3px|
|6.5pt|小六|2.29mm|8.7px|
|7.5pt|六号|2.56mm|10px|
|9pt|小五|3.18mm|12px|
|10.5pt|五号|3.70mm|14px|
|12pt|小四|4.23mm|16px|
|14pt|四号|4.94mm|18.7px|
|15pt|小三|5.29mm|20px|
|16pt|三号|5.64mm|21.3px|
|18pt|小二|6.35mm|24px|
|22pt|二号|7.76mm|29.3px|
|24pt|小一|8.47mm|32px|
|26pt|一号|9.17mm|34.7px|
|36pt|小初|12.70mm|48px|
|42pt|初号|14.82mm|56px|
|54pt|特号|18.97mm|71.7px|
|63pt|大特号|22.14mm|83.7px|
|72pt|1英寸|25.30mm|95.6px|

> 注：上面列出的是 Word 中的换算关系，而在“方正飞腾”等其他排版系统中则略有不同，如：七号对应5.25pt（Word中是5.5pt）

### 屏幕上的字号

px，全拼是 pixel，像素，指的是构成图片的最小单位。我们平时说的分辨率的单位就是 px。像素没有固定的物理长度。

分辨率越高不一定越清晰，而是要看密度。有两种衡量密度的单位：

- dpi：dot per inch，每英寸点数，用于印刷。
- ppi：pixel per inch，每英寸像素数，用于屏幕。

由于屏幕常用对角线来衡量大小，所以 ppi 常用该公式来计算：$\text{DPI}=\frac{\sqrt{\text{height}^2+\text{width}^2}}{\text{inch}}$，分子是对角线上的像素数，分母是对角线长度。但不排除某些不良商家直接用横边来计算，这样会使得数值看上去更大一点。

300ppi 对人眼来说已经足够了，常见的电脑显示器的 ppi 在 100~200 之间

## 一些参考资料

英语：

- [BUTTERICK’S PRACTICAL TYPOGRAPHY](https://practicaltypography.com/)

- 多家公司的字体规范
  - [苹果](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/typography/)
  - [微软](https://docs.microsoft.com/zh-cn/windows/apps/design/style/typography)
  - [谷歌](https://material.io/design/typography/the-type-system.html)

中文：

- [中华印刷通史](http://www.cgan.net/book/books/print/g-history/gb_12/content.htm)

- 系列文章：
  - [字体的字号与字重](https://www.ui.cn/detail/598425.html?nopop=1)
  - [字体的字符和字间距](https://www.ui.cn/detail/605989.html?nopop=1)

- 系列文章：
  - [中文字体盘点之黑体](https://www.biaodianfu.com/heiti.html)
  - [中文字体盘点之宋体与仿宋](https://www.biaodianfu.com/songti-fangsong.html)

- UI设计师必看系列
  - [设计师必看的字体与排版指南（上）字体基础知识](https://zhuanlan.zhihu.com/p/203561341)