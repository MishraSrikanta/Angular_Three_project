import { LightBrown, White } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class TextureExample {
    constructor() { }
    static texture1() {
        var loader = new THREE.TextureLoader();
        var bumpTexture = loader.load('../assets/Texture/BumpTexture/WoodTexture2.jpg',
            function (tex) {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(4, 1);
                tex.anisotropy = 2;
                tex.needsUpdate = true;
            });
        var normalTexture = loader.load('../assets/Texture/NormalTexture/WoodNormalTexture5.jpg',
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
            // color: LightBrown,
            wireframe: false,
            // roughness: 1,
            // metalness: 0.1,
             map: new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic11.jpg')
        });
        material.bumpMap = bumpTexture;
        material.normalMap = normalTexture;
        material.normalScale.set(50, 50)
        return material;
    }

    static texture2(){
        var loader = new THREE.TextureLoader();

        //#region Loading Texture Using URl
        //texture-1
        // var bumpTexture = loader.load("https://thumbs.dreamstime.com/b/wood-plank-texture-old-dirty-wooden-plank-texture-wood-plank-texture-old-dirty-wooden-plank-texture-148975711.jpg",
        //texture-2
        // var bumpTexture = loader.load("https://thumbs.dreamstime.com/b/k-kitchen-wood-roughness-texture-height-map-specular-imperfection-map-d-materials-black-white-texture-k-kitchen-200337533.jpg",
        //texture-3
        // var bumpTexture = loader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIu9MB1Cqt0j0YRP3xrQg0Lc8gjc6fjwe0kQBMz4yW8Plhp6Ou4NmMg0KKSBQ96RHwlA&usqp=CAU",
        //texture-4
        // var bumpTexture = loader.load("https://previews.123rf.com/images/glowonconcept/glowonconcept1404/glowonconcept140400094/27306926-blanco-y-negro-chich%C3%B3n-textura-de-madera.jpg",
        //texture-5
        // var bumpTexture = loader.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKAwUFmxfn6w0QEzLYwwZPrZjF9ZyJ4sf5MHrOu3uTNQAzFEK8KCxcaZgS0BcxWFShB0&usqp=CAU",
        //#endregion

        var bumpTexture = loader.load('../assets/Texture/BumpTexture/WoodTexture3.jpg',
            function (tex) {
                tex.wrapS = THREE.MirroredRepeatWrapping; // THREE.RepeatWrapping, THREE.ClampToEdgeWrapping(Wrappd Horizontally)
                tex.wrapT = THREE.MirroredRepeatWrapping; // THREE.RepeatWrapping, THREE.ClampToEdgeWrapping(Wrappd Vertically)
                tex.repeat.set(10, 1);
                tex.anisotropy = 2;  // used to enhancing the image quality of the texture
                tex.needsUpdate = true;
            });

        //#region Loading Normal texture Using URL
        //normalTexture-`1
        // var normalTexture = loader.load('https://st.depositphotos.com/50791200/53096/i/600/depositphotos_530967780-stock-photo-normal-map-texture-mapping-wood.jpg',
        //normalTexture-2
        //var normalTexture = loader.load('https://thumbs.dreamstime.com/b/k-tree-bark-roughness-texture-height-map-specular-imperfection-d-materials-black-white-hi-res-200365752.jpg',
        //normalTexture-3
        // var normalTexture = loader.load('https://www.filterforge.com/filters/5745-normal.jpg',
        //#endregion

        var normalTexture = loader.load('../assets/Texture/NormalTexture/WoodNormalTexture6.jpg',
            function (tex) {
                tex.wrapS = THREE.MirroredRepeatWrapping;
                tex.wrapT = THREE.MirroredRepeatWrapping;
                tex.repeat.set(10, 1);
                tex.anisotropy = 20;
                tex.needsUpdate = true;
            });
        const texture = new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic3.jpg');

        const material = new THREE.MeshStandardMaterial({
            //  color: DarkBrown,
            color: White,
            wireframe: false,
            // roughness: 0.5,
            metalness: 0.1,
            // opacity: 0.2,
            // transparent: true

            map: null
            // side: THREE.DoubleSide,
            // map: new THREE.TextureLoader().load('../assets/MaterialMap/Woodpic1.jpg')
        });
        // material.map = texture;
        // material.bumpMap = bumpTexture;
        // material.normalMap = normalTexture;
        // material.normalScale.set(50, 50)
        return material;
    
    }


}