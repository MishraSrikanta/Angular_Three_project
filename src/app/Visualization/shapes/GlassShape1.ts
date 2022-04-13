import { White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class GlassShape{
    constructor(){}
    static createGlassShape(){
        const shape = new THREE.Shape();
        shape.moveTo(-53 , -55);
        shape.lineTo(-53, 50);
        shape.lineTo(0,50);
        shape.lineTo(0, -55);
        shape.lineTo(-53 , -55);

        const extrudesetthings = {
            bevelEnable : false,
            step: 2,
            depth: -1
        }

        const material = new THREE.MeshPhysicalMaterial({color: White , opacity: 0.4, transparent: true})
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudesetthings)
        const mesh = new THREE.Mesh(geometry, material)
        return mesh;
    }
}