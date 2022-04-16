import * as THREE from "three";
import { MeshPosition } from "../../Points/MeshPosition.ts/MeshPosition";
import { Tpositions } from "../../Points/MeshPosition.ts/TshapePosition";
import { TShapePoints } from "../../Points/Shapes/Tshape";
import { Tpoints1 } from "../../Points/TshapesPoints/Tpoints1";

import { texture } from "../../Textures/Texture1";
import { texture2 } from "../../Textures/Texture2";
export class WindowShape3 {
    constructor() { }
    static createwindow() {

        //#region T Shape
        const points = TShapePoints;
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(0, 1);
        shape.lineTo(1, 1);
        shape.lineTo(1, 0);
        shape.lineTo(0, 0)
        shape.lineTo(0, 0.2);
        shape.lineTo(0.8, 0.2);
        shape.lineTo(0.8, 0.8);
        shape.lineTo(0.2, 0.8);
        shape.lineTo(0.2, 0.2)



    
        // shape.holes.push(cut)
        // var holepath = new THREE.Path();
        // holepath.moveTo(0 , 0)
        // holepath.lineTo(0, 1);
        // holepath.lineTo(1,1);
        // holepath.lineTo(1, 0);
        // holepath.lineTo(0, 0)
    
        // shape.holes.push(holepath)


        //#endregion

        var point1 = new THREE.Vector3(0, 0, 0);
        var point2 = new THREE.Vector3(0, 0, 10);
        var path1 = new THREE.LineCurve3(point1, point2)
        var extrudeSettings1 = {
            bevelEnabled: false,
            steps: 20,
            extrudePath: path1
        };


        const material = texture2.loader();
        const geometry1 = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings1);
      

        //Practices of cutting
        // var pos = geometry1.getAttribute("position");
        // var temp = new THREE.Vector3();
        // for (let i = 0; i < pos.count; i++) {
        //     temp.fromBufferAttribute(pos, i);
        //     let signX = Math.cos(temp.x);
        //     let shift = 0 - temp.y;
        //     pos.setY(i, temp.x - (shift * signX));
        // }
        // pos.needsUpdate = true;
        const mesh1 = new THREE.Mesh(geometry1, material);
        mesh1.position.set(10, 9, 0)
        mesh1.rotation.x = Math.PI / 2
        return mesh1;

    }
}

