import * as THREE from 'three';
export class Cube{
    constructor(){}
    static createcube(){
        const geometry = new THREE.BoxGeometry(5 ,5, 5);
        const material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry , material);
        mesh.position.set(5, 5, 0 );
        return mesh;
    }
}