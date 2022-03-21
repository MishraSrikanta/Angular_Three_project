import { White } from 'src/app/Constants/ColorConstants';
import * as THREE from 'three'
import { PointLightPosition } from '../Points/LightsPositions/PointLightPosition';

export class Lights {
  static pointlight1() {
    let color = White;
    let Intensity = 1;
    let distance = 0;
    // You can change the color and intensity here
    const point = PointLightPosition;
    const light1 = new THREE.PointLight(color, Intensity, distance)
    light1.position.set(point[0].light1.x, point[0].light1.y, point[0].light1.z)
    light1.lookAt(0, 0, 0);
    return light1;
  }

  static pointlight2() {
    let color = White;
    let Intensity = 1;
    let distance = 0;
    // You can change the color and intensity here
    const point = PointLightPosition
    const light1 = new THREE.PointLight(color, Intensity, distance)
    light1.position.set(point[0].light2.x, point[0].light2.y, point[0].light2.z)
    light1.lookAt(0, 0, 0);
    return light1;
  }

  static pointlight3() {
    let color = White;
    let Intensity = 1;
    let distance = 0;
    // You can change the color and intensity here
    const point = PointLightPosition
    const light1 = new THREE.PointLight(color, Intensity, distance)
    light1.position.set(point[0].light3.x, point[0].light3.y, point[0].light3.z)
    light1.lookAt(0, 0, 0);
    return light1;
  }

  static ambientlight() {
    let color = White;
    let Intensity = 1;
    // You can change the color and intensity here
    const light2 = new THREE.AmbientLight(color, Intensity);
    return light2;
  }
  constructor() { }


}