---
layout: post
title: 数据结构：堆 Heap
date: 2021-12-28 20:34:00 +0800
category: work
thumbnail: /assets/images/thumbnail/fluttershy.png
icon: note
excerpt: 堆是一种特殊的完全二叉树
mathjax: true
---

* Content
{:toc}

<!--more-->

## 复习完全二叉树

首先先复习一下完全二叉树。完全二叉树指的是除了最深的一层，其余层都填满。因此，完全二叉树可以按由上到下、由左到右的顺序放入到一个数组中：

```
      0
     / \
    1   2
   / \ / \
  3  4 5  6
 / \
7   8

012345678
```

并且对于编号为 $n$ 的结点，其父结点为 $\lceil (n-1)/2 \rceil$，左子结点为 $2n+1$，右子结点为 $2n+2$. 证明如下：

我们只需要证明左子结点即可，其余很容易据此推出。我们采用从特殊到一般的证明方法。我们先考虑每层的第1个元素，编号为：$0,1,3,7,\cdots,2^{l-1}-1$，显然，$l+1$ 层的第一个元素为 $2^l-1=2\cdot (2^{l-1}-1)+1$

我们再考虑每层第 $k$ 个元素，即编号为 $2^{l-1}-1+(k-1)$，显然，其左子结点的编号为 $2^l-1+2\cdot (k-1)$，这两者满足：

$$
2^l-1+2\cdot (k-1) = 2\cdot [2^{l-1}-1+(k-1)]+1
$$

故得证。右子结点在左子结点的基础上加一即可，父结点则是对等式进行移项即可。

注意的是，我们的结点编号是从 0 开始的，层编号也是从 0 开始的。如果从 1 开始，则父结点为 $\lceil n/2 \rceil$，左子结点为 $2n$，右子结点为 $2n+1$. 在做题时要考虑清楚。

> 后面代码部分以 1 开始。

根据这一点，我们就可以很方便的将完全二叉树存储在线性表中。

## 堆

堆是一种特殊的二叉树，分两种：

- 最大堆：父结点比子结点大
- 最小堆：父结点比子结点小

后面以最大堆为例。

堆的几个基本操作：

1. 上浮 shift_up
2. 下沉 shift_down
3. 插入 push
4. 弹出 pop
5. 取顶 top
6. 堆排序 heap_sort

这几个操作在构建、使用堆的过程中会逐一讲解。

## 构造堆

首先先讲一个特殊案例，假设结点的左右子树都是堆，但自身不是堆。比如：

```
      2
     / \
    9   7
   / \ / \
  8  5 0  1
 / \
6   4
```

显然左右子树都是最大堆，但根不是最大的。为了使其称为堆，我们进行“下沉”，把根与其最大的子结点交换：

```
      9
     / \
    2   7
   / \ / \
  8  5 0  1
 / \
6   4
```

然后对左子树重复该过程：

```
      9
     / \
    8   7
   / \ / \
  2  5 0  1
 / \
6   4
```

再重复：

```
      9
     / \
    8   7
   / \ / \
  6  5 0  1
 / \
2   4
```

最终可以得到一个最大堆。最小堆则相反，与子结点中较小的交换。注意在下沉的过程中，二叉树的结构没变，依然是完全二叉树。

据此，我们可以将任意一个完全二叉树转化为堆，只需自低向上对每个结点进行下沉操作即可，代码如下：

```cpp
void new_heap(int *a, int len) {
    for(int i=len/2; i>=1; --i) {
        adjust_heap(a, i, len);
    }
}
```

此处我们从最后一个有子结点的结点（$\lceil n/2 \rceil$）开始，逐个对前面的结点进行调整。具体调整的代码如下：

```cpp
void adjust_heap(int *a, int node, int len) {
    int left = 2 * node;
    int right = 2 * node + 1;
    int max = node;
    if(left <= len && a[left] > a[max]) {
        max = left;
    }
    if(right <= len && a[right] > a[max]) {
        max = right;
    }
    if(max != node) {
        swap(a[max], a[node]);
        adjust_heap(a, max, len);
    }
}
```



## 插入新结点

首先，要保持堆是完全二叉树，那么新插入的结点只能在最末尾的位置。假设我们新插入的是 9

```
      8
     / \
    6   7
   / \ / \
  4  5 0  1
 / \
2   9
```

显然 9 比结点 4 大，所以将它“上浮”，也就是交换。

```
      8
     / \
    6   7
   / \ / \
  9  5 0  1
 / \
2   4
```

然后不断重复这个过程，直到无法上浮为止。

```
      8
     / \
    9   7
   / \ / \
  6  5 0  1
 / \
2   4
```

```
      9
     / \
    8   7
   / \ / \
  6  5 0  1
 / \
2   4
```

## 堆排序

首先，我们将所有元素组织成堆，然后取出最大的元素：

```
     '7'
     / \
    5   6
   / \ / \
  4  2 1  3

     ' '
     / \
    5   6
   / \ / \
  4  2 1  3

7
```

由于根结点空了，所以我们把最右下的元素补上去

```
      3
     / \
    5   6
   / \ /
  4  2 1
```

由于此时左、右子树都是堆，所以只需要将根结点下沉。

```
      6
     / \
    5   3
   / \ /
  4  2 1
```

然后，再取出根结点，重复上述过程。

代码如下：

```cpp
template <class Elem>
void heapsort(Elem A[], int n) { // Heapsort
    Elem mval;
    maxheap<Elem> H(A, n, n);
    for (int i=0; i<n; i++)  // Now sort
        H.removemax(mval);     
}

template<class Elem> class maxheap{
    private:
        Elem* Heap;   // Pointer to the heap array
        int size;     // Maximum size of the heap
        int n;        // Number of elems now in heap
  
    public:
        maxheap(Elem* h, int num, int max) {
            Heap = h; n = num; size = max; buildHeap();
        }

        Bool removemax(Elem& it) {
            if (n == 0) return false; // Heap is empty
            swap(Heap, 0, --n);      // Swap max with end
            if (n != 0) siftdown(0);
            it = Heap[n];            // Return max value
            return true;
        }
}
```

代价为：1. 建堆 $\Theta(n)$ 2. 移除最大值 $\Theta(\log n)$（因为深度为 $\lceil \log n$ \rceil） 3. n次移除最大值 $\Theta(n\log n)$

> 话说我觉得建堆应该是 $\Theta(n\log n)$

## 参考

<https://www.cnblogs.com/JVxie/p/4859889.html>

<https://www.cnblogs.com/xiugeng/p/9645972.html>