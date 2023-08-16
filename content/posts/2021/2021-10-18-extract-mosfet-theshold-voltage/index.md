---
layout: post
title: MOSFET阈值电压的提取
date: 2021-10-18 10:12:00 +0800
category: work
image: twilight_sparkle.png
icon: note
mathjax: true
---



一些提取阈值电压的实验方法。

<!--more-->

$$
\newcommand{\tx}{\text}
$$

MOSFET的阈值电压 $V_\tx{th}$ 是衡量 MOSFET 的一个重要参数，当 $V_g$ 达到阈值电压时，形成反型层，MOS开启。$V_\tx{th}$ 在器件设计、工艺监测、可靠性分析中均起到重要作用。

有多种方法提取阈值电压，但采用不同方法得到的 $V_\tx{th}$ 不同。这些方法主要依赖静态转移特性曲线 $I_d-V_{gs}$

在提取过程中会受到源漏寄生串联电阻和沟道载流子迁移率降低效应的影响，故如何消除这些影响是准确提取 $V_\tx{th}$ 关键。

下面简要列举几种方法。

## 常数电流法(CC)

这种方法定义当 $V_d<0.1\tx{V}$ 时，与规定的 $I_d$ 对应的 $V_g$ 即为 $V_\tx{th}$。即：

$$
I_d = I_\tx{th} \frac{W_m}{L_m}
$$

其中，$I_\tx{th}$ 为阈值电流，$W_m,L_m$ 为掩模版上的沟道宽度和长度。

该方法的优点是：仅需进行一次测量操作即可得到 $V_\tx{th}$，测量速度很快。

缺点是：$I_\tx{th}$ 的取值有一定任意性，其典型值在 $10^{-6}-10^{-9}\tx{A}$ 之间，当取不同值时，得到的 $V_\tx{th}$ 不同。

## 线性外推法/最大gm法

这种方法通过对 $I_d-V_{gs}$ 特性曲线的最大斜率点展开线性外推，并将外推曲线与 $I_d=0$ 时的 $V_g$ 作为 $V_\tx{th}$。最大斜率点对应跨导最大的点。

$$
g_m =\frac{\p I_d}{\p V_{gs}}
$$

该阈值电压为外推阈值电压，该方法是工业区确定阈值电压的常用标准。

为保证MOSFET保持在线性区，一般固定漏极电压 $V_{ds}\leq 0.1\tx{V}$，在低 $V_{ds}$ 时，漏电流 $I_d$ 由下面方程给出：

$$
I_d = \mu C_\tx{ox} \left(\frac{W}{L}\right)\left[V_{gs}-V_\tx{th}-\frac{1}{2}\alpha V_{ds}\right] V_{ds}
$$

该方程说明，$I_d$ 与 $V_{gs}$ 之间是线性相关，并且与 $V_{gs}$ 轴交于 $V_\tx{th}+\frac{1}{2}\alpha V_{ds}$. 参数 $\alpha$ 与背偏置电压有关，一般取 $1.1-1.5$，由于通常 $V_{ds}\leq 0.1\tx{V}$，一般情况下可以假设 $\alpha=1$，这一假设引起的误差小于 2%。这样一来，在计算 $V_\tx{th}$ 时，必须从外推得到的结果中再减去 $V_\tx{ds}$ 的一半。

从最大斜率点外推的理由是：载流子的迁移率 $\mu$ 随 $V_{gs}$ 增加而降低，漏电流 $I_d$ 并不能准确地随着 $V_{gs}$ 而线性变化，但是从另一方面考虑，从曲线最大斜率处外推不会将迁移率降低而引起的额外误差涵盖在 $V_\tx{th}$ 之内。

## 平方外推法

该方法通过利用饱和区 $\sqrt{I_d}$ 与 $V_{gs}$ 的关系曲线外推到 $I_{d}=0$ 得到阈值电压。

其中，确保MOSFET工作在饱和区的最简便的方法就是将器件的栅极和漏极连接在一起，此时饱和区的漏电流方程为：

$$
I_{d} = \frac{1}{2}\mu C_\tx{ox}\frac{W}{L_\alpha} (V_{gs}-V_\tx{th})^2
$$

由上式可知，$\sqrt{I_d}$ 与 $V_{gs}$ 呈直线关系。对该直线外推，得到的与 $V_{gs}$ 轴的交点即为 $V_\tx{th}$

但在短沟道器件中，由于漏致势垒降低效应使得 $V_\tx{th}$ 的取值随 $V_{ds}$ 的改变而改变，因此基于这种考虑，此方法通常不能应用于短沟道器件。

## 跨导线性外推法

该方法的本质思想是：在低漏压时，跨导的微分 $\dif g_m / \dif V_{gs}$ 取最大值时所对应的栅压即为阈值电压。此方法得到的阈值电压与下式定义的阈值电压非常接近：

$$
\phi_{st} = 2\phi_f+V_\tx{th}
$$

并且它不受迁移率下降因子 $\theta$ 和串联电阻 $R_t$ 的影响。这种方法要求器件工作在线性区，且基于以下几点结论：

1. 在弱反型区，跨导和栅压呈指数关系
2. 在强反型区，当串联电阻和迁移率退化可以忽略时，跨导为一个常量
3. 由于串联电阻和迁移率退化的影响，跨导随栅压缓慢增大
4. 在弱反型和强反型的过渡区，跨导和栅压呈线性关系。

由于在该方法中，需要考虑漏电流的二级效应，故其很容易受噪声影响。

## 参考文献

1. [薛峰. 65nm工艺下MOSFET阈值电压提取方法研究][http://dx.chinadoi.cn/10.3969/j.issn.1673-260X.2015.07.017](J). 赤峰学院学报（自然科学版）,2015(7):46-48. DOI:10.3969/j.issn.1673-260X.2015.07.017.
2. A. Bazigos, M. Bucher, J. Assenmacher, S. Decker, W. Grabinski and Y. Papananos, "[An Adjusted Constant-Current Method to Determine Saturated and Linear Mode Threshold Voltage of MOSFETs](https://ieeexplore.ieee.org/document/6003772)," in IEEE Transactions on Electron Devices, vol. 58, no. 11, pp. 3751-3758, Nov. 2011, doi: 10.1109/TED.2011.2164080.
3. O. F. Siebel, M. C. Schneider, and C. Galup-Montoro, “[MOSFET threshold voltage: Definition, extraction, and some applications](https://doi.org/10.1016/j.mejo.2012.01.004),” Microelectronics Journal, vol. 43, no. 5, pp. 329–336, May 2012, doi: 10.1016/j.mejo.2012.01.004.

## Matlab 处理脚本

由于实验获取的数据是离散的，所以我们需要使用内插函数 `interp1k` 获取特定 $I_d$ 对应的 $V_g$。另外由于实验数据可能会有缺陷，所以内插之前需要对数据进行预处理。我们将上述过程封装为如下函数：

```matlab
function C = interp1k(A,B,Id)
    %A：Id_test
    %B：Vg_test
    
    %获取非NAN元素
    indx = ~isnan(A) & ~isnan(B);
    A = A(indx);
    B = B(indx);

    %获取唯一元素
    [y,i] = unique(A); %返回列表y和下标i按元素大小升序排序
    A1 = A(sort(i)); %将下标恢复原来的顺序
    B1 = B(sort(i));
    
    C = interp1(A1,B1,Id); %线性内插，获取 Id 对应的值 Vg
    
end
```

对于常数电流法，我们只需要通过内插得到与规定的 $I_d$ 对应的 $V_g$，即：

```matlab
function Vth = Vth_Extraction_CC(Id_test, Vg_test, Id)
    Vth = interp1k(Id_test, Vg_test, Id);

    %画出转移特性曲线
    plot(Vg_test,Id_test,'color','b'); hold on;
    plot([min(Vg_test),max(Vg_test)],[Id,Id],'color','r','linestyle','--');
end
```

---

而对于线性外推法，我们需要先求 $I_d$ 对 $V_g$ 的导数，由于数据是离散的，所以我们用差分近似求导：

```matlab
function [Vgm, gm] = derivative_me_verilength(Vg_test, Id_test)
    gm = gradient(Id_test)./gradient(Vg_test);
    Vgm = Vg_test;
end
```

然后根据斜率，外推到 $I_d=0$ 对应的 $V_g$

```matlab
function Vth = Vth_Extraction_Max_gm(Id_test, Vg_test)
    [Vgm,gm] = derivative_me_verilength(Vg,Id); 
    max_gm = max(gm);
    indx = find(gm == max(gm)); indx =indx(1);
    Vth = Vg(indx) - Id(indx)/max(gm);

    %画出转移特性曲线
    plot(Vg_test,Id_test,Vg_test,gm); hold on;
    plot([Vth,Vg(indx)],[0,Id(indx)],':','linewidth',2,'color','red');
    plot([min(Vg),max(Vg)],[0,0],':','color','red'); 
    plot(Vth,0,'s','MarkerSize',8,'color','red');
end
```
