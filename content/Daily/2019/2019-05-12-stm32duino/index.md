---
#标题配置
title: 像使用Arduino一样使用STM32f103
#时间配置
date: 2019-05-12 11:38:00 +0800
#大类配置
categories: STM32
#小类配置
tag: 教程
#网易云音乐，只能播放无版权保护的
music-id: 465675773
---

> 用 Arduino 的 IDE 来玩 STM

<!-- more -->

## Why

&emsp;&emsp;Arduino烧录方便，库又多，为何还要折腾STM32f103呢？原因如下：

1. 某些比赛禁止使用Arduino
2. Arduino价格较贵，最便宜的nano也要7.8元（均价一般10元），而STM32f103只需6.7元（均价8元）。
3. STM32f103性能比Arduino好很多很多...

&emsp;&emsp;但有个问题，就是STM32需要配置很多东西（寄存器什么的），要是可以像用Arduino一样，使用STM32f103就好了。我在网上找了一些资料，参考的是这个[Arduino IDE 烧录 STM32单片机](https://blog.csdn.net/jacka654321/article/details/82827925)，但上面的方法还是太复杂了，我在一个不存在的网站上搜了一些资料，搬运到这里。

## 准备

&emsp;&emsp;首先，stm32f103是必不可少的。我用的是淘宝上常见的蓝色板：（附上一张管脚图，方便以后查看）

![蓝板](http://wiki.stm32duino.com/images/thumb/1/19/STM32_Blue_Pill_top.jpg/700px-STM32_Blue_Pill_top.jpg)

&ensp;&emsp;当然，还有另一种黑色板，也适用于本教程，某些地方要微微修改一下，我可能会写出来。

![STM32 Smart](http://wiki.stm32duino.com/images/thumb/1/1c/STM32_Smart_Front.jpg/180px-STM32_Smart_Front.jpg)

&emsp;&emsp;还有就是USB转TTL，这个应该都有吧，PL2303、CH340和FT232都行。（PL2303太老了，别用）

&emsp;&emsp;软件就是Arduino IDE，待会还要下载几个驱动。

## 烧录程序

### 安装开发板支持

&emsp;&emsp;打开Arduino IDE，进入“文件-首选项”，下面有一个“附加开发板管理器网址”，添加http://dan.drown.org/stm32duino/package_STM32duino_index.json，保存设置。然后再进入“工具-开发板-开发板管理器”，搜索并安装stm32f1xx。

![stm32f1xx](https://2.bp.blogspot.com/-OiHlBh0lT6M/WhrsToMFv8I/AAAAAAAAIAo/4YK1PH75hNICc9eJjQFqcG8lPJRdlvrigCLcBGAs/s1600/arduino-ide-install-stm32.png)

### 连接硬件

&emsp;&emsp;把USB转TTL串口连接到STM32，连接方式如下：

- 3.3V----->3.3（或VCC----->5V）
- GND----->G
- TXD------>A10
- RXD------>A9

&emsp;&emsp;顺便说一句，一般我们是只连后三个的，Vcc则是另外接，防止电压不够或烧板。不过电脑的电压不大，为了方便可以连上。

![连接CH340到STM32](https://cdn-images-1.medium.com/max/1600/1*p1bMhClCUVREv9gXsziN9g.png)

### 烧录程序

&emsp;&emsp;把stm32上的跳线帽boot0置1（对于蓝色板就是靠近排针的那个，黑色板则是标注BT0的那个脚），再把USB转TTL插到电脑上（请确保你的电脑可以识别，如果你之前折腾过51，那装了相应的驱动），然后按一下stm32的RESET按钮。

&emsp;&emsp;打开Arduino IDE，在“文件-示例”中有一个“A_STM32_Examples”，在“Digital”的分类下找到“Blink”，打开它。把程序中的“PB1”改为“PC13”（因为我们的板载LED接在PC13脚上，见第一张图）。然后”工具-开发板“，选择“Generic STM32F103C series”，“Upload Method”选择“Serial”。

&emsp;&emsp;点击上传。上传成功后，把stm32拿下来，把跳线帽boot0置0，连接micro usb电源，即可看到黄灯闪烁。

## 烧录bootloader

&emsp;&emsp;按道理，上面以及可以用Arduino IDE烧录stm32f103了，但每次都要连接USB转TTL多不方便啊，我的目标是像Arduino nano一样直接用USB连接到电脑。

### 原理

&emsp;&emsp;（个人理解）你有没有想过，为什么电脑需要安装驱动才能识别USB转TTL，而stm32f103则可以直接识别USB转TTL呢？其实，stm32f103内部也有“驱动”，由于它的内存太小，所以只装一个“驱动”，而它默认的是串口的“驱动”，要是我们能把“驱动”换成mini USB，那么就可以直接连到电脑。下面为步骤。

### 安装软件

首先先下载几个东西：

1. [Flash Loader](https://www.st.com/en/development-tools/flasher-stm32.html) 改Flash软件，免费但需要注册。下载好之后安装。
2. [Drivers](h<https://github.com/rogerclarkmelbourne/Arduino_STM32/tree/master/drivers>) 驱动，使电脑可以识别stm32f103c。下载后运行bat文件
3. [Binaries](https://github.com/rogerclarkmelbourne/STM32duino-bootloader/tree/master/binaries) 我们要写入Flash的东西，下载有“PC13”的那个（对应板子上的LED）

### 改写bootloader

&emsp;&emsp;像刚才那样，将stm32f103的跳线帽boot0置1，然后通过USB转TTL连接到电脑。打开刚才安装的flash loader（安装后显示的名字是Demonstrator GUI），它会进入下面几个页面：

&emsp;&emsp;像刚才那样，将stm32f103的跳线帽boot0置1，然后通过USB转TTL连接到电脑。

1. 第一个页面，即“Select the communication port and set settings”，将Port Name选为对应的USB口，点击next。如果卡在next那里，检查一下连线，实在不行重新拔插USB转TTL；
2. 第二个页面，即“Target is readable.”，页面上会显示“Flash Size 64KB”，不用管，点next；
3. 第三个页面，即“Please, select your device in the target list”，下面有一堆东西，你只需要确认“R”和“W”是UnProtected（即是绿色的），然后点next；
4. 第四个页面，中间有一个“Download to the device”，选它，然后点“Download from file”右边的省略号，选择上面下载的第三个东西（bin文件）。点next；
5. 第五个页面，就是开始下载的页面，等到100%后，点close。

&emsp;&emsp;然后不要急着拔stm32f103，先将跳线帽boot0置0，再拔，不然又得重新弄一次。至此已完成。然后就可以通过板子上USB直接烧录了。

### 烧录程序

&emsp;&emsp;这次烧录程序就不用接USB转TTL了，也不用将boot0置1，直接将stm32f103通过USB连接到电脑。打开Arduino IDE，还是以“Blink”为例，将输出管脚改为“PC13”，然后“工具-Upload method”选择“STM32duino bootloadr”，点击上传，然后按一下stm32上的RESET键（不然会卡住），即上传成功。

## 相关资料

- 项目官网：[stm32duino.com](http://wiki.stm32duino.com/index.php?title=STM32F103_boards)

- 蓝板的管脚图：

![STM32C8T6](http://wiki.stm32duino.com/images/a/ae/Bluepillpinout.gif)

- STM32对应于Arduino的管脚图：（红板和蓝板一样的）

![stm32duino](http://wiki.stm32duino.com/images/2/2a/Red_Pill_pinout.png)
