---
layout: post
title: 视频编码器
date: 2022-05-21 13:36:00 +0800
category: document
thumbnail: twilight_sparkle.png
icon: note
summary: " "
indent: True
---

动辄 1G 以上的视频让我的硬盘实在吃不消，这些视频这么大的原因有两个：一是视频的画质与码率不匹配；二是视频的编码格式太老旧。故在此研究一下视频编码器，找到一个合适的视频压缩方法。

## 视频封装格式

一个视频文件实际上是一个包含视频、音频、字幕等数据的容器。​ 视频封装格式就是将已经编码处理的视频数据、音频数据以及字幕数据按照一定的方式放到一个文件中。[^1]

编码格式与封装格式的名称有时是一致的，例如 MPEG、WMV、DivX、XviD、RM、RMVB 等格式，既是编码格式，也是封装格式；有时却不一致，例如 MKV 是一种能容纳多种不同类型编码的视频、音频及字幕流的“万能”视频封装格式，同样以mkv为扩展名的视频文件，可能封装了不同编码格式的视频数据。

常见的视频封装格式如下：

|封装格式|文件后缀|组织/企业|
|-------|-------|----|
|Matroska|.mkv|Google|
|WebM|.webm|Google|
|MP4|.mp4, .m4a, .m4v|MPEG|
|AVI|.avi|Microsoft|
|QuickTime|.mov|Apple|
|FLV|.flv|Adobe|
|AVCHD|.avchd|Sony|

[^1]: 视频的编解码格式 <https://zhuanlan.zhihu.com/p/143720720>

## 视频编码

### 视频码率

码率（bit rate）即单位时间内传输的数据，单位是 bps（bit per second）。对于一个视频，码率×时长=视频大小。

对于未压缩的视频，还有个公式：

码率 = 采样率 × 位深度 × 通道数
