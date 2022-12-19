---
title: 论文写作课程
date: 2022-12-3 20:37:00
math: true
---

## Research Proposal Homework

### Title

Research on Hot Carrier Injection Model of nanoscale MOS Transistor for EDA tools

### Abstract

Hot carrier injection (HCI) is one of the main mechanisms of transistor performance degradation. In order to better evaluate the degradation effect caused by HCI in the circuit design stage, it is necessary to carry out HCI effect modeling research suitable for EDA tool simulation. In this research, we will performance hot carrier test on nanoscale MOS devices, analyse the mechanism of HCI, and derive HCI model from the experiment data.

### Introduction

Hot carriers refer to carriers whose energy is several kT or more higher than the Fermi level. These carriers are not in thermal equilibrium with the lattice, and when the energy reaches or exceeds the Si/SiO2 interface barrier, they will Injected into the oxide layer to generate interface states in the oxide layer or be trapped, making the charge of the oxide layer increase or fluctuate unstable. This is the hot carrier injection (HCI) effect. [1] The hot carrier injection effect will affect the parameters of the MOS device, causing the flat band voltage (VFB), threshold voltage (Vth) to drift, and the transconductance (gm) to decrease. The degradation of device parameters further affects the performance of integrated circuits, and when the degradation reaches a certain level, it will lead to circuit failure.

In order to make the integrated circuit achieve the expected life, it is necessary to simulate the reliability of the circuit in the design stage. Currently the most commonly used hot carrier degradation model is the lucky electron model (LEM) proposed by Hu et al. [2], which is also the guiding principle for most industry standard hot carrier models and prediction methods. However, with the continuous reduction of device size and the decrease of operating voltage, the lucky electron model can no longer express the hot carrier effect of nanoscale field effect transistors well. Therefore, new mechanisms need to be considered in the model.

This research will deliver a HCI model that is based on HCI experiment on nanoscale MOS. It provides better prediction device degradation, and consumes small computational resource, so it is suitable for EDA simulation.

### Literature Review(摘自论文)

As the size of devices shrinks to the nanoscale, researchers have proposed some new mechanisms to describe the generation of hot carrier effects, such as electron-electron scattering (Electron-Electron Scattering, EES), multiple vibration excitation (Multiple Vibration Excitation, MVE ), etc. These mechanisms are related to the energy distribution function of carriers, so this type of model is called the energy-driven paradigm model [3,4]. The key to this model is to solve the carrier energy distribution function (Energy Distribution Function, EDF), so as to find out the contribution of different mechanisms to the hot carrier effect. The carrier energy distribution function can be obtained by solving the Boltzmann Transport Equation (BTE). There are two methods used to obtain the solution of BTE: Monte-Carlo method and method based on Spherial Harmonics Expansion. Both methods require a lot of calculations, so they are not suitable for integration into EDA simulation tools. Therefore, it is necessary to simplify these physical models to obtain a compact model suitable for EDA, which can fully reflect the hot carrier effect of nanoscale devices and improve its computational efficiency.

### Research Approach

Commonly used device models in circuit simulators include analytical model, look-up table model, and empirical model [5]:

- Analytic models: Model equations are derived directly from the device physics, and these models accurately describe the device to a first-order approximation.
- Look-up table model: Store the IV characteristics of devices with different degrees of degradation in the form of a table, and the basic data comes from the results obtained from experiments or simulators. The advantage of the look-up table model is that it is not dependent on process technology and can be built in a shorter time than the physical model. Its disadvantage is that this model cannot give the physical meaning of device characteristics.
- Empirical model: not based on device physics, but purely obtained by fitting experimental curves. The advantage of this type of model is that it requires less data storage than the look-up table model, and it takes less time to build the model than other approximate models.

Considering that the HCI experiment takes a long time, and the damage to the device is irreversible, and the cost of testing the device is too high to carry out a large number of tests, it is not suitable to establish a look-up table model. Therefore, this research will model the hot carrier degradation on the basis of analytical model and empirical model.

### Research Deliverables

In this work, we are going to deliver:

1. a paper
2. a model that can be used in EDA simulation

### Timetable

|Stage|Details|Time|
|-----|-------|----|
|Experiment|Conduct hot carrier test on PMOS device|1 month|
|Data Processing|Extract device parameters from experiment data|1 week|
|Modeling|Modeling with experimental data|2 weeks|
|Paper writing|Draft our paper|2 weeks|

### Reference

[1] Xiaowen Zhang, Yunfei en. Reliability and Evaluation Method of Semiconductor Integrated Circuit[M]. Beijing: Publishing House of Electronics Industry, 2015. 142.

[2] Tam S, Ko P K, Hu C. Lucky-electron model of channel hot-electron injection in MOSFET's[J]. IEEE Transactions on Electron Devices, 1984, 31(9): 1116-1125.

[3]	Rauch S E, Guarin F. The Energy Driven Hot Carrier Model[A]. Tibor. Hot Carrier Degradation in Semiconductor Devices[C]. London: Springer, 2015: 29-56.

[4] A. Bravaix, V. Huard, F. Cacho, X. Federspiel, D. Roy et al., Hot-carrier degradation in decananometer CMOS nodes: From an energy driven to a unified current degradation modeling by multiple carrier degradation process, in Hot-Carrier Degradation, ed. by T. Grasser (Springer, Wien/New York, 2015)

[5] Starkov I. Comprehensive physical modeling of hot-carrier induced degradation[D]. TU Wien, 2013.

