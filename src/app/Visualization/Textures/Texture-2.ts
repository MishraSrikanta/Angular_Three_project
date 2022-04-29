import { AshGray, Black, Crimson, DarkBrown, darkSoil, LightBrown, Silver, Walnut, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";
import { Color } from "three";

export class texture4 {
    constructor() { }
    static loader() {
        var loader = new THREE.TextureLoader();
        var bumpTexture = loader.load("../assets/Texture/BumpTexture/WoodTexture6.jpg",
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
                tex.anisotropy = 2;
                tex.needsUpdate = true;
            });

            var texture = new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic3.jpg')
            // var normaltexture = loader.load('https://i.pinimg.com/originals/60/37/96/603796cef1e18a412c5f8447e95b6fe9.jpg')
        const material = new THREE.MeshStandardMaterial({
            //  color: DarkBrown,
            color: Walnut,
            wireframe: false,
            roughness: 1,
            // metalness: 0.5,
            // transparent: true,
            // opacity: 0.9,
        
            // metalness: 0.1,
            //  map: new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic2.jpg')
        });

        material.map = texture;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0.9);
        texture.repeat.set(0.1, 0.1);
        texture.anisotropy = 10;
        // texture.needsUpdate = true;
        // const newcolor = new Color(0xba8c63)
        // newcolor.convertSRGBToLinear();
        // material.color.set(newcolor)

        // material.bumpMap = bumpTexture;
        // material.normalMap = normalTexture;
        // material.normalScale.set(50, 50)
        return material;
    }
}