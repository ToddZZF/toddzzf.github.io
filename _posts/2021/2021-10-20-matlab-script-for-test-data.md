---
layout: post
title: 实验用的matlab脚本
date: 2021-10-20 22:20:00 +0800
category: work
thumbnail: /assets/images/thumbnail/matlab.png
icon: note
---

* Content
{:toc}

处理数据中常用的函数和脚本

<!--more-->

## 清场

```matlab
close all; clear; clc;
```

## 读取数据

### xlsx

需要依赖 Microsoft Excel（无法用 WPS 替代）。可以默认读取整张表格，也可以读取特定数据。下面三个参数分别是：文件名、第几个sheet、范围。

```matlab
[num,txt,raw]=xlsread('NBTI to华工.xlsx',1)
[num,txt,raw]=xlsread('NBTI to华工.xlsx',1,'D8:D23')
```

### csv

csv 开头一般会有一些文字信息，而 csvread 只能读取数字，所以需要指定行号：

```matlab
M = csvread('filename', row, col)
M = csvread('filename', row, col, range)

% row, col：开始读取的行列，相当于下面的 R1, C1
% range = [R1 C1 R2 C2]: 读取区域的左上与右下坐标
```

但注意的是，行号和列号都是从 0 开始的（这也太割裂了……）

## 数据拟合

MATLAB自带的拟合函数：

```matlab
%多项式拟合
p = polyfit(x,y,n)

% 参数：x,y 数据；n 多项式次数
% 返回：多项式系数（高次到低次）
```

一般我们需要同时画出拟合曲线，所以我们可以将这个与画图结合，封装为一个新的函数：

```matlab
function p = fit_plot(x,y,n)
    p=polyfit(x,y,n);
    x1=linspace(min(x),max(x));
    y1=polyval(p,x1);
    plot(x,y,'*',x1,y1);
    disp('系数（高到低）');
    disp(p);
```

事实上，如果是一元线性拟合，我更推荐直接上线性回归分析：

```matlab
x=[1,2,3,4,5];
y=[1.01,2.02,3.03,3,5.05];
X=[ones(size(x')),x'];
[b,bint,r,rint,stats]=regress(y',X,0.05); %一元回归分析
% b: 回归方程中的参数估计值
% bint: b 的置信区间
% r 和 rint: 分别表示残差及残差对应的置信区间
% stats: 包含相关系数r^2, F 统计量及 F 对应的概率 p 值
rcoplot(r,rint); %在置信区间下误差分析
```

这里同样会给出系数，但注意 b 是从低次到高次。