import * as THREE from "three";

function make100note() {
  const geometry = new THREE.BoxGeometry(100, 30, 0.5);
  const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    flatShading: true
  });
  const mesh100note = new THREE.Mesh(geometry, material);
  return mesh100note;
}

function make10kbundle() {
  const geometry = new THREE.BoxGeometry(100, 30, 20);
  const material = new THREE.MeshPhongMaterial({
    color: 0x0000ff,
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

export const _100note = make100note();
export const _10kbundle = make10kbundle();
export const _100Mpallet = make100Mpallet();
