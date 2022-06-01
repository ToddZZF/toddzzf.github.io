---
layout: post
title: verilog basis
date: 2022-05-20 19:55:00 +0800
category: document
thumbnail: rainbow_dash.png
icon: note
summary: " "
indent: True
---

四种逻辑值：1个bit有4种状态

|`1'b1`|单驱动的高电平|内部/IO都允许|
|`1'b0`|单驱动的低电平|内部/IO都允许|
|`1'bx`|未知电平|不允许|
|`1'bz`|无驱动的未知电平（高阻）|仅在PAD允许|

N bits无符号二进制的取值范围：0~2^(N-1)

Verilog版 `Hello World`：

```verilog
module hello(); \\模块名(输入、输出)
    initial begin
        $display("Hello world.\n"); \\调用display函数
    end
endmodule
```
