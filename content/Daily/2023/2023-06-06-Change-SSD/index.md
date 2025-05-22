---
title: 更换固态
date: 2023-06-02 12:27:00 +0800
image: tiplus7100.jpeg
---

<!-- 美美在618送了我一个固态硬盘（致钛的TiPlus7100），我把原来的 TiPlus5000 换下来给她。 -->

## 1. 备份文件

更换固态之前，确保重要文件都已经备份了，并且记录下有用的软件的名字。

## 2. 制作系统安装U盘

1. 下载系统文件（以.iso结尾），很多高校都有微软正版化网站，上面就有系统文件；或者使用下面的磁力链接。根据自己需要选择 11 或 10（我选择 11）
   - Windows 11 (business editions), version 22H2：<magnet:?xt=urn:btih:bdfd6c7500a4726870c4d5214250657f6d00015c&dn=zh-cn_windows_11_business_editions_version_22h2_updated_may_2023_x64_dvd_76248ab3.iso&xl=5757857792>
   - Windows 10 (business editions), version 22H2：<magnet:?xt=urn:btih:41f65f6a113077a9c5b6b1f160fd862be545cce4&dn=zh-cn_windows_10_business_editions_version_22h2_updated_may_2023_x64_dvd_b7e877b8.iso&xl=5975597056>
2. 下载 Rufus 软件，去 [官网](https://rufus.ie/zh/) 下载就行
3. 将一个空闲的U盘插到电脑上，注意备份里面的资料
4. 打开 Rufus，选择 U 盘，选择 iso 文件，然后点开始就行。选项都保持默认就行。

## 3. 更换固态

1. 关机
2. 把后盖的螺丝拧下来，并放到一个小盒子里，避免丢失。
3. 然后用卡片或吸盘把后盖打开，注意不要用蛮力，避免卡扣断裂（虽然断裂也可以用螺丝固定，但心里还是会膈应的）
4. 断开电池排线（嫌麻烦可不做）
5. 确保手上没有静电
6. 把固态螺丝拧下来，放到另一个小盒子里，避免与后盖螺丝混淆
7. 把旧固态斜向上拔出来
8. 把新固态斜着插进去，然后再放平
9. 用螺丝将固态固定住
10. 将盖子掩盖上，不要盖严，以免后续有问题又要打开。

## 4. 安装系统

1. 将前面的 U 盘插上
2. 开机
3. 正常来说会进到安装系统的界面，如果进到 Bios，说明 U 盘有问题，请重新制作 U 盘
4. 然后根据提示安装系统就行
5. 系统安装好后，会自动联网安装驱动（在设置的 Windows 更新里），需要手动重启一两次。如果有驱动没安装，去电脑厂商的官网里找对应驱动。

## 5. 激活系统

1. 关闭 Windows 安全中心的实时保护（在病毒和威胁防护，“病毒和威胁防护”设置，管理设置，实时保护）
2. 下载 [HEU KMS Activator](https://github.com/zbezj/HEU_KMS_Activator/releases)
3. 然后点“开始”就行
4. 这个软件也可以激活 Office

## 6. 安装软件

软件这个因人而异，这里只推荐常见的工具软件（下面给出了下载链接）：

1. 解压软件：[7zip](https://www.7-zip.org/) 或更好看的 [NanaZip](https://github.com/M2Team/NanaZip)
2. 视频播放器：[VLC](https://www.videolan.org/vlc/)
3. 图片浏览器：[ImageGlass](https://imageglass.org/)
4. 浏览器：Windows 自带的 Edge，或 [Firefox](https://www.mozilla.org/en-US/firefox/new/)
5. 截图：[Snipaste](https://www.snipaste.com/)
6. 录屏：[OBS](https://obsproject.com/)
7. PDF浏览器：[Sumatra PDF](https://www.sumatrapdfreader.org/free-pdf-reader)
8. 音乐播放器：[MusicBee](https://getmusicbee.com/)

## 附：让Win11变成Win10

- 右键菜单：<https://zhuanlan.zhihu.com/p/427268135>
- 开始菜单：<https://github.com/wwwwwhj/ExplorerPatcher-> 或者直接使用 [Coodesker](https://github.com/coodesker/coodesker-desktop/releases)
