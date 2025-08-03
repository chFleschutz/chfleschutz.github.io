---
title: Bachelor Thesis 
tags: 
    - C++
    - Qt
    - OpenGl
    - Vulkan
coverImage: /images/bachelor-thesis/shadow-map.webp
images: 
    - /images/bachelor-thesis/shadow-map.webp
    - /images/bachelor-thesis/solar-system.png
    - /images/bachelor-thesis/coloseum.webp
sortPriority: 60
---

## Overview

In my **Bachelor’s thesis**, I extended an existing OpenGL-based computer graphics framework, which is used in the university’s Computer Graphics lecture, by integrating a **Vulkan renderer**. The goal was not only to add Vulkan support but also to design an **abstract rendering interface**, allowing OpenGL and Vulkan to be used interchangeably.

This required handling Vulkan’s low-level responsibilities such as explicit memory management and synchronization, while also keeping the interface consistent across both APIs. The result is a flexible framework where either rendering API can be used through the same high-level interface, making it easier to learn, compare and experiment with both graphics APIs.
