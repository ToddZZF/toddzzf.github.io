---
title: 第5章 反相器
date: 2023-03-10 19:52:00 +0800
---

反相器由一个 PMOS+NMOS 组成。理想的反相器有如下特点：

1. 晶体管具有有限的导通电阻和无限的关断电阻
2. 输出的高、低电平为 VDD 和 GND，因此具有很高的噪声容限
3. 低输出电阻，使得其不容易受噪声影响
4. 高输入电阻，因此理论上可以有无穷大的扇出
5. 稳定时 VDD 和 GND 之间没有通路，因此静态功耗为 0.

但实际的反相器并非如此。其电压传输特性（VTC）可以从 PMOS、NMOS 的转移特性曲线中推导出来，只需要令：

$$
I_{DSp} = -I_{DSn}
$$

## 静态特性

### Switching Threshold

Switching Threshold $V_M$ 定义为 $V_{in}=V_{out}$ 的点，此时 NMOS、PMOS 都在饱和区，因此：

$$
K_n (V_{M}-V_{thn})^2 = K_p (V_{M}-V_{DD}-V_{thp})^2
$$

整理后得到：

$$
\begin{aligned}
V_{M} =& \frac{\sqrt{K_p}(V_{DD}+V_{thp})+\sqrt{K_n}V_{thn}}{\sqrt{K_p}+\sqrt{K_n}}\\
=& \frac{r(V_{DD}+V_{thp})+V_{thn}}{1+r}\\
\approx & \frac{ r V_{DD}}{1+r}
\end{aligned}
$$

其中，$r=\sqrt{\frac{K_p}{K_n}}$。当 $r\rightarrow \infty$ 时，$V_M = V_{DD}$

以上是长沟道的情况，对于短沟道器件，由于存在速度饱和效应，$V_M$ 的表达式应该如下（推导过程类似）：

$$
V_M=\frac{(V_{thn}+\frac{V_{Dsatn}}{2})+r(V_{DD}+V_{thp}+\frac{V_{Dsatp}}{2})}{1+r}\\
r = \frac{K_p V_{Dsatp}}{K_n V_{Dsatn}}=\frac{v_{satp}W_p}{v_{satn}W_n}
$$

该式说明，增大 $W_p$ 或 $W_n$ 会使得 $V_M$ 向 $V_{DD}$ 或 ${\rm GND}$ 移动。

除此之外，器件的好坏也会影响 $V_M$ 的位置（见下图），好的器件等效于更大的 $K$（或更大的 $W$）

### 噪声容限

为了方便计算，我们用下图来近似反相器的 VTC.

图中，

$$
V_{IH}=V_M - \frac{V_M}{g}
$$

$$
V_{IL} = V_M + \frac{V_{DD}-V_M}{g}
$$

$g$ 是曲线在 $V_M$ 处的斜率，其计算过程比较繁琐，这里直接给出：

$$
\begin{aligned}
g &= \frac{1}{I_D(V_M)} \frac{k_n V_{Dsatn}+k_p V_{Dsatp}}{\lambda_n-\lambda_p}\\
&\approx \frac{1+r}{(V_M-V_{thn}-V_{Dsatn/2})(\lambda_n-\lambda_p)}
\end{aligned}
$$

最终可以得到噪声容限为：

$$
NM_H=V_{DD}-V_{IH}\\
NM_L=V_{IL}
$$

### 降低电压的影响

- 提高增益（斜率），但过小也会使得增益下降
- 减小功耗，但降低性能
- 直流特性更容易受器件参数影响
- 减小摆幅，故减小内部噪声；但更容易受外部噪声影响


## 动态性能

### 电容

考虑两个反相器级联，在第一个反相器的输出/第二个反相器的输入节点处，存在着很多电容，包括：

- 第一个反相器的电容
  - $C_{gd,p}$ 和 $C_{gd,n}$：由于Miller效应，等效为一个接地的2倍容值的电容
  - $C_{db,p}$ 和 $C_{db,n}$
- 导线电容
  - $C_w$
- 第二个反相器的电容
  - $C_{g,p}$ 和 $C_{g,n}$

这一堆电容看得我头都大了，而且它们在晶体管不同工作区的容值也不同。所幸我们一般会用一些近似处理，包括：

1. 将所有的电容都接地（或VDD），并且忽略 Miller 效应
2. 假设电容在反相器工作过程中恒定不变

### 传播延时（Propagation Delay）

电容充放电的时间可以表示为：

$$
t_p = \int_{v_1}^{v_2} \frac{C_L(v)}{i(v)} {\rm d}v
$$

反相器的延时可以用 RC 网络来近似，其从低到高、从高到低的延时可以表示为：

$$
t_{pHL} = \ln(2) R_{eqn} C_L\\
t_{pLH} = \ln(2) R_{eqp} C_L
$$

总的延时可以认为是两者均值：

$$
t_p = \frac{t_{pHL}+t_{pLH}}{2} = 0.69 C_L (\frac{R_{eqn}+R_{eqp}}{2})
$$

其中，$R_{eq}\approx \frac{3}{4} \frac{V_{DD}}{I_{Dsat}}(1-\frac{7}{9}\lambda V_{DD}) \approx \frac{3}{4}\frac{V_{DD}}{I_{Dsat}}$

从以上简化的分析中可以得出一些结论，要减小传播延时，有三种方法：

1. 减小 $C_L$
2. 增大 $W/L$，但增大到一定程度的话，会增大 $C_L$
3. 增大 $V_{DD}$

下面我们将详细分析这些方法。

#### 优化NMOS/PMOS比例

我们将 $C_L$ 写成：

$$
C_L = (C_{dp1}+C_{dn1})+(C_{gp2}+C_{gn2})+C_w
$$

如果 $\frac{(W/L)_p}{(W/L)_n}=\beta$，那么 $C_p=\beta C_n$，上式可以改写成：

$$
C_L = (1+\beta)(C_{dn1}+C_{gn2})+C_w
$$

另外对于电阻，我们有：

$$
R_{eqp}=R_{eqn}\cdot \frac{r}{\beta}
$$

$r$ 是指当PMOS、NMOS的尺寸一致时的电阻比（$R_{eqp}/R_{eqn}$）

从而传播延时为：

$$
t_p = \frac{0.69}{2} [(1+\beta)(C_{dn1}+C_{gn2})+C_w]\cdot R_{eqn}\cdot \frac{r}{\beta}
$$

要使得该延时最小，则 $\beta=\sqrt{r(1+\dfrac{C_w}{C_{dn1}+C_{gn2}})}$，因此如果我们对 $V_M$ 或噪声容限无要求，那么我们可以该值来优化NMOS/PMOS的比例。

#### 优化尺寸

上面只是优化了比例，但我们还是不知道最优的尺寸是什么。我们将延时改写为：

$$
\begin{aligned}
t_p &= 0.69 R_{eq}(C_{\rm int}+C_{\rm ext})\\
&=0.69 R_{eq}C_{\rm int}(1+\frac{C_{\rm ext}}{C_{\rm int}})\\
&=t_{p0}(1+\frac{C_{\rm ext}}{C_{\rm int}})
\end{aligned}
$$

$C_{\rm int}$ 是反相器自身的电容，$C_{\rm ext}$ 是外部的电容。$t_{p0}$ 是本征延时，即无任何外加电容时的延时。假设 $R_{\rm eq},C_{\rm int}$ 与尺寸的关系为：

$$
C_{\rm int}=SC_{\rm iref}\\
R_{\rm eq}=R_{\rm ref}/S
$$

$C_{\rm iref},R_{\rm ref}$ 为最小尺寸时的电容、电阻。则传播延时与尺寸的关系：

$$
t_p = t_{p0}(1+\frac{C_{ext}}{SC_{iref}})\\
t_{p0} = 0.69 (R_{\rm ref}/S)(SC_{\rm iref})=0.69 R_{\rm ref} C_{\rm iref}
$$

可见，增大尺寸 $S$，可以将延时减小为 $t_{p0}$；另外改变尺寸不会影响本征延时。

#### 优化反相器链

如果一个反相器链包含 $N$ 个反相器，我们该如何优化尺寸使得其延时最小呢？我们不能盲目增加尺寸，因为增加尺寸虽然可以减小本级延时，但却会增大上一级的延时。我们假设某一级的漏电容、栅电容之间满足：$C_{int}=\gamma C_g$，$\gamma$ 是一个与尺寸无关的固定值；并且下一级的栅电容是该级栅电容的 $f$ 倍，$C_{ext}=f C_g$，即下一级的尺寸增大 f 倍. 则单级延时可以表示为：

$$
t_p = t_{p0} (1+f/\gamma)
$$

多级延时可以表示为：

$$
t_p = t_{p0} \sum_{j=1}^N (1+\frac{f_j}{\gamma}) = t_{p0} \sum_{j=1}^N (1+\frac{C_{g,j+1}}{\gamma C_{g}})
$$

这是一个多元函数，其最小值处满足 $\partial t_p/\partial C_{g,j} = 0$（$j=1,2,\cdots,N$），即：

$$
\partial t_p/\partial C_{g,j} = t_{p0}  (\frac{1}{\gamma C_{g,j-1}}-\frac{C_{g,j+1}}{\gamma C_{g,j}^2})=0\\
\Rightarrow \frac{C_{g,j}}{C_{g,j-1}} = \frac{C_{g,j+1}}{C_{g,j}}
$$

从而 $C_{g,j}=\sqrt{C_{g,j-1}C_{g,j+1}}$，也就是本级电容是上一级和下一级的几何平均。如果第一级和最后一级的电容都已知，那么有：

$$
\prod_{j=1}^N \frac{C_{g,j+1}}{C_{g,j}} = \frac{C_L}{C_{g,1}} = F
$$

$F$ 为整个电路的总扇出，从而单级的扇出应该为 $f = \sqrt[N]{F}$，最小延时为：

$$
t_{p0} = N t_{p0} (1+\sqrt[N]{F}/\gamma)
$$

上式说明，如果给定 $F$，则 $t_{p0}$ 与 $N$，有关，这就引出下一个问题：多少级反相器的延时最小。对上式求导，可得：

$$
\gamma + \sqrt[N]{F}-\frac{\sqrt[N]{F} \ln F}{N} = 0\\
\text{等价于} f=e^{1+\gamma/f}
$$

当 $\gamma=0$，也就是反相器自身的电容可以忽略时，$N=\ln F$，且每级扇出应该为 $f=e$；当 $\gamma\neq 0$ 时，无数值解。

## 功耗


