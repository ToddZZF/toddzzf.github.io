---
layout: ppt
title: (PPT)测试过程
date: 2021-11-01 13:47:00 +0800
category: document
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
      <h3>11/15 工作汇报</h3>
      <h4>周镇峰</h4>
    </section>
    <section>
      <h3>目录</h3>
      <ol>
        <li>了解主要的HCD物理模型</li>
        <li>在探针台和B1500上测量器件特性</li>
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
        <h3>模型中的同位素效应</h3>
      </section>
      <section>
        <h4>同位素效应 1（单电子）：激发/反激发</h4>
        <p>从成键态激发到反键态的概率取决于两个势能表面间的能量距离，该距离是简谐振子中两个离子之间相对距离的函数。因为氢的质量大约是氘的质量的一半，所以在所有 SHO（simple harmonic oscillator） 模式下，它比氘延伸的距离要远得多，因此具有更高的激发概率。</p>
      </section>
      <section>
        <h4>同位素效应 2（单电子）：沿着反键势能表面的演化</h4>
        <p>一旦电子被激发到反键态，成键离子会沿着该能态加速，直到该电子回到成键态。该加速过程是质量的函数，所以会存在同位素效应。</p>
      </section>
      <section>
        <h4>同位素效应 3（多电子）SHO 的极子激发</h4>
        <p>SHO 阶梯上的激发可能涉及传入电子和 SHO 跃迁偶极子之间的偶极子相互作用。跃迁偶极子是原始状态和激发态之间平衡差的函数，而这些距离是离子质量的函数。</p>
      </section>
      <section>
        <h4>同位素效应 4（多电子）SHO 的共振激发</h4>
        <p>SHO 阶梯上的激发可能涉及与键共振耦合的电子，即暂时将该键电离到新的 PES。原子核将沿着新的 PES 演化，直到进入的电子离开临时轨道。与同位素效应 2 相似，这里存在与离子加速相关的同位素效应。</p>
      </section>
      <section>
        <h4>同位素效应 5（多电子）声子耦合</h4>
        <p>一旦局部硅氢前驱体的局部模式被激发后，它最终将失去能量到周围的晶格。硅-氢声子和硅-硅声子之间的耦合与声子模式之间的相对能量有关。由于“硅-氘拉伸和弯曲模式”与“硅-氢拉伸和弯曲模式”具有不同的能量，因此存在与这种耦合相关的同位素效应。有人认为，硅-氘弯曲模式和硅-硅横向光学声子模式之间更有效的耦合增强了硅-氘同位素效应。</p>
      </section>
      <section>
        <h4>同位素效应 6：氢和氘的不同扩散速率</h4>
        <p>氢和氘的不同质量会影响它们的相对扩散速率，并可能导致到达 Si/SiO2 界面钝化悬空键的效率不同。类似地，氢使硅悬挂键去钝化的尝试频率由 SHO 模式频率给出，因此即使在假定去钝化纯粹是电场诱导的（与同位素无关的）势垒高度降低的函数的热化学模型中，也可能存在同位素效应。</p>
      </section>
    </section>
    <section>
        <section>
          <h3>实验仪器: 安捷伦B1500A</h3>
          <img src="/assets/images/hot-carrier/仪器b1500a.jpg" width="400">
          <img src="/assets/images/hot-carrier/仪器b1500a接口.jpg" width="500">
        </section>
        <section>
          <h3>实验软件: EasyEXPERT</h3>
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
        <section>
          <h3>实验进度</h3>
          <ul>
            <li>由于探针的问题，28nm裸片的测试暂停，要等采购的新探针到。</li>
            <li>本周测了另一个封装好的样品的转移、输出特性，并对数据进行了处理</li>
          </ul>
        </section>
        <section>
          <img src="/assets/images/hot-carrier/1115-数据处理2.jpg" width="70%">
        </section>
        <section>
          <img src="/assets/images/hot-carrier/1115-数据处理1.jpg" width="70%">
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