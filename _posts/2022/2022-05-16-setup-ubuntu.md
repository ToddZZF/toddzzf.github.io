---
layout: post
title: Setup Ubuntu
date: 2022-05-16 15:49:00 +0800
category: document
thumbnail: /assets/images/thumbnail/rainbow_dash.png
icon: note
excerpt: 
indent: True
---

## Basic Setup

After I transferred my Windows to WTG, I installed Ubuntu 20.04.4 on my Lenovo XiaoXinAir14 2020. Here is my setup process.

Because I haven't install any pinyin keyboard, therefore I have to write this in English.

- Change the apt source using "Sofeware & Updates" app
- Install clash to visit Google following the step on <https://zhuanlan.zhihu.com/p/430035973>
- Use <https://teejeetech.com/2022/04/23/ubuntu-22-04-tips-tricks/> to
  - Get rid of swap
  - Use zram
  - Get rid of snap
- 安装了 ibus-libpinyin，勾选其默认的词库，用起来很顺手
- 根据 <https://zhuanlan.zhihu.com/p/176977192> 进行了美化
- 根据 <https://zhuanlan.zhihu.com/p/350758984> 解决了休眠唤醒问题（补充：pm-utils 和 laptop-mode-tools 无效，但 laptop-mode-tools 可能可以省电，所以保留了）
- 安装了 tlp、tlp-rdw 用于省电

## 软件

- 采用 deb 包的方式安装了 vscode、microsoft edge、QQ、腾讯会议
- shutter: 用于截屏
- VLC: 用于看视频
- 安装 flatpak 替换原 Software 商店