---
layout: post
title: 实验用的matlab脚本
date: 2021-10-16 22:20:00 +0800
category: document
thumbnail: /assets/images/review/pad/ipad_series.jpg
icon: note
---

* Content
{:toc}

处理数据中常用的函数和脚本

<!--more-->

## 读取数据

### xlsx

### csv

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