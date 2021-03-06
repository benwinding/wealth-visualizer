<template>
  <div>
    <div id="container-3d"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import * as meshes from "./meshes/index";
import * as money from "./money-generator";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { PathName } from "./paths";

export default {
  props: ["value"],
  watch: {
    value: function(newValue, oldValue) {
      meshes.setState(newValue);
    }
  },
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
      scene.background = new THREE.Color(0xfff3b8);
      scene.fog = new THREE.FogExp2(0xcccccc, 0.0003);

      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        1,
        1000000
      );
      // camera.position.set(100, 100, -100);
      // camera.position.set(300, 200, -300);
      camera.position.set(300, 1200, -300);
      // camera.position.set(800, 1000, -800);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // controls

      const controls = new OrbitControls(camera, renderer.domElement);

      controls.enableKeys = false;
      controls.autoRotate = true;
      controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.dampingFactor = 0.05;

      controls.screenSpacePanning = false;

      controls.minDistance = 10;
      controls.maxDistance = 1000000;

      controls.maxPolarAngle = Math.PI / 2;

      scene.add(...meshes.allMeshes);

      // lights

      var light = new THREE.DirectionalLight(0xffffff);
      light.position.set(1, 1, 1);
      scene.add(light);

      var light = new THREE.DirectionalLight(0x002288);
      light.position.set(-1, -1, -1);
      scene.add(light);

      var light = new THREE.AmbientLight(0x222222);
      scene.add(light);

      // var axesHelper = new THREE.AxesHelper(50);
      // scene.add(axesHelper);

      this.addPerson(scene);

      window.addEventListener("resize", this.onWindowResize, false);

      this.camera = camera;
      this.controls = controls;
      this.scene = scene;
      this.renderer = renderer;
      this.container = container;

      meshes.setState(this.value);
    },
    addPerson: function(scene) {
      var OBJFile = PathName + "models/newman/man2.obj";
      var MTLFile = PathName + "models/newman/man2.obj.mtl";
      var JPGFile = PathName + "models/newman/man2_dff.jpg";

      new MTLLoader().load(MTLFile, function(materials) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load(OBJFile, function(object) {
          object.scale.set(4, 4, 4);
          object.rotateY(THREE.Math.degToRad(60));
          object.translateX(100);
          object.translateZ(-150);
          var texture = new THREE.TextureLoader().load(JPGFile);
          object.traverse(function(child) {
            // aka setTexture
            if (child instanceof THREE.Mesh) {
              child.material.map = texture;
            }
          });
          scene.add(object);
        });
      });
    },
    onWindowResize: function() {
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
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
  height: 550px;
}
</style>
