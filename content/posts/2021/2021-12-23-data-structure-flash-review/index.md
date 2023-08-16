---
layout: post
title: 数据结构一周速成
date: 2021-12-23 20:34:00 +0800
category: work
image: fluttershy.png
icon: note
summary: 差点忘了我还有一门考试
mathjax: true
---



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
   >
   > 1. 确定性：它必须是正确的
   > 2. 可行性：它必须包含一系列具体的步骤，执行的过程无二义性
   > 3. 有穷性：它必须包含有限的步骤，它必须是可以结束的
   >
5. 数据结构 + 算法 = 程序
   >
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

-----------------

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

-----------------

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

-----------------

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

-----------------

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

-----------------

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

-----------------

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

-----------------

栈的实现：

- 数组
- 链表

## Chapter 5 二叉树

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

-----------------

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

-----------------

二叉树的实现：

- 基于链接的方式
- 基于数组的方式

-----------------

哈夫曼编码：

- 一种可变长度的编码
- 高频字符对应较短的编码

哈夫曼编码的编码过程需要用到一种称为**哈夫曼树**的满二叉树结构。

平均编码长度取决于所有叶子的加权路径长度的和

定理: 对于给定的一组字符以及出现的频率，以它们作为叶子节点构建的满二叉树中，哈夫曼树具有最小的加权路径长度的和。在预先知道每个字符的出现的频率的前提下，哈夫曼编码是具有最小的平均编码长度的非前缀编码。

构建哈夫曼编码的算法：

## Chapter 6 一般树

概念：

- **树** T 是一个包含一个或多个节点的有限集合，其中有一个称为 **树根** 的节点r，余下的节点(T –{r}) 可以被划分为k个( k≥0)互不想交的子集 T1, T2, ..., Tk, 每个子集都是一棵树,它们的树根 r1, r2, ..., rk,都是r的孩子
- **森林**：是包含有一棵或多棵树的集合。

-----------------

树结点 ADT

```cpp
// General tree node ADT
template <class Elem> class GTNode {
public:
    GTNode(const Elem&); // Constructor
    ~GTNode();           // Destructor
    Elem value();        // Return value
    bool isLeaf();       // TRUE if is a leaf
    GTNode* parent();    // Return parent
    GTNode* leftmost_child(); // First child
    GTNode* right_sibling();  // Right sibling
    void setValue(Elem&);     // Set value
    //insert first child
    void insert_first(GTNode<Elem>* n);
    //insert right sibling
    void insert_next(GTNode<Elem>* n);
    void remove_first(); // Remove first child
    void remove_next();  // Remove sibling
};
```

树 ADT

```cpp
// General tree ADT
template <class Elem> class GenTree {
public:
    GenTree();               // Constructor
    ~GenTree();              // Destructor  
    void clear();            // Send nodes to free store
    GTNode* root();          // Return the root
    
    void print(GTNode*); // Print function
};
```

## Chapter7 内部排序

概念：

- 排序：给定一个序列的记录 $R_1 , R_2 , … , R_n$，它们对应的关键字依次是 $k_1 , k_2 ,… , k_n$ , 调整记录在序列中的次序得到新的记录序列 $R_{s1},R_{s2},…,R_{sn}$，使得记录的关键字满足以下性质： $k_{s1} ≤ k_{s2} ≤  …≤ k_{sn}$.
- 稳定的排序算法：排序的过程不会改变具有相等关键字的记录的相对先后次序。

- 内部排序：指的是待排序记录存放在计算机随机存储器中进行的排序过程。
- 外部排序：指的是待排序记录的数量很大，以致内存一次不能容纳全部记录, 在排序过程中尚需对外存进行访问的排序过程。

-----------------

### 插入排序

记忆：像洗牌，将每张牌插入到合适的位置

实现：在第i次迭代，将第i个元素与前面 i-1 个元素进行比较，使其插入到前面适当的位置(1 <= i <= n-1)

```cpp
template <class Elem>
void inssort(Elem A[], int n) {
    for (int i=1; i<n; i++)
        for (int j=i; (j>0) &&
              (A[j]< A[j-1])); j--)//插入第i个元素
            swap(A, j, j-1);
}
```

代价分析：最好 $\Theta(n)$，最坏 $\Theta(n^2)$，平均 $\Theta(n^2)$

插入排序是一种稳定的排序算法。

### 冒泡排序

实现：由后到前，相邻两个元素比较，逆序则交换。一次冒泡过程结束后，最小的元素会到达最前面。

```cpp
template <class Elem>
void bubsort(Elem A[], int n) {
    for (int i=0; i <n-1; i++)
        for (int j=n-1; j>i; j--)
            if (A[j]< A[j-1])
                swap(A, j, j-1);
}
```

代价分析：最好、最坏、平均都是 $\Theta(n^2)$。

冒泡排序算法是一种稳定的排序算法。

### 选择排序

实现：第i趟排序就是从位置属于[i,n-1]的元素中，选出最小的元素，并将其和第i位置上的元素交换

```cpp
template <class Elem>
void selsort(Elem A[], int n) {
    for (int i=0; i<n-1; i++) { 
   // select the minial values in [i,n-1]
        int lowindex = i; // lowindex指向较小的元素
        for (int j=n-1; j>i; j--) // Find least
            if (A[j]< A[lowindex])
                lowindex = j; 
        swap(A, i, lowindex); // Put it in place
    }
}
```

代价分析：最好、最坏、平均都是 $\Theta(n^2)$。

选择排序是一种不稳定的排序算法。

### 希尔排序（Shellsort）

思路（分组）：每隔一定间距取一个元素放入同一组，将所有元素分成多组，并在组内进行插入排序。然后减小间距重新分组，重新排序。最后当间距为 1 时，退化为一般的插入排序。

分析：由于最后一次排序是一般的插入排序，所以这种方法是可行的。而前面几次排序可以使元素一次性移动多格，所以速度会快。

代码：

```cpp
// Modified version of Insertion Sort
template <class Elem>
void inssort2(Elem A[], int n, int from, int incr) 
{
  for (int i= from + incr; i<n; i+=incr)
    for (int j=i; (j> from &&
           A[j]< A[j-incr]); j-=incr)
       swap(A, j, j-incr);
}

template <class Elem>
void shellsort(Elem A[], int n) { // Shellsort
  for (int i=n/2; i>=1; i/=2)  // For each incr
    for (int j=0; j<i; j++)   // Sort sublists
      inssort2<Elem>(A, n, j, i);   
}

```

当增量序列为 $∆[k] = 2^{t-k+1}-1$ 时，算法复杂度为 $O(n^{3/2})$。 其中 t 是排序的趟数，$1\leq k\leq t$。例如（15，7，3，1）。[证明过程](https://zhuanlan.zhihu.com/p/73726253)

希尔排序是一种不稳定排序。

### 快速排序

思想（分而治之）：选择一个记录的值作为支点（pivot）。将小于支点的记录安排在支点的左侧，将大于等于支点的记录安排在支点的右侧。从而将原序列划分为左右两个子序列。然后在子序列中重复该过程。

```cpp
template <class Elem>
void qsort(Elem A[], int i, int j) {
  if (j <= i) return;     // List too small
  int pivot = findpivot(A, i, j);
  swap(A, pivot, j);  // Put pivot at end

  int k = partition<Elem>(A, i, j, A[j]);
  swap(A, k, j);         // Put pivot in place
  qsort<Elem>(A, i, k-1);
  qsort<Elem>(A, k+1, j);
}

template <class Elem>
int findpivot(Elem A[], int i, int j)
  { return (i+j)/2; }

template <class Elem>
int partition(Elem A[], int l, int r,Elem& pivot) {
  do {  
    while (A[l] < pivot) l++;
    while ((r > l) && A[r] >=pivot)
       r--;

    swap(A, l, r); // Swap out-of-place values
  } while (l < r); // Stop when they cross
  return l;       // Return first pos on right
}
```

代价分析：类似二叉树（层数代表次数）

```yml
#best: 每次都均匀分成两段

   --------
   ---- ----
  -- -- -- --
- - - - - - - -

#worst
--------
- -------
  - ------
    - -----
      - ----
        - ---
          - --
            - -
```

平均情况：

$$
T(n)=cn+\frac{1}{n} \sum_{k=0}^{n-1} (T(k)+T(n-1-k))=\Theta(n \log n)
$$

改进方法：

- 选取更好的支点
  - 选择以下三个记录中的中间值作为支点 : 序列的第一个，中间，最后一个记录
- 采用非递归的算法来实现快速排序

### 归并排序

思路（分而治之）：将一个序列划分为两个长度相等的子序列，然后递归的对每个子序列进行归并排序。将排好序的两个子序列归并为一个有序的序列。

```cpp
template <class Elem>
void mergesort(Elem A[], Elem temp[],
               int left, int right) {
  int mid = (left+right)/2;
  if (left == right) return; 

  mergesort<Elem>(A, temp, left, mid);
  mergesort<Elem>(A, temp, mid+1, right);

  for (int i=left; i<=right; i++) // Copy
    temp[i] = A[i];
  int i1 = left; int i2 = mid + 1;
  for (int curr=left; curr<=right; curr++) {
    if (i1 == mid+1)      // Left exhausted
      A[curr] = temp[i2++];
    else if (i2 > right)  // Right exhausted
      A[curr] = temp[i1++];
    else if (temp[i1] < temp[i2])
      A[curr] = temp[i1++];
    else A[curr] = temp[i2++];
  }
}
```

代价分析：最好、最坏、平均都是 $\Theta(n \log n)$。

### 堆排序

思路：堆顶结点的值总保持是最大值/最小值，故每次取堆顶，然后用剩下元素建堆，再重复该过程。

代价分析：建堆 $\Theta(n)$，移除最大值 $\Theta(\log n)$，n 次移除最大值 $\Theta(n\log n)$。故总代价为 $\Theta(n\log n)$

详细分析见我的博客。

### 箱排序和基数排序

箱排序（Binsort）：设置若干个箱子，依次扫描待排序的记录 R[0]，R[1]，…，R[n-1]，把关键字等于 k 的记录分配到第 k 个箱子里，然后按序号依次将各非空的箱子中的记录收集起来。

示例：3，8，1，8，4，放入下面这组箱子，允许多个记录具有相同的关键字（链表）

```raw
                 8
---------------------
| |1| |3|4| | | |8| |
---------------------
 0 1 2 3 4 5 6 7 8 9
```

然后从左到右逐个扫描箱子，如果有关键字，则取出：1，3，4，8，8

代价：对于Key取值范围较大的记录进行Binsort，较为低效。放进箱子需要 $n$ 次，然后要扫描所有箱子，所以代价为：$\Theta(n + m)$，$n$ 是记录个数，$m$ 是箱子个数。

箱排序是稳定的。

-----------------

基数排序（Radix Sort）：对箱排序的改进。将任何一个 $r$ 进制的整数 key $\overline{K_{d-1}K_{d-2}\cdots K_0}$ 看成是由 $d$ 个分量组成，$K_{d-1},K_{d-2},\cdots ,K_0$，对每个分量进行箱排序。

示例：十进制，27，91，1，97，17，23，84，28，72，5，67，25，先按个位放入箱子

```raw
0
1->91->1
2->72
3->23
4->84
5->5->25
6
7->27->97->17->67
8->28
9
```

然后取出来：91，1，72，23，84，5，25，27，97，17，67，28

再按十位放入箱子

```raw
0->1->5
1->17
2->23->25->27->28
3
4
5
6->67
7->72
8->84
9->91->97
```

再取出来：1，5，17，23，25，27，28，67，72，84，01，07

代价：每次放入全部 $n$ 个元素，$r$ 进制则需要扫描 $r$ 个箱子，需要重复位数 $d$ 次。故代价为 $\Theta((n+r)d)$，$n$ 是记录个数，$d$ 是Key的位数，$r$ 是基数。

基数排序是稳定的排序。

### 排序算法性能比较

### 排序算法的理论下界

排序问题的上界是 $n \log n$。因为我们能找到的最好排序算法的平均情况下的算法复杂度是 $O(n \log n)$

我们将证明排序问题的理论下界也是 $n \log n$。

我们考虑排序的决策树（每个结点处进行一次比较，根据结果分为左右子树），其叶子数量为 $N!$（因为有 $N!$ 种可能结果），深度为 $d$ 的二叉树最多有 $2^{d+1}-1$ 个叶子，那反过来，$N!$ 个叶子的二叉树的深度至少是 $\lceil \log(N!+1) \rceil-1$，即 $\Omega (\log n!)=\Omega(n \log n)$

$$
斯特林公式：n!\approx \sqrt{2\pi n} \left( \frac{n}{e} \right)^n
$$

所以排序所需的时间 $T=\Omega(n \log n)$

## Chapter9 查找

定义：

## Chapter10 索引

原文件在硬盘中太大，不方便直接查找，所以建立索引文件。

索引文件：

1. 索引文件中记录了关键字和对应的数据记录存储在硬盘中的位置
2. 索引文件比数据记录小的多，查找时被加载到内存中进行查找
3. 针对不同关键字的索引文件，支持多关键字查找

### 线性索引

线性索引: 索引文件组织成二元组(关键字, 指向记录的指针) 的序列。

如果索引太大无法加载到内存，则建立二级索引。分段，取每一段的最小值重新构成序列。

不足之处：插入和删除操作会导致大量数据移动 $\Theta(n)$

### 二叉查找树 BST

二叉查找数：对每个结点，左子结点比它小，右子结点比它大

二叉平衡树：左右子树的高度差不超过1

二叉平衡树查找复杂度 $\Theta(\log n)$

不足之处：让BST保持平衡需要付出较高的代价，插入一个结点需要调整大量结点。

### 2-3树

2-3树的性质：

### B+树

## Chapter11 图

### 概念

图的定义：$G=(V,E)$

- $V$ Vertex 顶点的非空有限集合（也就是一组顶点）
- $E$ 无序集 $V\&V$ 的子集，其元素是图的弧（Arc）（也就是顶点对）
- 弧：表示两个顶点 $v$ 和 $w$ 之间存在一个关系，用顶点偶对 $<v,w>$ 表示

- 有向图：若图G的关系集合E(G)中，顶点偶对<v,w>的v和w之间是有序的，称图G是有向图。
  - 称为弧尾(tail)或始点(initial node)，w称为弧头(head)或终点(terminal node) ，就像向量。
- 无向图：若图G的关系集合E(G)中，顶点偶对<v,w>的v和w之间是无序的，称图G是无向图。

- 权(Weight)：与图的边和弧相关的数。权可以表示从一个顶点到另一个顶点的距离或耗费。

- 路径：顶点序列 $v_1, v_2, …, v_n$ 被称为长度为 n-1的路径，其中 $v_i$ 到 $v_{i+1}$  $(1 ≤ i < n)$ 之间有连边
- 简单路径：路径中的所有顶点都是唯一的
- 环：长度不小于3的首尾相接的路径
- 简单环：除了第一个和最后一个顶点外，其余顶点都唯一的环是简单环

- 连通图 : 图中任何两个顶点之间都存在路径
- 连通分量：图中的极大连通子图（也就是让点形成的连通图最大）

参考：[图的基本概念和遍历](https://zhuanlan.zhihu.com/p/35864291)

### 图的实现

### 图的遍历

图的遍历：按照某特定顺序，依次访问图中的顶点，且每个顶点只访问一次。

1. 深度优先搜索(Depth First Search ,DFS)
2. 广度优先搜索(Breadth First Search, BFS)
3. 拓扑排序(Topological Sort )

### 图的最短路径

常见求解问题:

1. 单源最短路径: 求从某个顶点S到图中其他顶点的最短路径
2. 所有点对最短路径: 求任意两个顶点之间的最短路径

定义：

- d(A, B) 从A到B的最短距离（最短路径长度）
- w(A, B) 是A到B的连边的权重。如果A到B没有连边，则定义 w(A, B) = ∞.

-----------------

单源最短路径：Dijkstra算法

-----------------

所有点对最短路径：Floyd算法

### 最小代价生成树

最小代价生成树（Minimum-Cost Spanning Tree ，MST) 问题：

- 输入: 一个无向连通图 G
- 输出: 满足以下要求的 G 的子图
  1. 该子图是包含所有顶点的连通图
  2. 该子图具有最小的代价（代价指的是图中的所有连边上的权重的总和）

有两种算法：

- Prim 最小代价生成树算法
- Kruskal 最小代价生成树算法
