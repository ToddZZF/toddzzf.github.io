---
title: 单极共漏放大器
date: 2022-11-11 18:51:00 +0800
math: true
---

## 频率响应

![单极共漏电路小信号电路](images/common-drain-small-signal-with-cap.png)

易知，$V_{\rm out}$ 的输出是 $1/g_m$ 和 $R_E$ 的分压，所以有：

$$
A_v = \frac{R_E}{1/g_m+R_E}
$$

对于 $C_{GD}$，其等效电阻为：

$$
\begin{cases}
    \dfrac{V_D+V_t}{R_{\rm sig}} = I_t\\
    \dfrac{V_t}{1/g_m} = I_t + \dfrac{V_D}{R_E}
\end{cases}\\
\Rightarrow \omega_{p1} = \frac{1}{C_{GS}\l( \frac{R_{\rm sig}+R_E}{1+g_m R_E}\r)}
$$
