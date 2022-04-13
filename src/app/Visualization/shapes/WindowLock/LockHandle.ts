import { MetalicGold, Silver, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { texture } from "../../Textures/Texture1";

export class WindowLockHandle{
    constructor(){}
    static createLockHandle(){
        const shape = new THREE.Shape();
        shape.moveTo(-2, -1.5);
        shape.lineTo(-2, 1.5);
        shape.lineTo(10,1.5);
        shape.lineTo(10, -1.5);
        shape.lineTo(-2 , -1.5);

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