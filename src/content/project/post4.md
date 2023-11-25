---
title: "Stochastic Optimal Control based on Model Predictive Path Integral"
description: "Preprint, 2023"
pubDate: "2023"
heroImage: "/project/svg_mppi.png"
---

## Stein Variational Guided Model Predictive Path Integral Control: Proposal and Experiments with Fast Maneuvering Vehicles
This paper presents a novel Stochastic Optimal Control (SOC) method based on Model Predictive Path Integral control (MPPI), named Stein Variational Guided MPPI (SVG-MPPI), designed to handle rapidly shifting multimodal optimal action distributions. While MPPI can find a Gaussianapproximated optimal action distribution in closed form, i.e., without iterative solution updates, it struggles with multimodality of the optimal distributions, such as those involving nonconvex constraints for obstacle avoidance. This is due to the less representative nature of the Gaussian. To overcome this limitation, our method aims to identify a target mode of the optimal distribution and guide the solution to converge to fit it. In the proposed method, the target mode is roughly estimated using a modified Stein Variational Gradient Descent (SVGD) method and embedded into the MPPI algorithm to find a closedform “mode-seeking” solution that covers only the target mode, thus preserving the fast convergence property of MPPI. Our simulation and real-world experimental results demonstrate that SVG-MPPI outperforms both the original MPPI and other state-of-the-art sampling-based SOC algorithms in terms of path-tracking and obstacle-avoidance capabilities.


### Link
[Paper](https://arxiv.org/abs/2309.11040) / [Video](https://www.youtube.com/watch?v=ML_aOYQIDL0) / [Code](https://github.com/kohonda/proj-svg_mppi)