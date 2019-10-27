<template>
  <div>
    <pre>{{value}}</pre>
    <div id="container-3d"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import * as meshes from "./meshes";
import * as money from "./money-generator";
import * as OrbitControls from "three-orbitcontrols";

export default {
  props: ["value"],
  watch: {
    value: function(newValue, oldValue) {
      this.setState(newValue);
    }
  },
  data() {
    return {
      camera: null,
      controls: null,
      scene: null,
      renderer: null,
      container: null,
      groups: {
        group100: meshes.makeGroup100(),
        group10k: meshes.makeGroup10k(),
        group100M: meshes.makeGroup100M(),
      }
    };
  },
  methods: {
    setState: function(newState) {
      function showChildrenUntil(g, showUntil) {
        console.log("showChildrenUntil", { g, name: g.name, showUntil });
        g.children.map((c, index) => (c.visible = index < showUntil));
      }
      const { group100, group10k, group100M } = this.groups;

      if (newState > money._100M) {
        showChildrenUntil(group100, 0);
        showChildrenUntil(group10k, 0);
        const currentMcount = group100M.children.length;
        const newMcount = Math.round(newState / money._100M);
        showChildrenUntil(group100M, newMcount);
      } else if (newState > money._10k) {
        showChildrenUntil(group100, 0);
        showChildrenUntil(group100M, 0);
        const currentMcount = group10k.children.length;
        const newMcount = Math.round(newState / money._10k);
        showChildrenUntil(group10k, newMcount);
      } else if (newState > money._100) {
        showChildrenUntil(group10k, 0);
        showChildrenUntil(group100M, 0);
        const currentMcount = group100.children.length;
        const newMcount = Math.round(newState / money._100);
        showChildrenUntil(group100, newMcount);
      }
    },
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
      camera.position.set(400, 300, -300);

      // controls

      const controls = new OrbitControls(camera, renderer.domElement);

      //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

      controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.dampingFactor = 0.05;

      controls.screenSpacePanning = false;

      controls.minDistance = 100;
      controls.maxDistance = 500;

      controls.maxPolarAngle = Math.PI / 2;

      scene.add(this.groups.group100);
      scene.add(this.groups.group10k);
      scene.add(this.groups.group100M);

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

      this.setState(this.value);
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
  height: 400px;
}
</style>
