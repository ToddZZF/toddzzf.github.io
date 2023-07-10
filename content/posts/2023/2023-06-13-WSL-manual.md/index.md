---
title: WSL手册
date: 2023-06-13 19:24:00 +0800
---

## WSL 简介

WSL（Windows Subsystem for Linux），中文为“适用于 Linux 的 Windows 子系统”，是 Windows 自带的虚拟机，利用这个我们可以方便地在 Windows 上安装 Linux 系统。

## 安装

安装过程可以参考 [使用 WSL 在 Windows 上安装 Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)，简单来说就是打开 Hyper-V（在“启用或关闭 Windows 功能”里），然后运行

```powershell
wsl --install
```

默认情况下安装 Ubuntu，也可以指定特定的 Linux 发行版：

```powershell
wsl --install -d <Distribution Name>
```

`<<Distribution Name>` 可以用 `wsl --list --online` 来查看，目前可用的系统为：

```powershell

NAME                                   FRIENDLY NAME
Ubuntu                                 Ubuntu
Debian                                 Debian GNU/Linux
kali-linux                             Kali Linux Rolling
Ubuntu-18.04                           Ubuntu 18.04 LTS
Ubuntu-20.04                           Ubuntu 20.04 LTS
Ubuntu-22.04                           Ubuntu 22.04 LTS
OracleLinux_7_9                        Oracle Linux 7.9
OracleLinux_8_7                        Oracle Linux 8.7
OracleLinux_9_1                        Oracle Linux 9.1
SUSE-Linux-Enterprise-Server-15-SP4    SUSE Linux Enterprise Server 15 SP4
openSUSE-Leap-15.4                     openSUSE Leap 15.4
openSUSE-Tumbleweed                    openSUSE Tumbleweed
```

可以同时安装不同的发行版，但每个发行版都只能安装一个，如果想安装多个，需要一些特殊手段，并且或多或少都存在问题，在此不再介绍。不同发行版会有自己的 Terminal，因此无需担心切换问题。

## 关闭与卸载

关闭所有虚拟机：

```powershell
wsl --shutdown
```

关闭特定的发行版：

```powershell
wsl --terminate <Distribution Name>
```

卸载特定发行版：

```powershell
wsl --unregister <DistributionName>
```

## 开机自启

WSL 默认是开机不自启的，若需要开机自启，可以参考：[WSL2及服务自启动](https://zhuanlan.zhihu.com/p/471272756)

## GUI程序

现在 WSL 直接就支持 GUI 程序，直接安装应用程序即可，比如 `sudo apt install VLC`
