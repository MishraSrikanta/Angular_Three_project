import { texture3 } from "src/app/Visualization/Textures/Texture3";
import { texture4 } from "src/app/Visualization/Textures/Texture4";
import * as THREE from "three";
import { texture } from "../../../Textures/Texture1";


export class WindowSashRight{
    constructor() { }
    static createFrame() {

        //#region T Shape
  
        const shape = new THREE.Shape();
        shape.moveTo(0 ,0);
        shape.lineTo(0.2,0);
        shape.lineTo(0.2,0.1);
        shape.lineTo(0.15, 0.1);
        shape.lineTo(0.15, 0.15);
        shape.lineTo(0.2, 0.15);
        shape.lineTo(0.2, 0.2);
        shape.lineTo(0.4, 0.2);
        shape.lineTo(0.4, 0.15);
        shape.lineTo(0.45, 0.15);
        shape.lineTo(0.45, 0.1);
        shape.lineTo(0.4, 0.1);
        shape.lineTo(0.4, 0);
        shape.lineTo(0.6, 0);
        shape.lineTo(0.6, 0.4);
        shape.lineTo(0.55, 0.35);
        shape.lineTo(0.5, 0.35);
        shape.lineTo(0.5, 0.4);
        shape.lineTo(0.2, 0.35);
        shape.lineTo(0.2, 0.5);
        shape.lineTo(0.15, 0.5);
        shape.lineTo(0.15, 0.55);
        shape.lineTo(0.2, 0.55);
        shape.lineTo(0.2, 0.6);
        shape.lineTo(0, 0.58);
        shape.lineTo(0, 0);
       
       
        //#endregion
    
        var point1 = new THREE.Vector3(0, 0, 0);
        var point2 = new THREE.Vector3(0, 0, 9.2);
        var path1 = new THREE.LineCurve3(point1, point2)
        var extrudeSettings1 = {
            bevelEnabled: false,
            steps: 20,
            extrudePath: path1
        };

        const material = texture4.loader();
        const geometry1 = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings1);
        const mesh1 = new THREE.Mesh(geometry1, material);
        mesh1.position.set(5.8, 8.6, -0.4)
        mesh1.rotation.y = -Math.PI
        return mesh1;

    }
}

