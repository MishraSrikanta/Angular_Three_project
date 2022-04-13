import * as THREE from "three";
import { Tpositions } from "../../Points/MeshPosition.ts/TshapePosition";
import { TShapePoints } from "../../Points/Shapes/Tshape";
import { Tpoints4 } from "../../Points/TshapesPoints/Tpoints4";
import { texture } from "../../Textures/Texture1";

export class TShape4 {
    constructor() { }
    static createTshape4() {

        //#region T Shape
        const points = TShapePoints;
        const shape = new THREE.Shape();
        shape.moveTo(points[0].point1.x, points[0].point1.y);
        shape.lineTo(points[0].point2.x, points[0].point2.y);
        shape.lineTo(points[0].point3.x, points[0].point3.y);
        shape.lineTo(points[0].point4.x, points[0].point4.y);
        shape.lineTo(points[0].point5.x, points[0].point5.y);
        shape.lineTo(points[0].point6.x, points[0].point6.y);
        shape.lineTo(points[0].point7.x, points[0].point7.y);
        shape.lineTo(points[0].point8.x, points[0].point8.y);
        shape.lineTo(points[0].point9.x, points[0].point9.y);
        shape.lineTo(points[0].point10.x, points[0].point10.y);
        shape.lineTo(points[0].point11.x, points[0].point11.y);
        shape.lineTo(points[0].point12.x, points[0].point12.y);
        shape.lineTo(points[0].point13.x, points[0].point13.y);
        shape.lineTo(points[0].point14.x, points[0].point14.y);
        shape.lineTo(points[0].point15.x, points[0].point15.y);
        shape.lineTo(points[0].point16.x, points[0].point16.y);
        shape.lineTo(points[0].point17.x, points[0].point17.y);
        shape.lineTo(points[0].point18.x, points[0].point18.y);
        //#endregion
        const point = Tpoints4;
        var point1 = new THREE.Vector3(point[0].shape1.x, point[0].shape1.y, point[0].shape1.z);
        var point2 = new THREE.Vector3(point[0].shape2.x, point[0].shape2.y, point[0].shape2.z);
        var path1 = new THREE.LineCurve3(point1, point2)
        var extrudeSettings1 = {
            bevelEnabled: false,
            steps: 20,
            extrudePath: path1
            // ExtrudePoints: path

        };

        const material = texture.loader();
        const geometry1 = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings1)
        // const geometry2 = new THREE.ShapeBufferGeometry(shape)
        const mesh1 = new THREE.Mesh(geometry1, material);
        const position = Tpositions;
        mesh1.position.set(position[0].shape4.x, position[0].shape4.y, position[0].shape4.z)
        return mesh1;



    }
}

