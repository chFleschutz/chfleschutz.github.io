import * as THREE from 'three'

// import planetColor from './assets/earth_color.jpg'
import planetColor from './assets/paint-seamlesss.png'
import ringColor from './assets/ring.png'
import painting from './assets/painting.png'


document.addEventListener('DOMContentLoaded', () => {
    // Set up the renderer, canvas, and camera
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    camera.position.setZ(80);
    camera.position.setY(0);
    camera.rotateX(0.0);
    
    // Setup objects
    const textureLoader = new THREE.TextureLoader();

    const boxGeometry = new THREE.BoxGeometry(25, 25, 25);
    const boxMaterial = new THREE.MeshStandardMaterial({ wireframe: true, visible: false});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);

    const planetMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(planetColor),
    });
    const planetGeometry = new THREE.SphereGeometry(10, 32, 128, 32);
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    const torusGeometry = new THREE.TorusGeometry(15, 2, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ 
        map: textureLoader.load(ringColor),
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);

    const planetController = new THREE.Object3D();

    // Set up the scene
    const scene = new THREE.Scene();
    scene.add(box);

    box.add(planetController);
    planetController.rotateX(-30 * (Math.PI / 180));
    planetController.rotateZ(-10 * (Math.PI / 180));

    planetController.add(planet);

    torus.rotateX(90 * (Math.PI / 180));
    torus.scale.set(1, 1, .01);
    planetController.add(torus);


    // Add lights
    const pointLight1 = new THREE.PointLight(0xffffff);
    pointLight1.position.set(-30, 20, 50);
    pointLight1.intensity = 2000;
    scene.add(pointLight1);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 2;
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
    var mouse = new THREE.Vector2(-1, 1); // start mouse at top left corner
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

    let clickCount = 0;
    function onMouseClick() {
        if (raycaster.intersectObject(planet).length > 0) {
            clickCount++;
        }

        if (clickCount > 20) {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            clickCount = 0;
        }
    }
    window.addEventListener('click', onMouseClick, false);

    // Render Loop
    var raycaster = new THREE.Raycaster();
    let previousTime = performance.now();
    function renderFrame(time) {
        time *= 0.001; // convert time to seconds
        const deltaTime = time - previousTime;
        previousTime = time;

        // Cast a ray from the camera to the mouse position and check if it intersects the planet
        var planetRotationSpeed = 0.4;
        var planetTargetScale = 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(planetController);
        if (intersects.length > 0) {
            planetRotationSpeed = 0.8;
            planetTargetScale = 1.1;
        }
        
        // Rotate the box to always look at the mouse
        var mouseInfluence = 10;
        box.lookAt(-mouse.x * mouseInfluence, -mouse.y * mouseInfluence, -100);

        planetController.rotateOnAxis(new THREE.Vector3(0, 1, 0), deltaTime * planetRotationSpeed);
        planetController.scale.lerp(new THREE.Vector3(planetTargetScale, planetTargetScale, planetTargetScale), 0.2);

        renderer.render(scene, camera);
        requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
});
