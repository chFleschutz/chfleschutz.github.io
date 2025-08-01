---
title: Dustveil
coverImage: /images/dustveil/dustveil-horde.webp
images: 
    - /images/dustveil/dustveil-horde.webp
    - /images/dustveil/dustveil-menu.webp
    - /images/dustveil/dustveil-poster.webp
    - /images/dustveil/dustveil-fps.webp
    - /images/dustveil/dustveil-mp.webp
    - /images/dustveil/dustveil-shot.webp
    - /images/dustveil/dustveil-down.webp
tags: 
    - Unreal Engine
    - C++
    - Multiplayer
    - Scrum
repo: https://gitlab.com/chFleschutz/dustveil
sortPriority: 98
---

## Overview

**Dustveil** is a horde shooter with co-op multiplayer developed as a university group project during my master’s program. It was built by a team of five students over one semester in Unreal Engine 5, the game combines classic FPS action with cooperative wave-survival mechanics.

The game is set on a hostile desert planet, where the players must defend the *Shredder*, a machine that collects dead enemies. Defeated enemies are transformed into controllable minions for a unique strategic twist: players can either absorb them to gain a dash ability or command them to run and explode. Survival depends on teamwork, victory is achieved by defeating all waves without the entire team being wiped out.

<div style="text-align: center;">
     <iframe title="YouTube video player"
        width="720" height="405"
        src="https://www.youtube.com/embed/pLDaQ7Zkxxc"
        frameborder="0">
    </iframe> 
</div>


## My Contribution

My primary responsibility was the implementation of the weapon and AI navigation systems. I developed the weapon mechanics, including shooting, reloading and ensuring proper multiplayer replication. Beyond that, I also worked on animations, creating custom first-person weapon animations with Unreals Control Rig and setting up Animation Blueprints to handle Animation states and fluid state transitions.

One of my main contributions was the design of the **flowfield navigation system** for the enemy AI. Unreal Engine’s default navmesh solution quickly became a bottleneck when handling large hordes of enemies. To solve this, I implemented a flowfield-based approach, where instead of calculating a seperate path for each enemy, the flowfield stores where to move next at each location. For this the environment is divided into a grid where each cell stores a directional vector for the movement direction. Enemies simply look up the vector at their position to determine in which direction they should move. 

![Flowfield Debug View](/images/dustveil/flowfield.webp)

Instead of calculated a path for each enemy the flowfield can be calculated once for all enemies. This not only solved our performance issues but also made the enemy movement appear in a coordinated fashion. It was a key factor in making the game playable with a large number of enemies.


## Lessons Learned

A key lesson from Dustveil was the importance of structured teamwork in a group project. With five developers working in parallel, tools like an issue tracker and a Scrum workflow kept us aligned and productive. Clear communication and well-defined roles proved especially important under the semester’s time pressure.

The project concluded with a presentation at the university’s project fair, where the game received very positive feedback from other students and faculty.

If you want to play the game for yourself, it is available for download on itch.io:

<div style="text-align: center;">
    <iframe title="Download Dustveil" 
        width="208" height="167"
        src="https://itch.io/embed/3670355?dark=true" 
        frameborder="0">
        <a href="https://loparde.itch.io/dust-veil">
            Dust Veil by Loparde, Burger511, chFleschutz, Ruediger
        </a>
    </iframe>
</div>
