---
layout: ppt
title: 电路级热载流子损伤效应
date: 2021-09-07 09:32:00 +0800
category: document
thumbnail: /assets/images/thumbnail/twilight_sparkle.png
icon: book
excerpt: 简单介绍热载流子产生、注入、退化的机理
---

<div class="reveal">
  <div class="slides">
    <!-- 标题 -->
    <section>
      <h2>电路级热载流子损伤效应</h2>
      <p>Presented by Todd</p>
    </section>
    <!-- 热载流子的定义 -->
    <section>
      <h3>热载流子的定义</h3>
      <p>在半导体器件（尤其是MOS）中，载流子经过强电场的加速获得极高的动能，由于载流子的能量可以用 $kT$ 来表示，$T$ 表示温度。因此我们将高能载流子称为“热载流子”</p>
      <blockquote>
        <p>
        参考：<a href="https://eesemi.com/hotcarriers.htm">[1] Hot Carriers; Hot Electrons - www.EESemi.com</a>
        </p>
      </blockquote>
    </section>
    <!-- 热载流子退化的过程 -->
    <section>
      <h3>热载流子退化的过程</h3>
      <img src="/assets/images/hot-carrier/热载流子退化的过程.jpg">
      <blockquote><p>
        参考：[2] [1]A. Acovic, G. La Rosa, and Y.-C. Sun, “A review of hot-carrier degradation mechanisms in MOSFETs,” Microelectronics Reliability, vol. 36, no. 7–8, pp. 845–869, Jul. 1996, doi: 10.1016/0026-2714(96)00022-4.

      </blockquote></p>
    </section>
    <!-- 热载流子的产生机理 -->
    <section>
      <section>
        <h3>四种热载流子的产生机理</h3>
        <p>沟道热电子（CHE）、漏雪崩热载流子（DAHC）、</p>
        <img src="/assets/images/hot-carrier/热载流子的产生.jpg">
        <blockquote><p>
        参考：[3] N. Arora, MOSFET Modeling for VLSI Simulation: Theory and Practice, vol. 0. WORLD SCIENTIFIC, 2007. doi: 10.1142/6157.
        </blockquote></p>
      </section>
      <section>
        <p><strong>沟道热电子（CHE）</strong> 当 $V_{gs}=V_{ds}$ 时，漏端附近的沟道区中的电子被加热，形成幸运电子（“幸运”指电子），幸运电子注入到栅氧化层形成了栅电流 $I_g$</p>
        <img src="/assets/images/hot-carrier/热载流子的产生（a）.jpg">
      </section>
      <section>
        <p><strong>漏雪崩热载流子（DAHC）</strong> 漏端强电场导致雪崩倍增效应，电子从沟道电场中获得足够高的能量，经碰撞电离后产生电子-空穴对，电子-空穴对也会碰撞电离产生更多的电子-空穴对，形成雪崩过程。由于电子和空穴同时注入到栅氧化层，DAHC 注入引起的器件退化更为严重。</p>
        <img src="/assets/images/hot-carrier/热载流子的产生（b）.jpg">
      </section>
      <section>
        <p><strong>衬底热电子（SHE）</strong> 当 $V_{ds}=0,V_{gs}>0$，并施加较大的背栅压 $V_{bs}$ 时（例如自举电路的上升过程中），耗尽层中产生的电子或从衬底中性区扩散过来的电子在向 Si-SiO2 界面漂移的过程中，部分电子从表面耗尽区的高电场中获得足够高的能量，越过势垒。</p>
        <img src="/assets/images/hot-carrier/热载流子的产生（d）.jpg">
      </section>
      <section>
        <p><strong>二次产生的热电子（SGHE）</strong> 由衬底电流的二次碰撞电离产生的二次少子。漏端附近的雪崩过程形成了衬底空穴电流，该空穴电流又通过碰撞电离形成了二次电子-空穴对。这些二次电子与 SHE 一样会被注入到栅氧层。在栅氧层较薄、背栅偏压较大的情况下，二次电子注入效应特别严重。</p>
        <img src="/assets/images/hot-carrier/热载流子的产生（c）.jpg">
      </section>
    </section>
  </div>
</div>