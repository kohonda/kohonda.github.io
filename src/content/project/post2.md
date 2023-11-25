---
title: "Integration of Model-based and Learning-based Approaches"
description: "IEEE RA-L, 2022"
pubDate: "2022"
heroImage: "/project/generalized_loam.png"
---

## Generalized LOAM: LiDAR Odometry Estimation with Trainable Local Geometric Features
This paper presents a LiDAR odometry estimation framework called Generalized LOAM. Our proposed method is generalized in that it can seamlessly fuse various local geometric shapes around points to improve the position estimation accuracy compared to the conventional LiDAR odometry and mapping (LOAM) method. To utilize continuous geometric features for LiDAR odometry estimation, we incorporate tiny neural networks into a generalized iterative closest point (GICP) algorithm. These neural networks improve the data association metric and the matching cost function using local geometric features. Experiments with the KITTI benchmark demonstrate that our proposed method reduces relative trajectory errors compared to the GICP and LOAM methods.

This project was conducted as an research internship at [Smart Mobility Research Team](https://unit.aist.go.jp/digiarc/smrt/), National Institute of Advanced Industrial Science and Technology (AIST).

### Link
[Paper](https://arxiv.org/abs/2210.16510) / [DOI](https://ieeexplore.ieee.org/document/9935115) / [Video](https://youtu.be/6ksAjTQ3fCY)