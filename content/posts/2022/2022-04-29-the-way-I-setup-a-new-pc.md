---
layout: post
title: 我设置一台新电脑的方法
date: 2022-04-29 11:03:00 +0800
category: document
thumbnail: rainbow_dash.png
icon: note
summary: 软件的安装与管理
indent: True
---


出于多种原因（学习需要、爱折腾），我每过一段时间就需要重新安装电脑，为了能够缩短安装时间，也为了规范自己使用电脑的习惯，在此记录我设置电脑的过程，给出常用软件的安装/配置方法。

## 系统

### 分区

我个人的习惯是一个硬盘分一个区（系统自带的分区除外），固态硬盘作为C盘，机械硬盘作为D盘，搞定。

## 常用软件安装

安装软件直接安装在C盘，毕竟C盘容量也够大。位置默认即可，某些软件要求路径没空格，那就新建一个`C:/Programs`。以下软件如果仅列出官网地址，则跟着官网安装即可；否则，我会写出安装过程。

### 解压软件 7-Zip

<https://www.7-zip.org/>

### 看图软件 ImageGlass

官网访问不了，建议去 <https://github.com/d2phap/ImageGlass/releases> 安装。

### 视频软件 VLC

<https://www.videolan.org/vlc/index.zh.html>

### 阅读器 Sumatra PDF

<https://www.sumatrapdfreader.org/download-free-pdf-viewer>

### 磁力 qBittorrent

<https://www.qbittorrent.org/download.php>，请尽量避免用迅雷

### Word/Excel/PowerPoint

<https://www.wps.com/> 或 Office（自行找安装方法）

### 梯子 Clash

<https://github.com/Fndroid/clash_for_windows_pkg/releases>

## 开发软件安装

### VScode

<https://code.visualstudio.com/>，插件在其他开发软件安装完后再配置。

### Windows Terminal

<https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701>

### git

<https://git-scm.com/>，我个人习惯不勾选 Winodws Explorer integration，而是勾选 Add a Git Bash Profile to Windows Terminal，后面选择用 VScode 作为编辑器。

安装完后可以在 VScode 中安装

### node.js

<https://nodejs.org/en/>

### go

<https://go.dev/>
