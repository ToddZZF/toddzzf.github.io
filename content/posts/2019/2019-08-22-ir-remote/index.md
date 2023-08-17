---
title:  Arduino库之IRremote
date:   2019-08-22 15:10:00 +0800
categories: document
tag: Arduino
music-id: 1309394857
---



>IRremote的wiki的中文翻译
>

<!-- more -->



# 介绍

&emsp;&emsp;IRremote 可以让你用标准的红外遥控器控制 Arduino，也可以用 Arduino 控制其他设备（电视、音箱等）

&emsp;&emsp;下载安装请见[Arduino-IRremote github page](https://github.com/shirriff/Arduino-IRremote)

&emsp;&emsp;这份文档包括：

[TOC]

# 硬件设置

![img](https://camo.githubusercontent.com/8ac489718a9de4e84d3d508f4322fa4e55e70157/687474703a2f2f66696c65732e617263666e2e636f6d2f696d616765732f61726475696e6f2d69722e6a7067)

## 红外接收

&emsp;&emsp;IRremote 库可以使用任何一个数字信号引脚来接收 38kHz 红外接收模块的数据。这些模块自带了滤波和逻辑输出。不能直接用红外发射管和红外接收管。

![](https://camo.githubusercontent.com/88ce3189895c447e386a7eb94d62600b70cfade8/687474703a2f2f66696c65732e617263666e2e636f6d2f696d616765732f69722d736368656d617469632e706e67)

## 红外发射

&emsp;&emsp;将红外发射管和适当大小的电阻连接到有PWM的 pin 3，并确保红外发射管极性正确。我已经用 NTE 3027 和 100 欧实验过（如上图），发射距离大概是4~5米。可以加多一个三极管来加大距离。



# 红外发射示例

下面这个是 Example -> IRremote -> IRsendDemo，它将控制索尼电视的开和关。需要将一个红外发射管连接到 pin 3.

```c
#include <IRremote.h>
IRsend irsend;

void setup()
{
  Serial.begin(9600);
}

void loop() {
  if (Serial.read() != -1) {
    for (int i = 0; i < 3; i++) {
      irsend.sendSony(0xa90, 12); // Sony TV power code
      delay(100);
    }
  }
}
```



# 红外接收示例

## 接收并打印数据

下面这段代码将接收一个数据并通过串口打印出来，可以用于检测你的遥控器使用了什么数据格式。Example中还有一个更复杂的例子 [IRrecvDump](https://github.com/shirriff/Arduino-IRremote/blob/master/examples/IRrecvDump/IRrecvDump.pde)

同时这段代码也展示了如何在按下遥控器后触发对应的语句。

```c
#include <IRremote.h>
IRrecv irrecv(11); // Receive on pin 11
decode_results results;

void setup()
{
  Serial.begin(9600);
  irrecv.enableIRIn(); // Start the receiver
}

void loop() {
  if (irrecv.decode(&results)) {
    Serial.println(results.value, HEX);
    irrecv.resume(); // Continue receiving
  }
}
```



## 长按与松开

下面这段代码展示了在长按遥控器时执行一段代码，松开后执行另一段代码。由于遥控器在按下时会不断地发送一个数据，所以需要用一个计时器来判读是否有松开遥控器。

```c
#include <IRremote.h>
#define MAX_TIME 150 // max ms between codes
#define LED_PIN 3
long lastPressTime = 0;
int state = LOW;

IRrecv irrecv(11);
decode_results results;

void setup()
{
  pinMode(LED_PIN, OUTPUT);  // Status on pin 3 LED
  irrecv.enableIRIn(); // Start the receiver
}

void loop() {
  if (irrecv.decode(&results)) {
    if (1) {  // Can check for a specific button here
      if (state == LOW) { 
        state = HIGH;  // Button pressed, so set state to HIGH
        digitalWrite(LED_PIN, HIGH);
      }
      lastPressTime = millis();
    }
    irrecv.resume(); // Receive the next value
  }
  if (state == HIGH && millis() - lastPressTime > MAX_TIME) {
    state = LOW; // Haven't heard from the button for a while, so not pressed
    digitalWrite(LED_PIN, LOW);
  }
}
```

注意，`if (1)` 会导致只要按下任何按钮（即使和原来的按钮不同）都能触发代码。如果要设置为特定按钮，需要替换为 `if (results.value == 0x1234)` （0x1234 是对应按钮的编码）





## IRremote API

&emsp;&emsp;API 通过 `IRsend` 对象来发送红外数据，通过 `IRrecv` 对象来接收红外数据。这个库不能同时发送和接收，但可以在发送和接收之间转换。

## 发送

```c
IRsend irsend;
```

新建一个 `IRsend` 对象

```c
irsend.sendNEC(data, bits);
```

以 NEC格式编码 发送数据，`bits` 指定了编码长度，一般是16

```c
irsend.sendSony(data, bits);
```

以 Sony格式编码 发送数据

```c
irsend.sendSAMSUNG(data, bits);
```

以 三星格式编码 发送数据

```c
irsend.sendRC5(data, bits);
```

以 RC5格式编码 发送数据

```c
irsend.sendRC6(data, bits);
```

以 RC6格式编码 发送数据

```c
irsend.sendRaw(buf, len, hertz);
```

Sends a code corresponding to the buffer of raw durations



## 接收
```c
IRrecv irrecv(pin);
```

创建一个`IRrecv` 对象

```c
irrecv.enableIRIn();
```

开始接收红外数据

```c
int irrecv.decode(&results)
```

如果接收到数据，返回1，否则返回0.
The fields of *results* are:

| `decode_type` | NEC, SONY, RC5, RC6, or UNKNOWN |
| ------------- | ------------------------------- |
| `value`       | the received code value         |
| `bits`        | The number of bits received     |
| `rawbuf[]`    | Raw durations                   |
| `rawlen`      | Number of records in *rawbuf*   |

```c
irrecv.resume()
```
必须在 `irrecv.decode()` 后调用，以继续接收



# IRremote的实例

Many projects have been built with the IRremote library

* [Arduino Infrared, Blue Robot challenge](http://www.abluestar.com/blog/arduino-infrared-blue-robot-challenge-burning-man-and-superman/)
* Controlling a [pedestrian sign](http://arcfn.com/2010/01/dont-walk-controlling-pedestrian-sign.html) with a remote.
* Extending the library to [arbitrary remotes](http://arcfn.com/2010/01/using-arbitrary-remotes-with-arduino.html)
* [Controlling my stereo](http://arcfn.com/2009/11/controlling-your-stereo-over-web-with.html) over the web.
* ["Universal remote](http://arcfn.com/2009/09/arduino-universal-remote-record-and.html) to record and playback IR codes.
* [Infrared bubble maker](http://arcfn.com/2009/11/ir-bubbles-controlling-relay-with.html) project.
* [Using the library to detect IR beam breaks](http://www.arcfn.com/2010/03/detecting-ir-beam-break-with-arduino-ir.html)
* [electrosthetics](http://electrosthetics.blogspot.com/2009/11/arduino-universal-remote-and-more.html) used the library to control a home theater receiver.
* [Arduino: Redefining the TV Remote](http://luckylarry.co.uk/2010/06/arduino-redefining-the-tv-remote/) – using the library and an ultrasonic sensor to control a TV by waving your hand.
* [Arduino: Infrarot-Receiver Module](http://www.hobby-werkstatt-blog.de/arduino/286-arduino-infrarot-receiver-module.php) a 4WD controller (German page)
* [Smart Lock with Remote Controlled Light](http://www.tehnorama.ro/smart-lock-controlled-light-with-remote-temperature-led-graph/) (Romanian page)



下面是一些用 IRremote的实例：

* [Arduino-IRremote-红外遥控器,发射与接收](https://blog.csdn.net/zuoheizhu/article/details/87452110)
* [Arduino红外传感器-IR Transmitter Module红外发射模块](https://www.ncnynl.com/archives/201606/84.html)

* [Arduino教程（提高篇）——红外遥控(发射篇)](https://www.arduino.cn/thread-1394-1-1.html)
* [ Arduino红外遥控系列教程](http://www.geek-workshop.com/thread-3444-1-1.html) 一共有6篇
* 

# 红外编码

IRremote有如下几种编码：

NEC: 32 bits are transmitted, most-significant bit first. ([protocol details](http://www.sbprojects.com/knowledge/ir/nec.php))

Sony: 12 or more bits are transmitted, most-significant bit first. Typically 12 or 20 bits are used. Note that the official protocol is least-significant bit first. ([protocol details](http://www.sbprojects.com/knowledge/ir/sirc.php)) For more details, I've written an article that describes the Sony protocol in much more detail: [Understanding Sony IR remote codes](http://www.arcfn.com/2010/03/understanding-sony-ir-remote-codes-lirc.html).

RC5: 12 or more bits are transmitted most-significant bit first. The message starts with the two start bits, which are not part of the code values. ([protocol details](http://www.sbprojects.com/knowledge/ir/rc5.php))

RC6: 20 (typically) bits are transmitted, most-significant bit first. The message starts with a leader pulse, and a start bit, which is not part of the code values. The fourth bit is transmitted double-wide, since it is the trailer bit. ([protocol details](http://www.sbprojects.com/knowledge/ir/rc6.php))

For Sony and RC5/6, each transmission must be repeated 3 times as specified in the protocol. The transmission code does not implement the RC5/6 toggle bit; that is up to the caller.



# 排除故障

如果在测试红外接收时，收到的是随机的数据，可以尝试调暗房间的灯光。某些日光灯会对 38kHz红外信号产生干扰。