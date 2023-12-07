---
title: "Generation of Diverse Autonomous Driving Behaviors Using Model Predictive Control"
description: "Ph.D. Dissertation, IEEE IV / ITSC / IROS late breaking, Asian Journal of Control, 2020-2023"
pubDate: "june 2023"
heroImage: "/project/thum_mpc_builder.png"
---

<img src="/project/mpc_builder.png" alt="arch">

In this project, we propose an Model Predictive Control (MPC) based motion planning framework that can achieve diverse autonomous driving behaviors by switching multiple Optimal Control Problems (OCPs). MPC can express a wide range of behaviors depending on the design of the OCP. However, to realize diverse and complex driving behaviors, we need to switch between a large number of OCPs. In this scheme, how to efficiently represent these OCPs in the system and safely switch between them remains an open question. This project has tackled these challenges in a bottom-up approach and proposed a framework that can generate diverse driving behaviors with less manual engineering effort.

First, we derive a method to smoothly connect two general nonlinear OCPs without infeasibility when switching. In the proposed method, we define an intermediate OCP (iOCP) from the pre- and post-switching OCPs. The iOCP guides the state to the feasible set of the post-switching OCP by an automatically defined penalty function and performs the switching. The proposed method reduces the manual effort of designing switching rules and cost functions to induce the state. We then propose a multi-task MPC framework that generates diverse driving behaviors with a small number of designed elements. In this framework, we propose a primitive of OCPs and an additive binary operator to construct OCPs in real time. This scheme allows us to easily represent different OCPs by combining multiple OCP primitives and add/replace functions. Finally, we develop a multi-task AD motion planning pipeline by integrating iOCP and the method for composing OCPs from primitives.


### Related Works
- Multi-task Model Predictive Control based on Continuation with Intermediate Mode, IEEE ITSC, 2020. [DOI](https://ieeexplore.ieee.org/abstract/document/9294663)
- Connection of Nonlinear Model Predictive Controllers for Smooth Task Switching in Autonomous Driving, Asian Journal of Control, 2021. [Paper](https://onlinelibrary.wiley.com/share/RSRHYMZIRF9FFHFWKNBZ?target=10.1002/asjc.2892) / [DOI](https://onlinelibrary.wiley.com/doi/full/10.1002/asjc.2892)
- MPC Builder for Autonomous Drive: Automatic Generation of MPCs for Motion Planning and Control, IEEE IV, 2023. [Paper](https://arxiv.org/abs/2210.16512) / [DOI](https://ieeexplore.ieee.org/abstract/document/10186711) / [Video](https://youtu.be/15J2p26OoLI)