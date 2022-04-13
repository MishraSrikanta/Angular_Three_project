import { texture } from "src/app/Visualization/Textures/Texture1";
import * as THREE from "three";



export class WindowFrameTop{
    constructor() { }
    static createFrame() {

        //#region T Shape
  
        const shape = new THREE.Shape();
        shape.moveTo(0 ,0);
        shape.lineTo(1,0);
        shape.lineTo(1,0.4);
        shape.lineTo(0.8, 0.4);
        shape.lineTo(0.8, 0.1);
        shape.lineTo(0.2, 0.1);
        shape.lineTo(0.2, 0.4);
        shape.lineTo(0, 0.4);
        shape.lineTo(0, 0);
       
        //#endregion
    
        var point1 = new THREE.Vector3(0, 0, 0);
        var point2 = new THREE.Vector3(0, 0, 9);
        var path1 = new THREE.LineCurve3(point1, point2)
        var extrudeSettings1 = {
            bevelEnabled: false,
            steps: 20,
            extrudePath: path1
        };

        const material = texture.loader();
        const geometry1 = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings1);
        const mesh1 = new THREE.Mesh(geometry1, material);
        mesh1.position.set(1, 8.5, 0)
        mesh1.rotation.x = Math.PI /2
        return mesh1;

    }
}

