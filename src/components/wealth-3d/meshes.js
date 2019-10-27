import * as THREE from "three";
import * as money from "./money-generator";

function make100note() {
  const geometry = new THREE.BoxGeometry(100, 0.5, 30);
  const material = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    flatShading: true
  });
  const mesh100note = new THREE.Mesh(geometry, material);
  return mesh100note;
}

function make10kbundle() {
  const geometry = new THREE.BoxGeometry(100, 50, 30);
  const material = new THREE.MeshPhongMaterial({
    color: 0x00dd00,
    flatShading: true
  });
  const mesh100note = new THREE.Mesh(geometry, material);
  return mesh100note;
}

function make100Mpallet() {
  const geometry = new THREE.BoxGeometry(700, 700, 600);
  const material = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    flatShading: true
  });
  const mesh100note = new THREE.Mesh(geometry, material);
  return mesh100note;
}

export function makeGroup100() {
  // Add $100 notes
  const group = new THREE.Group();
  group.name = 'Group100';
  let meshCount = 0;
  for (let i = 0; i < money._10k; i += money._100) {
    const mesh = make100note();
    mesh.position.x = 0;
    mesh.position.y = i / 200;
    mesh.position.z = 0;
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    mesh.visible = false;
    group.add(mesh);
    meshCount++;
  }
  console.log("makeGroup100(): finished added meshes", { meshCount });
  return group;
}

export function makeGroup10k() {
  // Add $10k bundle
  const group = new THREE.Group();
  group.name = 'Group10k';
  let meshCount = 0;
  for (let i = 0; i < money._1M; i += money._10k) {
    const mesh = make10kbundle();
    mesh.position.x = 0;
    mesh.position.y = 25;
    mesh.position.z = i / (270);
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    mesh.visible = false;
    group.add(mesh);
    meshCount++;
  }
  console.log("makeGroup10k(): finished added meshes", { meshCount });
  return group;
}

export function makeGroup100M() { 
  const group = new THREE.Group();
  group.name = 'Group100M'
  let meshCount = 0;
  console.log("makeGroup10k(): finished added meshes", { meshCount });
  return group;
}
