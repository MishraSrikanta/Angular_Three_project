import { Black, Green } from "src/app/Constants/ColorConstants";
import * as THREE from "three";

export class GlassLineTop {
    constructor() { }
    static createline() {
        const linematerial = new THREE.LineBasicMaterial({ color: Black, linewidth: 5, fog: true })
        const points: THREE.Vector3[] = [];
        points[0] = new THREE.Vector3(1.25, 0, -0.5)
        points[1] = new THREE.Vector3(9.85 ,0, -0.5)
        const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
        // const geometry = new THREE.TextGeometry()
        const line = new THREE.Line(linegeometry, linematerial);
        return line;
    }
}