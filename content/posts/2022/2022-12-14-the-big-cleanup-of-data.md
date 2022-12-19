---
title: 数据大整理
date: 2022-12-14 17:17:00 +0800
---

我有很多块硬盘，包括：

1. 高中时买的 500G 机械硬盘
2. 大二买的 4T 机械硬盘
3. 大二阿帆给的 128G 固态硬盘
4. 大三买的 2T 机械硬盘
5. 大三室友给的 240G 机械硬盘
6. 大四舅舅给的 3T 机械硬盘
7. 大四买的京造 500G 固态硬盘
8. 还有两块 2T 的固态硬盘分别装在台式电脑和笔记本电脑里

我的各种数据就混杂在这些硬盘里面，趁着有时间，就分门别类、整理一下。

目前的存储分配如下：

1. 京造500G固态硬盘（放在海康威视的硬盘盒里）：主要用于存放最重要文件，还有一些不好存在机械硬盘的小文件，包括：
   - Todd&Molly的记录
   - Books书籍
   - Ehentai漫画
   - 开发工具

## x86p2配置

### pve(8006端口)

### openwrt(80端口)

### OMV6(81端口)

4T 硬盘由OMV6进行管理。

### Docker(9000端口)

```bash
nano /etc/fstab
# 增加下面一行，设置samba地址和位置
# //10.0.0.176/HDD4T /mnt/nas4T cifs credentials=/root/.smbcredentials,iocharset=utf8 0 0
# 其中/root/.smbcredentials如下
# username=[用户名]
# password=[密码]
mount -a
```