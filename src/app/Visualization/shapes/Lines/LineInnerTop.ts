import { Black, Green } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class Line4{
    constructor() { }
    static createline() {
        const linematerial = new THREE.LineBasicMaterial({ color: Black , linewidth: 2 , vertexColors: false})
        const points: THREE.Vector3[] = [];
        points[0] = new THREE.Vector3(1.02, -3, 0)
        points[1] = new THREE.Vector3(9.98, -3, 0)
        const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(linegeometry, linematerial);
        return line;
    }
}