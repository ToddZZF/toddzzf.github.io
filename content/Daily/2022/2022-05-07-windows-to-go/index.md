---
layout: post
title: Windows to Go
date: 2022-05-07 10:08:00 +0800
category: document
image: Windows-To-Go-logo.webp
summary: 可随身携带的Windows系统
indent: True
---

出于某些原因，我有一些繁重的工作要在 Ubuntu 上完成，但临近毕业又需要使用 Windows 的办公软件。我本来想装一台新电脑，但 618 又快到了，等一等就能省好多钱。用笔记本吧，但我的笔记本又只有 500G 的 SSD，不好装双系统。苦恼了半天，想起来可以把 Windows 装在外置 SSD 上（Windows to Go，WTG），于是就下单了一个 1T 的 SSD，以及一个硬盘盒。下面记录WTG的制作、使用过程。

## 硬件

- 铠侠 RC20 1TB ￥558
- 海康威视 MD202 M.2 SSD 硬盘盒 ￥99

## 所需文件

- [WTG 助手](https://bbs.luobotou.org/thread-761-1-1.html)
- [windows 镜像](https://next.itellyou.cn/) 推荐使用企业版，磁力链接：[Windows10 business 21H2](magnet:?xt=urn:btih:4d250bd587faba23ddf7743591d3bb3839170add&dn=zh-cn_windows_10_business_editions_version_21h2_updated_april_2022_x64_dvd_b0024895.iso&xl=5790621696)

## 安装系统

1. 打开 WTG 助手
2. 选择移动硬盘和镜像，保持默认设置，安装系统
3. 将电脑关机，然后启动进入到 BIOS（根据电脑型号搜索）
4. 调整启动顺序，将移动硬盘的优先级设为最高
5. 退出 BIOS，启动电脑

## 使用体验

初次启动时，由于缺少部分驱动，所以有些功能用不了（比如笔记本外接不了屏幕），需要等 Windows 下载好驱动后，就和内置的系统用起来一样了。下载驱动时由于涉及大量硬盘读写，所以硬盘盒摸起来比较烫，但在日常使用时则和室温差不了多少。测试了在另一台笔记本上使用，可以正常开机，但依然要下驱动（毕竟不同电脑的驱动不一样）。

有一点比较不方便的是，有时候外接显示器的话会开不了机，需要先拔视频线，等开机后再重新插上。

软件方面，日常软件用起来没问题。等我试着用 WTG 编程后再补充专业软件的使用情况。

## 参考

[说走就走的「Windows」——Windows To Go制作详解](https://sspai.com/post/44699)

[Windows To Go优盘系统 - 萝卜头IT论坛](https://bbs.luobotou.org/forum-88-1.html)
