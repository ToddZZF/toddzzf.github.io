---
layout: ppt
title: (PPT)阈值电压的提取
date: 2021-10-18 15:47:00 +0800
category: ppt
thumbnail: /assets/images/hot-carrier/仪器b1500a.jpg
icon: book
excerpt: 介绍多种提取阈值电压的方法
---

<style>
    .twocolumn {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      text-align: center;
    }
    p {
      font-size: 80%;
      text-align: left;
    }
</style>

<div class="reveal">
  <div class="slides">
    <!-- 标题 -->
    <section>
      <h2>热载流子损伤(HCD)建模</h2>
      <h3>10/18 工作报告</h3>
      <h4>周镇峰</h4>
    </section>
    <section>
      <h3>目录</h3>
      <ol>
        <li>了解主要的HCD物理模型</li>
        <li>熟悉实验仪器</li>
        <li>实验数据处理：提取阈值电压</li>
      </ol>
    </section>
    <!-- 物理模型 -->
    <section>
      <section>
        <h3>HCD物理模型</h3>
        <ol>
            <li><strong>Hess Model</strong>：introduce single- and multiple-carrier processes; HCD is controlled by the distribution function(DF)</li>
            <li><strong>Energy Driven Paradigm by Rauch and LaRosa</strong>：The fundamental driving force of HCD changes from the maximum electric field to the energy deposited by carriers.</li>
            <li><strong>Bravaix Model</strong>：inherits the main features of both the Hess and the Rauch/LaRosa approaches: the interplay between SP- and MP-mechanisms and the idea that HCD is defined by the carrier DF.</li>
        </ol>
      </section>
      <section>
        <p>
        \[
        \text{HCD}
        \leftrightarrow
        \text{Si-H}
        \begin{cases}
        \text{SP}
        \begin{cases}
            \text{碰撞电离}\\
            \text{俄歇复合}\\
            \text{电子-声子散射}\\
            \text{电子-电子散射}
        \end{cases}\\
        \updownarrow \text{energy distribution function}\\
        \text{MP}
        \end{cases}
        \]
        </p>
      </section>
      <section>
        <h3>Hess Model</h3>
        <div class="twocolumn">
            <div>
              <p>
                \[
                \begin{cases}
                R_{SP} \sim \int_{E_{th}}^\infty F(E)P(E)\sigma(E)\;\mathrm{d} E\\
                R_{MP} = \left(\frac{E_B}{\hbar \omega}+1\right)\left[P_d+\exp(\frac{-\hbar \omega}{k_BT_L})\right]\left[\frac{P_u+\omega_e}{P_d+\exp(-\hbar \omega/k_BT_L)}\right]^{-E_B/\hbar \omega}
                \end{cases}
              \]
              </p>
            </div>
          </div>
          <p>
          \[
            R = \sum_{i=0}^{N_l} \left[ \frac{I_df_v + \omega_e \exp  (-\hbar\omega/k_BT_L)}{I_d f_v + \omega_e} \right]^i A^i I_d f_d
          \]
          </p>
      </section>
      <section>
        <p>
          Hess模型因为提出了很多开创性概念而出名，但它也有很多缺点。首先，界面陷阱是在微观层面上考虑的，没有与器件层面相联。在Hess模型中，器件的寿命定义为缺陷浓度$N_{it}$达到阈值，这会导致对寿命的错误估计，因为HCD是一种强烈不均匀的现象，在相同应力时间下，会在器件的不同区域产生不同的浓度$N_{it}$。
        </p>
      </section>
      <section>
        <p>参考文献：</p>
        <ul>
          <li>
          W. McMahon, K. Matsuda, J. Lee, K. Hess, J. Lyding, The effects of a multiple carrier model of interface states generation of lifetime extraction for MOSFETs, in Proceedings of the International Conference on Modelling and Simulation Micro, vol. 1, 2002, pp. 576–579
          </li>
          <li>
          W. McMahon, A. Haggag, K. Hess, Reliability scaling issues for nanoscale devices. IEEE Trans. Nanotechnol. 2(1), 33–38 (2003)
          </li>
        </ul>
      </section>
    </section>
    <section>
        <section>
          <h3>熟悉实验仪器: 安捷伦B1500A</h3>
          <img src="/assets/images/hot-carrier/仪器b1500a.jpg" width="400">
          <img src="/assets/images/hot-carrier/仪器b1500a接口.jpg" width="500">
        </section>
        <section>
          <h3>熟悉实验软件: EasyEXPERT</h3>
          <img src="/assets/images/hot-carrier/EasyEXPERT界面.jpg">
        </section>
    </section>
    <section>
        <section>
          <h3>阈值电压的提取</h3>
          <p>有多种方法提取阈值电压，但采用不同方法得到的 $V_\tx{th}$ 不同。这些方法主要依赖静态转移特性曲线 $I_d-V_{gs}$。在提取过程中会受到源漏寄生串联电阻和沟道载流子迁移率降低效应的影响，故如何消除这些影响是准确提取 $V_\tx{th}$ 关键。</p>
        </section>
        <section>
          <h3>常数电流法(CC)</h3>
          <div class="twocolumn">
            <div>
              <img src="/assets/images/hot-carrier/测阈值电压：常数电流法.jpg">
            </div>
            <div>
              <p>与规定的 $I_d$ 对应的 $V_g$ 即为 $V_\tx{th}$. $I_\tx{th}$ 一般取 $10^{-6}-10^{-9}\tx{A}$</p>
              <ul>
                <li>优点：直接、快速</li>
                <li>缺点：当 $I_\tx{th}$ 取不同值时，得到的 $V_\tx{th}$ 不同；存在短沟道效应；</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3>线性外推法(ELR)</h3>
          <div class="twocolumn">
            <div>
              <img src="/assets/images/hot-carrier/测阈值电压：线性外推法.jpg">
            </div>
            <div>
              <p>
              通过对 $I_d-V_{gs}$ 特性曲线的最大斜率点展开线性外推，并将外推曲线与 $I_d=0$ 时的 $V_g$ 作为 $V_\tx{th}$
              </p>
              <p>
              \[I_d = \mu C_\tx{ox} \left(\frac{W}{L}\right)\left[V_{gs}-V_\tx{th}-\frac{1}{2}\alpha V_{ds}\right] V_{ds}\]
              </p>
              <p>
              该方程说明，$I_d$ 与 $V_{gs}$ 之间是线性相关，并且与 $V_{gs}$ 轴交于 $V_\tx{th}+\frac{1}{2}\alpha V_{ds}$. 参数 $\alpha$ 与背偏置电压有关，一般取 $1.1-1.5$，由于通常 $V_{ds}\leq 0.1\tx{V}$，一般情况下可以假设 $\alpha=1$，这一假设引起的误差小于 2%。这样一来，在计算 $V_\tx{th}$ 时，必须从外推得到的结果中再减去 $V_\tx{ds}$ 的一半。
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3>跨导线性外推法</h3>
              <p>
              在低漏压时，跨导的微分 $\dif g_m / \dif V_{gs}$ 取最大值时所对应的栅压即为阈值电压。此方法得到的阈值电压与下式定义的阈值电压非常接近：
              </p>
              <p>
              \[\phi_{st} = 2\phi_f+V_\tx{th}\]
              </p>
              <p>由于在该方法中，需要考虑漏电流的二级效应，故其很容易受噪声影响。</p>
        </section>
        <section>
            <p>主要参考文献</p>
            <ol>
                <li> 薛峰. 65nm工艺下MOSFET阈值电压提取方法研究[J]. 赤峰学院学报（自然科学版）,2015(7):46-48. DOI:10.3969/j.issn.1673-260X.2015.07.017.</li>
                <li>A. Bazigos, M. Bucher, J. Assenmacher, S. Decker, W. Grabinski and Y. Papananos, "An Adjusted Constant-Current Method to Determine Saturated and Linear Mode Threshold Voltage of MOSFETs," in IEEE Transactions on Electron Devices, vol. 58, no. 11, pp. 3751-3758, Nov. 2011, doi: 10.1109/TED.2011.2164080.</li>
                <li> O. F. Siebel, M. C. Schneider, and C. Galup-Montoro, “MOSFET threshold voltage: Definition, extraction, and some applications,” Microelectronics Journal, vol. 43, no. 5, pp. 329–336, May 2012, doi: 10.1016/j.mejo.2012.01.004.</li>
            </ol>
        </section>
    </section>
    <section>
      <h3>未来工作安排</h3>
      <ul>
        <li>熟悉实验仪器的使用、实验数据处理</li>
        <li>进一步了解模型</li>
      </ul>
    </section>
    <section>
      <p>谢谢聆听</p>
    </section>
  </div>
</div>