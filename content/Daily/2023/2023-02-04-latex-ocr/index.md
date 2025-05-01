---
title: LaTeX OCR（截图转LaTeX）软件
date: 2023-02-04 10:26:00 +0800
image: latex_ocr.png
math: true
---

已经有这类的软件：[Mathpix](https://mathpix.com/)，但教育用户（用教育邮箱注册）每月只能识别 100 张图片，pro用户可以识别 5000 张（一年340RMB）。目前找到两个替代品。

## SimpleTex

[SimpleTex](https://simpletex.cn/) 是学生开发的，目前用起来速度不错（使用的是他们的服务器），可以识别多行公式，但不清楚未来会不会限制次数。目前推荐使用。

## pix2tex

Github 上开源免费的软件 [pix2tex - LaTeX OCR](https://github.com/lukas-blecher/LaTeX-OCR)，本地运行无需联网，但安装复杂。

### 安装过程

为了更好的管理 Python，我们先安装 Miniconda，直接到 <https://docs.conda.io/en/latest/miniconda.html> 安装最新的 Windows 64-bit 版本。全点确定即可。

安装好后，会弹出 [Getting started with conda](https://conda.io/projects/conda/en/latest/user-guide/getting-started.html) 的网页，这里简单介绍了 Miniconda 的用法，建议简要过一遍。然后我们开始为软件配置环境。

1. 打开 Anaconda Prompt 软件，然后输入下面的命令（可能需要）
2. 新建一个环境：

   ```cmd
   conda create --name latex_ocr
   ```

3. 激活环境

   ```cmd
   conda activate latex_ocr
   ```

4. [安装 pytorth](https://pytorch.org/get-started/locally/) （人工智能框架）

   ```cmd
   conda install pytorch torchvision torchaudio cpuonly -c pytorch
   ```

   然后会出现一堆要安装的软件包，按 `y` 来确认。如果速度太慢或出现 CondaError，可以尝试挂代理或 [换源](https://blog.csdn.net/adreammaker/article/details/123396951)。这一步是比较慢的，得有耐心。

5. 安装 pix2tex

   ```cmd
   pip install pix2tex[gui]
   ```

6. 输入 `latexocr` 来启动软件。如果出现：`ImportError: DLL load failed while importing _imaging: 找不到指定的模块。`，可以尝试升级 PIllow：`pip install --upgrade Pillow`。第一次启动需要下载模型文件。

   另外，如果出现了 `远程主机强迫关闭了一个现有的连接`，重新启动输入命令。

7. 如果后续想要删除，可以运行：

   ```cmd
   conda env remove --name latex_ocr
   ```

### 使用&测试

点击 Snip，截图，识别成功后直接粘贴（无需复制）。

测试设备：小新 R5-4600U，识别过程中CPU使用率约为 65%。另外识别速度和准确率受截图大小的影响（我是把PDF打开为屏幕一半大小，此时截出来的公式大概是 80px 高），图片太大或太小都会影响准确率。

> $$N\cong\frac{D_{\infty}(\delta_{p},\delta_{s})-F(\delta_{p},\delta_{s})\left[\frac{(\omega_{s}-\omega_{p})}{2\pi}\right]^{2}}{\left[\frac{(\omega_{s}-\omega_{p})}{2\pi}\right]}$$
> 4s

> $$\beta=\left\{\begin{array}{l l}{{0.1102(\alpha_{s}-8.7)}}&{{\mathrm{for~}\alpha_{s}\gt 50}}\\ {{0.5842(\alpha_{s}-21)^{0.4}+0.07886(\alpha_{s}-21)}}&{{\mathrm{for~}21\le\alpha_{s}\le50}}\\ {{0}}&{{\mathrm{for~}\alpha_{s}\lt 21}}\end{array}\right.$$
> 10s

> $$H(e^{-j\omega})=e^{-j[(N\omega-\pi)/2]}\left\{2\sum_{n=1}^{(N+1)/2}h\left[\frac{N+1}{2}-n\right]\sin\left(\left(n-\frac12\right)\omega\right)\right\}$$
> 6s

> $$
> \begin{aligned}
> H\left(e^{j \omega}\right)= & \sum_{n=0}^N h(n) e^{-j n \omega} \\
> = & h(0)+h(1) e^{-j \omega}+h(2) e^{-j 2 \omega}+\cdots+h(N-1) e^{-j(N \omega)} \\
> = & e^{-j[(N / 2) \omega]}\left\{2 h(0) \cos \left(\frac{N \omega}{2}\right)+2 h(1) \cos \left(\left(\frac{N}{2}-1\right) \omega\right)\right. \\
> & \left.+2 h(2) \cos \left(\left(\frac{N}{2}-2\right) \omega\right)+\cdots+h\left(\frac{N}{2}\right)\right\}
> \end{aligned}
> $$
>
> 识别失败，只能用 Mathpix

对于单行公式，速度很快，且准确率很高。但对于多行公式，速度极慢且有时会失败。但总体表现不如 SimpleTex。
