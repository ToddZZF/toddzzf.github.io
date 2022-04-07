---
layout: ppt
title: (PPT)0407中期汇报
date: 2022-04-07 14:35:00 +0800
category: ppt
thumbnail: /assets/images/hot-carrier/仪器b1500a.jpg
icon: book
excerpt: 仿真
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
      <h3>04/07 中期汇报</h3>
      <h4>周镇峰</h4>
    </section>
    <!-- 目录 -->
    <section>
      <h3>研究指标</h3>
      <ol>
        <li>考虑饱和效应的PMOS HCI模型✅</li>
        <li>
        平面工艺PMOSFET
            <ul>
                <li>实验结果⭕</li>
                <li>模型结果✅（根据论文数据）</li>
                <li>仿真结果✅</li>
            </ul>
        </li>
        <li>
        FinFET工艺PMOSFET
            <ul>
                <li>实验结果❌</li>
                <li>模型结果⭕（根据仿真数据）</li>
                <li>仿真结果⭕</li>
            </ul>
        </li>
      </ol>
      <p style="text-align: center;">✅：已完成；⭕：正在做；❌：无法完成</p>
    </section>
    <!-- 模型验证 -->
    <section>
        <section>
            热载流子模型：
            <div class="">
                <div>
                <p>
                \[
                    \%{\rm degradation}(t)=\frac{1}{\tau} \frac{a\cdot t^n}{1+a\cdot t^n}
                \]
                \[
                    \tau = \frac{1}{1/\tau_{\rm SVE}+1/\tau_{\rm EES}+1/\tau_{MVE}}
                \]
                </p>
                </div>
                <div>
                <p>
                \[
                    \begin{cases}
                    \frac{1}{\tau_{\rm SVE}}=K_{\rm SVE}(\frac{I_{ds}}{W})^{a_1}(\frac{I_{bs}}{I_{ds}})^m\\
                    \frac{1}{\tau_{\rm EES}}= K_{\rm EES}(\frac{I_{ds}}{W})^{a_2}(\frac{I_{bs}}{I_{ds}})^m\\
                    \frac{1}{\tau_{\rm MVE}}= K_{MVE} V_{ds}^{a_3/2}(\frac{I_{ds}}{W})^{a_3}\exp(\frac{-E_{\rm emi}}{k_B T})
                    \end{cases}
                \]
                </p>
                </div>
            </div>
        </section>
        <section data-markdown>
            <script type="text/template">
            根据论文，取 $a_1=1$，$a_2=3$，$a_3=12$，拟合得到

|$V_{ds}$|$K_{\rm SVE}'$|$K_{\rm EES}'$|$K_{\rm MVE}'$|R-square|
|--------|--------------|-----|--------|--------|
|-2|-0.434|3.778e+06|2.857e+34|0.988|
|-1.8|0.008001|1.014e+05|3.32e+34|0.9998|
|-1.6|-0.1872|9.232e+05|2.063e+34|0.9993|
|-1.4|-0.0821|4.531e+05|1.622e+33|0.9264|
|-1.21|-0.09683|2.977e+05|3.424e+33|0.9645|
            </script>
        </section>
        <section>
            <p>拟合效果如图所示：（\(1/\tau\) vs \(|I_{ds}/W|\)）</p>
            <div style="display:flex;flex-wrap:wrap;">
            <img src="/assets/images/hot-carrier/40nm_isat_1_div_tau_fit_-2V.jpg" style="width: 33%"/>
            <img src="/assets/images/hot-carrier/40nm_isat_1_div_tau_fit_-1.8V.jpg" style="width: 33%"/>
            <img src="/assets/images/hot-carrier/40nm_isat_1_div_tau_fit_-1.6V.jpg" style="width: 33%"/>
            <img src="/assets/images/hot-carrier/40nm_isat_1_div_tau_fit_-1.4V.jpg" style="width: 33%"/>
            <img src="/assets/images/hot-carrier/40nm_isat_1_div_tau_fit_-1.21V.jpg" style="width: 33%"/>
            </div>
        </section>
        <section>
            数据来源：
            <blockquote><p><small>
            A. Bravaix, V. Huard, D. Goguenheim and E. Vincent, “Hot-carrier to cold-carrier device lifetime modeling with temperature for low power 40nm Si-bulk NMOS and PMOS FETs,” 2011 International Electron Devices Meeting, 2011, pp. 27.5.1-27.5.4, doi: 10.1109/IEDM.2011.6131625.
            </small></p></blockquote>
        </section>
    </section>
    <section>
        <h3>仿真</h3>
        <img src="/assets/images/hot-carrier/0407-仿真.jpg" width="50%"/>
    </section>
    <section>
        <p>下两周安排：仿真、实验</p>
    </section>
    <section>
      <p>谢谢聆听</p>
    </section>
  </div>
</div>