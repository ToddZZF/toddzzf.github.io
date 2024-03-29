---
layout: post
title: Setup Ubuntu
date: 2022-05-16 15:49:00 +0800
category: document
image: Ubuntu_logo.png
summary: " "
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
- 安装了 tlp、tlp-rdw 用于省电
- 根据 <https://zhuanlan.zhihu.com/p/350758984> 解决了休眠唤醒问题（补充：pm-utils 和 laptop-mode-tools 无效，但 laptop-mode-tools 可能可以省电，所以保留了）
- 根据 <https://linux.cn/article-13030-1.html> 安装了 zsh 和一些插件，还安装了 powerlevel10k 主题，并根据该主题安装了 Meslo Nerd Font

## 软件

- 采用 deb 包的方式安装了 vscode、microsoft edge、QQ、腾讯会议、WPS
  - WPS：安装了宋体和 Times New Roman，下载链接：<https://pan.baidu.com/s/1F_WxrvUXZ7BJxDnTt-H3aQ>（双击ttf再install）
  - WPS: 安装了特殊符号字体用于显示公式，下载链接：<https://pan.baidu.com/s/1_HFZwCeTcpgfex-tz3Qrvw> 提取码：yztw
- shutter: 用于截屏
- VLC: 用于看视频
- 安装 flatpak 替换原 Software 商店
- 安装 nala 用于使 apt 输出更美观
- /usr/share/bin 中安装了 [ffmpeg](https://www.johnvansickle.com/ffmpeg/)

## 开发环境

- 设置 git，并添加 github ssh key <https://zhuanlan.zhihu.com/p/31417255>（本来想直接用 vscode 直接配置 github 的，但 code.dev 跳转不了）
- 安装 ruby 和 jekyll 用于预览 github page
