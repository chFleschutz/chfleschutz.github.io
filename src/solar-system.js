import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// import cubeModel from './assets/cube.glb'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.setZ(85);
    camera.position.setY(30);
    camera.rotateX(-0.35);

    const scene = new THREE.Scene();

    const pointLight1 = new THREE.PointLight(0xffffff);
    pointLight1.intensity = 10000;
    scene.add(pointLight1);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const sunRadius = 5;    

    const mercuryRadius = 1;
    const mercuryOrbitRadius = 5;
    const mercuryOrbitSpeed = 1;

    const venusRadius = 1.5;
    const venusOrbitRadius = 7;
    const venusOrbitSpeed = 0.75;

    const earthRadius = 2;
    const earthOrbitSpeed = 0.5;
    const earthOrbitRadius = 10;

    const moonRadius = 0.5;
    const moonOrbitRadius = 2;
    const moonOrbitSpeed = 2;

    const marsRadius = 1.5;
    const marsOrbitRadius = 15;
    const marsOrbitSpeed = 0.25;

    const jupiterRadius = 3;
    const jupiterOrbitRadius = 20;
    const jupiterOrbitSpeed = 0.125;

    const saturnRadius = 2.5;
    const saturnOrbitRadius = 25;
    const saturnOrbitSpeed = 0.0625;

    const uranusRadius = 2;
    const uranusOrbitRadius = 30;
    const uranusOrbitSpeed = 0.03125;

    const neptuneRadius = 2;
    const neptuneOrbitRadius = 35;
    const neptuneOrbitSpeed = 0.015625;

    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(sunRadius, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xfcdc0a })
    );
    scene.add(sun);

    const mercury = new THREE.Mesh(
        new THREE.SphereGeometry(mercuryRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0x888888 })
    );
    scene.add(mercury);

    const venus = new THREE.Mesh(
        new THREE.SphereGeometry(venusRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xffa500 })
    );
    scene.add(venus);

    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(earthRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0x0000ff })
    );
    scene.add(earth);

    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(moonRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0x888888 })
    );
    scene.add(moon);

    const mars = new THREE.Mesh(
        new THREE.SphereGeometry(marsRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    scene.add(mars);

    const jupiter = new THREE.Mesh(
        new THREE.SphereGeometry(jupiterRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    scene.add(jupiter);

    const saturn = new THREE.Mesh(
        new THREE.SphereGeometry(saturnRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    scene.add(saturn);

    const uranus = new THREE.Mesh(
        new THREE.SphereGeometry(uranusRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    scene.add(uranus);

    const neptune = new THREE.Mesh(
        new THREE.SphereGeometry(neptuneRadius, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    scene.add(neptune);


    window.onresize = function () {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    };

    const randomTimeOffset = Math.random() * 100000 + 1000;

    function render(time) {
        time += randomTimeOffset;
        time *= 0.001; // convert time to seconds
        time *= 0.5; // slow down the animation   

        sun.rotation.y = time;

        mercury.position.x = Math.cos(mercuryOrbitSpeed * time) * mercuryOrbitRadius;
        mercury.position.z = Math.sin(mercuryOrbitSpeed * time) * mercuryOrbitRadius;

        venus.position.x = Math.cos(venusOrbitSpeed * time) * venusOrbitRadius;
        venus.position.z = Math.sin(venusOrbitSpeed * time) * venusOrbitRadius;

        earth.position.x = Math.cos(earthOrbitSpeed * time) * earthOrbitRadius;
        earth.position.z = Math.sin(earthOrbitSpeed * time) * earthOrbitRadius;

        moon.position.x = earth.position.x + Math.cos(moonOrbitSpeed * time) * moonOrbitRadius;
        moon.position.z = earth.position.z + Math.sin(moonOrbitSpeed * time) * moonOrbitRadius;

        mars.position.x = Math.cos(marsOrbitSpeed * time) * marsOrbitRadius;
        mars.position.z = Math.sin(marsOrbitSpeed * time) * marsOrbitRadius;

        jupiter.position.x = Math.cos(jupiterOrbitSpeed * time) * jupiterOrbitRadius;
        jupiter.position.z = Math.sin(jupiterOrbitSpeed * time) * jupiterOrbitRadius;

        saturn.position.x = Math.cos(saturnOrbitSpeed * time) * saturnOrbitRadius;
        saturn.position.z = Math.sin(saturnOrbitSpeed * time) * saturnOrbitRadius;

        uranus.position.x = Math.cos(uranusOrbitSpeed * time) * uranusOrbitRadius;
        uranus.position.z = Math.sin(uranusOrbitSpeed * time) * uranusOrbitRadius;

        neptune.position.x = Math.cos(neptuneOrbitSpeed * time) * neptuneOrbitRadius;
        neptune.position.z = Math.sin(neptuneOrbitSpeed * time) * neptuneOrbitRadius;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
});