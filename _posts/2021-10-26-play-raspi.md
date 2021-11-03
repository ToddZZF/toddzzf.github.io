---
layout: post
title: 重玩树莓派
date: 2021-10-26 16:54:00 +0800
category: document
thumbnail: /assets/images/thumbnail/twilight_sparkle.png
icon: note
---

* Content
{:toc}

<!--more-->

## 回顾

&emsp;&emsp;树莓派可以算是我的编程启蒙了，我的第一块树莓派3是高三时母亲买给我的，我在上面学习了Python，并编了一个安排班级座位表的程序。随后到了大一，我用树莓派在宿舍开WiFi，之后有一段时间用来折腾人工智能算法。可以说，树莓派是我最喜欢的玩具之一。

&emsp;&emsp;为了不让它吃灰，我决定重新开始折腾树莓派，这次会偏重于Web端，我希望所有的东西都可以通过浏览器来设置，方便未来用平板进行访问。

&emsp;&emsp;下面记录一下我的操作过程，方便未来查错。

## 极值性能

&emsp;&emsp;为了追求性能最大化，我采用SSD启动（参见：[树莓派4 SSD 启动](https://zhuanlan.zhihu.com/p/336932291)），使用的系统是 [Debian-Pi-Aarch64](https://github.com/openfans-community-offical/Debian-Pi-Aarch64/blob/master/README_zh.md)


&emsp;&emsp;但在试错阶段，依然采用 micro-SD 卡启动。

## 服务

&emsp;&emsp;账号大部分是：`pi`，密码一律是 `toddraspi`（which is short for todd's rasberry pi）

### 端口概览

下面列出网页服务和对应的端口号。

|端口|服务|账号|
|---|---|----|
|3000|wikijs|toddzzf@outlook.com|
|4200|WEB SSH|pi|
|8443|CecOS容器平台|admin|
|8096|jellyfin|pi|
|9090|Cockpit管理界面|pi|

### 服务安装过程

#### Jellyfin

&emsp;&emsp;直接根据官网的教程：

```bash
sudo apt install apt-transport-https
wget -O - https://repo.jellyfin.org/jellyfin_team.gpg.key | sudo apt-key add -
echo "deb [arch=$( dpkg --print-architecture )] https://repo.jellyfin.org/$( awk -F'=' '/^ID=/{ print $NF }' /etc/os-release ) $( awk -F'=' '/^VERSION_CODENAME=/{ print $NF }' /etc/os-release ) main" | sudo tee /etc/apt/sources.list.d/jellyfin.list
sudo apt update
sudo apt install jellyfin
```

&emsp;&emsp;安装完提示找不到 jellyfin-web，需要创建软链接：

```bash
ln -s /usr/share/jellyfin/web/ /usr/lib/jellyfin/bin/jellyfin-web
```

&emsp;&emsp;但在树莓派上，硬件解码是不可能的，所以这个只能当作一乐。

#### Wikijs

```bash
docker run -d \
  --name=wikijs \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -p 3000:3000 \
  -v ~/Docker/wikijs/config:/config \
  -v ~/Docker/wikijs/data:/data \
  --restart unless-stopped \
  lscr.io/linuxserver/wikijs #or linuxserver/wikijs
```

&emsp;&emsp;然后访问 ip:3000，根据指引注册管理员账号。


#### code-server

```bash
docker run -d \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -e PASSWORD=toddraspi \
  -e SUDO_PASSWORD=toddraspi \
  -p 8888:8443 \
  -v ~/Docker/code-server/config:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/code-server #or linuxserver/code-server
```

&emsp;&emsp;然后访问 ip:8888，开始安装一些编程语言。

```bash
sudo apt update
sudo apt install wget
```

##### go

```bash
wget https://studygolang.com/dl/golang/go1.17.2.linux-arm64.tar.gz -O go.tar.gz
```

大概率会提示 `wget: unable to resolve host address ‘dl.google.com’`。可以多试两次。实在不行，就通过 ssh 上传到宿主机的 `~/Docker/code-server/config/workspace` 目录

```bash
# 解压golang到 /usr/local 下
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go.tar.gz
# 将golang添加到PATH环境变量
# 添加下面这几行到 $HOME/.profile 或 /etc/profile (for a system-wide installation)
export PATH=$PATH:/usr/local/go/bin
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
# souce 一下环境变量
source /etc/profile
# 验证安装成功与否
go version
go env
```

相应地，需要在 vscode 中安装 golang 官方的插件 `Go`

##### c/c++

```bash
sudo apt install cpp gcc cmake make
```

##### python

```bash
sudo apt install python3.8
```