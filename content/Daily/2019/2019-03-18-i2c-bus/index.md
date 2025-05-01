---
#标题配置
title: Arduino与I2C总线协议
#时间配置
date: 2019-03-18 22:16:00 +0800
#大类配置
categories: document
#小类配置
tag: [Raspberry Pi, Arduino, STM32, protocol]
music-id: 465675773
---

> 为了参加学院的电信杯，好好学一下 I2C

<!-- more -->

## I2C总线协议入门

&emsp; &emsp;I2C总线协议（ 全称：Inter Integrated Circuit，又叫 I^2^C，IIC）是一种连接低速设备的通信协议，是由 Philips 在80年代设计的。它有如下几个优点：

- 只需要两条数据线；
- 没有严格的波特率（baud rate）限制
- 主/从关系简单
- 多主控，但任何时间点只能有一个主控。

&emsp;&emsp;缺点也有：

- 传输速度比SPI慢
- 每个数据字节都只能是8位
- 硬件要求比SPI更高

![I^2^C](http://www.vector-logo.net/logo_preview/eps/i/i2c_Bus.png "I2C")

### 硬件结构

&emsp;&emsp;下面这幅图展示了单个主/从机之间的电路连接：

![I2C连线](https://www.i2c-bus.org/static/i2c/BusSetup.gif "I2C连线")

|     |                                                                        |
| --- | ---------------------------------------------------------------------- |
| VCC | 为I2C提供电压，范围为1.2V~5.5V                                         |
| GND | 共地接线                                                               |
| SDA | Serial data 串行数据（I2C 数据线）                                     |
| SCL | Serial clock 串行时钟（I2C 时钟线）                                    |
| Rp  | 上拉电阻（大小计算可参考[SLVA689](http://www.ti.com/lit/pdf/SLVA689)） |
| Rs  | 串口电阻                                                               |
| Cp  | Wire Caoacitance 线间电容                                              |
| Cc  | Cross channel capacitance 路间电容                                     |

对于多个主/从机，可以这样连接：

![多个从机连线](http://www.cypress.com/sites/default/files/inline/fckImages/myresources/AN50987.jpg "多个从机连线")

&emsp;&emsp;下面重点讲一下双向通信的开漏结构（Open-Drain for Bidirectional Communication），这能帮助我们了解为什么同一时间只允许一个主控。请看结构图：

!["Open-Drain"](/styles/images/I2C/open-drain.PNG "开漏结构 Open-Drain")

&emsp;&emsp;主/从机可以让晶体管的导通（开漏），让SDA/SCL线的电压拉低；当主/从机让晶体管不导通时，上拉电阻会将SDA/SCL线上的电压拉高。也就是说，主/从机只能让SDA/SCL为0，当主/从机不控制时，SDA/SCL为1。因此，永远不会出现一个从机传输0，另一个从机传输1的情况，即同一时间只能有一个设备在传输数据。

&emsp;&emsp;这种结构虽然效率较低，但其驱动电流/电压较小，很适合驱动能力差的微处理器和传感器。

## I2C操作

&emsp;I2C可以在主/从机之间的双向通信。为了分辨每个设备，每个设备都有一个独一的地址，这样主机就能通过地址和指定的从机通信。下面是一个大概的流程：

1. 假如主机想要给从机发送数据：
   - 主机发送起始条件和从机寄存器的地址
   - 主机发送数据
   - 主机发送终止条件
2. 假如主机想要接收读取从机数据：
   - 主机发送起始条件和从机寄存器地址
   - 主机发送读指令
   - 主机从从机接收数据
   - 主机发送终止条件

&emsp;&emsp;下面我们来详细讲解一下。

### 起始条件和终止条件 {#STARTandSTOP}

&emsp;&emsp;开始条件：当SCL为高电平时，SDA从高电平变为低电平；终止条件：当SCL为高电平时，SDA从低电平变为高电平。

![起始与终止条件](http://i2c.info/wp-content/images/i2c.info/start-stop.gif "起始与终止条件")

### 重复起始条件 {#RepeatedSTART}

&emsp;&emsp;如果某一个主机想要在一次通信中与不同从机通信，又不想让其他主机切入，那么可以”重复开始条件“，即在与一个从机通信完后，再次产生一个起始条件，与另一个从机通信。这样，数据线就不会”空闲（idle）“，其他主机就无法切入。

![重复起始条件](http://www.avrbeginners.net/architecture/twi/img/sta_sto.gif "重复起始条件")

### 数据有效性和数据格式

&emsp;&emsp;数据以每8位为一个字节。每个字节可以为设备地址、寄存器地址或读写数据。每个位在SCL脉冲时传输，即当SCL为高电平时，数据能传输，低电平时则改变数据的0/1。结合上面，我们知道如果在SCL时改变了SDA的数据，则会被当作起始/终止条件。所以SDA的数据要在SCL高电平时保持稳定。

![数据有效性](https://tse4-mm.cn.bing.net/th?id=OIP.6FejWLZ164j1Cn4v2kjc_wHaC8&pid=Api "数据有效性")

### 应答位（ACK）

&emsp;&emsp;每个数据的字节（包括传输地址的字节）后面都会紧接着一个由接收方发送的ACK位，接收方通过ACK位告诉发送方数据是否成功接收。

&emsp;&emsp;在接收方发送ACK位前，发送方会释放SDA线，使得接收方可以在SCL高电位时，拉低SDA的电位（即下图的第9周期）。SDA低为ACK（Acknowledge，应答），SDA高为NACK（Not Acknowledge，非应答）

&emsp;&emsp;下面这几种情况可能会导致非应答：

1. 接收方正在执行某个实时的功能，无法接收或发送数据
2. 接收方无法理解发送的数据/命令
3. 接收方无法接收更多的数据
4. 主机已经完成了从机的数据读取，主机通过发送NACK告诉从机这个。

![数据格式](http://www.diangon.com/image/portal/201501/12/100648c7nx7xhw7mom7w31.jpg "数据格式")

### 向从机写数据

&emsp;&emsp;首先是发送[起始条件](#STARTandSTOP)，然后发送从机地址（7位），紧接着第八位是R/W（读写位），R/W=1为读，R/W=0为写。

&emsp;&emsp;然后还要发送寄存器地址（8位），但有时候从机只有一个寄存器，发送从机地址就够了（就像下图一样）。

&emsp;&emsp;然后主机就开始发送数据，直到所有数据都发完后，发送[停止条件](#STARTandSTOP)（或[重复起始条件](#RepeatedSTART)）

![向从机写数据](https://i2c.info/wp-content/images/i2c.info/7-bit-address-writing.gif "向从机写数据")

### 从从机读数据

&emsp;&emsp;

## 参考资料

[SLVA704-Understanding the I2C Bus.pdf](http://www.ti.com/lit/an/slva704/slva704.pdf)

[I2C-bus specification and user manual](https://www.nxp.com/docs/en/user-guide/UM10204.pdf)

[I2C总线传输协议](https://blog.csdn.net/jasonchen_gbd/article/details/77431951)

[I2C协议（上）——基础介绍](https://zhuanlan.zhihu.com/p/26579936)

[I2C通信 读写数据过程](https://blog.csdn.net/phenixyf/article/details/17846969)

图像来源于网络，若有侵权，请联系
