---
layout: post
title: 数据结构一周速成
date: 2021-12-15 20:34:00 +0800
category: work
thumbnail: /assets/images/thumbnail/fluttershy.png
icon: note
excerpt: 差点忘了我还有一门考试
mathjax: false
---

* Content
{:toc}

<!--more-->

> 我真不明白为什么同一个课程，同样的内容，就只是因为开课的学院不同就不能互认，搞得我一门课程要学两次🙄

## Chapter 1

1. 什么是数据结构？
   > 研究如何在计算机中有效的存储和组织数据的方法
2. 如何表示数据结构？
   > 抽象数据类型（ADT）：是一种描述数据结构的程序设计语言无关的模型。ADT定义为一组数值，和一组相关的操作。
3. 什么是算法？
   > 算法：用于解决一个问题的方法或步骤。
4. 算法的属性：
   > 1. 确定性：它必须是正确的
   > 2. 可行性：它必须包含一系列具体的步骤，执行的过程无二义性
   > 3. 有穷性：它必须包含有限的步骤，它必须是可以结束的
5. 数据结构 + 算法 = 程序
   > - 数据结构主要研究如何有效的存储和组织应用程序的数据。
   > - 算法主要研究如何对数据进行处理从而解决某个问题

## Chapter 2

## Chapter 3

增长率分析：分析代价（时间、空间）如何随着输入数据规模大小的增长而增长

- $T(n)$：运行时间关于输入数据规模大小 $n$ 的函数。
- $S(n)$：消耗空间关于输入数据规模大小 $n$ 的函数。

-----------------

渐进分析：渐进分析是对T(n)的一种简化分析，该分析保留了 $T(n)$ 的渐进增长趋势

- 大 $O$ 分析（上界分析）
  > 对于非负函数 $T(n)$，如果存在正常数 $c$ 和 $n_0$ 使得当 $n>n_0$ 时 $T(n)\leq cf(n)$，则称 $T(n)$ 属于集合 $O(f(n))$，或记为 $T(n)=O(f(n))$
- 大 $\Omega$ 分析（下界分析）
  > 对于非负函数 $T(n)$，如果存在正常数 $c$ 和 $n_0$ 使得当 $n>n_0$ 时 $T(n)\geq cg(n)$，则称 $T(n)$ 属于集合 $\Omega(g(n))$，或记为 $T(n)=\Omega(g(n))$
- 大 $\Theta$ 分析
  > 若 $T(n)=O(h(n))$ 且 $T(n)=\Omega(h(n))$，则称 $T(n)=\Theta(h(n))$

$T(n)$ 存在多个上界和下界。

-----------------

简化规则：

- 常数规则：若 $f(n)=O(kg(n))$，$k>0$，则 $f(n)=O(g(n))$
  - 该规则同样适用于 $\Omega$ 和 $\Theta$
- 加法规则：若 $f_1(n)=O(g_1(n))$ 且 $f_2(n)=O(g_2(n))$，则 $f_1(n)+f_2(n)=O(\max(g_1(n),g_2(n)))$
- 乘法规则：若 $f_1(n)=O(g_1(n))$ 且 $f_2(n)=O(g_2(n))$，则 $f_1(n)f_2(n)=O(g_1(n)g_2(n))$

----------------

常见的渐进复杂度：

$$
O(1)<O(\log\log n)<O(\log n)\\
<O(n)<O(n\log n)\\
<O(n^2)<\cdots<O(n^k)\\
<O(k^n)<O(n!)<O(n^n)
$$

## Chapter 4

### 线性表

概念：

- **线性表**：由有限的数据元素构成的序列
- **当前位置**：在线性表中插入、删除、或读去数据的位置。当前位置通过**栅栏 (fence)**来定义。栅栏将线性表划分为左右两个部分。插入、删除、读取都在栅栏所在的位置执行（栅栏后面的位置）
- 一个包含0个数据元素的线性表称为**空表**
- 线性表的**长度**指的是线性表中数据元素的个数
- 线性表的开始端称为**表头（head）**, 线性表的结束端称为**表尾（tail）**
- **有序表**：表中的所有的数据元素是根据其数值的大小来进行先后排列
- **无序表**：表中数据元素的位置和该元素的数值没有必然联系

---

线性表ADT

```cpp
template <class Elem> class List {
public:
    virtual void clear() = 0;
    virtual bool insert(const Elem&) = 0;
    virtual bool append(const Elem&) = 0;
    virtual bool remove(Elem&) = 0;
    virtual bool getValue(Elem&) const = 0;
    virtual bool setPos(int pos) = 0;
    virtual void setStart() = 0;
    virtual void setEnd() = 0;
    virtual void prev() = 0;
    virtual void next() = 0;
    virtual int leftLength() const = 0;
    virtual int rightLength() const = 0;
    virtual void print() const = 0;
};
```

---

线性表的实现：

- 数组
- 链表

|比较|数组|链表|
|:---:|:---:|:---:|
|插入与删除|$\Theta(n)$|$\Theta(1)$|
|求前驱和随机访问|$\Theta(1)$|$\Theta(n)$|
|特点|需要提前为数组分配空间|消耗的空间随数据元素个数的增长而增长|
|空间<br>$E$ 每个数据元素所占空间大小<br>$P$：每个指针所占空间大小<br>$D$：数组最多能存放的数据元素的个数<br>$n$：当前数据元素的个数 |$DE$|$n(P+E)$|

### 栈

概念：

- **栈**：插入、删除只在一端进行的线性表
- **LIFO** 性质: Last In, First Out. （后进先出）
- **入栈(PUSH)**：插入元素到栈中
- **出栈(POP)**：从栈中取出元素
- **栈顶(TOP)**：栈中插入、删除的位置

---------

栈的ADT

```cpp
template <class Elem> class Stack {
public:
    // Reinitialize the stack
    virtual void clear() = 0;
    // Push an element onto the top of the stack.
    virtual bool push(const Elem&) = 0;
    // Remove the element at the top of the stack. 
    virtual bool pop(Elem&) = 0;
    // Get a copy of the top element in the stack
    virtual bool topValue(Elem&) const = 0;
    // Return the number of elements in the stack.
    virtual int length () const = 0;
};
```

---------

栈的实现：

- 数组
- 链表


### 队列

概念：

- **队列**: 插入和删除分别在表的两端进行的线性表
- **FIFO** 性质: First in, First Out （先进后出）
- 插入: **enqueue（入队）**
- 删除: **dequeue （出队）**
- 第一个元素: **front（队头）**
- 最后一个元素: **rear（队尾）**


------------

队列ADT

```cpp
template <class Elem> class Queue {
public:
    virtual void clear() = 0;
    virtual bool enqueue(const Elem&) = 0;
    virtual bool dequeue(Elem&) = 0; 
    virtual bool frontValue(Elem&) const = 0;
    virtual int length() const = 0;
};
```

---------

栈的实现：

- 数组
- 链表

## 二叉树

概念：

- **二叉树**是一个包含有限个结点的集合，有以下两种情况
  - 空集，**空树**
  - 包含一个称为**树根(root)**的结点，以及两个互不相交的二叉树，它们分别称为**左子树**和**右子树**
- 对于树上的每个结点，和它有连边的下层结点称为它的**孩子结点**。在二叉树中，每个结点最多会有两个孩子，最少没有孩子
- 对于二叉树上的每个结点，和它有连边的上层结点称为它的**父亲结点**。二叉树中，除了树根外，每个结点都有一个父亲结点。
- 一个结点的父亲，父亲的父亲，父亲的父亲的父亲，等等都是它的**祖先结点**。反过来，一个结点的孩子，孩子的孩子，孩子的孩子的孩子，等等都是它的**后辈结点**
- **叶子结点**：没有孩子结点的结点为叶子结点
- **路径**：一个结点序列 $n_1,n_2,\cdot,n_k$，如果其中的每个结点 $n_i$ 是 $n_{i+1}$ 的父亲（$1\leq i \leq k$），我们就称这个序列是从 $n_1$ 到 $n_k$ 的路径。这条路径的长度等于 $k-1$
- **深度**：一个结点的深度等于从树根到这个结点的路径的长度
- **层次**：根结点为第0层，往下逐个增加。（貌似等于深度）
- **高度**：一棵树的高度等于其中最大结点深度加一

- **满二叉树**：二叉树的每个结点都是叶子或拥有两个孩子的中间结点。
  - **非空满二叉树中叶子的数目比中间结点多一个**，这个很容易证明：如果只有根结点，则只有一个叶子结点，没有中间结点。每增加两个叶子，则原有的叶子结点会变为中间结点，故叶子始终比中间结点多一个。
- **完全二叉树**:  除了最深的层次，二叉树的所有层次都填满结点，且最深层的叶子结点集中在该层的最左边的位置

---------

二叉树结点ADT

```cpp
Template  <class Elem>  class BinNode { 
public:
    virtual Elem& val( ) =0;
    virtual void setVal( const Elem& ) = 0;
    virtual BinNode* left( ) const = 0;
    virtual void setLeft( BinNode* ) = 0;
    virtual BinNode* right( ) const = 0; 
    virtual void setRight( BinNode* ) = 0;
    virtual bool isLeaf( ) = 0;
}
```

---------


二叉树的实现：

- 基于链接的方式
- 基于数组的方式



---------


哈夫曼编码：

- 一种可变长度的编码
- 高频字符对应较短的编码

哈夫曼编码的编码过程需要用到一种称为**哈夫曼树**的满二叉树结构。

平均编码长度取决于所有叶子的加权路径长度的和 

定理: 对于给定的一组字符以及出现的频率，以它们作为叶子节点构建的满二叉树中，哈夫曼树具有最小的加权路径长度的和。在预先知道每个字符的出现的频率的前提下，哈夫曼编码是具有最小的平均编码长度的非前缀编码。

构建哈夫曼编码的算法：


## Chapter 6