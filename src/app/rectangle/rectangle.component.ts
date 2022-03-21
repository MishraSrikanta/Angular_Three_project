import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Lights } from '../Visualization/lights/LightsVisulaization';
import { RectangleShape } from '../Visualization/shapes/RectangleShape';


@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit, AfterViewInit {

  //#region Canvas
  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  @ViewChild('canvas')
  private canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  //#endregion

  //#region Inputs
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 0.1;
  @Input('farClipping') public farClippingPlane: number = 100000;
  @Input() public texture: string = "https://upload.wikimedia.org/wikipedia/commons/b/b8/Exploding_planet.jpg";
  //#endregion

  //#region Orbit Controls
  private orbitcontrol() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.camera.position.set(0, 0, 200);
    controls.enableDamping = false;
    return controls;
  }
  //#endregion

  //#region Practice with cube for reference
  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(2, 2, 2);
  private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });
  private cube = new THREE.Mesh(this.geometry, this.material);
  //#endregion

  //#region CreateScene Function
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf5f5f5)
    this.scene.add(this.cube);
    this.cube.position.set(4, 2, 2);
    //create Rectangle using Extrudegeometry
    let Rectangle1 = RectangleShape.createrectangle();
    this.scene.add(Rectangle1);

    // let cube = Cube.createcube();

    //#region lights
    //Adding lights and LightHelpers to the scene
    const pointlight1 = Lights.pointlight1();
    const pointlight2 = Lights.pointlight2();
    // const pointlight3 = Lights.pointlight3();
    // const ambientlight = Lights.ambientlight();
    this.scene.add(pointlight1, pointlight2)
    let lighthelper1 = new THREE.PointLightHelper(pointlight1);
    let lighthelper2 = new THREE.PointLightHelper(pointlight2);
    this.scene.add(lighthelper1, lighthelper2)
    //#endregion

    //#region Camera
    let aspectRatio = this.getAspectRatio()
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
    // return cube1;
    //#endregion
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  //#endregion

  //#region Render Function
  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: RectangleComponent = this;
    let control = this.orbitcontrol();
    (function render() {
      requestAnimationFrame(render);
      // component.animatecube();
      control.update();

      component.renderer.render(component.scene, component.camera);
    }());
  }
  //#endregion

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
