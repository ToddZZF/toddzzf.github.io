---
title: 第一章
date: 2023-03-10 12:24:00 +0800
---

## 评价指标

评价一个数字电路的好坏的标准有很多，比如：

- 成本 Cost
- 速度 Speed
- 可靠性 Reliability
- 功耗 Power

### 成本

产品的成本可分为两个部分：

- 固定成本（Fixed Cost/Non-recurring Expenses）：与销量无关的成本。比如：研发费用、生产设备、市场营销等费用。
- 可变成本（Variable Cost/Recurring Expenses）：用于制造产品的费用。

👇公式轰炸!!!👇

$$
单个芯片的成本 = 单个芯片的可变成本 + \frac{固定成本}{产量}
$$

$$
可变成本 = \frac{芯片成本+测试成本+封装成本}{最终成品率}
$$

$$
芯片成本=\frac{晶圆成本}{芯片数 \times 成品率}
$$

$$
成品率 = (1+\frac{单位面积缺陷\times 芯片面积}{\alpha})^{-\alpha}\\
\alpha 与芯片复杂度正相关，一般取3
$$

$$
单个晶圆的芯片数 = \frac{\pi \times (圆片直径/2)^2}{芯片面积}-\frac{\pi \times 圆片直径}{\sqrt{2\times 芯片面积}}
$$

前三个很好理解；成品率那个要背一下；最后一个实际上是（总面积/单个面积-总周长/对角线），也很好记。

综合上面公式，可以得出一个结论：芯片成本与面积的四次方成正比。因此我们希望芯片面积小。面积小的门的总电容也更小，消耗的能量也更小，速度更快。

### 稳定性（可靠性）

#### 噪声容限

下图是一个反相器的电压传输特性曲线，其中斜率为 -1 的点在横纵坐标中对应四个电压，分别是：

- $V_{IH}$ = minimum HIGH input voltage
- $V_{IL}$ = maximum LOW input voltage
- $V_{OH}$ = minimum HIGH output voltage
- $V_{OL}$ = maximum LOW output voltage

![CMOS inverter noise margins](images/CMOS%20inverter%20noise%20margins.png)

输出信号在传输的过程中会因为噪声而有偏差，允许的最大偏差就叫**噪声容限（Noise Margin）**，定义为：

$$
NM_L = V_{IL} - V_{OL}
$$

$$
NM_H = V_{OH} - V_{IH}
$$

![Noise margin definitions](images/Noise%20margin%20definitions.png)

中间的区域叫做**不确定区**或**过渡宽度（Transition Width，TW）**。

----

为什么 $V_{IL},V_{IH}$ 要取斜率为 1？因为这个值可以令噪声容限最大。总的噪声容限等于：

$$
\begin{aligned}
NM = NM_L+NM_H &= V_{IL} - V_{OL} + V_{OH} - V_{IH}\\
&=V_{IL}-f(V_{IH})+f(V_{IL}) - V_{IH}
\end{aligned}
$$

对上式求导，并取导数为 0.

$$
\frac{{\rm d} NM}{{\rm d}V_{IL}} = 1+f'(V_{IL}) = 0
$$

$$
\frac{{\rm d} NM}{{\rm d}V_{IH}} = 1+f'(V_{IH}) = 0
$$

整理后有 $f'(V_{IL}) = -1$ 和 $f'(V_{IH}) = -1$

#### 再生性

噪声容限只能保证一次传输的可靠性，而多次传输后后信号的可靠性则取决于再生性。再生性指的是受到干扰的信号经过逻辑门后依然能收敛回额定电平。考虑一条反相器链，输入的电平在不确定区，经过多次反向后，信号有可能出现两种情况：

1. 信号重回额定电平（即高或低电平）
2. 信号远离额定电平（即中间电平）

![A chain of inverters](images/A%20chain%20of%20inverters.png)

我们可以根据传输函数来区分这两种情况。我们将 $V_{\rm out}=f(V_{\rm in})$ 和 $V_{\rm in} = finv(V_{\rm out})$ 画在同一个坐标系中，传输过程可以参考图中的箭头。

![Conditions for regeneration](images/Conditions%20for%20regeneration.png)

这两种差异源自于两者的传输特性，一个具有增益大于 1 不确定区，而一个没有。前者由于增益大于1，所以就会向高/低电平靠拢。

### 性能（延迟）

性能通常由每秒执行的指令数来衡量，而这又取决于传输延时 $t_p$，定义为：

$$
t_p = \frac{t_{pLH}+t_{pHL}}{2}
$$

具体 $t_{pLH},t_{pHL}$ 的定义见下图。

![Definition of propagation delays and rise and fall times](images/Definition%20of%20propagation%20delays%20and%20rise%20and%20fall%20times.png)

延迟受电路结构、工艺、环境等因素影响。如果想比较哪种电路结构的延迟最小（排除因素），可以通过 **Fanout of Four(FO4) Delay**：将一个电路驱动4个它自己，记为 $t_{FO4}$

如果想比较工艺对延迟的影响，可以用 Ring Oscillator（环形振荡器），振荡周期越小（频率越高），延迟越小。

### 功耗

主要考虑峰值功耗 $P_{\rm peak} $ 和平均功耗 $P_{av}$，定义为：

$$
P_{\rm peak}=i_{\rm peak}V_{\rm supply}=\max[p(t)]
$$

$$
P_{\rm av}=\frac{1}{T}\int\limits_{0}^{T}p(t)dt=\frac{V_{\rm supply}}{T}\int\limits_{0}^{T}i_{\rm supply}(t)dt
$$

另外功耗还可以分为静态功耗和动态功耗。后者发生在门开关的瞬间，是由电容充电以及电源和地存在通路造成的。

功耗和传输延时存在一定关系，一般来说功耗越大，延迟越小。对于给定的工艺和门的结构，**功耗-延时积（$PDP=P_{av}\cdot t_p$）** 为一常数。我们优化时也是希望 PDP 越小越好。

另一个与 PDP 类似的是 **能量-延迟积（$EDP=(P_{av}\cdot t_p)\cdot t_p$）**，其公式为 

