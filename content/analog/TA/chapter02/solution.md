---
title: Chapter 2 solution
date: 2022-09-01 22:56:12 +0800
math: true
---

> **请不要抄答案！被助教发现的当次作业记为0分！**
>
> **以下为简略过程，只列出公式和结果。考试要写详细一点。**
>
> **有问题请向助教反馈。**

| 章节 | 必做 | 选做 |
|-----|-----|-----|
| 2.1~2.3 |2.2, 2.8, 2.16, 2.26, 2.32, 2.36|2.1,2.6, 2.9, 2.19,2.30|
| 2.4~2.6 |2.44, 2.47, 2.50, 2.64, 2.69, 2.72|2.61, 2.66|

## 2.1~2.3

### 2.2

Tranform the given equation, we have:

$$
\frac{v_O}{R} = I_S \exp ( \frac{v_I - v_O}{V_T})
$$

i.e. $I_R = I_D$. It's corret according to KCL.

## 2.8

- (a) $v_{S,{\rm peak}}=V_M+2*v_\gamma=13.4{\rm V}$

  $v_{S,{\rm rms}}=v_{S,{\rm peak}}/\sqrt{2}=9.48{\rm V}$

- (b) $V_r =  \dfrac{V_M}{2fRC}$, so $C=2.22 {\rm mF}$
- (c) $i_{D, {\rm peak}} = \dfrac{V_M}{R} \l( 1+\pi  \sqrt{\dfrac{2V_M}{V_r}} \r) = 2.328{\rm A}$

## 2.16

- (a) $v_{I,{\rm peak}}/v_{S,{\rm peak}}=\dfrac{v_I \cdot \sqrt{2}}{v_O+2\cdot v_\gamma}=16$
- (b) "Nominal" 理解为标定，此处当作最大允许的电流。
  
  $R=V_M/I_M=90{\rm \Omega}$

  $V_r=\dfrac{V_M}{2f R C}$

  $C=4.167{\rm mF}$

- (c) $i_{D, {\rm peak}} = \dfrac{V_M}{R} \l( 1+\pi  \sqrt{\dfrac{2V_M}{V_r}} \r) = 3.080{\rm A}$
- (d) $i_D({\rm avg})=\dfrac{1}{\pi} \sqrt{\dfrac{2V_r}{V_M}} \dfrac{V_M}{R} \l( 1+\dfrac{\pi}{2} \sqrt{\dfrac{2V_M}{V_r}} \r)=0.1067{\rm A}$
- (e) ${\rm PIV} = v_S(\max)-V_r=9.8{\rm V}$

## 2.26

$$
I_Z=\frac{V_{PS}-V_Z}{R_i}-I_L
$$

$$
I_Z+\frac{V_{ZO}}{R_i}+\frac{I_Zr_Z}{R_i}=\frac{V_{PS}}{R_i}-I_L
$$

$$
I_Z=\l[ \frac{V_{PS}-V_{ZO}}{R_i}-I_L \r] \big/ \l( 1+\frac{r_Z}{R_i} \r)
$$

Because $r_Z/R_i<3/500=0.06\ll 1$, $I_Z\approx \l[ \dfrac{V_{PS}-V_{ZO}}{R_i}-I_L \r]$

----

The "percent regulation" is the same as load regulation.

$$
\begin{aligned}
\text{\% Regulation}&=\frac{v_{L,\text{no load}}-v_{L,\text{full load}}}{v_{L, \text{full load}}}\\
&=\frac{v_L(\max)-v_L(\min)}{v_L(\min)}\\
&=\frac{[V_{ZO}+I_Z(\max)r_Z]-[V_{ZO}+I_Z(\min)r_Z]}{[V_{ZO}+I_Z(\min)r_Z]}\\
&=\frac{[I_Z(\max)-I_Z(\min)]r_Z}{V_{ZO}+I_Z(\min)r_Z}\\
&\approx \frac{[I_Z(\max)-I_Z(\min)]r_Z}{V_{ZO}}\\
&=5\%
\end{aligned}
$$

so $I_Z(\max)-I_Z(\min)=0.1{\rm A}$

----

$I_L(\max)\approx \dfrac{v_{ZO}}{R_L(\min)}=\dfrac{6}{500}=0.012{\rm A}$

$I_L(\min)=\dfrac{v_{ZO}}{R_L(\max)}=\dfrac{6}{1000}=0.006{\rm A}$

----

From $R_i=\dfrac{V_{PS}(\min)-V_{ZO}}{I_Z(\min)+I_L(\max)}$, we have

$$
280 = \frac{15-6}{I_Z(\min)+0.012}
$$

So $I_Z(\min)=20{\rm mA}$, $I_Z(\max)=0.12{\rm A}$

From $R_i=\dfrac{V_{PS}(\max)-V_{ZO}}{I_Z(\max)+I_L(\min)}$

$$
280=\frac{V_{PS}(\max)-6}{I_Z(\max)+0.006}
$$

So $V_{PS}(\max)=41.3{\rm V}$

### 2.32

if the diode is turned off, $v_O=v_I$ and the voltage between of 1k and 2k resistances is $5{\rm V}$, so if the $v_I>5.7{\rm V}$, the diode is turn on.

We can treat diode as a voltage source, so by using the superposition theorem (叠加定理), we get

$v_O=\dfrac{2}{5}v_I+\dfrac{1}{5}\cdot 15+\dfrac{3}{5}\cdot 0.7 = \dfrac{2}{5}v_I+3.42 {\rm (V)}$


$i_D=\dfrac{v_I-v_O}{1}=\dfrac{0.6v_I-3.42}{1} {\rm (mA)}$

### 2.36

- (a) $V_\gamma=0$
  - shift up 2V, and keep the negative part
  - when the $v_I<5$, $v_O=5{\rm V}$; when the $v_I>5{\rm V}$, $v_O=v_I$
- (b) $V_\gamma=0.6$
  - shift up 2.6V, and keep the negative part
  - when the $v_I<5.6$, $v_O=5{\rm V}$; when the $v_I>5.6{\rm V}$, $v_O=v_I-0.6$

## 2.4~2.6

### 2.44

- (a) D1 is on, D2 is off. $I_{D1}=\frac{10-0.6}{0.5+9.5}=0.94{\rm mA}$, $I_{D2}=0$. $V_O=8.93{\rm V}$
- (b) D1 is on, D2 is off. $I_{D1}=0.44{\rm mA}$, $V_O=4.18{\rm V}$
- (c) Assume both diode is on, using the superposition theorem (叠加定理), $V_1$ and D1 will generate 4.5795V, which greater then $5-0.6=4.4{\rm V}$ means D2 is off. So (c) is same as (a)
- (d) From (c), $I_{D1}=\frac{4.5795}{9.5}=0.48205{\rm A}$, $V_O=4.579\times 2 = 9.159{\rm V}$

### 2.47

Just assume the diode is on and calculate the voltage.

- (a) $V_1=4.4{\rm V}$, $V_2=-0.6{\rm V}$
  - $R_1=\frac{10-0.6-4.4}{0.2}=25{\rm k\Omega}$
  - $R_2=\frac{4.4-(-0.6)}{0.5}=10{\rm k\Omega}$
  - $R_3=\frac{-0.6-(-0.5)}{1}=4.4{\rm k\Omega}$
- (b) 
  - $V_1=4.4{\rm V}$
  - $V_2=-0.6{\rm V}$
  - $I_{D1}=0.5{\rm mA}$
  - $I_{D2}=0.75{\rm mA}$
  - $I_{D3}=0.75{\rm mA}$
- (c)
  - $V_1=6.07{\rm V}$
  - $V_2=-0.6{\rm V}$
  - $I_{D1}=1.11{\rm mA}$
  - $I_{D2}=0{\rm mA}$
  - $I_{D3}=0.65{\rm mA}$
- (d)
  - $V_1=4.4{\rm V}$
  - $V_2=1.26{\rm V}$
  - $I_{D1}=0.833{\rm mA}$
  - $I_{D2}=0.211{\rm mA}$
  - $I_{D3}=0{\rm mA}$

### 2.50

- (a) When D1 and D2 is off, $v_O=v_{D2}=\frac{500}{5k+500}v_I=0.09091v_I$, $v_{D1}=\frac{5k}{5k+500}v_I=0.9091v_I$
  
  If $v_{D1}>0.6{\rm V}$, i.e. $v_I>0.66{\rm V}$, D1 is on. $v_O=v_{D2}=\frac{500}{5k\|5k+500}v_I-0.6\frac{5k\|500}{5k\|500+5k}=0.167v_I-0.05$

  If $v_{D2}>0.6{\rm V}$, i.e. $v_I>3.892{\rm V}$, D2 is on. $v_O=\frac{500\|500}{5k\|5k+500\|500}v_I-0.6\frac{5k\|500\|500}{5k\|500\|500+5k}+0.6\frac{5k\|5k\|500}{5k\|5k\|500+500}=0.09091v_I-0.02727+0.2727=0.09091v_I+0.2454$

  So $v_O(-5)=-0.455{\rm V}$, $v_O(5)=0.7{\rm V}$

- (b) If both D1,D2 is off, $v_O=0.5v_I$, $v_{D1}=0.5v_I$, $v_{D2}=-0.5v_I$

  If D1 is on, $v_{D1}>0.6$, $v_I>1.2$, $v_O=v_I-0.6$

  If D2 is on, $v_{D2}>0.6$, $v_I<-1.2$, $v_O=-0.6$

  So $v_O(-5)=-0.6{\rm V}$, $v_O(5)=4.4{\rm V}$

### 2.64

$V_{CC}-V_I=IR+V_\gamma+Ir_f$

$10-0.2=0.012R+1.5+0.012\times 10$

$R=681.67{\rm \Omega}$

### 2.69

$V_{\rm out} \approx 15.5$

### 2.72

(a)

Diode 1: 1.43mA 0.66v

Diode 2: -1.53pA -1.516V

Diode 3: 0.870mA 651.5mV

Va: -2.17V

Vb： -0.651V

(b)

Diode 1: 1.20mA 0.656V

Diode 2: -3.9pA -3.885V

Diode 3: 2.16mA 0.675V

Va: -4.56V

Vb： -0.675V