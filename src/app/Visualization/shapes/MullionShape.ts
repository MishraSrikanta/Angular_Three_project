import { LightBrown, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { texture } from "../Textures/Texture1";

export class MullianShape{
    constructor(){}
    static createMullianShape(){
        const shape = new THREE.Shape();
        shape.moveTo(-2.5, -50);
        shape.lineTo(-2.5, 50);
        shape.lineTo(2.5,50);
        shape.lineTo(2.5, -50);
        shape.lineTo(-2.5 , -50);

        const extrudesetthings = {
            bevelEnable : false,
            step: 4,
            depth: 2
        }

        const material = texture.loader()
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudesetthings)
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(0,0,-2)
        return mesh;
    }
}