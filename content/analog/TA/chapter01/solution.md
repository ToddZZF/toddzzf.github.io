---
title: chapter 1 solution
date: 2022-08-19 21:20:30 +0800
math: true
---

> **请不要抄答案！被助教发现的当次作业记为0分！**
>
> **以下为简略过程，只列出公式和结果。考试要写详细一点。**
>
> **有问题请向助教反馈。**

| 章节 | 必做 | 选做 |
|-----|-----|-----|
| 1.1~1.3 |1.1, 1.4, 1.11, 1.17, 1.23, 1.37|1.10, 1.15, 1.19, 1.26|
| 1.4~1.6|1.40, 1.43, 1.51, 1.55, 1.57, 1.60|1.44, 1.53, 1.56|

**注意：若无指明，则默认室温。**

## 解题工具

部分题目的方程很难直接解。这里给出牛顿迭代法求根的 Python 代码。把代码中 `f = lambda x: ` 后面改成待求解的函数即可。

```python
from math import exp, pi

# Newton-Raphson method
#
# f: 待解方程
# x0: 起始估值
# max_iteration: 最大迭代次数
# min_error: 最小误差
# step: 步长（决定收敛速度）
def NRmethod(f, x0, max_iteration=1e3, min_error=1e-10, step=1):
    f_x = f(x0)
    iteration = 0
    error = abs(f_x)
    while iteration<max_iteration and error>min_error:
        
        x = x0 - step * f(x0)/(df(f,x0)+1e-10)
        if x<0: # 求解量一般不会小于 0
            step *= 0.1
        else:
            x0 = x
        iteration += 1
        error = abs(f(x0))
        # print(iteration, x0, error)
        
    return x0


def df(f, x, delta=1e-5):
    return (f(x+delta)-f(x))/(delta)

if __name__ == "__main__":
    f = lambda x: x**2-2 #此处为要解的方程
    
    root = NRmethod(f, 1)
    print("The root is:", root)
    print("The error is:", f(root))
```

可以通过 <https://www.online-python.com/> 或 <https://lwebapp.com/zh/python-playground> 在线执行这段程序。

## 1.1~1.3

### 1.1

$n_i = BT^{3/2}\exp\l(-\frac{E_g}{2kT}\r)$

- (a) For Si, $E_g=1.1{\rm eV}$, $B=5.23\times 10^{15} {\rm cm^{-3}K^{-3/2}}$
  - ⅰ: $1.61\times 10^8 {\rm cm^{-3}}$
  - ⅱ: $3.97\times 10^{11} {\rm cm^{-3}}$
- (b) For GaAs, $E_g=1.4{\rm eV}$, $B=2.10\times 10^{14} {\rm cm^{-3}K^{-3/2}}$
  - ⅰ: $6.02\times 10^{3} {\rm cm^{-3}}$
  - ⅱ: $1.09\times 10^8 {\rm cm^{-3}}$

### 1.4

$n_i = BT^{3/2}\exp\l(-\frac{E_g}{2kT}\r)$

$n_o p_o = n_i^2$

- (a) n-type. $n_o=10^{15} {\rm cm^{-3}}$, $n_i=2.4\times 10^{13} {\rm cm^{-3}}$, $p_o=5.76\times 10^{11} {\rm cm^{-3}}$
- (b) n-type. $n_o=10^{15} {\rm cm^{-3}}$, $n_i = 1.5\times 10^{10} {\rm cm^{-3}}$, $p_o=2.25\times 10^5 {\rm cm^{-3}}$

### 1.10（选做）

- (a) $n_i = 1.5\times 10^{10} {\rm cm^{-3}} < n_o = 7\times 10^{15} {\rm cm^{-3}}$
  
  Add donors. $N_d = 7\times 10^{15} {\rm cm^{-3}}$

- (b) $n_i^2 = n_o p_o < 7\times 10^{21}$
  
  therefore, $ (5.23\times 10^{15})^2 T^{3} \exp\l( \frac{-1.1}{86\times 10^{-6} \cdot T} \r) < 7\times 10^{21}$

  > 这个方程解不了，只能估计一下。首先猜测 $T$ 应该在 $10^2$ 数量级，那么我们先使得左右的指数相同，即 $(1+15\times 2)+(2\times 3) + ? = 21$，算出 $\exp$ 项的数量级至多为 $10^{-16}$，最小不超过 $10^{-20}$。这么一来可以通过取对数算出 $T$ 大概为：280~350，从而 $T^3$ 项的指数应该是 $(1+2\times 3)$，$\exp$ 项的数量级应该为 $10^{-17}$. 因此最终估计 $T \approx 330$.
  >
  > 把 330 代入计算得 $1.4\times 10^{22}$，偏大。取 320 计算得 $3.9\times 10^{21}$，偏小。在 320~330 中用二分法尝试，可以计算出 $T\in(324,325)$。
  >
  > 直接用 python 程序算出是 324.37457395

```python
#为了避免数太大，对两边开方
f = lambda x: 2*log(5.23)+2*15*log(10.0)+3*log(x)-1.1/(86.0*x)*1e6-log(7)-21*log(10)
```

### 1.11

- (a) $I = A\sigma E$ 👉 $I=150{\rm \mu A}$
- (b) $I = A E / \rho$ 👉 $E = 2.4 {\rm V/cm}$

### 1.17

$$
\begin{aligned}
  J_p &= -e D_p \dfrac{\dif p(x)}{\dif x}\\
      &= -e D_p \l( \frac{-1}{L_p} \r) \exp \l( \frac{-x}{L_p} \r)
\end{aligned}
$$

- (a) $2.4{\rm A/cm^2}$
- (b) $0.883{\rm A/cm^2}$
- (c) $0.119{\rm A/cm^2}$

### 1.23

$V_{bi} = V_T \ln \l(\frac{N_a N_d}{n_i^2}\r)$

$C_j = C_{jo} \l( 1 + \frac{V_R}{V_{bi}} \r)^{-1/2}$

- $V_{bi} = 0.684 {\rm V}$
- (a) $0.255 {\rm pF}$
- (b) $0.172 {\rm pF}$
- (c) $0.139 {\rm pF}$

### 1.37

$I_S$ double for every 5 ${\rm {}^\circ C}$, so

$$
\frac{I_S(100)}{I_S(-55)}=2^{155/5}
$$

$V_{T,{\rm 100{}^\circ C}} = 86\times 10^{-6}\times (100+273.15)=0.03209$

$V_{T,{\rm -55{}^\circ C}} = 86\times 10^{-6}\times (-55+273.15)=0.01876$

$\dfrac{I_{D,{\rm 100{}^\circ C}}}{I_{D,{\rm -55{}^\circ C}}} = 2^{155/5} \times \dfrac{\exp(0.6/0.03209)}{\exp(0.6/0.01876)} = 3.65\times 10^3$

> 与pdf答案不同。pdf 计算的 $V_T$ 不对。为了避免我算错，我把代数字进去的完整式子列出来：

$$
2^{155/5}\times \frac{\exp(\frac{0.6}{86\times10^{-6}\times(100+273.15)})}{\exp(\frac{0.6}{86\times10^{-6}\times(-55+273.15)})}
$$

答案在如下地方进行了近似：1. 摄氏度转开尔文只加了 273（正确应该是+273.15） 2. $V_T$ 第三位有效数字及之后的数字都算错了（0.03208算成了0.03220、0.01858算成了0.01865）

## 1.4~1.6

### 1.40

With Thevenin's Theorem, $V_{PS},R_1,R_2$ can be converted into $V_{Th}, R_{Th}$

$V_{Th}=\dfrac{R_2}{R_1+R_2}\cdot V_{PS}=0.45{\rm} {\rm V}$

$R_{Th}=R_1 \| R_2 = 18.75{\rm K\Omega}$

With KVL, we have 

$$
\begin{aligned}
    V_{Th} &= I_D R_{Th} + V_D\\
    I_D &\approx I_S \exp \l( \dfrac{V_D}{V_T} \r)
\end{aligned}
$$

$$
0.45 = 18.75 \cdot 10^3 \cdot I_D + V_D\\
I_D = 5\times 10^{-13} \cdot \exp\l( \frac{V_D}{0.026} \r)
$$

By use the python code,

$I_D=2.572{\rm \mu A}$, $V_D=0.4018{\rm V}$

```python
f = lambda x: 18.75*1e-12*(exp(x/0.026)-1)+x-0.45
```

### 1.43

Based on the given condition ($V_{\gamma}$), piecewise linear model should be used.

$$
I_D = 
\begin{cases}
    - I_S & V_D \lt 0\\
    0 & 0 \leq V_D \lt  V_{\gamma} \\
    \dfrac{V_D-V_{\gamma}}{r_f} & V_D\geq V_{\gamma}
\end{cases}
$$

And the $r_f$ is assumed to be $0$ since it's not given.

- (a) if the diode is cutoff, $V_D=\dfrac{R_2}{R_1+R_2}V_{PS}=0.9{\rm V}>V_\gamma$, so the diode is conducting, $V_{D}=V_{\gamma}=0.7$
  
  $I_D = I_{R1} - I_{R2}=\dfrac{V_{PS}-V_{\gamma}}{R_1}-\dfrac{V_{\gamma}}{R_2}=26.7 {\rm \mu A}$

- (b) $V_D=\dfrac{R_2}{R_1+R_2}V_{PS}=0.45{\rm V}\lt V_\gamma$, so the diode is cutoff. $I_D=0$

### 1.51

$r_d = \dfrac{V_T}{I_{DQ}}$

$v_d = i_d \cdot r_d$

- (a) $v_{dpp}=1.3 {\rm mV}$
- (b) $v_{dpp}=1.3 {\rm mV}$

### 1.55

$I_D=I_S [\exp(V_D/nV_T)]$

$I_{S,{\rm schottky}} \exp(V_{D,{\rm schottky}}/nV_T) = I_{S,{\rm pn}} \exp(V_{D,{\rm pn}}/nV_T)$

$I_{S,{\rm pn}} = I_{S,{\rm schottky}} \exp (V_{D,{\rm schottky}}/nV_T - V_{D,{\rm pn}}/nV_T)$

$I_S = 4.87\times 10^{-12} {\rm A}$

### 1.57

$I_Z = \frac{V_Z-V_{Z0}}{r_Z}$

$I_Z = 0.1{\rm mA}$ when $V_Z=5.6{\rm V}$, therefore $V_{Z0}=5.599{\rm V}$

- (a) The diode is in breakdown region, $V_Z = V_{PS} - I_Z R = V_{PS} - \frac{V_Z-V_{Z0}}{r_Z}R = 5.6853{\rm V}$

- (b) if $V_{PS}=10+1 = 11 {\rm V}$, $V_O = 5.7049{\rm V}$
  
  if $V_{PS}=10-1 = 9 {\rm V}$, $V_O = 5.6657{\rm V}$

  So the change in output is 0.0392{\rm V}

- (c) if the diode is not in breakdown region, $V_O = \frac{R_L}{R+R_L}=8{\rm V}>V_{Z0}$, so the diode is in breakdown region. Using  Thevenin’s Theorem, $V_{PS}'=8{\rm V}$, $R'=R\|R_L=0.4{\rm k\Omega}$. The following procedure is same as (a), and the final result is $V_O = 5.6576{\rm V}$

### 1.60

$I_{SC} = 0.2{\rm A}$

> 和pdf答案出入较大，pdf答案是 0.1A

$V_{DC} = V_T \ln \l( \dfrac{0.2}{5\times 10^{-14}}+1 \r) = 0.75445$
