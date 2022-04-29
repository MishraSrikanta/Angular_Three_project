import { Black, Blue, Green } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class Line1{
    constructor() { }
    static createline() {
        const linematerial = new THREE.LineBasicMaterial({ color: Black, linewidth: 2 , vertexColors: false });
        
        const points: THREE.Vector3[] = [];
        points[0] = new THREE.Vector3(0, -2.02, 0)
        points[1] = new THREE.Vector3(0, 15.02, 0)
        const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(linegeometry, linematerial);
        return line;
    }
}