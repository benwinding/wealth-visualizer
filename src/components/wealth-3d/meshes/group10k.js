import * as THREE from "three";
import * as money from "./../money-generator";

const material100 = new THREE.MeshPhongMaterial({
  color: 0x00ff00,
  flatShading: true
});
function make100note() {
  const geometry = new THREE.BoxGeometry(100, 0.09, 30);
  const mesh100note = new THREE.Mesh(geometry, material100);
  return mesh100note;
}
function makeGroup10k() {
  // Add $10k notes
  const group = new THREE.Group();
  group.name = 'Group10k';
  let meshCount = 0;
  for (let i = 0; i < money._10k; i += money._100) {
    const mesh = make100note();
    mesh.position.x = 0;
    mesh.position.y = (i / money._100) * 0.10;
    mesh.position.z = 0;
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    mesh.visible = false;
    group.add(mesh);
    meshCount++;
  }
  console.log("makeGroup10k(): finished added meshes", { meshCount });
  return group;
}
export default makeGroup10k();
