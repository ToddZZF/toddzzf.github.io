---
layout: ppt
title: (PPT)0321工作汇报
date: 2022-03-21 09:33:00 +0800
category: ppt
thumbnail: /assets/images/hot-carrier/仪器b1500a.jpg
icon: book
excerpt: 模型与验证
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
      <h3>03/21 工作汇报</h3>
      <h4>周镇峰</h4>
    </section>
    <!-- 目录 -->
    <section>
      <h3>目录</h3>
      <ul>
        <li>模型验证</li>
      </ul>
    </section>
    <!-- 模型验证 -->
    <section>
        <section>
            热载流子模型：
            \(
                \tau = \frac{1}{1/\tau_{\rm SVE}+1/\tau_{\rm EES}+1/\tau_{MVE}}
            \)
            <br/>
            \[
                \begin{cases}
                \frac{1}{\tau_{\rm SVE}}=K_{\rm SVE}(\frac{I_{ds}}{W})^{a_1}(\frac{I_{bs}}{I_{ds}})^m\\
                \frac{1}{\tau_{\rm EES}}= K_{\rm EES}(\frac{I_{ds}}{W})^{a_2}(\frac{I_{bs}}{I_{ds}})^m\\
                \frac{1}{\tau_{\rm MVE}}= K_{MVE} V_{ds}^{a_3/2}(\frac{I_{ds}}{W})^{a_3}\exp(\frac{-E_{\rm emi}}{k_B T})
                \end{cases}
            \]
        </section>
        <section>
            <p>时间指数的拟合：<br/></p>
            \(\Delta I_{\rm Sat}/I_{\rm Sat0} = \frac{t^n}{\tau}=0.05373 \cdot x^{0.164}\)
            <img src="/assets/images/hot-carrier/40nm_stresstime_isat_exp_fit.md.jpg" style="width: 80%"/>
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
    <!-- <section>
        <section>
            <p>NBTI的影响</p>
            <img src="/assets/images/hot-carrier/STRESS-Relaxation.jpg">
        </section>
        <section>
            <p>①常用方法：直接减去相同下栅压的NBTI分量</p>
            <ol>
                <li>
                    测量HC应力（$V_{gs}=V_{ds}=V_{dd}$）下的退化 $\Delta V_{th}^{\rm HC\_TEST}$
                </li>
                <li>
                    测量NBTI应力（$V_{gs}=V_{dd},V_{ds}=0$）下的退化 $\Delta V_{th}^{\rm NBTI}$
                </li>
                <li>
                    计算HC退化 $\Delta V_{th}^{\rm HC}=\Delta V_{th}^{\rm HC\_TEST}-\Delta V_{th}^{\rm NBTI}$
                </li>
            </ol>
        </section>
        <section>
            <p>② Y. Mitani等人：通过恢复量来反推NBTI分量。这是由于NBTI存在恢复效应，而HCI暂未观察到恢复效应。</p>
            <ol>
            <li> 测量NBTI下的回复率：
            \(
                R=\Delta I_D^R/\Delta I_D^{\rm NBTI\_TEST}
            \)</li>
            <li>计算HCI下的NBTI分量：
            \(
                \Delta I_D^{\rm NBTI} = \Delta I_D^{R'}/R
            \)</li>
            <li>计算HCI下的HCI分量：
            \(
                \Delta I_D^{\rm HC}=\Delta I_D^{\rm HC\_TEST}-\Delta I_D^{\rm NBTI}
            \)</li>
            </ol>
            <blockquote><p><small>
            Y. Mitani, S. Fukatsu, D. Hagishima and K. Matsuzawa, "Lifetime prediction of channel hot carrier degradation in pMOSFETs separating NBTI component," 2012 IEEE International Conference on IC Design & Technology, 2012, pp. 1-4, doi: 10.1109/ICICDT.2012.6232842.
            </small></p></blockquote>
        </section>
        <section>
            <p>③Akiko Masada等人：可以监测栅电流密度 $J_g$ 来分离NBTI分量。</p>
            <ol>
            <li>
            通过 NBTI 测试求出 $\Delta V_{\rm th}-J_g$ 的关系式
            </li>
            <li>
            将 HC 应力下的 $J_g^{\rm HC}$ 代入求得 $\Delta V_{\rm th}^{\rm NBTI}$
            </li>
            <li>
            \(
                \Delta V_{\rm th}^{\rm HC}=\Delta V_{\rm th}^{\rm Total}-\Delta V^{\rm NBTI}_{\rm th}
            \)
            </li>
            </ol>
            <blockquote><p><small>
            Masada, A., Hirano, I., Fukatsu, S., & Mitani, Y. (2010). "Method of Decoupling the Bias Temperature Instability Component from Hot Carrier Degradation in Ultrathin High-kMetal–Oxide–Semiconductor Field-Effect Transistors." Japanese Journal of Applied Physics, 49(7), 071102. doi:10.1143/jjap.49.071102.
            </small></p></blockquote>
        </section>
    </section> -->
    <section>
        <p>下两周安排：实验</p>
    </section>
    <section>
      <p>谢谢聆听</p>
    </section>
  </div>
</div>