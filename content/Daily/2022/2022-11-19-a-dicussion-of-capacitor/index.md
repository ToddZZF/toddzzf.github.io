---
title: 关于电容悖论的讨论
date: 2022-11-19 10:14:00 +0800
math: true
image: Two_capacitor_paradox.png
---

## 介绍

在浏览开关电容的相关内容时看到这个很有意思的[电容悖论](https://en.wikipedia.org/wiki/Two_capacitor_paradox) ，内容如下：

有两个相同的电容并联，中间有一个开关。其中一个电容被 $V_i$ 的电压源充满电，另一个则未充电。当开关闭合时，前者的电荷 $Q=CV_i$ 会被平分到两个电容上，而电压会变为 $V_f=\frac{Q}{2C}=\frac{V_i}{2}$. 开始时的能量为：$W_i=\frac{1}{2}C V_i^2$，而结束时的能量为 $W_f=2\cdot \frac{1}{2} C V_f^2=\frac{1}{4}C V_i^2=\frac{1}{2} W_i$. 也就是说有一半的能量消失了？

这个问题最早提出于1995年，在[知乎](https://www.zhihu.com/question/24288678)上有一定的讨论，我在此也搬运一些观点。

## 解释

首先，该悖论是由“理想电路”导致的。我们假设了导线上没有任何电感或电阻，这就导致开关闭合瞬间，电流无穷大（而这是不被允许的）。因此我们必须让导线有电感/电阻。

- 如果导线有电感，那么电路就会振荡，能量在LC中交替存储，无能量损耗。
- 如果导线有电感，并且导线长度不为0，那么振荡会产生电磁波，从而损失能量。这就像有电阻一样，我们称为“辐射电阻”。由于电荷没有损失，因此最终的电压与悖论中的情况一致，能量通过电磁辐射损失。
- 如果导线有电阻，那么这就是一个 RC电路，电流以 $e^{-t/\tau}$ 的形式减小到 0. 最终的电压与悖论中的情况一致，能量通过电阻热耗散损失。
- 如果导线同时存在电感与电阻，那么能量通过电磁辐射与电阻热耗散损失。

这个解释很好理解。但我还是不太理解“电流不能无穷大”（无穷大时可能有某些物理定律失效吧，具体是什么呢？），有一种解释是（开关闭合瞬间）无穷大的电流会产生无穷大的电磁波，同样会损失能量；另一种解释是（趋于）无穷大的电流通过（趋于）0电阻的功率不是0。

为了加深理解，我想进一步讨论一下有电阻时的情况。根据KVL与KCL，有：

$$
\begin{cases}
    U_1 = U_2 + IR\\
    I=-C\dfrac{{\rm d} U_1}{{\rm d}t} = C\dfrac{{\rm d} U_2}{{\rm d}t}\\
    U_{1,o}=U_i, U_{2,o}=0
\end{cases}
$$

算出来：

$$
I = \frac{U_i}{R} e^{-2t/RC}
$$

电阻上耗散的功率为：$P_R=\frac{U_i^2}{R}e^{-4t/RC}$，也就是说 $R$ 越大，初始电流越小，初始功率越小，耗散速度（时间常数）越大。但总体积分恒为 $\frac{1}{4}CV^2$

知乎上有答主分析了另外两种情况：[为何将一满电理想电容与一相同无电电容以理想导线并联会损失一半能量？ - 一尘的回答 - 知乎](https://www.zhihu.com/question/24288678/answer/1341917777)，我简单摘录一下：

如果 $L\neq 0, R=0$，那么是理想的LC振荡。

如果 $L=0,R=0$，那么有：

$$
u = \frac{V}{2}[1-u(t)]
$$

也就是电压瞬间发生变化，相应的电流为：

$$
i = \frac{CV}{2} \delta(t)
$$

两者相乘得到功率为：$P=\frac{CV^2}{2}[1-u(t)]\delta(t)$

积分得到 $E = \frac{CV^2}{4}$。这部分能量是开关闭合瞬间以电磁波的形式辐射掉的。

如果 $L\neq 0, R\neq 0$，那么

- 如果 $\zeta<1$，$R<2\sqrt{2\frac{L}{C}}$，RLC电路会震荡，直到电流为0
- 如果 $\zeta\geq 1$，$R\geq 2\sqrt{2\frac{L}{C}}$，不会振荡，能量传递到 L 后被 R 耗散掉，无法回到 $C$

如果想了解辐射的损害，可以参考这篇论文：[Kirk T. McDonald, A Capacitor Paradox](https://arxiv.org/pdf/physics/0312031.pdf)

## 扩展

以下内容来自[浅谈开关电容电路 (switched capacitor converter) - 甚高的文章 - 知乎](https://zhuanlan.zhihu.com/p/25103270)。

如果是用一电压源给电容充电，充电过程中电压源会损失 $CV^2$ 的能量。电压的总功耗计算如下：

$$
\begin{aligned}
E &= \int_0^\infty VI {\rm d}t\\
&= V \cdot \int_0^\infty I {\rm d}t
&= V \cdot Q\\
&= V \cdot CV\\
&= CV^2
\end{aligned}
$$

而如果用电流源给电容充电，则是无损耗的。计算过程如下：

$$
\begin{aligned}
    E &= \int_0^t VI {\rm d}t\\
    &= C \int_0^t V\frac{{\rm d}V}{{\rm d}t} {\rm d}t\\
    &= C \int_0^t V {\rm d}V\\
    &= \frac{1}{2}C(V_t^2-V_0^2)
\end{aligned}
$$

电容的充放电损耗在 switch capacitor converter（开关电容变压器，简写为 SC converter）中至关重要。

## 参考

- [Two capacitor paradox - Wikipedia](https://en.wikipedia.org/wiki/Two_capacitor_paradox)
- [为何将一满电理想电容与一相同无电电容以理想导线并联会损失一半能量？ - 知乎](https://www.zhihu.com/question/24288678)
- [浅谈开关电容电路 (switched capacitor converter) - 甚高的文章 - 知乎](https://zhuanlan.zhihu.com/p/25103270)
