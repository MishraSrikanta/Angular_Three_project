import { Aqua, Blue, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class GlassShape2{
    constructor(){}
    static createGlassShape(){
        const shape = new THREE.Shape();
        shape.moveTo(1.5 ,0);
        shape.lineTo(5.3, 0);
        shape.lineTo(5.3,8);
        shape.lineTo(1.5,8);
        shape.lineTo(1.5 ,0);

        const extrudesetthings = {
            bevelEnable : false,
            step: 2,
            depth: -0.2
        }

        const material = new THREE.MeshPhysicalMaterial({color: Aqua , opacity: 0.3, transparent: true,})
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudesetthings)
        const mesh = new THREE.Mesh(geometry, material)
        return mesh;
    }
}