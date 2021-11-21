---
layout: post
title: git教程
date: 2021-10-30 13:01:00 +0800
category: document
thumbnail: /assets/images/thumbnail/git.png
icon: note
excerpt: 如何用git管理项目
---

* Content
{:toc}

<!--more-->

&emsp;&emsp;说来惭愧，虽然从大一开始用github，但我从没搞清楚git的用法😑，是时候解决这个问题了。

## 背景知识

&emsp;&emsp;根据百度百科：

> Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

&emsp;&emsp;那么什么是版本控制呢？版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 

&emsp;&emsp;最简单的版本控制就是复制整个项目，或许还会改名加上备份时间以示区别。这么做唯一的好处就是简单，但是特别容易犯错，而且特别占空间。

&emsp;&emsp;于是人们开发了本地版本控制系统，这些系统只记录文件的历次更新差异，很好地避免了出错，节省了空间。

&emsp;&emsp;但本地版本控制系统只能一个人用，不方便协作，于是人们又开发了分布式版本控制系统，比如 git. 有一个总的服务器负责存储（我们称之为仓库）；而其他客户端从服务器中克隆所有文件，包括历史记录。

&emsp;&emsp;当然，分布式版本控制系统还有其他好处，可在学习的过程中体会。

## 三个区域、三种状态

&emsp;&emsp;Git 中存在三个区域：

1. 工作区：我们编辑文件的地方。
2. 暂存区：保存了下次将要提交的文件列表信息。
3. 仓库：保存项目的元数据和对象数据库的地方。

&emsp;&emsp;相应的，Git 中的文件也有三种状态：

1. **已修改（modified）**：修改了文件，但还没保存到数据库中。
2. **已暂存（staged）**：对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
3. **已提交（committed**）：表示数据已经安全地保存在本地数据库中。

&emsp;&emsp;基本的 Git 工作流程如下：

1. 在工作区中修改文件；
2. 将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区
3. 提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录

## 安装

&emsp;&emsp;下面让我们开始实践。请去 [Git 官网](https://git-scm.com/downloads) 下载安装包并安装。（在我的 Windows 中约占用 250M）

&emsp;&emsp;或者如果你也可以直接去安装 [github 桌面端](https://desktop.github.com/) 

## 基础设置

&emsp;&emsp;打开命令行（Mac的Terminal，Windows的Powershell，Linux的Bash），后面所有的命令都是在命令行中输入。

&emsp;&emsp;在使用 Git 前，需要设置用户名和邮箱地址，它们会写入到你的每一次提交中，从而区分不同人的修改。

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

&emsp;&emsp;如果想要检查你的配置，可以使用 `git config --list` 命令来列出所有 Git 当时能找到的配置。

## 基础

&emsp;&emsp;本节主要讲如何增删改文件。

### 初始化仓库

&emsp;&emsp;我们可以通过两种方式初始化仓库：

1. 将尚未进行版本控制的本地目录转换为 Git 仓库；
   ```bash
   $ cd 目录路径
   $ git init
   ```
2. 从其它服务器克隆一个已存在的 Git 仓库。
   ```bash
   $ git clone 仓库链接 [别名]
   ```

### 跟踪新文件

&emsp;&emsp;下面我们开始往git中添加文件。假设我们在文件夹中新建了一个 `README` 文件，要跟踪它，运行：

```bash
$ git add README
```

&emsp;&emsp;这时，git 就会跟踪 `README` 文件的变化。我们可以运行 `git status -s` 命令来查看仓库的状态。该命令会输出如下信息：

```bash
$ git status -s
A  README
```

&emsp;&emsp;在此我们需要详细解释一下 `git status -s`，它会以如下形式输出每个文件的状态：

```bash
XY PATH
```

&emsp;&emsp;其中，`X`是在暂存区或仓库中的状态，`Y`是在工作区中的状态。状态由下面的符号表示：

- `?` = untracked 未跟踪
- `!` = ignored 忽略
- ` ` = unmodified 未修改
- `M` = modified 已修改，未添加到暂存区
- `A` = added 已添加到暂存区
- `D` = deleted 已删除
- `R` = renamed 重命名
- `C` = copied 复制
- `U` = updated but unmerged 未合并

&emsp;&emsp;我们可以修改 `README` 里的内容，然后再运行 `git status -s`，输出：

```bash
$ git status -s
AM README
```

&emsp;&emsp;第一个字母 `A` 表示之前已添加到暂存区，第二个字母 `M` 表示后来文件有更改。

### 忽略文件

&emsp;&emsp;有一些文件无需纳入 Git 的管理，我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件。

&emsp;&emsp;文件 `.gitignore` 的格式规范如下：

* 所有空行或者以 # 开头的行都会被 Git 忽略。
* 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
* 匹配模式可以以（/）开头防止递归。
* 匹配模式可以以（/）结尾指定目录。
* 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。

&emsp;&emsp;举例如下：

```bash
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

&emsp;&emsp;当然，我们不必自己写这个文件，GitHub 有一个十分详细的针对数十种项目及语言的 .gitignore 文件列表， 你可以在 [https://github.com/github/gitignore](https://github.com/github/gitignore) 找到它。

### 提交更新

&emsp;&emsp;暂存区就绪后，就可以提交了。运行命令：

```bash
$ git commit
```

&emsp;&emsp;这时，会启动文本编辑器来输入提交说明。编辑器会显示类似下面的文本信息：

```bash

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
#
# Initial commit
#
# Changes to be committed:
#	new file:   README
#
# Changes not staged for commit:
#	modified:   README
#

```

&emsp;&emsp;`#` 开头的是注释。我们可以在注释下面写说明（写啥都行，主要是方便以后回想），退出编辑器时，Git 会丢弃注释行，用你输入的提交说明生成一次提交。

&emsp;&emsp;我们也可以在 `commit` 命令后添加 `-m` 选项，将提交信息与命令放在同一行，如下所示：

```bash
$ git commit -m "说明"
```

&emsp;&emsp;提交完后，会有如下信息：

```bash
[master (root-commit) 7bb7d10] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README
```

### 跳过暂存区

&emsp;&emsp;如果你觉得使用暂存区很繁琐，我们可以直接将已跟踪过的文件暂存起来一并提交，只需在 `git commit` 后面加上 `-a` 选项：

```bash
git commit -a -m "说明"
```

### 删除文件

&emsp;&emsp;我们可以用 `git rm 文件` 来从暂存区域移除，且从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。

&emsp;&emsp;那么为什么不能直接从目录中删除文件呢？因为 Git 设计的时候就考虑了误删除的情况，具体如下：

1. 如果添加到暂存区，那么删除后可以从暂存区恢复
2. 如果没添加到暂存区，但之前有提交到仓库，那么可以从仓库恢复

&emsp;&emsp;我们来演习一下。假设我们有这么一个文件，已修改但还没添加到暂存区：

```bash
$ git status -s
 M README
```

&emsp;&emsp;我们误删了它：

```bash
$ rm README
$ git status -s
 D README
```

&emsp;&emsp;这时可以通过下面命令从仓库中恢复：

```bash
$ git checkout README
Updated 1 path from the index
```

&emsp;&emsp;但由于是从仓库中恢复的，所以如果用 `git status -s` 检查，并不会提示该文件已更改。也就是说，修改的部分无法恢复。

&emsp;&emsp;如果添加到了暂存区，比如（注意M的位置和之前不同）：

```bash
$ git status -s
M  README
$ rm README
$ git status -s
MD README
```

&emsp;&emsp;本地删除文件后，同样是用 `git checkout 文件` 命令来从暂存区中恢复：

```bash
$ git checkout README
Updated 1 path from the index
$ git status -s
M  README
```

---

&emsp;&emsp;那假如我们不是用 `rm`，而是用 `git rm` 来删除文件，会怎么样呢？我们同样来实践一下。

&emsp;&emsp;现在我们有一个在暂存区中的文件，如果直接用 `git rm`，会出错：

```bash
$ git status -s
M  README
$ git rm README
error: the following file has changes staged in the index:
    README
(use --cached to keep the file, or -f to force removal)
```

&emsp;&emsp;根据提示，我们可以选择添加 `--cached` 参数来删除暂存区中的记录，停止跟踪，但保留本地文件，如下：

```bash
$ git rm --cached README
rm 'README'
$ git status -s
D  README
?? README
$ ls
README
```

&emsp;&emsp;或者添加 `-f` 来同时删除本地文件，如下：

```bash
$ git rm -f README
rm 'README'
$ git status -s
D  README
$ ls
```

&emsp;&emsp;那么我们如何恢复呢？我们可以通过 `git reset HEAD 12.md` 可以撤销“删除暂存区中的记录”的操作，然后再通过 `git checkout README` 来恢复本地文件：

```bash
$ git reset HEAD README
Unstaged changes after reset:
D       README
$ git checkout README
Updated 1 path from the index
$ ls
README
```

---

&emsp;&emsp;从上面实践中可以看出，`rm` 只是单纯地删除本地文件，但我们依然可以利用暂存库和仓库来恢复；而 `git rm` 则是从版本控制中移除了文件。

&emsp;&emsp;如果你还不能理解这两者的区别，那么你可以把 `git rm` 看作 `git add`，而 `rm` 看作本地修改，再好好想一下。我相信你会懂的。

### 移动文件（重命名）

&emsp;&emsp;我们可以用 `git mv` 来移动/重命名文件：

```bash
$ git mv README README.md
$ git status -s
R  README -> README.md
```

&emsp;&emsp;这实际上相当于下面三条命令：

```bash
$ mv README README.md
$ git rm README
$ git add README.md
```

### 撤销操作

**撤销 commit**

有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 `--amend` 选项的提交命令来重新提交：

```bash
$ git commit -m 'initial commit'
$ git add forgotten_file
$ git commit --amend
```

文本编辑器启动后，可以看到之前的提交信息。编辑后保存会覆盖原来的提交信息。

---

**撤销暂存**

```bash
git reset HEAD 文件
```

## 进阶

### 添加远程仓库

&emsp;&emsp;我们可以直接使用 github、gitlab、gitee 等网站提供的远程仓库，或在自己服务器上搭建。这里我就用最常用的 github.

&emsp;&emsp;由于 Github Desktop 已经帮我连接上 github 了，所以我无需再配置 github 账号。如果你没有，可以参考这个教程：[Git安装教程(Windows) 以及连接Github](https://zhuanlan.zhihu.com/p/114068278)

&emsp;&emsp;首先我们先从远程仓库克隆已有的文件。此处我用自己的仓库，请自行用你自己的仓库替代。

```bash
$ git clone https://github.com/ToddZZF/Go-Note.git
Cloning into 'Go-Note'...
remote: Enumerating objects: 66, done.
remote: Counting objects: 100% (66/66), done.
remote: Compressing objects: 100% (51/51), done.
remote: Total 66 (delta 16), reused 57 (delta 7), pack-reused 0
Receiving objects: 100% (66/66), 70.83 KiB | 1.31 MiB/s, done.
Resolving deltas: 100% (16/16), done.
$ cd Go-Note
```

我们可以用 `git remote -v` 来查看远程服务器和对应 url，Git 会给默认的服务器起名为 `origin`

```bash
$ git remote -v
origin https://github.com/ToddZZF/Go-Note.git
```

我们也可以自己指定服务器的名字。运行 `git remote add <shortname> <url>` 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：

```bash
$ git remote
origin
$ git remote add pb https://github.com/paulboone/ticgit
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
pb	https://github.com/paulboone/ticgit (fetch)
pb	https://github.com/paulboone/ticgit (push)
```

如果远程仓库不止一个（毕竟我们可以存在多个服务器上，或与多人进行协作），该命令会全部列出，大概是这样：

```bash
$ cd grit
$ git remote -v
bakkdoor  https://github.com/bakkdoor/grit (fetch)
bakkdoor  https://github.com/bakkdoor/grit (push)
cho45     https://github.com/cho45/grit (fetch)
cho45     https://github.com/cho45/grit (push)
defunkt   https://github.com/defunkt/grit (fetch)
defunkt   https://github.com/defunkt/grit (push)
koke      git://github.com/koke/grit.git (fetch)
koke      git://github.com/koke/grit.git (push)
origin    git@github.com:mojombo/grit.git (fetch)
origin    git@github.com:mojombo/grit.git (push)
```





## 参考

- [Git](https://git-scm.com/)
- [Pro Git](https://git-scm.com/book/zh/v2)
- [https://learngitbranching.js.org](https://learngitbranching.js.org/?locale=zh_CN)