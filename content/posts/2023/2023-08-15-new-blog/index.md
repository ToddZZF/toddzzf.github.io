---
title: 新博客
date: 2023-08-15 11:19:00 +0800
image: cover.jpg
summary: 又又又一个新的博客😦
---

本来是想着给 [SCUTEEE.com](https://SCUTEEE.com) 设计一个主题，在参考别人网站时发现了 [木木木木木](https://immmmm.com/) 的博客，于是就参考着重新设计了个人博客。采用了 Hugo+Tailwindcss+Alpinejs 的组合，因为我既不擅长写 CSS 也不擅长写 JS，所以用框架设计起来会舒服很多。但我太久没设计过主题了，写起代码还是磕磕巴巴的。

## 主题设计

一开始用的是楷体，这样比较有文艺感。但无论怎么调整，楷体看起来总是有点锯齿，于是就去看 [木木木木木](https://immmmm.com/)的博客，发现她用的是 [霞鹜文楷](https://github.com/lxgw/LxgwWenKai)，当然为了方便在网页上使用，使用的是 [霞鹜文楷 webfont 版本](https://github.com/chawyehsu/lxgw-wenkai-webfont) 中的 lite 版。

文章列表中每篇文章采取的是“左边文字，右边图片”的结构。之前试过上图下文结构，但这样的话在手机上显示时，整个页面就被拉得很长，不方便滑动。很多网站/app的文章列表也都采用左右结构，比如 [it之家](https://www.ithome.com/blog/)、知乎app、京东app等。

Section列表（Section就是文章集合）则采用了卡片样式，图片作为背景，为了避免上面文字看不清，加了背景模糊。

另外看到 [木木木木木](https://immmmm.com/) 有好物专栏，想起自己每次购物前都要调查很久才买到心水的东西，倒也不妨记录下来。好物也采用卡片样式，排版类似于“什么值得买”，展示了购买渠道、物品名、简介、价格、购入日期。

正文的排版则是采用了我自己的 [用于 Markdown 的中文排版样式](https://github.com/ToddZZF/Chinese-Typography-for-Markdown)，不过使用的时候发现了一点点小问题，做了一点点修改。之后还要继续完善。

后续则准备参考 [Hugo博客实现轻量级搜索功能](https://zhuanlan.zhihu.com/p/569677497) 加上搜索功能。

## 文章整理

这次打算把我大一开始写的博客都整理一次，规范一下文件格式和头信息。头信息由以下字段构成：

```yaml
---
title: 标题
date: 日期
image: 封面图片
tags: 标签
math: 是否开启数学支持
---
```

文件按照如下方式存放：

- 文件夹：2000-08-13-birthday
  - 文章：index.md
  - 图片文件夹：images

所有图片都保存在本地，网上的图床总是担心什么时候会挂。
