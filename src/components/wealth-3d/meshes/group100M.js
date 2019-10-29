import * as THREE from "three";
import * as money from "./../money-generator";
import { PathName } from "./../paths";

let loader = new THREE.TextureLoader();
const topMap = loader.load(PathName + "textures/us_100.jpeg");
topMap.wrapS = THREE.RepeatWrapping;
topMap.wrapT = THREE.RepeatWrapping;
topMap.repeat.set(2, 5);
let material10k = [
  new THREE.MeshBasicMaterial({
    map: loader.load(PathName + "textures/us_100_side.jpeg")
  }),
  new THREE.MeshBasicMaterial({
    map: loader.load(PathName + "textures/us_100_side.jpeg")
  }),
  new THREE.MeshBasicMaterial({ map: topMap }),
  new THREE.MeshBasicMaterial({
    map: loader.load(PathName + "textures/us_100_side.jpeg")
  }),
  new THREE.MeshBasicMaterial({
    map: loader.load(PathName + "textures/us_100_side.jpeg")
  }),
  new THREE.MeshBasicMaterial({
    map: loader.load(PathName + "textures/us_100_side.jpeg")
  })
];
const [sizeX, sizeY, sizeZ] = [
  money.bundle10k.length * 2,
  money.bundle10k.height * 10,
  money.bundle10k.width * 5
];
function make1Mbundle() {
  const geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  geometry.translate(sizeX / 2, sizeY / 2, -sizeZ / 2);
  const mesh = new THREE.Mesh(geometry, material10k);
  // const maxRoatation = 0.05;
  // const randomRotation = Math.random() * maxRoatation - maxRoatation / 2;
  // const randomRotation2 = Math.random() * maxRoatation - maxRoatation / 2;
  // mesh.rotateY(randomRotation);
  // mesh.rotateX(randomRotation2);
  mesh.rotateY(Math.PI);
  return mesh;
}
const [countX, countY, countZ] = [3, 10, 3];
function makeGroup100M() {
  // Add $10k bundle
  const group = new THREE.Group();
  group.name = "Group100M";
  let meshCount = 0;
  for (let i = 0; i < money._100M; i += money._1M) {
    const mesh = make1Mbundle();
    const index = i / money._1M;
    const x = (Math.floor(index / countZ) % countX) * (-1 - sizeX);
    const y = (Math.floor(index / (countX * countZ)) % countY) * (sizeY + 1);
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
  console.log("makeGroup100M(): finished added meshes", { meshCount });
  return group;
}
const group = makeGroup100M();
export default group;
