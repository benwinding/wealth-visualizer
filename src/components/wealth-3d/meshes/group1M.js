import * as THREE from "three";
import * as money from "./../money-generator";

const material10k = new THREE.MeshPhongMaterial({
  color: 0x00dd00,
  flatShading: true
});
function make10kbundle() {
  const geometry = new THREE.BoxGeometry(100, 10, 30);
  const mesh100note = new THREE.Mesh(geometry, material10k);
  return mesh100note;
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
    const x = (Math.floor(index / countY) % countX) * -101;
    const y = 5 + (Math.floor(index / (countX * countY)) % countY) * 11;
    const z = (index % countZ) * 31;
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
export default makeGroup1M();