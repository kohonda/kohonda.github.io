---
title: "Autonomous Mobile Robot Navigation with Deep Reinforcement Learning"
description: "Preprint, 2023"
pubDate: "Apr. 2023"
heroImage: "/project/rl_replanner.png"
---

### When to Replan? An Adaptive Replanning Strategy for Autonomous Navigation using Deep Reinforcement Learning (Preprint, 2023)
The hierarchy of global and local planners is one of the most commonly utilized system designs in autonomous robot navigation. While the global planner generates a reference path from the current to goal locations based on the prebuilt static map, the local planner produces a kinodynamic trajectory to follow the reference path while avoiding perceived obstacles. To account for unforeseen or dynamic obstacles not present on the pre-built map, “when to replan” the reference path is critical for the success of safe and efficient navigation. However, determining the ideal timing to execute replanning in such partially unknown environments still remains an open question. In this work, we first conduct an extensive simulation experiment to compare several common replanning strategies and confirm that effective strategies are highly dependent on the environment as well as the global and local planners. Based on this insight, we derive a new adaptive replanning strategy based on deep reinforcement learning, which can learn from experience to decide appropriate replanning timings in the given environment and planning setups. Our experimental results demonstrate that the proposed replanner can perform on par or even better than the current best-performing strategies in multiple situations regarding navigation robustness and efficiency.

This project was conducted as an research internship at [OMRON SINIC X Corp.](https://www.omron.com/sinicx/en/).

### Link
[Paper](https://arxiv.org/abs/2304.12046) / [Video](https://www.youtube.com/watch?v=W8nBFKDxsb0)