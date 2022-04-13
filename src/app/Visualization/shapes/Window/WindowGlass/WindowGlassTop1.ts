import { Aqua, Blue, Red, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class WindowGlassTop1{
    constructor(){}
    static createGlassShape(){
        const shape = new THREE.Shape();
        shape.moveTo(1.5 , 10.5);
        shape.lineTo(1.5, 13.5);
        shape.lineTo(9.5,13.5);
        shape.lineTo(9.5, 10.5);
        shape.lineTo(1.5 , 10.5);

        const extrudesetthings = {
            bevelEnable : false,
            step: 2,
            depth: -0.25
        }

        const material = new THREE.MeshPhysicalMaterial({color: Aqua , opacity: 0.2, transparent: true})
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudesetthings)
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(0, 0, 0)
        return mesh;
    }
}