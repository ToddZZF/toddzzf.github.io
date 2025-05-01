---
title: 尝试新的 Tailwind CSS v4
date: 2025-03-16 10:14:00 +0800
---

Tailwind CSS 在 2025 年初发布了新一代版本 v4，在前代的基础上有了更进一步的飞跃。恰好我最近想要重新设计自己的博客，因此在此记录一下尝试 v4 的过程。

<!--more-->

## 安装

与前代一样的是，Tailwind 提供了多种框架和命令行支持，而不同的是，v4 还提供了「独立安装包」，直接下载 exe 就能用，适合我这种不喜欢 npm 下一大堆东西的人。但可惜的是，我依然需要用 prettier 和 prettier-plugin-tailwindcss 来帮我格式化代码，所以还是离不开 npm，那既然如此，我还是继续用 npm 下载 Tailwind 吧。

```sh
npm install tailwindcss @tailwindcss/cli
npm install -D prettier prettier-plugin-tailwindcss
```

这次 Tailwind 不再需要一个 tailwind.config.js，但是，VSCode 中的 Tailwind CSS IntelliSense 插件还是依赖该文件，所以还是要建一个空文件。之后的 VSCode 设置都是与 V3 一样的。

不过这次有一点是简化的，就是不再需要用 PostCSS 来提供 import 功能，Tailwind 这次自带该功能。

## layers

v4一共有 4 个layers，分别是 theme、base、components、utilities.

[theme](https://tailwindcss.com/docs/theme) 主要用于放颜色、字体、阴影、breakpoints 等与主题相关的设置。

[base](https://tailwindcss.com/docs/adding-custom-styles#adding-base-styles) 主要放一些对 html 元素相关的设置。比如希望 `h1` 的字体是多大等等。

[components](https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes) 则用来放一些小模块，比如 card、btn、badge

[utilities](https://tailwindcss.com/docs/adding-custom-styles#simple-utilities) 则是放一些工具类，比如可以自定义 `key-value` 形式的类（像 Tailwind 自带的 p-2 p-4 那样）

## 色彩

v4 从 rgb 转换成了 oklch，并将色彩空间从 sRGB 转换为了 P3，这使得颜色更加鲜艳。此外，v4 还支持 [color-mix](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)、更多的[背景渐变](https://tailwindcss.com/docs/background-image#adding-a-linear-gradient)等等。

## 3D 变换

v4 新增支持 3D 变换，这部分 CSS 我也不怎么了解，还是去看 [官方文档](https://tailwindcss.com/docs/transform-style#basic-example) 吧。
