import { Blue } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

export class text1 {
    constructor() { };
    static createtext() {
        const loader = new FontLoader();
    loader.load('../assets/Teko.json', function (font){
        const geometry = new TextGeometry('Window', {
            font: font,
            size: 60,
            height: 20,
        })
        const geo = geometry;
        
  
        const material = new THREE.MeshPhongMaterial({color: Blue})
        const mesh = new THREE.Mesh(geo, material);
        // return mesh;
    })

    }
}