---
layout: ppt
title: (PPT)NBTI数据处理
date: 2021-11-01 13:47:00 +0800
category: ppt
thumbnail: /assets/images/hot-carrier/仪器b1500a.jpg
icon: book
excerpt: 介绍NBTI数据处理
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
    table {
      font-size: 80%;
    }
</style>

<div class="reveal">
  <div class="slides">
    <!-- 标题 -->
    <section>
      <h3>11/01 工作汇报</h3>
      <h4>周镇峰</h4>
    </section>
    <section>
      <h3>目录</h3>
      <ol>
        <li>了解主要的HCD物理模型</li>
        <li>熟悉实验仪器</li>
        <li>实验数据处理：NBTI寿命的提取</li>
      </ol>
    </section>
    <!-- 物理模型 -->
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
        <h3>Bravaix Model</h3>
        <p>
          总的器件寿命时间为：<br>
          \[
            1/\tau_d = K_\text{SP}/\tau_\text{SP}+K_\text{EES}/\tau_\text{EES}+K_\text{MP}/\tau_\text{MP}
          \]
        </p>
      </section>
      <section>
        <p>
        平均载流子能量高的应力电压所对应的HCD机制是SP，可以用幸运电子模型描述，器件寿命可以描述为：<br>
        \[
        1/\tau_\text{SP} \sim (I_d/W)(I_{sub}/I_d)^m
        \]
        </p>
      </section>
      <section>
        <p>
        平均载流子能量低但载流子密度高的则对应于MP，器件寿命可以描述为：<br>
        \[
          \begin{aligned}
          1/\tau_\text{MP} \sim& [(qV_{ds}-\hbar \omega)^{1/2}(I_{sub}/W)]^{E_B/\hbar \omega} \exp (-E_\text{emi}/k_B T_L)\\
          &\approx [V_{ds}^{1/2}(I_d/W)]^{E_B/\hbar \omega}
          \end{aligned}
        \]
        </p>
      </section>
      <section>
        <p>
        平均载流子能量中等、载流子密度中等时，则对应EES，相应寿命为：<br>
        \[
        1/\tau_\text{EES} \sim (I_d/W)^2(I_\text{sub}/I_d)^m
        \]<br>
        式中的平方是由“碰撞电离”引入的，虽然碰撞电离只会产生冷载流子，但它们可以通过EES转化为高能粒子，然后通过SP引发键断裂。
        </p>
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
        <section>
          <h3>探针台</h3>
          <div class="twocolumn">
            <div>
              <img src="/assets/images/hot-carrier/探针台.jpg">
            </div>
            <div>
              <img src="/assets/images/hot-carrier/压针.jpg" width="70%">
              <img src="/assets/images/hot-carrier/压针后.jpg" width="70%">
            </div>
          </div>
        </section>
    </section>
    <section>
        <section>
        <h3>NBTI实验数据处理</h3>
        <p>
          实验条件：<br>
            <table>
            <thead>
                <tr>
                <th>应力电压</th>
                <th>温度</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>-1.7V</td>
                <td>125℃</td>
                </tr>
                <tr>
                <td>-1.9V</td>
                <td>125℃</td>
                </tr>
                <tr>
                <td>-2.1V</td>
                <td>125℃</td>
                </tr>
                <tr>
                <td>-2.1V</td>
                <td>100℃</td>
                </tr>
                <tr>
                <td>-2.1V</td>
                <td>150℃</td>
                </tr>
            </tbody>
            </table>
        </p>
        <p>
        公式：$\Delta V_T = {\color{red} A (1/W)^n \times (1/L)^m} \exp(-{\color{red} C}/V_{GS}) \times \exp(-{\color{red} E_a}/kT)\times t^{\color{red} p}$<br>
        红色部分为需要拟合的参数。
        </p>
        </section>
          <section>
          <h3>应力作用时间影响因子$p$的提取</h3>
            <p>
              \[
                \begin{aligned}
                \ln(\Delta V_t) =& \ln \left[ A (1/W)^n \times (1/L)^m \exp(-C/V_{GS}) \times \exp(-E_a/kT) \right] \\
                &+ {\color{red}p}\ln t
                \end{aligned}
              \]
            </p>
            <img src="/assets/images/hot-carrier/应力作用时间影响因子.jpg">
          </section>
        <section>
        <h3>激活能$Ea$的提取</h3>
          <p>
            \[
              \begin{aligned}
              -p\ln t =& \ln \left[ A(1/W)^n\times(1/L)^m \exp(-C/V_{GS}/\Delta V_T) \right] \\
              &-\frac{ {\color{red}E_a} }{k}\times \frac{1}{T}
              \end{aligned}
            \]
          </p>
          <img src="/assets/images/hot-carrier/激活能的提取.jpg">
        </section>
        <section>
        <h3>电场加速因子$C$的提取</h3>
          <p>
            \[
              \begin{aligned}
              -p\ln t =& \ln\left[ A(1/W)^n \times (1/L)^m \times \exp(-E_a/kT)/\Delta V_T \right] \\
              &- {\color{red}C}\times\frac{1}{V_{GS}}
              \end{aligned}
            \]
          </p>
          <img src="/assets/images/hot-carrier/电场加速因子的提取.jpg">
        </section>
        <section>
        <h3>系数的提取</h3>
          <p>
            \[
              \begin{aligned}
              \ln \Delta V_{th} =& \ln \left[ {\color{red} A\times f(W,L)} \times \exp(-C/V_{gs}) \times \exp(-E_a/kT) \right]\\
              &+p \ln t
              \end{aligned}
            \]
          </p>
          <img src="/assets/images/hot-carrier/应力作用时间影响因子.jpg">
        </section>
    </section>
    <section>
      <h3>未来工作安排</h3>
      <ul>
        <li>对28nm样品进行测试</li>
        <li>进一步了解模型</li>
      </ul>
    </section>
    <section>
      <p>谢谢聆听</p>
    </section>
  </div>
</div>