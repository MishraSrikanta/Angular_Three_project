import { Aqua, Black, MediumBlue, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { MeshPosition } from "../../Points/MeshPosition.ts/MeshPosition";
import { Tpositions } from "../../Points/MeshPosition.ts/TshapePosition";
import { TShapePoints } from "../../Points/Shapes/Tshape";
import { Tpoints1 } from "../../Points/TshapesPoints/Tpoints1";

import { texture } from "../../Textures/Texture1";
import { texture2 } from "../../Textures/Texture2";
export class WindowShape1{
    constructor() { }
    static createwindow() {

        //#region T Shape
        const points = TShapePoints;
        const shape = new THREE.Shape();
        shape.moveTo(0 ,0);
        shape.lineTo(0,1);
        shape.lineTo(1,1);
        shape.lineTo(1, 0);
        shape.lineTo(0, 0)
        shape.lineTo(0,0.2);
        shape.lineTo(0.8, 0.2);
        shape.lineTo(0.8, 0.8);
        shape.lineTo(0.2, 0.8);
        shape.lineTo(0.2, 0.2)
        //#endregion


        // const holepath = new THREE.Shape();
        // holepath.moveTo(0, 0)
        // holepath.lineTo(1, 0);
        // holepath.lineTo(1, 1);
        // holepath.lineTo(0, 1)

        // shape.holes.push(holepath)
        
        var point1 = new THREE.Vector3(0, 0, 0);
        var point2 = new THREE.Vector3(0, 0, 12);
        var path1 = new THREE.LineCurve3(point1, point2)
        var extrudeSettings1 = {
            bevelEnabled: false,
            // bevelThickness: 0.1,
            // bevelSize: 0.2,
            // bevelOffset: 0,
            // bevelSegments: 1,
            steps: 20,
            extrudePath: path1
        };

        const material = texture2.loader();
        const geometry1 = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings1);
        const mesh1 = new THREE.Mesh(geometry1, material);
        mesh1.position.set(0, 10, 0)
        mesh1.rotation.x = Math.PI /2
        // function onclicked(){
        //     mesh1.material.color.set(0x000000)
        //     console.log("Clicked");
        // }
        // window.addEventListener('dblclick' , onMouseDoubleClick, false)
        // window.addEventListener('click' , onMouseClick, false)
        // function onMouseDoubleClick(){
        //     mesh1.material.color.set(MediumBlue);
        //     console.log("Event Clicked")
        // }
        // function onMouseClick(){
        //     mesh1.material.color.set(White);
        //     console.log("Event Clicked")
        // }
        return mesh1;

    }
}

