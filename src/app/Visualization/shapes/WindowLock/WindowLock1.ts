import { MetalicGold, Silver, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { texture } from "../../Textures/Texture1";

export class WindowLock1{
    constructor(){}
    static createLock(){
        const shape = new THREE.Shape();
        shape.moveTo(-2, -8);
        shape.lineTo(-2, 8);
        shape.lineTo(2,8);
        shape.lineTo(2, -8);
        shape.lineTo(-2 , -8);

        const hole1 = new THREE.Shape();
        hole1.absarc(0, 5, 1.5, 0, Math.PI * 2 , false)
        shape.holes.push(hole1)

        const hole2 = new THREE.Shape();
        hole2.absarc(0, -5, 1.5, 0, Math.PI * 2 , false)
        shape.holes.push(hole2)

        const extrudesetthings = {
            bevelEnable : false,
            step: 2,
            depth: 2
        }
        // const material = texture.loader();
        const material = new THREE.MeshStandardMaterial({
            color: 0x404040,

        })

        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudesetthings)
        const mesh = new THREE.Mesh(geometry,material);
        return mesh;
      
    }
}