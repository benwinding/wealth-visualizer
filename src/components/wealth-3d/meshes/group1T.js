import * as THREE from "three";
import * as money from "../money-generator";
import { PathName } from "../paths";

const loader = new THREE.TextureLoader();
const topMap = loader.load(PathName + "textures/us_100.jpeg");
topMap.wrapS = THREE.RepeatWrapping;
topMap.wrapT = THREE.RepeatWrapping;
topMap.repeat.set(2 * 3, 5 * 3);
const material10B = [
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
  money.bundle10k.length * 2 * 3,
  money.bundle10k.height * 10 * 10,
  money.bundle10k.width * 5 * 3
];

function makeMoneyCube() {
  const geometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  geometry.translate(sizeX / 2, sizeY / 2, -sizeZ / 2);
  const mesh = new THREE.Mesh(geometry, material10B);
  mesh.rotateY(Math.PI);
  return mesh;
}
const materialPallet = new THREE.MeshBasicMaterial({
  color: new THREE.Color(0xbb998c)
});
const [offsetX, offsetY, offsetZ] = [100, 100, 100];

function makePalletPost() {
  const top = new THREE.BoxGeometry(80, offsetY - 20, 80);
  top.translate(-sizeX / 2, -offsetY / 2, sizeZ / 2);
  const mesh = new THREE.Mesh(top, materialPallet);
  return mesh;
}
function makePalletFlat() {
  const top = new THREE.BoxGeometry(sizeX, 20, sizeZ);
  top.translate(-sizeX / 2, -offsetY + 20 / 2, sizeZ / 2);
  const mesh = new THREE.Mesh(top, materialPallet);
  return mesh;
}
function makePallet() {
  const group = new THREE.Group();
  group.add(makePalletFlat().translateY(offsetY - 20 / 2));
  for (let ix = 0; ix <= sizeX; ix += (sizeX - 80) / 2) {
    for (let iz = 0; iz <= sizeZ; iz += (sizeZ - 80) / 2) {
      group.add(
        makePalletPost()
          .translateX(ix - (sizeX - 80) / 2)
          .translateZ(iz - (sizeZ - 80) / 2)
      );
    }
  }
  // group.add(makePalletFlat());
  return group;
}

function make10Bbundle() {
  const group = new THREE.Group();
  group.add(makeMoneyCube());
  group.add(makePallet());
  return group;
}
const [countX, countY, countZ] = [10, 1, 10];
function makeGroup1T() {
  // Add $10k bundle
  const group = new THREE.Group();
  group.name = "Group1T";
  let meshCount = 0;
  for (let i = 0; i < money._1T; i += money._10B) {
    const mesh = make10Bbundle();
    const index = i / money._10B;
    const x = (Math.floor(index / countZ) % countX) * (-offsetX - sizeX);
    const y =
      (Math.floor(index / (countX * countZ)) % countY) * sizeY + offsetY;
    const z = (index % countZ) * (offsetZ + sizeZ);
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    mesh.visible = false;
    group.add(mesh);
    meshCount++;
  }
  console.log("makeGroup1T(): finished added meshes", { meshCount, group });
  return group;
}
const group = makeGroup1T();
export default group;
