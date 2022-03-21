
import * as THREE from 'three'

import { ExtrudePoints } from '../Points/ExtrudePoints/ExtrudePoints';
import { HolePosition } from '../Points/HolePosition/HolePosition';
import { MeshPosition } from '../Points/MeshPosition.ts/MeshPosition';
import { Rectangle } from '../Points/Shapes/Rectangle';

export class RectangleShape {
    constructor() { }
    static createrectangle() {
        let point = Rectangle;
        let width = point[0].point.x;
        let height = point[0].point.y;
        //You can change the values in the RectangleShapes

        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(width, 0);
        shape.lineTo(width, height);
        shape.lineTo(0, height);
        shape.lineTo(0, 0);

        const holeposition = HolePosition;
        const radius = 0.25;
        const hole1path = new THREE.Path();
        hole1path.moveTo(0.5, 0.5);
        hole1path.absarc(holeposition[0].hole1.x, holeposition[0].hole1.y, radius, 0, Math.PI * 2, true)
        shape.holes.push(hole1path)

        const hole2path = new THREE.Path();
        hole2path.moveTo(0.5, 2.5);
        hole2path.absarc(holeposition[0].hole2.x, holeposition[0].hole2.y, radius, 0, Math.PI * 2, true)
        shape.holes.push(hole2path)

        const hole3path = new THREE.Path();
        hole3path.moveTo(4.5, 2.5);
        hole3path.absarc(holeposition[0].hole3.x, holeposition[0].hole3.y, radius, 0, Math.PI * 2, true)
        shape.holes.push(hole3path)

        const hole4path = new THREE.Path();
        hole4path.moveTo(4.5, 0.5);
        hole4path.absarc(holeposition[0].hole4.x, holeposition[0].hole4.y, radius, 0, Math.PI * 2, true);
        shape.holes.push(hole4path);

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

        //#region Practice
        // const textureloader = new THREE.ImageBitmapLoader();
        // textureloader.load('wood.jpg', function(imagebitmap){
        //     const texture = new THREE.CanvasTexture(imagebitmap);
        //     const material = new THREE.MeshBasicMaterial({map: texture});
        //     const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
        // const mesh = new THREE.Mesh(geometry, material);
        // return mesh;
        // })
        //@app/Visualization/shapes/woodnew.jpg
        var textureloader = new THREE.TextureLoader().load('./Visualization/shapes/woodnew.jpg')
        debugger
        //#endregion
        const material = new THREE.MeshStandardMaterial({
            color: 0xba8c63,
            wireframe: false,
            roughness: 0.8,
            metalness: 0.2,
        });
        // material.map = textureloader
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
        const mesh = new THREE.Mesh(geometry, material);
        const meshposition = MeshPosition;
        // var loader = new THREE.TextureLoader();
        // loader.load('https://upload.wikimedia.org/wikipedia/commons/b/b8/Exploding_planet.jpg',
        // function (texture){
        //     material.map = texture;
        // });

        mesh.position.set(meshposition[0].point.x, meshposition[0].point.y, meshposition[0].point.z)
        return mesh;
    }
}