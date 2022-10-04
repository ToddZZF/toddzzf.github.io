---
title: 评价标准
date: 2022-09-05 17:32:13 +0800
math: true
---

## 温漂系数

衡量输出电压随温度变化的性能参数。单位为 ${\rm ppm/{}^\circ C}$，$1{\rm ppm}=10^{-6}$

$$
T=\frac{V_{\max} - V_{\min}}{V_{\rm mean}(T_{\max}-T_{\min})}\times 10^6 {\rm ppm/{}^\circ C}
$$

视频：[利用virtuso的calculator工具计算bandgap电路的温度系数](https://www.bilibili.com/video/BV12i4y1T7hK/)，对应下面的公式（式中的140是温度范围）：

```text
(ymax(VS("/OUT1"))-ymin(VS("/OUT1")))/(average(VS("/OUT1"))*140)*1000000
```

## 输出噪声

输出的噪声大小。

## 功耗

所消耗的电流大小

## 电源抑制

对电源线上噪声抑制能力的重要参数。通常用 PSRR（Power supply rejection ratio）电源抑制比来衡量，计算公式为：

$$
{\rm PSRR}=20\lg\frac{V_{I, pp}}{V_{O,pp}}
$$

$V_{I, pp},V_{O,pp}$ 为输入、输出纹波的峰峰值。