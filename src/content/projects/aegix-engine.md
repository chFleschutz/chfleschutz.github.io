---
title: Aegix Engine
description: A Vulkan game engine written in C++ with PBR, a framegraph for multipass rendering and ECS scene management.
coverImage: /images/aegix/aegix-helmets.webp
images: 
    - /images/aegix/aegix-helmets.webp
    - /images/aegix/aegix-sponza.webp
    - /images/aegix/aegix-lights.webp
    - /images/aegix/aegix-ui.webp
    - /images/aegix/aegix-metal-roughness.webp
tags: 
    - C++20
    - Vulkan
    - CMake
    - EnTT
    - GLFW
    - GLM
    - ImGUI
    - stb
    - tinyobjloader
repo: https://github.com/chFleschutz/aegix-engine
sortPriority: 99
---

<script>
	import CarouselImage from '$lib/components/carousel-image.svelte';
</script>


## Overview

Aegix Engine is a custom-built game engine I created to explore low-level graphics programming and game engine architecture. It serves as a foundation for experimenting with advanced rendering techniques and engine systems like ECS, editor tools and multipass rendering.

The project originally started as research for my bachelor’s thesis on Vulkan rendering and I continued to expand it with features I encountered at university and online. While not a full production engine, it implements many modern rendering techniques and serves as a sandbox for experimenting with new ideas.

The core rendering systems are contained within Aegix Engine, while smaller independent modules are split into their own libraries:

- [`aegix-assets`](https://github.com/chFleschutz/aegix-assets) - Collection of sample assets
- [`aegix-gltf`](https://github.com/chFleschutz/aegix-gltf) - Custom GLTF model loader
- [`aegix-log`](https://github.com/chFleschutz/aegix-log) - Lightweight logging system

## Features

- **Entity Component System (ECS)** - Scene management with EnTT
- **GLTF & OBJ Loading** - Custom 3D model loading 
- **Framegraph** - Multipass rendering with automatic render pass sorting
- **Deferred Rendering** - Improved lighting performance
- **Physically Based Rendering (PBR)** - Realistic lighting and materials 
- **HDR Rendering and Tone Mapping** - Enables wider color range for more visible details
- **Screen Space Ambient Occlusion (SSAO)** - Subtle shadows in crevices for improved depth perception
- **Physically Based Bloom** - Glow effect around bright areas using convolution
- **Editor UI** - Debugging and scene manipulation tools using ImGui and ImGuizmo



## Physically Based Rendering 

The engine features a physically based rendering (PBR) pipeline that produces realistic materials compared to older shading models like Phong. I implemented a metallic‑roughness workflow, where each material is defined by its **albedo**, **ambient-occlusion**, **metallic** and **roughness** properties.

This integrates naturally with the deferred rendering pipeline. Instead of computing the lighting during object rendering, the material properties are written into the **G‑Buffer**, which creates a set of images that store per‑pixel surface attributes, shown in the images below:

<CarouselImage images={[
    '/images/aegix/aegix-pbr-albedo.webp',
    '/images/aegix/aegix-pbr-ao.webp',
    '/images/aegix/aegix-pbr-metallic.webp',
    '/images/aegix/aegix-pbr-roughness.webp',
]}/>

In a subsequent stage, a compute shader combines these buffers to calculate the final lit image:

![PBR Lit](/images/aegix/aegix-pbr-lit.webp)

The PBR lighting model splits light into diffuse (soft light) and specular (shiny reflections), controlled by the material’s roughness. Diffuse reflection is modeled using a simple Lambertian term, while specular reflection is handled using the more complex **Cook‑Torrance BRDF** approximation.

One significant challenge was achieving good looking results for highly reflective surfaces such as metals and glass. Without additional data, these appear black with only sharp highlights. To solve this, I integrated **image‑based lighting (IBL)** using environment maps, which provide realistic reflections and greatly improve the look of reflective materials.



## Framegraph

Modern rendering requires multiple passes, each with dependencies on textures and buffers. Managing these manually in Vulkan quickly becomes error‑prone and inefficient.

To solve this, I implemented a custom framegraph system that:

- Tracks dependencies between render passes
- Sorts passes based on those dependencies
- Inserts the necessary resource barriers for layout transitions

For example, when rendering a frame, the framegraph ensures that the **Geometry pass** runs before the **Deferred Lighting pass**, which then feeds into **post‑processing effects** like bloom and tone mapping, all without manually sorting passes or wiring up barriers.

![Framegraph Example](/images/aegix/framegraph-example.webp)

This design makes the engine very scalable and extensible. Adding a new effect (like SSAO) only requires specifying its inputs and outputs and the framegraph takes care of scheduling it correctly.



## Lessons Learned

Working directly with Vulkan was both rewarding and challenging. Its explicit control forces you to think carefully about every detail, especially memory management and synchronization, with no “magic” happening behind the scenes. While this made the learning curve steep and mistakes easy, it also gave me a much deeper understanding of how modern graphics pipelines really work. Designing systems like the framegraph pushed me to solve problems that normally stay hidden when using higher‑level engines. 

Overall, this project gave me a bunch of practical experience with GPU resource management, debugging graphics pipelines, and creating complex systems in a modular way. These lessons continue to influence how I approach programming today.
