---
title: Inverse Kinematics
tags: 
    - C++20
    - CMake
    - Qt
coverImage: /images/inverse-kinematics/ik.jpg
images: 
    - /images/inverse-kinematics/ik-demo.webp
repo: https://github.com/chFleschutz/inverse-kinematics-algorithms
sortPriority: 80
---

## Overview

This project implements two popular **Inverse Kinematics (IK)** algorithms in C++ and visualizes them using Qt. 
Inverse Kinematics are commonly used in Robotics and Computer Graphics to place an end-effector such as a robotic hand or a character’s foot on a desired target location. To achieve this, the entire bone chain needs to be adjusted dynamically.

The project includes implementations of the following IK algorithms:
- **Cyclic Coordinate Descent (CCD)**
- **Forward and Backward Reaching Inverse Kinematics (FABRIK)**

Both approaches run in real-time, making them suitable for interactive applications such as games. The included Qt demo provides an interactive visualization of the algorithms in action.
