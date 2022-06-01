---
layout: ppt
title: (PPT)0307工作汇报
date: 2022-03-07 10:47:00 +0800
category: ppt
thumbnail: ./images/hot-carrier/仪器b1500a.jpg
icon: book
summary: 简述TCAD仿真流程
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
      <h3>03/07 工作汇报</h3>
      <h4>周镇峰</h4>
    </section>
    <section>
      <h3>目录</h3>
      <ol>
        <li>实验</li>
        <li>仿真</li>
        <li>论文</li>
      </ol>
    </section>
    <!-- 物理模型 -->
    <section>
        <section>
            <h3>实验</h3>
            <p>由于实验仪器正在维修，还未开始实验。</p>
        </section>
    </section>
    <section>
        <section>
            <h3>仿真</h3>
            <p>利用TCAD进行仿真</p>
        </section>
        <section>
            <p>使用 Atlas 语法形成晶体管</p>
<!--代码-->
<pre><code data-line-numbers>go atlas
#
# MESH DEFINITION

mesh    
x.m loc=0.0   spacing=0.1
x.m loc=0.5   spacing=0.1 
x.m loc=0.65   spacing=0.025 
x.m loc=0.75  spacing=0.025
x.m loc=0.9   spacing=0.005
x.m loc=1.2   spacing=0.1
x.m loc=1.5   spacing=0.1

y.m loc=-0.02 spacing=0.005
y.m loc=0.0   spacing=0.001
y.m loc=0.1  spacing=0.025
y.m loc=0.2  spacing=0.05
y.m loc=0.4   spacing=0.05
y.m loc=1.0   spacing=0.2
y.m loc=2.0   spacing=0.5

# REGIONS AND ELECTRODES
region num=1 y.min=0 silicon
region num=2 y.max=0.0 oxide
elect num=1 name=gate x.min=0.5 length=0.5 y.min=-0.02 y.max=-0.02
elect num=2 name=source left    length=0.2 y.min=0.0 y.max=0.0
elect num=3 name=drain  right   length=0.2 y.min=0.0 y.max=0.0
elect num=4 name=substrate substrate
# DEVICE DOPING
doping uniform p.type conc=2.e16
doping gauss p.type conc=1.e17 char=0.1
doping gauss n.type conc=1.e20 x.right=0.5 junc=0.2 ratio=0.6
doping gauss n.type conc=1.e20 x.left=1.0 junc=0.2 ratio=0.6

save outfile=mos2ex02_0.str
</code></pre>
        </section>
        <section>
            <p>Id/Vgs 测试</p>
<!--代码-->
<pre><code data-line-numbers>### PRE-STRESSED TEST
go atlas
# IMPORT THE MESH
mesh inf=mos2ex02_0.str master.in
# MATERIAL CONTACT INTERFACE AND MODELS
contact num=1 n.polysilicon
interf qf=5.e10
models temp=300 print srh auger cvt  

# SOLUTIONS
solve init 
save outf=mos2ex02_1.str 
tonyplot mos2ex02_1.str -set mos2ex02_1.set

method newton trap carr=1 electron
solve prev
solve vdrain=0.1
log outf=mos2ex02_2.log
solve vgate=0.5 vstep=0.25 name=gate vfinal=6.
</code></pre>
        </section>
        <section>
            <p>高压应力 1000 秒</p>
<!--代码-->
<pre><code data-line-numbers>### DEVICE STRESSING
go atlas
# IMPORT DEVICE STRUCURE
mesh inf=mos2ex02_0.str master.in

# MATERIAL CONTACT INTERFACE AND MODELS
contact num=1 n.polysilicon
interf qf=5.e10
models temp=300 print srh cvt hei hcte.el devdeg.e nearflg ig.elinf=9.4e-7
#impact  selb
degradation f.nta=mos2ex02_devdeg.nta sigmae=2.e-15 sigmah=1.e-17

 
# SOLUTIONS
solve init
method newton trap carr=1
solve
solve vgate=1.5
solve vdrain=0.1
solve vdrain=0.2
solve vdrain=0.5 vstep=0.5 name=drain vfinal=3
solve vdrain=3.3

method  newton trap quasistatic climit=1e-5 carr=2 dt.max=1000
log outf=mos2ex02_3.log
output devdeg
solve tstep=1e-5 tstop=0.01 
save outf=mos2ex02_0_01s.str
solve tstep=1e-3 tstop=0.1 
save outf=mos2ex02_0_1s.str
solve tstep=1e-2 tstop=1 
save outf=mos2ex02_1s.str
solve tstep=1e-2 tstop=1000 
save outf=mos2ex02_1000s.str
solve tstep=1e3 tstop=10000 
save outf=mos2ex02_10000s.str
</code></pre>
        </section>
        <section>
            <p>在各种应力时间下对器件进行 Id/Vgs 测试。</p>
<!--代码-->
<pre><code data-line-numbers>### STRESSED TEST AT 0.01 s
go atlas
# IMPORT MESH
mesh inf=mos2ex02_0_01s.str master.in

# MATERIAL CONTACT INTERFACE AND MODELS
contact num=1 n.polysilicon
interf qf=5.e10
models temp=300 print srh auger cvt  

# SOLUTIONS
load infile=mos2ex02_0_01s.str master
solve init 
method newton trap carr=1 electron
solve
solve vdrain=0.1

log outf=mos2ex02_0_01s.log
solve vgate=0.5 vstep=0.25 name=gate vfinal=6.
</code></pre>
        </section>
        <section>
            <p>退化前后的I-V特性</p>
<pre><code data-line-numbers>tonyplot -overlay mos2ex02_0_1s.log mos2ex02_0_01s.log mos2ex02_2.log
</code></pre>
            <img src="../images/hot-carrier/tcad_example.jpg" width="70%">
        </section>
    </section>
    <section>
        <section>
            <h3>论文</h3>
            <p>正在写物理机理部分</p>
            <ol>
                <li>
                载流子获得能量；
                <ul>
                  <li>从电场中直接获得能量</li>
                  <li>载流子之间的碰撞散射</li>
                </ul>
                </li>
                <li>
                载流子轰击Si-H键，造成Si-H键断裂，形成陷阱；
                <ul>
                  <li>单一振荡激发</li>
                  <li>多重振荡激发</li>
                </ul>
                </li>
                <li>陷阱对器件特性产生影响。</li>
                <li>载流子注入对器件特性产生影响。</li>
            </ol>
        </section>
    </section>
    <section>
        <p>谢谢聆听</p>
    </section>
  </div>
</div>