import * as THREE from 'three'

import painting from './assets/painting.png'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.setZ(40);
    camera.position.setY(0);
    camera.rotateX(0.0);

    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(10, 32, 128, 32);
    const material = new THREE.MeshPhongMaterial();
    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(painting, (texture) => {
        material.map = texture;
        material.needsUpdate = true;
      });

    const pointLight1 = new THREE.PointLight(0xffffff);
    pointLight1.position.set(-20, 20, 20);
    pointLight1.intensity = 1000;
    scene.add(pointLight1);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

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

    let previousTime = performance.now();
    function render(time) {
        time *= 0.001; // convert time to seconds
        const deltaTime = time - previousTime;
        previousTime = time;

        planet.rotateOnAxis(new THREE.Vector3(0, 0.917, 0.398), deltaTime * 0.5);

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
});
