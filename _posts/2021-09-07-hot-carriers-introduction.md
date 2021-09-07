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
      <section>
      <h3>热载流子的定义</h3>
      <p>在半导体器件（尤其是MOS）中，载流子经过强电场的加速获得极高的动能，由于载流子的能量可以用 $kT$ 来表示，$T$ 表示温度。因此我们将高能载流子称为“热载流子”</p>
      </section>
      <section>
      <blockquote>
        <p><small>
        参考：<a href="https://eesemi.com/hotcarriers.htm">[1] Hot Carriers; Hot Electrons - www.EESemi.com</a>
        </small></p>
      </blockquote>
      </section>
    </section>
    <!-- 热载流子退化的过程 -->
    <section>
      <section>
      <h3>热载流子退化的过程</h3>
      <img src="/assets/images/hot-carrier/热载流子退化的过程.jpg" width="500">
      </section>
      <section>
      <blockquote>
        <p><small>
        参考：[2] A. Acovic, G. La Rosa, and Y.-C. Sun, “A review of hot-carrier degradation mechanisms in MOSFETs,” Microelectronics Reliability, vol. 36, no. 7–8, pp. 845–869, Jul. 1996, doi: 10.1016/0026-2714(96)00022-4.
        </small></p>
      </blockquote>
      </section>
    </section>
    <!-- 热载流子的产生机理 -->
    <section>
      <section>
        <h3>四种热载流子的产生机理</h3>
        <p>沟道热电子（CHE）、漏极雪崩热载流子（DAHC）、衬底热电子（SHE）、二次产生的热电子（SGHE）</p>
        <img src="/assets/images/hot-carrier/热载流子的产生.jpg" width="500">
        <blockquote><p><small>
        参考：[3] N. Arora, MOSFET Modeling for VLSI Simulation: Theory and Practice, vol. 0. WORLD SCIENTIFIC, 2007. doi: 10.1142/6157.
        </small></p></blockquote>
      </section>
      <section>
        <p><strong>沟道热电子（CHE）</strong> 当 $V_{gs}=V_{ds}$ 时，漏端附近的沟道区中的电子被加热，形成幸运电子（“幸运”指满足注入条件的电子），幸运电子注入到栅氧化层形成了栅电流 $I_g$</p>
        <img src="/assets/images/hot-carrier/热载流子的产生（a）.jpg">
      </section>
      <section>
        <p><strong>漏极雪崩热载流子（DAHC）</strong> 漏端强电场导致雪崩倍增效应，电子从沟道电场中获得足够高的能量，经碰撞电离后产生电子-空穴对，电子-空穴对也会碰撞电离产生更多的电子-空穴对，形成雪崩过程。由于电子和空穴同时注入到栅氧化层，DAHC 注入引起的器件退化更为严重。</p>
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
    <!-- 热载流子产生陷阱的过程 -->
    <section>
      <section>
      <h3>热载流子退化的机制</h3>
      <ul>
        <li><strong>Negative oxide charge trapping</strong></li>
        <ul>
          <li>
          电子被漏区附近的氧化层陷阱捕获，导致有效沟道长度变短，p-MOSFET 驱动电流增加
          </li>
        </ul>
        <li><strong>Positive oxide charge trapping</strong></li>
        <li><strong>Generation of interface states by hot holes</strong></li>
        <ul>
          <li><strong>single particle(SP)</strong> causes Si–H bond dissociation due to the interaction of carriers with high energy</li>
          <li><strong>multiple particle(MP)</strong> carriers with low energy that can excite the vibrational modes of the bonds followed by hydrogen release from the last bonded level to the transport state</li>
        </ul>
      </ul>
      </section>
      <section>
      <blockquote>
        <p><small>
        参考：[4]J. Kim, K. Hong, H. Shim, H. Rhee, and H. Shin, “Comparative Analysis of Hot Carrier Degradation (HCD) in 10-nm Node nMOS/pMOS FinFET Devices,” IEEE Trans. Electron Devices, vol. 67, no. 12, pp. 5396–5402, Dec. 2020, doi: 10.1109/TED.2020.3031246.<br>
        [5]I. Polishchuk, Yee-Chia Yeo, Qiang Lu, Tsu-Jae King, and Chenming Hu, “Hot-carrier reliability of p-MOSFET with ultra-thin silicon nitride gate dielectric,” in 2001 IEEE International Reliability Physics Symposium Proceedings. 39th Annual (Cat. No.00CH37167), Orlando, FL, USA, 2001, pp. 425–430. doi: 10.1109/RELPHY.2001.922937.
        </small></p>
      </blockquote>
      </section>
    </section>
    <!-- 热载流子对器件性能的影响 -->
    <section>
        <section>
        <h3>热载流子对器件性能的影响</h3>
        <p>导致器件参数偏移，如：</p>
        <ul>
          <li>threshold voltage ($\Delta V_T$)</li>
          <li>transconductance ($\Delta g_m$)</li>
          <li>subthreshold slope($\Delta S$)</li>
          <li>linear drain current ($\Delta I_\text{DLIN}$)</li>
          <li>saturation drain current ($\Delta I_\text{DSAT}$)</li>
          <li>gate-to-drain capacitance($\Delta C_{GD}$)</li>
        </ul> 
        </section>
        <section>
          <p>实验结果<sup>[5]</sup>：</p>
          <p>寿命定义为 $\Delta I_\text{DSAT}$ 减少 10% 所需时间</p>
          <img src="/assets/images/hot-carrier/Idsat的退化.jpg">
          <blockquote><p><small>[5]E. Amat et al., “Channel hot-carrier degradation in pMOS and nMOS short channel transistors with high-k dielectric stack,” Microelectronic Engineering, vol. 87, no. 1, pp. 47–50, Jan. 2010, doi: 10.1016/j.mee.2009.05.013.
          </small></p></blockquote>
        </section>
        <section>
          <p>热载流子对 $I_{ds}$ 的影响<sup>[6]</sup></p>
          <img src="/assets/images/hot-carrier/Ids的退化.gif">
          <blockquote><p><small>[6]M. Jin et al., “Hot carrier reliability characterization in consideration of self-heating in FinFET technology,” in 2016 IEEE International Reliability Physics Symposium (IRPS), Pasadena, CA, USA, Apr. 2016, pp. 2A-2-1-2A-2–5. doi: 10.1109/IRPS.2016.7574505.
          </small></p></blockquote>
        </section>
        <section>
          <p>热载流子对I-V特性的影响<sup>[7]</sup></p>
          <img src="/assets/images/hot-carrier/IV特性的退化.jpg">
          <blockquote><p><small>[7]T. A. Karatsori, C. G. Theodorou, S. Haendler, N. Planes, G. Ghibaudo, and C. A. Dimitriadis, “Hot-carrier degradation model for nanoscale ultra-thin body ultra-thin box SOI MOSFETs suitable for circuit simulators,” Microelectronic Engineering, vol. 159, pp. 9–16, Jun. 2016, doi: 10.1016/j.mee.2016.01.035.
          </small></p></blockquote>
        </section>
    </section>
    <section>
      <section>
       <h3>热载流子效应对电路的影响</h3>
       <ul>
         <li>数字电路：栅电容、驱动电流导致时序变化</li>
         <li>模拟电路：I-V特性变化导致失配</li>
       </ul>
      </section>
    </section>
  </div>
</div>