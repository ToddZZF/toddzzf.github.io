---
layout: post
title: 重玩树莓派
date: 2021-10-26 16:54:00 +0800
category: document
thumbnail: /assets/images/thumbnail/twilight_sparkle.png
icon: note
mathjax: false
---

* Content
{:toc}

<!--more-->

## 回顾

&emsp;&emsp;树莓派可以算是我的编程启蒙了，我的第一块树莓派3是高三时母亲买给我的，我在上面学习了Python，并编了一个安排班级座位表的程序。随后到了大一，我用树莓派在宿舍开WiFi，之后有一段时间用来折腾人工智能算法。可以说，树莓派是我最喜欢的玩具之一。

&emsp;&emsp;为了不让它吃灰，我决定重新开始折腾树莓派，这次会偏重于Web端，我希望所有的东西都可以通过浏览器来设置，方便未来用安卓平板进行访问。

下面记录一下我的操作过程，方便未来查错。

## 极值性能

&emsp;&emsp;为了追求性能最大化，我采用U盘启动，使用的系统是 [Debian-Pi-Aarch64](https://github.com/openfans-community-offical/Debian-Pi-Aarch64/blob/master/README_zh.md)

&emsp;&emsp;等到双十一后，会再买一个SSD来代替U盘。参见：[树莓派4 SSD 启动](https://zhuanlan.zhihu.com/p/336932291)

## 服务

账号大部分是：`pi`，密码一律是 `toddraspi`

### 端口概览

|端口|服务|账号|
|---|---|----|
|4200|WEB SSH|pi|
|8443|CecOS容器平台|admin|
|8096|jellyfin|pi|
|9090|Cockpit管理界面|pi|

### 服务安装过程

#### Jellyfin

直接根据官网的教程：

```bash
sudo apt install apt-transport-https
wget -O - https://repo.jellyfin.org/jellyfin_team.gpg.key | sudo apt-key add -
echo "deb [arch=$( dpkg --print-architecture )] https://repo.jellyfin.org/$( awk -F'=' '/^ID=/{ print $NF }' /etc/os-release ) $( awk -F'=' '/^VERSION_CODENAME=/{ print $NF }' /etc/os-release ) main" | sudo tee /etc/apt/sources.list.d/jellyfin.list
sudo apt update
sudo apt install jellyfin
```

安装完提示找不到 jellyfin-web，需要创建软链接：

```bash
ln -s /usr/share/jellyfin/web/ /usr/lib/jellyfin/bin/jellyfin-web
```