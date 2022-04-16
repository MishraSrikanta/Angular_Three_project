import { Aqua, Brown, Brown2, LightBrown, LightBrown2, Red, Walnut, White, Wood1 } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { Loader } from "three";
import { texture } from "./Texture1";

export class texture8 {
    constructor() { }
    static loader() {
        var loader = new THREE.TextureLoader();

        //#region Loading Texture Using URl

        var bumpTexture = loader.load('../assets/Texture/BumpTexture/WoodTexture6.jpg',
            function (tex) {
                tex.wrapS = THREE.MirroredRepeatWrapping; // THREE.RepeatWrapping, THREE.ClampToEdgeWrapping(Wrappd Horizontally)
                tex.wrapT = THREE.MirroredRepeatWrapping; // THREE.RepeatWrapping, THREE.ClampToEdgeWrapping(Wrappd Vertically)
                tex.repeat.set(10, 1);
                tex.anisotropy = 2;  // used to enhancing the image quality of the texture
                tex.needsUpdate = true;
            });

        //#region Loading Normal texture Using URL
    
        var normalTexture = loader.load('../assets/Texture/NormalTexture/WoodNormalTexture10.jpg',
            function (tex) {
                tex.wrapS = THREE.MirroredRepeatWrapping;
                tex.wrapT = THREE.MirroredRepeatWrapping;
                tex.repeat.set(10, 1);
                tex.anisotropy = 20;
                tex.needsUpdate = true;
            });
        // const texture = new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic14.jpg');
        var texture = new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic32.jpg')
        const material = new THREE.MeshStandardMaterial({
            //  color: DarkBrown,
            color: Walnut,
            wireframe: false,
            roughness: 1,
            // metalness: 0.1,
            // opacity: 0.2,
            // transparent: true

            // map: null
            // side: THREE.DoubleSide,
            // map: new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic2.jpg')
        });

        material.map = texture;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0.5);
        texture.repeat.set(0.05, 0.05);
        texture.anisotropy = 10;
        texture.needsUpdate = true;
        // material.map = texture;
        // material.bumpMap = bumpTexture;
        // material.normalMap = normalTexture;
        // material.normalScale.set(50, 50)
        return material;
    }
}