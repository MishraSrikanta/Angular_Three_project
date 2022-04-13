import { Aqua, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class WindowGlassBottom{
    constructor(){}
    static createGlassShape(){
        const shape = new THREE.Shape();
        shape.moveTo(1.35 , -0.7);
        shape.lineTo(1.35, 8.7);
        shape.lineTo(9.75,8.7);
        shape.lineTo(9.75,-0.7);
        shape.lineTo(1.35 , -0.75);

        const extrudesetthings = {
            bevelEnable : false,
            step: 2,
            depth: -1
        }

        const material = new THREE.MeshPhysicalMaterial({color: Aqua , opacity: 0.2, transparent: true})
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudesetthings)
        const mesh = new THREE.Mesh(geometry, material)
        return mesh;
    }
}