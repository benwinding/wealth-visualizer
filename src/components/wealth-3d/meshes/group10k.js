import * as THREE from "three";
import * as money from "./../money-generator";

var loader = new THREE.TextureLoader();
const material100 = new THREE.MeshBasicMaterial({
  map: loader.load("/textures/us_100.jpeg")
});
const [sizeX, sizeY, sizeZ] = [
  money.note100.length,
  money.note100.height,
  money.note100.width
];
function make100note() {
  const geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  geometry.translate(sizeX / 2, 0, -sizeZ / 2);
  const mesh = new THREE.Mesh(geometry, material100);
  const maxRoatation = 0.05;
  const randomRotation = Math.random() * maxRoatation - maxRoatation / 2;
  mesh.rotateY(randomRotation);
  mesh.rotateY(Math.PI);
  return mesh;
}
function makeGroup10k() {
  // Add $10k notes
  const group = new THREE.Group();
  group.name = "Group10k";
  let meshCount = 0;
  for (let i = 0; i < money._10k; i += money._100) {
    const mesh = make100note();
    mesh.position.x = 0;
    mesh.position.y = (i / money._100) * 0.1;
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
const group = makeGroup10k();
export default group;
