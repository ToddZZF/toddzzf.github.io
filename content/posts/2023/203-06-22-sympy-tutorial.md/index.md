---
title: SymPy教程
date: 2023-06-22 15:13:00 +0800
---

## 简介

[SymPy](https://docs.sympy.org/latest/index.html) 是一个符号计算Python库。什么是符号计算？举个例子：如果有个这样的方程：

$$
\begin{cases}
x+y=5\\
x-y=1
\end{cases}
$$

我们可以用计算器的“解多元方程”来算出来。但是如果有这么一个方程：

$$
\begin{cases}
x+y=a\\
x-y=b
\end{cases}
$$

$a,b$ 是常数。那么，计算器就算不出来了。这时就需要符号计算。

## 安装

直接用 `conda install sympy` 安装。

## 定义符号

为了方便，我们直接全部导入：

```python
from sympy import *
```

首先是定义符号：

```python
x, y = symbols('x y')
x1, x2 = symbols('x_1 x_2') # 支持 latex 的写法
```

定义好后，可以用符号来书写表达式。

如果表达式中有很多符号，则一个一个定义太麻烦。可以用 `sympify()` 将字符串直接转化为表达式。

```python
str_expr = 'x_1**2 + 2*x_2 + 1'
expr = sympify(str_expr)

#等效于
x1, x2 = symbols('x_1 x_2')
expr = x1**2 + 2*x2 + 1
```

## 求解方程组

解线性方程组：

```python
# 定义符号
x, y = symbols('x y')
a, b = symbols('a b')

# 定义方程
f1 = x+y-a
f2 = x-y-b

#求解
result = solve([f1,f2], [x,y])
print(latex(result))
result.get(x)
```

得到的结果如下：

$$
\left\{\left( \frac{a + b}{2}, \  \frac{a - b}{2}\right)\right\}
$$

如果是非线性的，只需要将上面的 `solve()` 换成 `nonlinsolve()` 即可。

## 化简

参考 [SymPy 符号计算基本教程](https://zhuanlan.zhihu.com/p/111573239)
