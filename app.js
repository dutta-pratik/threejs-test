// variables for setup

let container;
let camera;
let renderer;
let scene;
let girl;


function init(){
    container = document.querySelector(".scene")


    //create scene
    scene = new THREE.Scene();

    const fov = 35;

    const aspect = container.clientWidth/container.clientHeight;
    const near = 0.1;//meter
    const far = 50000;

    //camera setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0,1, 7);

    //light
    const ambient = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xFFFFFF,2);
    light.position.set(1,1,1);
    scene.add(light);

    //renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    container.appendChild(renderer.domElement);


    //load model
    let loader = new THREE.GLTFLoader();
    loader.load("./3d/scene.gltf", function(gltf){
        scene.add(gltf.scene);
        girl = gltf.scene.children[0];
        // renderer.render(scene, camera)
        animate(); 
    });

}

function animate(){
    requestAnimationFrame(animate);
    girl.rotation.z += 0.005;
    renderer.render(scene, camera);
}

init();

