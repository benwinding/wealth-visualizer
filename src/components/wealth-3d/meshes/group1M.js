import * as THREE from "three";
import * as money from "./../money-generator";

// var texture = new THREE.TextureLoader().load( '/textures/us_100.jpeg' );
let loader = new THREE.TextureLoader();
let material10k = [
  new THREE.MeshBasicMaterial({ map: loader.load("/textures/us_100_side.jpeg") }),
  new THREE.MeshBasicMaterial({ map: loader.load("/textures/us_100_side.jpeg") }),
  new THREE.MeshBasicMaterial({ map: loader.load("/textures/us_100.jpeg") }),
  new THREE.MeshBasicMaterial({ map: loader.load("/textures/us_100_side.jpeg") }),
  new THREE.MeshBasicMaterial({ map: loader.load("/textures/us_100_side.jpeg") }),
  new THREE.MeshBasicMaterial({ map: loader.load("/textures/us_100_side.jpeg") }),
];
const [sizeX, sizeY, sizeZ] = [money.note100.length, 7, money.note100.width];
function make10kbundle() {
  const geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  geometry.translate(sizeX/2, 0, -sizeZ/2);
  const mesh = new THREE.Mesh(geometry, material10k);
  const maxRoatation = 0.05;
  const randomRotation = Math.random() * maxRoatation - maxRoatation / 2;
  const randomRotation2 = Math.random() * maxRoatation - maxRoatation / 2;
  mesh.rotateY(randomRotation);
  mesh.rotateY(Math.PI);
  mesh.rotateX(randomRotation2);
  return mesh;
}
function makeGroup1M() {
  // Add $10k bundle
  const group = new THREE.Group();
  group.name = 'Group1M';
  const [countX, countY, countZ] = [2, 10, 5];
  let meshCount = 0;
  for (let i = 0; i < money._1M; i += money._10k) {
    const mesh = make10kbundle();
    const index = i / money._10k;
    const x = (Math.floor(index / countZ) % countX) * (-1 - sizeX);
    const y = 5 + (Math.floor(index / (countX * countZ)) % countY) * (sizeY + 1);
    const z = (index % countZ) * (1 + sizeZ);
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    mesh.visible = false;
    group.add(mesh);
    meshCount++;
  }
  console.log("makeGroup1M(): finished added meshes", { meshCount });
  return group;
}
const group = makeGroup1M();
export default group;
