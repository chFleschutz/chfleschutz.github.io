import * as THREE from 'three'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.setZ(30);

    const scene = new THREE.Scene();

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);


    function render(time) {
        time *= 0.001; // convert time to seconds

        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        torus.rotation.x = time;
        torus.rotation.y = time;
        torus.rotation.z = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
});