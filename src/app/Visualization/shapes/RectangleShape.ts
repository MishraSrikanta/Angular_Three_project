
import { DarkBrown, LightBrown } from 'src/app/Constants/ColorConstants';
import * as THREE from 'three'

import { ExtrudePoints } from '../Points/Extrude/ExtrudePoints';
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

        //#region holes
        // hole1path.moveTo(0.5, 0.5);
        hole1path.absarc(holeposition[0].hole1.x, holeposition[0].hole1.y, radius, 0, Math.PI * 2, false)
        shape.holes.push(hole1path)

        const hole2path = new THREE.Path();
        // hole2path.moveTo(0.5, 2.5);
        hole2path.absarc(holeposition[0].hole2.x, holeposition[0].hole2.y, radius, 0, Math.PI * 2, false)
        shape.holes.push(hole2path)

        const hole3path = new THREE.Path();
        // hole3path.moveTo(4.5, 2.5);
        hole3path.absarc(holeposition[0].hole3.x, holeposition[0].hole3.y, radius, 0, Math.PI * 2, false)
        shape.holes.push(hole3path)

        const hole4path = new THREE.Path();
        // hole4path.moveTo(4.5, 0.5);
        hole4path.absarc(holeposition[0].hole4.x, holeposition[0].hole4.y, radius, 0, Math.PI * 2, false);
        shape.holes.push(hole4path);
        //#endregion
        
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
        // var textureloader = new THREE.TextureLoader().load('./Visualization/shapes/woodnew.jpg')

        // var loader = new THREE.TextureLoader();
        // loader.load('https://media.istockphoto.com/photos/laminate-wooden-floor-texture-background-picture-id1083302826?b=1&k=20&m=1083302826&s=170667a&w=0&h=ePdma8I7u7KHs2YbehQSVcCX9qay5iPr3wynsWnzFZ0=',
        // function (texture){
        //     material.map = texture;
        // });

        //#endregion

        //#region Texture Load
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
        // material.bumpScale = 0.015;
        // material.map = textureloader
        //#endregion
        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
        const mesh = new THREE.Mesh(geometry, material);
        const meshposition = MeshPosition;
        mesh.position.set(meshposition[0].point.x, meshposition[0].point.y, meshposition[0].point.z)
        return mesh;
    }
}