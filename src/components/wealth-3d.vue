<template>
  <div id="container-3d"></div>
</template>

<script>
import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null,
      controls: null,
      scene: null,
      renderer: null,
      container: null
    };
  },
  methods: {
    init: function() {
      const container = document.getElementById("container-3d");

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xcccccc);
      scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        1,
        1000
      );
      camera.position.set(400, 200, 0);

      // controls

      const controls = new OrbitControls(camera, renderer.domElement);

      //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

      controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.dampingFactor = 0.05;

      controls.screenSpacePanning = false;

      controls.minDistance = 100;
      controls.maxDistance = 500;

      controls.maxPolarAngle = Math.PI / 2;

      // World

      var geometry = new THREE.CylinderBufferGeometry(0, 10, 30, 4, 1);
      var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true
      });

      for (var i = 0; i < 500; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 1600 - 800;
        mesh.position.y = 0;
        mesh.position.z = Math.random() * 1600 - 800;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        scene.add(mesh);
      }

      // lights

      var light = new THREE.DirectionalLight(0xffffff);
      light.position.set(1, 1, 1);
      scene.add(light);

      var light = new THREE.DirectionalLight(0x002288);
      light.position.set(-1, -1, -1);
      scene.add(light);

      var light = new THREE.AmbientLight(0x222222);
      scene.add(light);

      window.addEventListener("resize", this.onWindowResize, false);

      this.camera = camera;
      this.controls = controls;
      this.scene = scene;
      this.renderer = renderer;
      this.container = container;
    },
    onWindowResize: function() {
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>

<style scoped>
#container-3d {
  width: 100%;
  height: 400px;
}
</style>
