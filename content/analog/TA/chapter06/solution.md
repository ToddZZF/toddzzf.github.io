---
title: Chapter 6 solution
date: 2022-10-07 21:05:18 +0800
math: true
---

| 章节 | 必做 |
|-----|-----|-----|
| 6.1~6.4 |6.2, 6.10, D6.17,  6.24, D6.30|
| 6.5~6.8 | 6.33, 6.37, 6.44, D6.56, 6.66|
| 6.9~6.11 |6.73,   6.74,   6.77,  6.83, D6.89(This question's answer needs to be verified by computer simulation)|

## 6.1~6.4

### 6.2

- (a) $g_m = 2.47{\rm mA}$, $r_\pi=1.32{\rm k\Omega}$, $r_o=81{\rm k\Omega}$
- (b) $I_{CQ}=3.12{\rm mA}$, $\beta=144$

### 6.10

- (a) $R_C = 10{\rm k\Omega}$, $V_{BB}=0.95{\rm V}$
- (b) $r_\pi=5.2{\rm k\Omega}$, $A_v = -18.1$

### D6.17

- (a) 
  - i $R_B=20.25{\rm k\Omega}$, $R_C=2.53{\rm k\Omega}$
  - ii $g_m=30.38{\rm S}$, $r_o=127{\rm k\Omega}$, $G_f=-11.63{\rm mA/V}$
- (b)
  - i $R_B=30.3{\rm k\Omega}$, $R_C=2.52{\rm k\Omega}$
  - ii $g_m=30.52{\rm S}$, $r_o=101{\rm k\Omega}$, $G_f=-11.62{\rm mA/V}$

### 6.24

- (a) $32\leq | A_v | \leq 34.6$
- (b) $1.96\leq R_i \leq 2.45 {\rm k\Omega}$
- (c) $3.802\leq R_o \leq 3.804 {\rm k\Omega}$

### D6.30

$A_v = -\dfrac{R_C}{R_E}=-10$

$R_O = R_C=5{\rm k\Omega}$, so $R_E=0.5{\rm k\Omega}$

Set $I_{CQ}=0.5{\rm mA}$, $V_{ECQ}\approx 5-0.5*(5+0.5)=2.25{\rm V}$

$r_\pi = \dfrac{\beta V_T}{I_{CQ}}=4.68{\rm k\Omega}$, $R_{ib}=r_\pi + (1+\beta) R_E = 50.2{\rm k\Omega}$

Set $R_i=20{\rm k\Omega}=R_{TH}\|R_{ib}=R_{TH}\|50.2$, so $R_{TH}=33.3{\rm k\Omega}$

$I_{BQ}=0.00556{\rm mA}$, $I_{EQ}=0.506{\rm mA}$

$V_{CC}=I_{EQ}R_E+V_{EV}(on)+I_{BQ}R_{TH}+V_{TH}$

$5=0.506\cdot 0.5+0.7+0.00556 \cdot 33.3+V_{TH}$

$V_{TH}=3.862=\dfrac{1}{R_1}R_{TH}V_{CC}=\dfrac{1}{R_1}\cdot 33.3 \cdot 5$

$R_1=43{\rm k\Omega}$, $R_2=148{\rm k\Omega}$

($R_1,R_2$ 可选其他值，只要满足 $R_1>43{\rm k\Omega}$，$R_2>148{\rm k\Omega}$，$R_1:R_2\approx 0.3$)

## 6.5~6.8

### 6.33

$I_{BQ}=3.15{\rm \mu A}$, $I_{CQ}=0.315{\rm mA}$, $V_{CEQ}=3.96{\rm V}$

$i_c = -\frac{1}{6.1} v_{ec}$

because $i_c = 0.315 - 0.05 = 0.265$, so $v_{ec}=1.62$

$v_{ec}({\rm min})=3.96-1.62=2.34{\rm V}$

output swing: $3.24{\rm V}$ peak-to-peak

### 6.37

$R_1=34.9{\rm k\Omega}$, $R_2=18.6{\rm k\Omega}$

### 6.44

[![x8JFfJ.png](https://s1.ax1x.com/2022/10/07/x8JFfJ.png)](https://imgse.com/i/x8JFfJ)

### D6.56

[![x8JV61.png](https://s1.ax1x.com/2022/10/07/x8JV61.png)](https://imgse.com/i/x8JV61)

[![x8Jn0K.png](https://s1.ax1x.com/2022/10/07/x8Jn0K.png)](https://imgse.com/i/x8Jn0K)

### 6.66

[![x8JMkD.png](https://s1.ax1x.com/2022/10/07/x8JMkD.png)](https://imgse.com/i/x8JMkD)

## 6.9~6.11

### 6.73

(a)

$g_{m1}=g_{m2}=\frac{1}{0.026}=38.46{\rm mA/V}$

$r_{\pi 1}=3.12{\rm k\Omega}$

$r_{\pi 2} = 2.08{\rm k\Omega}$

$A_{v1}=0.4927$

(b)

$A_{v2}=g_{m2}R_C=153.8$

(c)

$A_v = A_{v1}A_{v2}=75.8$

### 6.74

(a)

$g_{m1}=19.23{\rm mA/V}$, $g_{m2}=76.92{\rm mA/V}$

$r_{\pi 1}=5.2{\rm k\Omega}$, $r_{\pi 2}=1.3{\rm k\Omega}$

$R_{ib2}=405.3{\rm k\Omega}$

$A_{v1}=-76.17$

(b)

$A_{v2} =0.9968$

(c)

$A_v=-75.93$

### 6.77

(a) $I_{E1}=2.27{\rm mA}$, $I_{C1}=2.253{\rm mA}$

$I_{E2}=70.6{\rm mA}$, $I_{C2}=69.73{\rm mA}$

(b) $A_v=0.99$

(c) $R_{ib}=467.6{\rm k\Omega}$, $R_o=0.512{\rm \Omega}$

### 6.83

(a) $\overline{P_{RL}}=0.286{\rm mW}$

(b) $\overline{P_{RL}}=0.499{\rm mW}$

### D6.89

要求：$|A_v|=50$, $R_L=10{\rm k\Omega}$, $V_{\rm bias}=\pm 3.3{\rm V}$

$$
\begin{aligned}
  |A_v| &= \frac{\beta (R_C\|R_L)}{r_\pi}\\
  &=\frac{\beta (R_C\|R_L)}{\beta V_{T}/I_{CQ}}\\
  &=\frac{I_{CQ}}{0.026}\cdot (R_C\| 10^4)
\end{aligned}
$$

选取 $I_{CQ}=0.5{\rm mA}$，则 $R_C=3.5{\rm k\Omega}$

选取 $V_{ECQ}=2{\rm V}$，则 $R_E=\dfrac{3.3-2-0.5*3.5-(-3.3)}{I_{CQ}}=5.7{\rm k\Omega}$

根据第5章的相关公式，可以求出 $R_1=123{\rm k\Omega}$, $R_2=170{\rm k\Omega}$
