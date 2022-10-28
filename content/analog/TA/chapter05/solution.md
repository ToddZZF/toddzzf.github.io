---
title: Chapter 5 solution
date: 2022-09-13 16:23:07 +0800
math: true
---

| 章节 | 必做 | 选做 |
|-----|-----|-----|
| 5.1~5.2 |5.2, 5.8, 5.13, 5.18, 5.26，5.39|
| 5.3~5.4 |5.47, D5.49, 5.52, 5.56, D5.72|
| 5.5~5.6 |5.79, 5.80,  5.82, 5.83, D5.89 (5.83's answer needs to be verified by computer simulation)|

Note $V_{BE, npn}({\rm on}) = V_{EB, pnp}({\rm on}) = 0.7{\rm V}$, $V_{CE, npn}({\rm sat}) = V_{EV, pnp}({\rm sat}) = 0.2{\rm V}$

## 5.1~5.2

### 5.2

$i_E=i_C+i_B$

$i_C=\alpha i_E$

$i_C=\beta i_B$

- (a) $i_B=6{\rm \mu A}$, $\beta=121$, $\alpha=0.9918$
- (b) $i_B=59{\rm \mu A}$, $\beta=49.19$, $\alpha=0.9801$

### 5.8

$\alpha=0.9836$

- (a) if transistor is in forward-active mode, $I_C=\alpha I_E=0.7377{\rm mA}$, $v_{CB}=-10+0.7377\times 5=-6.3115{\rm V}<0$, so the assumption is true. $I_B=I_C/\beta = 12.3{\rm \mu A}$
- (b) $I_C=1.475{\rm mA}$, $v_{CE}=-2.625{\rm V}$, $I_B=24.6{\rm \mu A}$
- (c) they are in the forward-active mode.

### 5.13

$i_C=I_{C0} (1+\frac{v_{CE}}{V_A})$

$r_O=\dfrac{\partial i_C}{\partial v_{CE}}$

- (a) $I_C' = \frac{0.6}{1+\frac{2}{80}}(1+\frac{5}{80}) = 0.62195{\rm mA}$
- (b) $r_o = \frac{5-2}{0.62195-0.6}=136.67{\rm k\Omega}$ or $r_o = \frac{V_A+V_{CE}}{I_C} = \frac{82}{0.6}=136.67{\rm k\Omega}$

### 5.18

($\beta = 75$ according 5.17)

- (a) $R_E=5\pm 0.25 {\rm k\Omega}$

  $I_E=\frac{(0-0.7)-(-10)}{R_E}\in [1.7714, 1.9579] {\rm mA}$

  $I_C=\frac{\beta}{1+\beta}I_E\in [1.7481, 1.9321] {\rm mA}$

  $V_{CC}=V_{CE}-V_{BE}=3.3{\rm V}$

  $R_C=\frac{10-V_{CC}}{I_C}\in [3.4677 ,3.8327] {\rm k\Omega}$

- (c) $R_E=4\pm 0.2{\rm k\Omega}$

  $I_B = \frac{0-0.7-(-10)}{R_B+(1+\beta)R_E} \in [0.02218, 0.02443]{\rm mA}$

  $I_C = \beta I_B \in [1.6631,1.8323]{\rm mA}$

  $I_E = (1+\beta)I_B \in [1.6853, 1.8568]{\rm mA}$

  $V_{CE} = 8 - I_C R_C -I_E R_E -(-8) = [1.6150, 2.2693]$

### 5.26

$I_B = \frac{5-0.7}{250} = 17.2{\rm \mu A}$

$I_C = \beta I_B = 2.064{\rm mA}$

$V_{EC}=10-1.5\times 2.064 = 6.904{\rm V}$

$I_C = \frac{10-V_{EC}}{1.5}$, intercept with $I_C$ axis is $6.667{\rm mA}$ and with $V_{CC}$ axis is $10{\rm V}$

### 5.39

if $V_{CE}\in [1.0,4.5]$, then $I_C = \frac{V_{CC}-V_{CE}}{R_C}\in [0.5, 4]{\rm mA}$

$I_B=I_C/\beta=[0.02, 0.16]{\rm mA}$

$\dfrac{V_1-0.7}{R_1}+\dfrac{-5-0.7}{R_2} = I_B$, so $V_1\in [1.855,3.955]{\rm V}$

画图时注意 load line 与 $i_C$ 轴相交于 $5{\rm mA}$，与 $v_{CE}$ 轴相交于 $5{\rm V}$. Q-print 的范围为 $(1,4)$ 和 $(4.5, 0.5)$ 两点之间。

## 5.3-5.4

### 5.47

$$
I_C = \frac{V_O}{R_C} = \frac{8.8}{500} = 17.6 {\rm mA}
$$

$$
I_B = \frac{I_C}{25} = \frac{17.6}{25} = 0.704 {\rm mA}
$$

$$
R_B = \frac{(V^+ - V_{EB}) - V_I}{I_B} = \frac{(9-0.7) - 5}{0.704} = 4.6875 {\rm V}
$$

### D5.49

$I_{BQ}=\dfrac{I_{CQ}}{\beta} = \dfrac{0.15}{120} = 1.25 {\rm \mu A}$

$I_{EQ} = I_{BQ} (1+\beta) = 151.25 {\rm mA}$

$V_{\rm TH} = I_{BQ}R_{\rm TH} + V_{BE}({\rm on}) + I_{EQ}R_E = 1.2525{\rm V}$

$$
\begin{cases}
  V_{\rm TH} = \dfrac{R_2}{R_1+R_2}V_{CC} = 1.2525\\
  R_{\rm TH} = \dfrac{R_1 R_2}{R_1+R_2} = 200k
\end{cases}
$$

Solve these two equation, we have $R_1 = 399.20{\rm \Omega}$ and $R_2 = 400.80{\rm \Omega}$

$V_{CEQ} = V_{CC} - I_{CQ}R_C - I_{EQ} R_E = 1.2975{\rm V}$

### 5.52

(a)

$R_{\rm TH} = R_1 \| R_2 = 24.36{\rm k\Omega}$

$V_{\rm TH} = \frac{R_2}{R_1+R_2}V_{CC} = 10.08{\rm V}$

$I_{BQ} = \frac{V_{\rm TH} - V_{BEQ}}{R_{\rm TH} + (1+\beta)R_E} = 7.30{\rm \mu A}$

$I_{CQ} = \beta I_{BQ} = 0.9129{\rm mA}$

$I_{EQ} = (1+\beta) I_{BQ} = 0.9202{\rm mA}$

$V_{CEQ} = V_{CC} - I_{EQ} R_E = 14.798{\rm V}$

(b) 详细计算过程见 PDF

||$R_1$-5%|$R_1$+5%|
|---|----|---|
|$R_2$-5%|$I_{CQ}=0.914{\rm mA}, V_{CEQ}=14.79{\rm V}$|$I_{CQ}=0.857{\rm mA}, V_{CEQ}=15.37{\rm V}$|
|$R_2$+5%|$I_{CQ}=0.970{\rm mA}, V_{CEQ}=14.22{\rm V}$|$I_{CQ}=0.912{\rm mA}, V_{CEQ}=14.81{\rm V}$|

### 5.56

$R_{\rm TH} = R_1 \| R_2 = 20{\rm k\Omega}$

$V_{\rm TH} = \dfrac{R_2}{R_1+R_2} V^+ = 1.25{\rm V}$

$V^+ - V_{\rm TH} = I_{BQ}R_{\rm TH} + V_{BE}({\rm on}) + I_{EQ}R_E$

$I_{BQ} = \dfrac{V^+ - V_{\rm TH} - V_{EB}({\rm on})}{R_{\rm TH}+(1+\beta)R_E}$

(a) $I_{BQ} = 6.57{\rm \mu A}$, $I_{CQ}=0.5914{\rm mA}$, $I_{EQ}=0.5980{\rm mA}$, $V_{ECQ}=1.135{\rm V}$

(b) $I_{BQ}=4.375{\rm \mu A}$, $I_{CQ}=0.6607{\rm mA}$, $V_{ECQ} = 0.9874{\rm V}$

$I_{CQ} \% = 10.97\%$, $V_{ECQ} \% = -13\%$

### D5.72

(a) $I_{EQ}=I_{CQ}\frac{1+\beta}{\beta} = 0.151875{\rm mA}$, $I_{BQ}=\frac{I_{CQ}}{\beta} = 1.875{\rm \mu A}$

$V_{CEQ} = (V^+ - V^-) - I_{CQ}R_C - I_{EQ} R_E$, so $R_C = 13.3{\rm k\Omega}$

[Rth=0.1(1+β)Re](https://forum.allaboutcircuits.com/threads/find-the-voltage-gain.121592/), $R_{\rm TH}=16.2{\rm k\Omega}$

$V^+ = I_{EQ} R_E + V_{EB}({\rm on})+I_{BQ}R_{\rm TH}+V_{\rm TH}$, so $V_{\rm TH} = 1.466{\rm V}$

$V_{\rm TH} = \frac{R_1}{R_1+R_2} \times 5 - 2.5$, so $R_1=20.4{\rm k\Omega}$, $R_2= 78.7{\rm k\Omega}$

(b) $I_{CQ} \% = 5.4\%$, $V_{ECQ} \% = -4.52\%$

## 5.5~5.6

### 5.79

### 5.80

### 5.82

### 5.83

### D5.89




```python
#电源
Vcc = 2.5 # 正电源，单位：V
Vee = -2.5 # 负电源，单位：V
# 静态工作点
Vceq = 2.5 # CE压降，单位：V
Vbeq = 0.7 # 发射结压降，单位：V
Icq = 5 # 集电极电流，单位：mA
Vcq = 2.5 # 集电极电压，单位：V
beta = 130 # 电流放大倍数

# 计算 Rc
Rc = (Vcc-Vcq)/Icq
# 计算 Re
Ieq = Icq/beta*(1+beta)
Re = (Vcq-Vceq-Vee)/Ieq
# 计算 Rth
Rth = 0.1*(1+beta)*Re
# 计算 Vth
Ibq = Icq/beta
Vth = Vee+Ieq*Re+Vbeq+Ibq*Rth
# 计算 R1
R1 = Rth*(Vcc-Vee)/(Vth-Vee)
# 计算 R2
R2 = 1/(1/Rth - 1/R1)

# 打印结果
print("Rc=%.3f, Re=%.3f, R1=%.3f, R2=%.3f"%(Rc, Re, R1, R2))
```

```python
#电源
Vcc = 2.5 # 正电源，单位：V
Vee = -2.5 # 负电源，单位：V

#电阻值
Re = 510 # 单位：kΩ，下同
Rc = 0
R1 = 9.1
R2 = 20

# 晶体管参数
Vbeq = 0.7 # 单位：V
beta = 100

# 计算 Rth
Rth = R1*R2/(R1+R2)
# 计算 Vth
Vth = R2/(R1+R2)*(Vcc-Vee)
# 计算 Ibq
Ibq = (Vth-Vbeq-Vee)/(Rth+(1+beta)*Re)
Icq = beta*Ibq
Ieq = (1+beta)*Ibq
# 计算 Vceq
Vceq = Vcc-Icq*Rc-Ieq*Re-Vee

# 打印结果
print("Icq=%.3f, Vceq=%.3f"%(Icq, Vceq))
```