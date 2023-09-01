import * as THREE from 'three'

import planetDiffuse from './assets/venus_color.jpg'
import planetRoughness from './assets/planet_roughness.png'
import planetNormal from './assets/planet_normal.png'


document.addEventListener('DOMContentLoaded', () => {
    // Set up the renderer, canvas, and camera
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    camera.position.setZ(100);
    camera.position.setY(0);
    camera.rotateX(0.0);

    // Set up the scene
    const scene = new THREE.Scene();

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const colorTexture = textureLoader.load(planetDiffuse);
    // const roughnessMap = textureLoader.load(planetRoughness);
    // const normalMap = textureLoader.load(planetNormal);

    // Create material
    const planetMaterial = new THREE.MeshStandardMaterial({
        map: colorTexture,
        //   roughnessMap: roughnessMap, 
        //   normalMap: normalMap,       
    });

    const planetGeometry = new THREE.SphereGeometry(10, 32, 128, 32);
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    const boxGeometry = new THREE.BoxGeometry(25, 25, 25);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, wireframe: true });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    const pointLight1 = new THREE.PointLight(0xffffff);
    pointLight1.position.set(-20, 20, 20);
    pointLight1.intensity = 1000;
    scene.add(pointLight1);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 0.5;
    scene.add(ambientLight);


    // Calculate the absolute offset of the canvas on the page
    var absoluteOffsetLeft = 0;
    var absoluteOffsetTop = 0;
    // taken from http://www.quirksmode.org/js/findpos.html
    function calcAbsoluteOffset(obj) {
        absoluteOffsetLeft = 0;
        absoluteOffsetTop = 0;
        if (obj.offsetParent) {
            do {
                absoluteOffsetLeft += obj.offsetLeft;
                absoluteOffsetTop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        } else {
            console.log("Method offsetParent not supported");
        }
    }
    calcAbsoluteOffset(canvas);

    // Create a mouse vector to store the mouse position and update it on mouse move
    var mouse = new THREE.Vector2();
    function onMouseMove(event) {
        mouse.x = ((event.clientX - absoluteOffsetLeft) / canvas.clientWidth) * 2 - 1;
        mouse.y = -((event.clientY - absoluteOffsetTop) / canvas.clientHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove, false);

    // Update the camera aspect ratio and renderer size on window resize and recalculate the absolute offset
    function onWindowResize() {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        calcAbsoluteOffset(canvas);
    }
    window.addEventListener('resize', onWindowResize, false);

    // Render Loop
    var raycaster = new THREE.Raycaster();
    let previousTime = performance.now();
    function renderFrame(time) {
        time *= 0.001; // convert time to seconds
        const deltaTime = time - previousTime;
        previousTime = time;

        // Cast a ray from the camera to the mouse position and check if it intersects the planet
        var planetRotationSpeed = 0.5;
        var planetTargetScale = 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(planet);
        if (intersects.length > 0) {
            planetRotationSpeed = 1.5;
            planetTargetScale = 1.1;
        } else {
            planetRotationSpeed = 0.5;
            planetTargetScale = 1;
        }

        planet.rotateOnAxis(new THREE.Vector3(0, 0.917, 0.398), deltaTime * planetRotationSpeed);
        planet.scale.lerp(new THREE.Vector3(planetTargetScale, planetTargetScale, planetTargetScale), 0.2);

        // Rotate the box to always look at the mouse
        var mouseInfluence = 5;
        box.lookAt(-mouse.x * mouseInfluence, -mouse.y * mouseInfluence, -100);


        renderer.render(scene, camera);
        requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
});
