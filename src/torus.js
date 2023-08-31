import * as THREE from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import cubeModel from './assets/cube.glb'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.setZ(50);
    camera.position.setY(0);
    camera.rotateX(0.0);

    const scene = new THREE.Scene();

    const geometry = new THREE.TorusKnotGeometry(10, 3, 128, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0x2ECC70, colorWrite: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const pointLight1 = new THREE.PointLight(0xffffff);
    pointLight1.position.set(-20, 20, 20);
    pointLight1.intensity = 1000;
    scene.add(pointLight1);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // const loader = new GLTFLoader();
    // loader.load(
    //     cubeModel,
    //     function (gltf) {
    //         scene.add(gltf.scene);
    //     },
    //     undefined,
    //     function (error) {
    //         console.error(error);
    //     });

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    var absoluteOffsetLeft = 0;
    var absoluteOffsetTop = 0;
    var obj = canvas;

    // taken from http://www.quirksmode.org/js/findpos.html
    if (obj.offsetParent) {
        do {
            absoluteOffsetLeft += obj.offsetLeft;
            absoluteOffsetTop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    } else {
        console.log("Method offsetParent not supported");
    }

    function onMouseMove(event) {
        mouse.x = ((event.clientX - absoluteOffsetLeft) / canvas.clientWidth) * 2 - 1;
        mouse.y = -((event.clientY - absoluteOffsetTop) / canvas.clientHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove, false);

    window.onresize = function () {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    };


    var targetPosition = new THREE.Vector3();

    function render(time) {
        time *= 0.001; // convert time to seconds

        torus.rotation.x = time * 0.25;
        torus.rotation.y = time * 0.5;

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            torus.material.color.set(0xff0000);
            targetPosition.set(0, 0, 60);
        }
        else {
            torus.material.color.set(0x2ECC70);
            targetPosition.set(0, 0, 50);
        }

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
});