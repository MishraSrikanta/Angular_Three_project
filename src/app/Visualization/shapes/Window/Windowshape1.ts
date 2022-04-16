import { Aqua, Black, MediumBlue, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { MeshPosition } from "../../Points/MeshPosition.ts/MeshPosition";
import { Tpositions } from "../../Points/MeshPosition.ts/TshapePosition";
import { TShapePoints } from "../../Points/Shapes/Tshape";
import { Tpoints1 } from "../../Points/TshapesPoints/Tpoints1";
import { WIndowExtrudePoints } from "../../Points/Window/ShapeExtrude";

import { texture } from "../../Textures/Texture1";
import { texture2 } from "../../Textures/Texture2";
export class WindowShape1{
    constructor() { }
    static createwindow() {

        //#region T Shape
        const points = WIndowExtrudePoints;
        const shape = new THREE.Shape();
        shape.moveTo(points[0].point1.x ,points[0].point1.y);
        shape.lineTo(points[0].point2.x ,points[0].point2.y);
        shape.lineTo(points[0].point3.x, points[0].point3.y);
        shape.lineTo(points[0].point4.x, points[0].point4.y);
        shape.lineTo(points[0].point5.x, points[0].point5.y)
        shape.lineTo(points[0].point6.x, points[0].point6.y);
        shape.lineTo(points[0].point7.x, points[0].point7.y);
        shape.lineTo(points[0].point8.x, points[0].point8.y);
        shape.lineTo(points[0].point9.x, points[0].point9.y);
        shape.lineTo(points[0].point10.x, points[0].point10.y)
        //#endregion


        // const holepath = new THREE.Shape();
        // holepath.moveTo(0, 0)
        // holepath.lineTo(1, 0);
        // holepath.lineTo(1, 1);
        // holepath.lineTo(0, 1)

        // shape.holes.push(holepath)
        
        var point1 = new THREE.Vector3(0, 0, 0);
        var point2 = new THREE.Vector3(0, 0, 10);
        var path1 = new THREE.LineCurve3(point1, point2)
        var extrudeSettings1 = {
            bevelEnabled: false,
            // bevelThickness: 0.1,
            // bevelSize: 0.2,
            // bevelOffset: 0,
            // bevelSegments: 1,
            steps: 20,
            extrudePath: path1,
            
        };

        const material = texture2.loader();
        const geometry1 = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings1);
        const mesh1 = new THREE.Mesh(geometry1, material);
        mesh1.position.set(0, 9, 0)
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

