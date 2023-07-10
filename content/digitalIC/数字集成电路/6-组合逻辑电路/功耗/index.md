---
title: 功耗
date: 2023-07-10
---

组合逻辑中的功耗主要分为：

- 动态功耗：对电容充电的功耗
- 静态功耗：短路电流的功耗
- 漏电流的功耗

考试计算主要考静态逻辑的动态功耗，下面简单说说。

动态功耗主要是电容充电的功耗，也就是从 0 变到 1 的功耗：

$$
P = \int_0^{V_{DD}} V_{DD}\cdot C_L \frac{{\rm d}V}{{\rm d}t}{\rm d}t = C_L\cdot V_{DD}^2
$$

假设翻转的频率为 $f_{0\rightarrow 1}$（也就是单位时间内发生了 $f_{0\rightarrow 1}$ 次翻转），那么功耗就等于：

$$
P = C_L \cdot V_{DD}^2 \cdot f_{0\rightarrow 1}
$$

翻转频率和概率有关：

$$
f_{0\rightarrow 1} = P_{0\rightarrow1} \cdot f
$$

其中 $f$ 是翻转频率，乘以概论 $P_{0\rightarrow1}$ 就是其中有多少次翻转是 $f_{0\rightarrow 1}$

而 $P_{0\rightarrow1}$ 是概率的乘积：

$$
\begin{aligned}
P_{0\rightarrow1} &= P_{0}\cdot P_{1}\\
&=P_0 \cdot (1-P_0)
\end{aligned}
$$

总结：

1. 求每个节点的 $C_L$，包括本征的和外部的
2. 求每个节点的 $P_0$
3. 求每个节点的 $P_{0\rightarrow1}$
4. 代入公式 $P = C_L \cdot V_{DD}^2 \cdot f_{0\rightarrow 1}$
