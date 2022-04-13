import { LightBrown } from 'src/app/Constants/ColorConstants';
import * as THREE from 'three'
import { ExtrudePoints } from '../Points/Extrude/ExtrudePoints';
import { IshapeTopHole } from '../Points/HolePosition/IshapeTophole';
import { IShapePoints } from '../Points/Shapes/IShape';

export class IShape {
    constructor() { }
    static createIshape() {

        //#region Shapes
        const points = IShapePoints;
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
        //#endregion

        //#region Holes
        const holepoints = IshapeTopHole;
        const Topholes1 = new THREE.Shape();
        Topholes1.moveTo(holepoints[0].point1.x, holepoints[0].point1.y);
        Topholes1.lineTo(holepoints[0].point2.x, holepoints[0].point2.y);
        Topholes1.lineTo(holepoints[0].point3.x, holepoints[0].point3.y);
        Topholes1.lineTo(holepoints[0].point4.x, holepoints[0].point4.y);
        Topholes1.lineTo(holepoints[0].point5.x, holepoints[0].point5.y);
        shape.holes.push(Topholes1)
        //#endregion

        //#region Extrude with deapth
        const extrudepoints = ExtrudePoints;
        const extrudeSettings = {
            steps: extrudepoints[0].steps,
            depth: extrudepoints[0].depth,
            bevelEnabled: extrudepoints[0].bevelEnabled,
            bevelThickness: extrudepoints[0].bevelThickness,
            bevelSize: extrudepoints[0].bevelSize,
            bevelOffset: extrudepoints[0].bevelOffset,
            bevelSegments: extrudepoints[0].bevelSegments
        };
        //#endregion

        //#region Texture load
        var loader = new THREE.TextureLoader();
        var bumpTexture = loader.load("https://thumbs.dreamstime.com/b/k-kitchen-wood-roughness-texture-height-map-specular-imperfection-map-d-materials-black-white-texture-k-kitchen-200337533.jpg",
            function (tex) {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(4, 1);
                tex.anisotropy = 16;
                tex.needsUpdate = true;
            });
        const material = new THREE.MeshStandardMaterial({
            //  color: DarkBrown,
            color: LightBrown,
            wireframe: false,
            roughness: 0.9,
            // metalness: 0.1,
            map: new THREE.TextureLoader().load('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczEyNS1ha2U3MDExLWEuanBn.jpg?s=l3LMBm0javOoRPXaX183VJMMEDkUJ787Wsr9ZHz7W1I')
        });
        material.bumpMap = bumpTexture;
        //#endregion

        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-2.5, -5, 0)
        return mesh;




    }


}

