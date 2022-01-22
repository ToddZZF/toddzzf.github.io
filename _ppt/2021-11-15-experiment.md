---
layout: ppt
title: (PPT)测试过程
date: 2021-11-15 14:47:00 +0800
category: ppt
thumbnail: /assets/images/hot-carrier/仪器b1500a.jpg
icon: book
excerpt: 描述测量晶体管特性曲线的过程
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
    table, ul, ol {
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
        <img src="/assets/images/hot-carrier/SVE%20vs%20MVE.jpg">
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
        <p>SHO 阶梯上的激发可能涉及与键共振耦合的电子，即暂时将该键电离到新的 PES（potential energy surface）。原子核将沿着新的 PES 演化，直到进入的电子离开临时轨道。与同位素效应 2 相似，这里存在与离子加速相关的同位素效应。</p>
      </section>
      <section>
        <h4>同位素效应 5（多电子）声子耦合</h4>
        <p>一旦局部硅氢前驱体的局部模式被激发后，它最终将失去能量到周围的晶格。硅-氢声子和硅-硅声子之间的耦合与声子模式之间的相对能量有关。由于“硅-氘拉伸和弯曲模式”与“硅-氢拉伸和弯曲模式”具有不同的能量，因此存在与这种耦合相关的同位素效应。有人认为，硅-氘弯曲模式和硅-硅横向光学声子模式之间更有效的耦合增强了硅-氘同位素效应。</p>
      </section>
      <section>
        <h4>同位素效应 6：氢和氘的不同扩散速率</h4>
        <p>氢和氘的不同质量会影响它们的相对扩散速率，并可能导致到达 Si/SiO2 界面钝化悬空键的效率不同。类似地，氢使硅悬挂键去钝化的尝试频率由 SHO 模式频率给出，因此即使在假定去钝化纯粹是电场诱导的（与同位素无关的）势垒高度降低的函数的热化学模型中，也可能存在同位素效应。</p>
      </section>
      <section>
      <ul>
        <li>McMahon W., Mamy-Randriamihaja Y., Vaidyanathan B., Nigam T., Pimparkar N. (2015) From Atoms to Circuits: Theoretical and Empirical Modeling of Hot Carrier Degradation. In: Grasser T. (eds) Hot Carrier Degradation in Semiconductor Devices. Springer, Cham. https://doi.org/10.1007/978-3-319-08994-2_1</li>
        <li>W. McMahon, Atomic-Scale Statistical Models of Semiconductor Device Reliability. PhD. Thesis, University of Illinois at Urbana-Champaign, 2001</li>
        <li>P. Avouris, R.E. Walkup, A.R. Rossi, T.-C. Shen, G.C. Abeln, J.R. Tucker, J.W. Lyding, STM-induced H atom desorption from Si(100): isotope effects and site selectivity. Chem. Phy. Lett.257, 148 (1996)</li>
        <li>C.G. Van de Walle, W.B. Jackson, Comment on reduction of hot electron degradation in metal oxide semiconductor transistors by deuterium processing. App. Phys. Lett. 69, 2441 (1996)</li>
      </ul>
      </section>
    </section>
    <section>
        <section>
          <h3>实验仪器: 安捷伦B1500</h3>
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
          <img src="/assets/images/hot-carrier/1115-数据处理2.jpg">
        </section>
        <section>
          <img src="/assets/images/hot-carrier/1115-数据处理1.jpg">
        </section>
    </section>
    <section>
      <h3>未来工作安排</h3>
      <ul>
        <li>熟悉探针台与B1500的使用</li>
        <li>进一步了解模型</li>
      </ul>
    </section>
    <section>
      <p>谢谢聆听</p>
    </section>
  </div>
</div>