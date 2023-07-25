import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

camera.position.z=3;


const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const material =new THREE.MeshDepthMaterial()

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5,16,16),
    material
)

sphere.position.x= -1.5

scene.add(sphere)

const clock =new THREE.Clock()
function animate() {
    const eltime =clock.getElapsedTime()

    sphere.rotation.y= 0.1 *eltime
    sphere.rotation.x= 0.15 *eltime
    
    requestAnimationFrame(animate)
    renderer.render(scene, camera);
}
animate()

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
});


//handle full screen
window.addEventListener("dblclick",()=>{
    if(!document.fullscreenElement){
        document.body.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
})