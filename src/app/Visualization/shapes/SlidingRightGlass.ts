import { Aqua, Blue, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class GlassRightSliding{
    constructor(){}
    static createGlassShape(){
        const shape = new THREE.Shape();
        shape.moveTo(5.8 ,0);
        shape.lineTo(9, 0);
        shape.lineTo(9,8);
        shape.lineTo(5.8,8);
        shape.lineTo(5.8 ,0);

        const extrudesetthings = {
            bevelEnable : false,
            step: 2,
            depth: -0.2
        }

        const material = new THREE.MeshPhysicalMaterial({color: Aqua , opacity: 0.3, transparent: true,})
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudesetthings)
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = -0.7
        return mesh;
    }
}