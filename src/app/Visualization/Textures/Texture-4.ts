import { DarkBrown, LightBrown, Walnut } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class texture6 {
    constructor() { }
    static loader() {
        var loader = new THREE.TextureLoader();
        var bumpTexture = loader.load('../assets/Texture/BumpTexture/WoodTexture8.jpg',
            function (tex) {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(4, 1);
                tex.anisotropy = 2;
                tex.needsUpdate = true;
            });
        var normalTexture = loader.load('../assets/Texture/NormalTexture/WoodNormalTexture15.jpg',
            function (tex) {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(4, 1);
                tex.anisotropy = 10;
                tex.needsUpdate = true;
            });

            var texture = new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic22.jpg')
            // var normaltexture = loader.load('https://i.pinimg.com/originals/60/37/96/603796cef1e18a412c5f8447e95b6fe9.jpg')
        const material = new THREE.MeshStandardMaterial({
            //  color: DarkBrown,
            color: Walnut,
            wireframe: false,
            roughness: 1,
            // metalness: 0.1,
            //  map: new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic1.jpg')
        });
        material.map = texture;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0.5, 0.9);
        texture.repeat.set(0.1, 0.1);
        texture.anisotropy = 10;
        // texture.needsUpdate = true;
        // material.bumpMap = bumpTexture;
        // material.bumpMap = bumpTexture;
        // material.normalMap = normalTexture;
        // material.normalScale.set(50, 50)
        return material;
    }
}