import { LightBrown } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class texture7 {
    constructor() { }
    static loader() {
        var loader = new THREE.TextureLoader();
        var bumpTexture = loader.load('../assets/Texture/BumpTexture/WoodTexture12.jpg',
            function (tex) {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(4, 1);
                tex.anisotropy = 2;
                tex.needsUpdate = true;
            });
        var normalTexture = loader.load('../assets/Texture/NormalTexture/WoodNormalTexture3.jpg',
            function (tex) {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(4, 1);
                tex.anisotropy = 10;
                tex.needsUpdate = true;
            });


            // var normaltexture = loader.load('https://i.pinimg.com/originals/60/37/96/603796cef1e18a412c5f8447e95b6fe9.jpg')
        const material = new THREE.MeshStandardMaterial({
            //  color: DarkBrown,
            color: LightBrown,
            wireframe: false,
            // roughness: 1,
            // metalness: 0.1,
             map: new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic13.jpg')
        });
        material.bumpMap = bumpTexture;
        material.normalMap = normalTexture;
        material.normalScale.set(50, 50)
        return material;
    }
}