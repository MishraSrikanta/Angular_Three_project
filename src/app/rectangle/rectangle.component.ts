import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { Lights } from '../Visualization/lights/LightsVisulaization';
import { Aqua, Black, Blue, Charcol, DarkBrown, darkSoil, LightBrown, LightCyan, MediumBlue, Red, White, Wood1 } from '../Constants/ColorConstants';
import { WindowShape1 } from '../Visualization/shapes/Window/Windowshape1';
import { WindowShape2 } from '../Visualization/shapes/Window/WindowShape2';
import { WindowShape3 } from '../Visualization/shapes/Window/WindowShape3';
import { WindowShape4 } from '../Visualization/shapes/Window/WindowShape4';
import { WindowGlassBottom } from '../Visualization/shapes/Window/WindowGlass/WindowGlassBottom';
import { WindowShapeTop1 } from '../Visualization/shapes/Window/WindowShapetop1';
import { WindowShapeTop2 } from '../Visualization/shapes/Window/WindowShapetop2';
import { WindowShapeTop3 } from '../Visualization/shapes/Window/WindowShapetop3';
import { Line1 } from '../Visualization/shapes/Lines/LineOuterSide';
import { Line2 } from '../Visualization/shapes/Lines/LineOuterTop';
import { Line3 } from '../Visualization/shapes/Lines/LineInnerSide';
import { Line4 } from '../Visualization/shapes/Lines/LineInnerTop';
import { GlassLineSide } from '../Visualization/shapes/Lines/Glasslineside';
import { GlassLineTop } from '../Visualization/shapes/Lines/GlassLineTop';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NgControlStatus } from '@angular/forms';
import { animate } from '@angular/animations';
import { Cube } from '../Visualization/Helpers/cubeHelper';
import { AnimationClip, AnimationMixer, Camera, Clock, Scene } from 'three';
import { texture3 } from '../Visualization/Textures/Texture3';
import { texture2 } from '../Visualization/Textures/Texture2';
import { WindowLock1 } from '../Visualization/shapes/WindowLock/WindowLock1';
import { AnimationClipCreator } from 'three/examples/jsm/animation/AnimationClipCreator'
import { Easing, Tween, update } from '@tweenjs/tween.js';
import { WindowShapeTop5 } from '../Visualization/shapes/Window/WindowShapetop5';
import { WindowShapeTop6 } from '../Visualization/shapes/Window/WindowShapeTop6';
import { WindowShapeTop7 } from '../Visualization/shapes/Window/WindowShapeTop7';
import { WindowShapeTop8 } from '../Visualization/shapes/Window/WindowShapeTop8';
import { WindowGlassTop } from '../Visualization/shapes/Window/WindowGlass/WindowGlassTop';
import { texture } from '../Visualization/Textures/Texture1';
import { WindowGlassTop1 } from '../Visualization/shapes/Window/WindowGlass/WindowGlassTop1';
import { WindowShapeTop6New } from '../Visualization/shapes/Window/WindowShapeTop6New';
import { WindowFrame } from '../Visualization/shapes/Window/Window Frame/FrameSide';
import { WindowFrameTop } from '../Visualization/shapes/Window/Window Frame/FrameTop';
import { WindowSashSide } from '../Visualization/shapes/Window/Window Sash/FrameSash1';
import { WindowSashTop } from '../Visualization/shapes/Window/Window Sash/FrameSash2';
import { GlassShape2 } from '../Visualization/shapes/GlassShape2';
import { max, min } from 'rxjs';
import { GlassRightSliding } from '../Visualization/shapes/SlidingRightGlass';
import { Reload } from '../Buttons/ReloadFunction';
import { texture4 } from '../Visualization/Textures/Texture4';
import { texture5 } from '../Visualization/Textures/Texture5';
import { texture7 } from '../Visualization/Textures/Texture7';
import { texture6 } from '../Visualization/Textures/Texture6';
// import {DragControls} from '../../../node_modules/three/examples/jsm/controls'


// import { text1 } from '../Visualization/shapes/text';

// import {FontLoader} from '../Visualization/'


@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit, AfterViewInit {

  //#region Canvas
  private camera!: THREE.PerspectiveCamera;
  tex: any;
  wt1: any;

  // private object: THREE.Object3D<THREE.Event>;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  @ViewChild('canvas')
  private canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  //#endregion

  //#region Inputs
  // @Input() public cameraZ: number = 500;
  // @Input() public cameraX: number = 50; // Use If Requires
  // @Input() public cameray: number = 500; // Use If Requires
  @Input() public fieldOfView: number = 6;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 10000;
  @Input() public texture: string = '../assets/MaterialMap/Woodpic1.jpg'
  //#endregion

  //#region Orbit Controls
  private orbitcontrol() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.camera.position.set(0, 20, 400);
    controls.enableDamping = false;
    // controls.keys ={
    //   LEFT: 'ArrowLeft',
    //   UP: 'ArrowUp',
    //   RIGHT: 'ArrowRight',
    //   BOTTOM: 'ArrowDown'
    // }
    return controls;
  }
  //#endregion

  //#region Practice with cube for reference
  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(2, 2, 2);
  private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });
  private cube = new THREE.Mesh(this.geometry, this.material);

  //#endregion

  // Create Scene Function
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(LightCyan)
    this.scene.add(this.cube);
    this.cube.position.set(-4, 2, 2);

    console.log("scene is created");
    //#region Windowshape
    const window1 = WindowShape1.createwindow()
    window1.name = "w1"
    this.scene.add(window1)

    const window2 = WindowShape2.createwindow()
    window2.name = "w2"
    this.scene.add(window2)

    const window3 = WindowShape3.createwindow()
    window3.name = "w3"
    this.scene.add(window3)

    const window4 = WindowShape4.createwindow()
    window4.name = "w4"
    this.scene.add(window4)

    const windowGlassBottom = WindowGlassBottom.createGlassShape()
    windowGlassBottom.name = "wgB"
    // this.scene.add(windowGlassBottom)



    // const windowGlassBot1 = WindowGlassTop.createGlassShape()
    // windowGlassBot1.name = "wgB1"
    // this.scene.add(windowGlassBot1)
    // windowGlassBot1.position.set(0, -11, 0)

    // const windowGlassBot2 = WindowGlassTop.createGlassShape()
    // windowGlassBot2.name = "wgB2"
    // this.scene.add(windowGlassBot2)
    // windowGlassBot2.position.set(0, -6, -0.5)

    const windowtop1 = WindowShapeTop1.createwindow()
    windowtop1.name = "WT1";
    this.scene.add(windowtop1)

    const windowtop2 = WindowShapeTop2.createwindow()
    windowtop2.name = "WT2";
    this.scene.add(windowtop2)

    const windowtop3 = WindowShapeTop3.createwindow()
    this.scene.add(windowtop3)
    windowtop3.name = "WT3";


    const windowtop5 = WindowShapeTop5.createwindow()
    windowtop5.name = "wT1"
    this.scene.add(windowtop5)

    const windowtop6 = WindowShapeTop6New.createwindow()
    windowtop6.name = "wT2"
    this.scene.add(windowtop6)

    const windowtop7 = WindowShapeTop7.createwindow()
    windowtop7.name = "wT3"
    this.scene.add(windowtop7)

    const windowtop8 = WindowShapeTop8.createwindow()
    windowtop8.name = "wT4"
    this.scene.add(windowtop8)


    //#region first top sliders
    // const windowSlider1 = WindowShapeTop5.createwindow()
    // windowSlider1.name = "wS1"
    // windowSlider1.position.set(1, 4, 0);
    // const windowSlider2 = WindowShapeTop6.createwindow()
    // windowSlider2.name = "wS2"
    // windowSlider2.position.set(9.5, 4, 0);
    // const windowSlider3 = WindowShapeTop7.createwindow()
    // windowSlider3.name = "wS3"
    // windowSlider3.position.set(1, 4, 0);
    // const windowSlider4 = WindowShapeTop8.createwindow()
    // windowSlider4.name = "wS4"
    // windowSlider4.position.set(1, -0.5, 0);


    // const windowSlider5 = WindowShapeTop5.createwindow()
    // windowSlider5.name = "wS5"
    // windowSlider5.position.set(1, 9, -0.5);
    // const windowSlider6 = WindowShapeTop6.createwindow()
    // windowSlider6.name = "wS6"
    // windowSlider6.position.set(9.5, 9, -0.5);
    // const windowSlider7 = WindowShapeTop7.createwindow()
    // windowSlider7.name = "wS7"
    // windowSlider7.position.set(1, 9, -0.5)
    // const windowSlider8 = WindowShapeTop8.createwindow()
    // windowSlider8.name = "wS8"
    // windowSlider8.position.set(1, 4.5, -0.5);
    // this.scene.add(windowSlider1, windowSlider2, windowSlider3, windowSlider4, windowSlider5, windowSlider6, windowSlider7, windowSlider8)
    //#endregion

    //#region  Frame
    const frameleft = WindowFrame.createFrame();
    frameleft.name = "Fl"
    this.scene.add(frameleft);

    const frameright = WindowFrame.createFrame();
    frameright.name = "Fr"
    this.scene.add(frameright);
    frameright.position.set(10, -0.6, 0)
    frameright.rotation.y = Math.PI

    const frametop = WindowFrameTop.createFrame();
    frametop.name = "Ft"
    this.scene.add(frametop);
    frametop.rotation.y = -Math.PI / 2
    frametop.position.set(10, 9, 0)

    const framebot = WindowFrameTop.createFrame();
    framebot.name = "Fb"
    this.scene.add(framebot);
    framebot.rotation.y = Math.PI / 2
    framebot.position.set(1, -1, 0)
    //#endregion

    //#region Window Sash
    const framesashleft = WindowSashSide.createFrame();
    framesashleft.name = "Fsl";
    this.scene.add(framesashleft);
    framesashleft.position.set(1.3, -0.7, -0.4)

    const framesashright = WindowSashSide.createFrame();
    framesashright.name = "Fsr";
    this.scene.add(framesashright);
    framesashright.position.set(5.8, 8.6, -0.4)
    framesashright.rotation.y = -Math.PI
    // framesashright.rotation.x =-Math.PI

    const framesashtop = WindowSashTop.createFrame();
    framesashtop.name = "Fst";
    this.scene.add(framesashtop);
    framesashtop.position.set(1.3, 8.6, -0.4)
    framesashtop.rotation.y = Math.PI / 2
    framesashtop.rotation.z = -Math.PI / 2

    const framesashbot = WindowSashTop.createFrame();
    framesashbot.name = "Fsb";
    this.scene.add(framesashbot);
    framesashbot.position.set(5.8, -0.7, -0.4)
    framesashbot.rotation.y = -Math.PI / 2
    framesashbot.rotation.z = Math.PI / 2









    const framesashleft2 = WindowSashSide.createFrame();
    framesashleft2.name = "Fsl2";
    this.scene.add(framesashleft2);
    framesashleft2.position.set(5.2, -0.6, -0.5)
    const framesashright2 = WindowSashSide.createFrame();
    framesashright2.name = "Fsr2";
    this.scene.add(framesashright2);
    framesashright2.position.set(9.7, 8.6, -0.5)
    framesashright2.rotation.y = -Math.PI



    const framesashtop1 = WindowSashTop.createFrame();
    framesashtop1.name = "Fst1";
    this.scene.add(framesashtop1);
    framesashtop1.position.set(5.5, 8.6, -0.5)
    framesashtop1.rotation.y = Math.PI / 2
    framesashtop1.rotation.z = -Math.PI / 2

    const framesashbot1 = WindowSashTop.createFrame();
    framesashbot1.name = "Fsb1";
    this.scene.add(framesashbot1);
    framesashbot1.position.set(9.6, -0.6, -0.5)
    framesashbot1.rotation.y = -Math.PI / 2
    framesashbot1.rotation.z = Math.PI / 2

    var glass = GlassShape2.createGlassShape()
    glass.name = "GL"
    this.scene.add(glass)
    // glass.userData['update']  = {min : new THREE.Vector3(1, 0, 0),
    // max: new THREE.Vector3(10, 0, 0)};

    // var position1 = new THREE.Vector3(1, 0, 0);
    // var position2 =   new THREE.Vector3(10, 0, 0);
    // function glassupdate(){
    //   glass.position.clamp( position1, position2)
    // }
    glass.add(framesashleft, framesashright, framesashbot, framesashtop)
    var glassRight = GlassRightSliding.createGlassShape()
    glassRight.name = "GLR"
    this.scene.add(glassRight)
    // glassRight.position.set(0,0,0)
    glassRight.add(framesashbot1, framesashtop1, framesashleft2, framesashright2)


    const windowGlasstop = WindowGlassTop1.createGlassShape()
    windowGlasstop.name = "wgT"
    this.scene.add(windowGlasstop)


    // windowGlasstop.position.set(1, 0, 0.5)
    windowGlasstop.add(windowtop5, windowtop6, windowtop7, windowtop8)

    // windowGlasstop.rotation.setFromRotationMatrix(new THREE.Matrix4())
    //#endregion

    //#endregion


    //#region practices

    //#region Practices of group
    // var group = new THREE.Group();
    // group.name = "frame";
    // group.add(framesashleft, framesashbot, framesashtop, framesashright)
    // this.scene.add(group)


    // framesashleft.add(framesashright);
    // framesashright.position.set(10.5 ,0 ,0);
    // framesashright.rotation.x = -Math.PI/2
    // framesashright.rotation.y = -Math.PI/2
    // 
    // framesashright.rotation.z = Math.PI/2
    //#endregion

    //#region Buttons For Colors using appComponent
    // var objectscene: { material: { color: { set: (arg0: number) => void; }; }; }[] = []
    // objectscene.push(window1, window2, window3, window4, windowtop1, windowtop2, windowtop3,)

    // var Lightbrown = document.getElementById("LightBrown")
    // Lightbrown?.addEventListener('click', event => {
    //   console.log("Light Brown Color is Selected")
    //   // objectscene.forEach(ele =>{
    //   //   this.material.color.set(Blue);
    //   // })
    //   objectscene.forEach(object => {
    //     object.material.color.set(LightBrown)
    //   })
    // })
    // var white = document.getElementById("White");
    // white?.addEventListener('click', event => {
    //   console.log("White color is Selected");
    //   objectscene.forEach(object => {
    //     object.material.color.set(White)
    //   })
    // })
    // var darkbrown = document.getElementById("DarkBrown");
    // darkbrown?.addEventListener('click', event => {
    //   console.log("dark Brown color is Selected");
    //   objectscene.forEach(object => {
    //     object.material.color.set(Charcol)
    //   })
    // })

    //#endregion

    //#region Different Shapes
    //create Rectangle using Extrudegeometry
    // let Rectangle1 = RectangleShape.createrectangle();
    // this.scene.add(Rectangle1);
    //Creating Cube For Reference 
    // let cube = Cube.createcube();

    //Creating I-Shape using ExtrudeGeometry
    // let Ishape = IShape.createIshape();
    // this.scene.add(Ishape);
    //#endregion

    //#region T-shapes
    // Creating T-Shape using ExtrudeGeometry
    // let shape1 = TShape1.createTshape1();
    // this.scene.add(shape1);

    // let shape2 = TShape2.createTshape2();
    // this.scene.add(shape2);

    // let shape3 = TShape3.createTshape3();
    // this.scene.add(shape3);

    // let shape4 = TShape4.createTshape4();
    // this.scene.add(shape4);

    // let shape5 = TShape5.createTshape5();
    // // this.scene.add(shape5);

    // let shape6 = TShape6.createTshape6();
    // // this.scene.add(shape6);

    // let shape7 = TShape7.createTshape7();
    // // this.scene.add(shape7);

    // let shape8 = TShape8.createTshape8();
    // // this.scene.add(shape8);

    //#endregion

    //#region Glass shape and handles
    // const glass1 = GlassShape.createGlassShape();
    // this.scene.add(glass1);

    // const glass2 = GlassShape2.createGlassShape();
    // this.scene.add(glass2);

    // const mullian = MullianShape.createMullianShape()
    // this.scene.add(mullian);

    // const windowlock1 = WindowLock1.createLock()
    // this.scene.add(windowlock1);

    // const windowlockHandle = WindowLockHandle.createLockHandle()
    // this.scene.add(windowlockHandle);
    // windowlockHandle.position.set(0, 0, 2)

    //#endregion

    //#region GridHelper
    // var grid = new THREE.GridHelper(30, 30);
    // this.scene.add(grid);
    // grid.rotation.x = Math.PI / 2
    // grid.position.set(5, 6.5, -5)

    //#endregion

    //#region Texture Buttons 

    // const texureMaterial = texture3.loader()
    // const NormalMaterial = texture2.loader()
    // const texureMaterial2 = texture.loader()

    // const textureOn = document.getElementById("TexturesOn");
    // textureOn?.addEventListener('click', event => {
    //   objectscene.forEach(object => {
    //     object.material = texureMaterial
    //   })
    //   // window1.material = texureMaterial; // For Trail
    //   console.log("Texture On")
    // })
    // const textureOff = document.getElementById("TexturesOff")
    // textureOff?.addEventListener('click', event => {
    //   objectscene.forEach(object => {
    //     object.material = NormalMaterial
    //   })
    //   // window1.material = NormalMaterial; // Trail
    //   console.log("Texture Off")
    // })


    //#endregion

    //#region  practices
    // private raycast(){

    //   const raycaster = new THREE.Raycaster()
    //   // const myobject: THREE.Mesh[]= [window, window2, window3, window4, windowGlassBottom, windowtop1, windowtop2, windowtop3];
    //   let mouse = new THREE.Vector2();
    //   // const cubeobj = [this.cube]
    //   window.addEventListener("click", (event) => {
    //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

    //     raycaster.setFromCamera(mouse, this.camera)

    //     const interscets = raycaster.intersectObjects(this.scene.children, false)
    //     // const interscets = raycaster.intersectObjects(myobject)
    //     // const intersected = interscets.find(
    //     //   (interscetedEl) => interscetedEl.object.uuid === objectToWatchId

    //     for(let i=0; i< interscets.length; i ++){
    //       console.log("clicked")

    //     }

    //     // if (interscets[0].object == window1) {

    //     //     // myobject[i].material.Color.set(Blue)
    //     //     // interscets[0].object.material.color.set(0xff0000)
    //     //     window1.material.color.set(Blue)

    //     // }
    //   })

    // }
    //#endregion

    //#region Practicing
    // const myobject: THREE.Mesh[] = [window1, window2, window3, window4, windowGlassBottom, windowtop1, windowtop2, windowtop3];
    // const mouse = new THREE.Vector2()
    // // const raycaster = new THREE.Raycaster();
    // const raycaster = new THREE.Raycaster();
    // const pointer = new THREE.Vector2();

    // function onPointerMove( event: { clientX: number; clientY: number; } ) {

    //   // calculate pointer position in normalized device coordinates
    //   // (-1 to +1) for both components

    //   pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    //   pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // }
    // function render() {

    //   // update the picking ray with the camera and pointer position


    //   // calculate objects intersecting the picking ray
    //   const intersects = raycaster.intersectObjects(scene.children);

    //   for ( let i = 0; i < intersects.length; i ++ ) {

    //     intersects[ i ].object.material.color.set( 0xff0000 );

    //   }
    // this.renderer.domElement.addEventListener('dblclick', onDoubleClick, false)

    // const myobject: THREE.Mesh[] = [window1, window2, window3, window4, windowGlassBottom, windowtop1, windowtop2, windowtop3];
    // const raycaster = new THREE.Raycaster()

    // document.addEventListener('mousemove', onDocumentMouseMove, false)
    // function onDocumentMouseMove(this: any, event: MouseEvent) {
    //   raycaster.setFromCamera(
    //     {
    //       x: (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1,
    //       y: -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1
    //     },
    //     this.camera
    //   )
    //   const intersects = raycaster.intersectObjects(myobject, false)
    //   if(intersects.length > 0){
    //    var intersectObject = intersects[0].object
    //   }else{
    //     intersectObject = null
    //   }
    // }
    //#endregion

    //#region Practice
    // const myobject: THREE.Mesh[] = [window1, window2, window3, window4, windowGlassBottom, windowtop1, windowtop2, windowtop3];
    // this.scene.add(new THREE.AxesHelper(5))
    // const arrowHelper = new THREE.ArrowHelper(
    //   new THREE.Vector3(),
    //   new THREE.Vector3(),
    //   0.25,
    //   0xffff00
    // )
    //   // this.scene.add(arrowHelper)
    //   const raycaster = new THREE.Raycaster()

    //   this.renderer.domElement.addEventListener('mousemove', onmousemove, false);
    //   const onmousemove = (event: MouseEvent) => {
    //     const mouse = {
    //       x: (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1,
    //       y: -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1,
    //     }
    //     console.log(mouse)
    //   }

    //     raycaster.setFromCamera(mouse, this.camera)
    //     const intersects = raycaster.intersectObjects(myobject, false)
    //     if (intersects.length > 0) {
    //       const n = new THREE.Vector3()
    //       n.copy((intersects[0].face as THREE.Face).normal)
    //       n.transformDirection(intersects[0].object.matrixWorld);
    //       console.log("Raycaster is working")

    //       arrowHelper.setDirection(n)
    //       arrowHelper.position.copy(intersects[0].point)
    //     }

    //   }

    //   const onDoubleClick = (event: MouseEvent) => {
    //     const mouse = {
    //       x: (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1,
    //       y: -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1,
    //     }
    //     raycaster.setFromCamera(mouse, this.camera)

    //     const intersects = raycaster.intersectObjects(myobject, false)
    //     if (intersects.length > 0) {
    //       const n = new THREE.Vector3()
    //       n.copy((intersects[0].face as THREE.Face).normal)
    //       n.transformDirection(intersects[0].object.matrixWorld)
    //       console.log("Dobule clicke happens");


    //     }

    //     this.renderer.domElement.addEventListener('dblclick', onDoubleClick, false);
    //   }
    // }
    //#endregion

    //#region  practice2
    // const objectToWatchId = objectToWatch.uuid;

    //   const raycaster = new THREE.Raycaster()
    //   const myobject: THREE.Mesh[]= [window1, window2, window3, window4, windowGlassBottom, windowtop1, windowtop2, windowtop3];
    //   let mouse = new THREE.Vector2();
    //   // const cubeobj = [this.cube]
    //   window.addEventListener("click", (event) => {
    //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

    //     raycaster.setFromCamera(mouse, camera)

    //     const interscets = raycaster.intersectObjects(myobject, false)
    //     // const interscets = raycaster.intersectObjects(myobject)
    //     // const intersected = interscets.find(
    //     //   (interscetedEl) => interscetedEl.object.uuid === objectToWatchId

    //     for(let i=0; i< interscets.length; i ++){
    //       console.log("clicked")

    //     }

    //     // if (interscets[0].object == window1) {

    //     //     // myobject[i].material.Color.set(Blue)
    //     //     // interscets[0].object.material.color.set(0xff0000)
    //     //     window1.material.color.set(Blue)

    //     // }
    //   })
    // }
    // interscets[i].(this.scene.getObjectByName("MeshName") as THREE.Mesh).material

    //   }
    // })

    // if (interscets[0]) {
    //   for (var i = 0; i < interscets.length; i++) {
    //     // interscets[0].object.addEventListener('dblclick', onMouseClick)
    //     // interscets[0].object.
    //     console.log("clicked", interscets[0])
    //   }
    //   function onMouseClick() {
    //     // window2.material.color.set(White);
    //     window1.material.color.set(Blue)
    //     console.log("Event Double Clicked")
    //   }
    //   console.log(mouse);
    // })
    //   if(interscets.length > 0){
    //     onMouseClick();
    //   }


    // })

    // })
    // window.requestAnimationFrame(animate)
    //#endregion

    //#region pracice 3
    // const myobject: THREE.Mesh[] = [window1, window2, window3, window4, windowGlassBottom, windowtop1, windowtop2, windowtop3];
    // const raycaster = new THREE.Raycaster();
    // const pointer = new THREE.Vector2()
    // function onPointerMove(event: { clientX: number; clientY: number; }) {

    //   pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    //   pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // }
    // const render = () => {
    //   raycaster.setFromCamera(pointer, this.camera);
    //   const intersects = raycaster.intersectObjects(this.scene.children);

    //   // for ( let i = 0; i < intersects.length; i ++ ) {

    //   //   // intersects[ i ].object.material.color.set( 0xff0000 );

    //   // }

    //   if (intersects.length > 0) {
    //     // intersects[0].object.addEventListener('click', OnMouseClick)
    //     console.log(intersects[0])
    //   }
    // }

    // // this.renderer.render(this.scene, this.camera);
    // }
    // window.addEventListener('pointermove', onPointerMove);
    // function OnMouseClick() {
    //   console.log()
    // }
    //#endregion

    //#region Etc Practices

    // const raycaster = new THREE.Raycaster();
    // const mouse = new THREE.Vector2();
    // var dragable: THREE.Object3D;

    // window.addEventListener('click', event => {

    //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //   mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    // })
    // raycaster.setFromCamera(mouse, this.camera);
    // const found = raycaster.intersectObjects(this.scene.children);
    // if(found.length> 0 && found[0].object.userData['dragable']){
    //   dragable = found[0].object;
    //   console.log(`found draggable ${dragable.userData['name']}`)
    // }

    //   const raycaster = new THREE.Raycaster()
    //   const sceneMeshes: THREE.Object3D[] = []
    //   sceneMeshes.push(window1);
    //   sceneMeshes.push(window2)


    //   const onMouseMove = (event: MouseEvent) => {
    //     const mouse = {
    //       x: (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1,
    //       y: -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1,
    //     }
    //     raycaster.setFromCamera(mouse, this.camera)
    //     const intersects = raycaster.intersectObjects(sceneMeshes, true)
    //       if (intersects.length > 0) {
    //         console.log(mouse);
    //   }
    //   function onDoubleClick(){
    //     if(intersects[0].object == window1)
    //     console.log("doubleclicked")
    //   }
    //   this.renderer.domElement.addEventListener('dblclick', onDoubleClick, false)
    //   this.renderer.domElement.addEventListener('mousemove', onMouseMove, false)
    //     //#endregion
    // }
    //#endregion

    //#region Practicing of Data struture Algorythims
    // const array1 = WindowPoints;
    // const arr2 = WindowPoints1;
    // console.log(arr2.length)
    // console.log(array1.length)

    // //#region Array.find Methode

    // Object.assign(array1.find(ele => ele.age === 20), {
    //   name: "hello",
    //   age: 30
    // })
    // Object.assign(array1.find(ele => ele.age === 20), {
    //   name: "remo"
    // })

    // // console.log(Object.keys(arr1))
    // Object.assign(array1[0].sibblings?.find(ele => ele.age === 20), {
    //   gender: "Male"
    // })
    // //#endregion

    // //#region Different loop Methods

    // let newage = array1.filter(ele => ele.age === 20);
    // Object.assign(array1.filter(ele => ele.age === 20), {
    //   age: 29,
    //   name: "Rimun"
    // })
    // console.log(newage)

    // array1.forEach(ele => {
    //   ele['age'] = 20;
    //   if (ele.gender == 'Male') {
    //     ele['age'] = 23;
    //     ele.age = 23;   //you can write like this also
    //   }
    //   if (ele.gender == 'Female') {
    //     ele['age'] = 25;
    //   }
    // });


    // //Changing Multiple values in a loop(for same properties)
    // array1.forEach(ele => {
    //   if (ele.age === 20) {
    //     ele.name = "Rimun"
    //   }
    // });
    // // Changing values of sibilling inside the arr1[0].
    // array1[0].sibblings?.forEach(ele => {
    //   if (ele.age === 20) {
    //     ele.height = 5.9;
    //     // arr1[0].sibblings?.push(20)
    //   }
    // })
    // //Filtering the values
    // let newarr1 = array1.filter(ele => ele.age === 21);
    // console.log(newarr1);
    //#endregion

    //#region Changing one value in an object

    // const arr = [
    //   {
    //     id: 101,
    //     name: 'Jone',
    //     age: 1
    //   },
    //   {
    //     id: 102,
    //     name: 'Jane',
    //     age: 2
    //   },
    //   {
    //     id: 103,
    //     name: 'johnny',
    //     age: 3
    //   },
    //   {
    //     id: 104,
    //     name: 'sara',
    //     age: 3
    //   }
    // ];

    // //Don't do in this way
    // // console.log(arr);
    // // arr.find(element => element.id == 101),{name: “jimmy”}

    // //Do in this Second way
    // console.log(arr);
    // Object.assign(arr.find(el => el.age === 3), {
    //   name: "Remo",
    //   age: 15,
    // });


    //Third way 
    // const found: any = arr.find(ele => ele.age === 3)
    // console.log(found)
    // found.name = 'Remo';
    // found.age = 54;
    // console.log(arr)
    //#endregion

    //#endregion

    //#region Create Boundary Lines

    //#region  side lines
    let drawline1 = Line1.createline();
    drawline1.position.set(-0.02, 0, 0.02)
    this.scene.add(drawline1);

    let drawline2 = Line1.createline();
    drawline2.position.set(-0.02, 0, -1.02)
    this.scene.add(drawline2);

    let drawline3 = Line1.createline();
    drawline3.position.set(11.02, 0, 0.02)
    this.scene.add(drawline3);

    let drawline4 = Line1.createline();
    drawline4.position.set(11.02, 0, -1.02)
    this.scene.add(drawline4);


    let sideinner1 = Line3.createline();
    sideinner1.position.set(1.02, 0, 0.02)
    this.scene.add(sideinner1);

    let sideinner2 = Line3.createline();
    sideinner2.position.set(1.02, 0, -1.02)
    this.scene.add(sideinner2);

    let sideinner3 = Line3.createline();
    sideinner3.position.set(9.98, 0, 0.02)
    this.scene.add(sideinner3);

    let sideinner4 = Line3.createline();
    sideinner4.position.set(9.98, 0, -1.02)
    this.scene.add(sideinner4);
    //#endregion

    //#region Top lines

    let topline1 = Line2.createline();
    topline1.position.set(-0.02, -0.02, 0.02)
    this.scene.add(topline1);

    let topline2 = Line2.createline();
    topline2.position.set(-0.02, -0.02, -1.02)
    this.scene.add(topline2);

    let topline3 = Line2.createline();
    topline3.position.set(-0.02, 17.02, -1.02)
    this.scene.add(topline3);

    let topline4 = Line2.createline();
    topline4.position.set(-0.02, 17.02, 0.02)
    this.scene.add(topline4);

    let topinnerline1 = Line4.createline();
    topinnerline1.position.set(0, 2.02, 0.02)
    this.scene.add(topinnerline1);

    let topinnerline2 = Line4.createline();
    topinnerline2.position.set(0, 2.02, -1.02)
    this.scene.add(topinnerline2);

    let topinnerline3 = Line4.createline();
    topinnerline3.position.set(0, 16.98, 0.02)
    this.scene.add(topinnerline3);

    let topinnerline4 = Line4.createline();
    topinnerline4.position.set(0, 16.98, -1.02)
    this.scene.add(topinnerline4);

    let topinnerline5 = Line4.createline();
    topinnerline5.position.set(0, 12.02, -1.02)
    this.scene.add(topinnerline5);

    let topinnerline6 = Line4.createline();
    topinnerline6.position.set(0, 12.02, 0.02)
    this.scene.add(topinnerline6);

    let topinnerline7 = Line4.createline();
    topinnerline7.position.set(0, 13.01, -1.02)
    this.scene.add(topinnerline7);

    let topinnerline8 = Line4.createline();
    topinnerline8.position.set(0, 13.01, 0.02)
    this.scene.add(topinnerline8);



    //#endregion

    //#region GLass lines
    let glassline1 = GlassLineSide.createline()
    glassline1.position.set(2, 0, 0)
    // this.scene.add(glassline1);

    let glassline2 = GlassLineSide.createline()
    glassline2.position.set(10.6, 0, 0)
    // this.scene.add(glassline2);

    let glassline3 = GlassLineTop.createline()
    glassline3.position.set(0, -0.8, 0)
    // this.scene.add(glassline3);

    let glassline4 = GlassLineTop.createline()
    glassline4.position.set(0, 8.8, 0)
    // this.scene.add(glassline4);

    //#endregion

    //#endregion

    //#region Adding Text to the Scene with Delete and text Buttons
    const loader = new FontLoader();
    loader.load('../assets/Teko.json', (font) => {
      const geometry = new TextGeometry('This is a Window', {
        font: font,
        size: 2,
        height: 0.5
        // curveSegments: 12,
        // bevelEnabled: true,
        // bevelThickness: 10,
        // bevelSize: 8,
        // bevelOffset: 0,
        // bevelSegments: 5
      })
      const material = new THREE.MeshStandardMaterial({ color: Black })
      const text = new THREE.Mesh(geometry, material);
      text.position.set(-1.5, -5, 0)
      // return mesh;
      this.scene.add(text);

      var deleteText = document.getElementById("btn1");
      deleteText?.addEventListener('click', event => {
        console.log("del is clicked");
        this.scene.remove(text)

      })
      var ImportText = document.getElementById("btn2")
      ImportText?.addEventListener('click', event => {
        console.log("Import is clicked");
        this.scene.add(text);

      })
    })
    //#endregion

    //#region Raycaster
    var edit = document.getElementById("Editable");

    edit?.addEventListener('click', event => {
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      const arrowHelper = new THREE.ArrowHelper(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0),
        2,
        Red
      )
      this.scene.add(arrowHelper)
      // console.log(arrowHelper)
      const onPointerMove = (event: { clientX: number; clientY: number; }) => {

        pointer.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        pointer.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        // console.log(pointer);

      }

      window.addEventListener('pointermove', onPointerMove);
      const myobject: THREE.Mesh[] = [framesashleft, framesashleft2, framesashbot, framesashbot1, framesashright, framesashright2, framesashtop, framesashtop1, window1, window2, window3, window4, windowGlassBottom, windowGlasstop, windowtop1, windowtop2, windowtop3, windowtop5, windowtop6, windowtop7, windowtop8,];
      window.addEventListener('pointermove', ev => {
        const intersects = raycaster.intersectObjects(myobject, true);
        raycaster.setFromCamera(pointer, this.camera);
        const n = new THREE.Vector3();
        n.copy(intersects[0].object.position);
        n.transformDirection(intersects[0].object.matrixWorld)
        arrowHelper.setDirection(n);
        arrowHelper.position.copy(intersects[0].point)


        window.addEventListener('dblclick', event => {
          if (intersects.length > 0) {
            console.log("pointer is moved")
            // intersects[0].object.addEventListener('dbclick', ev => {
            //   // this.material.color.set(Black)
            //   console.log("Double Clicked")
            if (intersects[0].object.position == window1.position || intersects[0].object.position == windowtop1.position) {
              console.log("Window1 is clicking")
              window1.material.color.set(MediumBlue)
              windowtop1.material.color.set(MediumBlue)
            } else {
              window1.material.color.set(White);
              windowtop1.material.color.set(White);
            }
            if (intersects[0].object.position == window3.position || intersects[0].object.position == windowtop2.position) {
              console.log("Window3 is clicking")
              window3.material.color.set(MediumBlue)
              windowtop2.material.color.set(MediumBlue)
            } else {
              window3.material.color.set(White)
              windowtop2.material.color.set(White)
            }
            if (intersects[0].object.position == window4.position) {
              console.log("Window4 is clicking")
              window4.material.color.set(MediumBlue)
            } else {
              window4.material.color.set(White)
            }
            if (intersects[0].object.position == windowtop3.position) {
              console.log("WindowTop3 is clicking")
              windowtop3.material.color.set(MediumBlue)
            } else {
              windowtop3.material.color.set(White)
            }
            if (intersects[0].object.position == window2.position) {
              console.log("Window2 is clicking")
              window2.material.color.set(MediumBlue)
            } else {
              window2.material.color.set(White)
            }
            if (intersects[0].object.position == framesashleft.position || intersects[0].object.position == framesashbot.position || intersects[0].object.position == framesashtop.position || intersects[0].object.position == framesashright.position) {
              console.log("frame left selected")
              framesashleft.material.color.set(Blue);
              framesashright.material.color.set(Blue);
              framesashtop.material.color.set(Blue);
              framesashbot.material.color.set(Blue);

            } else {
              framesashleft.material.color.set(White);
              framesashright.material.color.set(White);
              framesashtop.material.color.set(White);
              framesashbot.material.color.set(White);
            }
            if (intersects[0].object.position == framesashleft2.position || intersects[0].object.position == framesashbot1.position || intersects[0].object.position == framesashtop1.position || intersects[0].object.position == framesashright2.position) {
              console.log("frame left selected")
              framesashleft2.material.color.set(Blue);
              framesashright2.material.color.set(Blue);
              framesashtop1.material.color.set(Blue);
              framesashbot1.material.color.set(Blue);
            } else {
              framesashleft2.material.color.set(White);
              framesashright2.material.color.set(White);
              framesashtop1.material.color.set(White);
              framesashbot1.material.color.set(White);
            }
          }
        })

      })


    })

    // this.renderer.render(this.scene, this.camera)
    // window.addEventListener('resize',event => {
    //   var width = Container.width
    // });


    // // 

    // // this.renderer.render(this.scene, this.camera)

    //   const intersects = raycaster.intersectObjects(this.scene.children);
    //   raycaster.setFromCamera(pointer, this.camera);
    //   // for (let i = 0; i < intersects.length; i++) {
    //   //   document.addEventListener('dblclick', onDoubleClick, false)
    //   //   // intersects[0].object.addEventListener('dblclick', onDoubleClick)
    //   //   // intersects[ i ].object.material.color.set( 0xff0000 );
    //   // }

    //   if(intersects.length > 0){
    //     onDoubleClick();

    //   }
    //   // this.renderer.render(this.scene, this.camera)

    //#endregion

    //#region lights
    //Adding lights and LightHelpers to the scene
    const pointlight1 = Lights.pointlight1();
    const pointlight2 = Lights.pointlight2();
    const pointlight3 = Lights.pointlight3();
    const pointlight4 = Lights.pointlight4();
    const pointlight5 = Lights.pointlight5();
    const pointlight6 = Lights.pointlight6();
    const ambientlight = Lights.ambientlight();
    const directionalLight = Lights.directionalLight();
    // directionalLight.target.position.set(100, 100, 0)
    this.scene.add(ambientlight, pointlight3, pointlight6, pointlight1, pointlight2)
    let lighthelper1 = new THREE.PointLightHelper(pointlight1);
    let lighthelper2 = new THREE.PointLightHelper(pointlight2);
    let lighthelper3 = new THREE.PointLightHelper(pointlight3);
    let lighthelper4 = new THREE.PointLightHelper(pointlight4);
    let lighthelper5 = new THREE.PointLightHelper(pointlight5);
    let lighthelper6 = new THREE.PointLightHelper(pointlight6);
    let directionalhelper = new THREE.DirectionalLightHelper(directionalLight)
    // this.scene.add(lighthelper1, lighthelper2, lighthelper3, lighthelper4, lighthelper5, lighthelper6)
    // this.scene.add(directionalhelper)
    //#endregion

    //#region Keys Event for Oject- Window1
    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event: { which: any; }) {
      var keyCode = event.which;
      //W
      if (keyCode == 87) {
        window1.position.y += 1;
        window2.position.y += 1;
        window3.position.y += 1;
        window4.position.y += 1;
        windowtop1.position.y += 1;
        windowtop2.position.y += 1;
        windowtop3.position.y += 1;
        windowtop5.position.y += 1;
        windowtop6.position.y += 1;
        windowtop7.position.y += 1;
        windowtop8.position.y += 1;
        windowGlassBottom.position.y += 1;
        windowGlasstop.position.y += 1;

        //Top sliding
        // windowGlassBot1.position.y += 1;
        // windowGlassBot2.position.y += 1;
        // windowSlider1.position.y += 1;
        // windowSlider2.position.y += 1;
        // windowSlider3.position.y += 1;
        // windowSlider4.position.y += 1;
        // windowSlider5.position.y += 1;
        // windowSlider6.position.y += 1;
        // windowSlider7.position.y += 1;
        // windowSlider8.position.y += 1;

        topline1.position.y += 1;
        topline2.position.y += 1;
        topline3.position.y += 1;
        topline4.position.y += 1;
        topinnerline1.position.y += 1;
        topinnerline2.position.y += 1;
        topinnerline3.position.y += 1;
        topinnerline4.position.y += 1;
        topinnerline5.position.y += 1;
        topinnerline6.position.y += 1;
        topinnerline7.position.y += 1;
        topinnerline8.position.y += 1;

        drawline1.position.y += 1;
        drawline2.position.y += 1;
        drawline3.position.y += 1;
        drawline4.position.y += 1;
        sideinner1.position.y += 1;
        sideinner2.position.y += 1;
        sideinner3.position.y += 1;
        sideinner4.position.y += 1;

        glassline1.position.y += 1;
        glassline2.position.y += 1;
        glassline3.position.y += 1;
        glassline4.position.y += 1;


        console.log("Move Up")

      }
      //S
      if (keyCode == 83) {
        window1.position.y -= 1;
        window2.position.y -= 1;
        window3.position.y -= 1;
        window4.position.y -= 1;
        windowtop1.position.y -= 1;
        windowtop2.position.y -= 1;
        windowtop3.position.y -= 1;
        windowtop5.position.y -= 1;
        windowtop6.position.y -= 1;
        windowtop7.position.y -= 1;
        windowtop8.position.y -= 1;
        windowGlassBottom.position.y -= 1;
        windowGlasstop.position.y -= 1;

        //Top Sliding
        // windowGlassBot1.position.y -= 1;
        // windowGlassBot2.position.y -= 1;
        // windowSlider1.position.y -= 1;
        // windowSlider2.position.y -= 1;
        // windowSlider3.position.y -= 1;
        // windowSlider4.position.y -= 1;
        // windowSlider5.position.y -= 1;
        // windowSlider6.position.y -= 1;
        // windowSlider7.position.y -= 1;
        // windowSlider8.position.y -= 1;

        topline1.position.y -= 1;
        topline2.position.y -= 1;
        topline3.position.y -= 1;
        topline4.position.y -= 1;
        topinnerline1.position.y -= 1;
        topinnerline2.position.y -= 1;
        topinnerline3.position.y -= 1;
        topinnerline4.position.y -= 1;
        topinnerline5.position.y -= 1;
        topinnerline6.position.y -= 1;
        topinnerline7.position.y -= 1;
        topinnerline8.position.y -= 1;

        drawline1.position.y -= 1;
        drawline2.position.y -= 1;
        drawline3.position.y -= 1;
        drawline4.position.y -= 1;
        sideinner1.position.y -= 1;
        sideinner2.position.y -= 1;
        sideinner3.position.y -= 1;
        sideinner4.position.y -= 1;

        glassline1.position.y -= 1;
        glassline2.position.y -= 1;
        glassline3.position.y -= 1;
        glassline4.position.y -= 1;
        console.log("Move Down")
      }
      //A
      if (keyCode == 65) {
        window1.position.x -= 1;
        window2.position.x -= 1;
        window3.position.x -= 1;
        window4.position.x -= 1;
        windowtop1.position.x -= 1;
        windowtop2.position.x -= 1;
        windowtop3.position.x -= 1;
        windowtop5.position.x -= 1;
        windowtop6.position.x -= 1;
        windowtop7.position.x -= 1;
        windowtop8.position.x -= 1;
        windowGlassBottom.position.x -= 1;
        windowGlasstop.position.x -= 1;
        //Top sliding
        // windowGlassBot1.position.x -= 1;
        // windowGlassBot2.position.x -= 1;
        // windowSlider1.position.x -= 1;
        // windowSlider2.position.x -= 1;
        // windowSlider3.position.x -= 1;
        // windowSlider4.position.x -= 1;
        // windowSlider5.position.x -= 1;
        // windowSlider6.position.x -= 1;
        // windowSlider7.position.x -= 1;
        // windowSlider8.position.x -= 1;

        topline1.position.x -= 1;
        topline2.position.x -= 1;
        topline3.position.x -= 1;
        topline4.position.x -= 1;
        topinnerline1.position.x -= 1;
        topinnerline2.position.x -= 1;
        topinnerline3.position.x -= 1;
        topinnerline4.position.x -= 1;
        topinnerline5.position.x -= 1;
        topinnerline6.position.x -= 1;
        topinnerline7.position.x -= 1;
        topinnerline8.position.x -= 1;

        drawline1.position.x -= 1;
        drawline2.position.x -= 1;
        drawline3.position.x -= 1;
        drawline4.position.x -= 1;
        sideinner1.position.x -= 1;
        sideinner2.position.x -= 1;
        sideinner3.position.x -= 1;
        sideinner4.position.x -= 1;

        glassline1.position.x -= 1;
        glassline2.position.x -= 1;
        glassline3.position.x -= 1;
        glassline4.position.x -= 1;
        console.log("Move Left")
      }
      //D
      if (keyCode == 68) {
        window1.position.x += 1;
        window2.position.x += 1;
        window3.position.x += 1;
        window4.position.x += 1;
        windowtop1.position.x += 1;
        windowtop2.position.x += 1;
        windowtop3.position.x += 1;
        windowtop5.position.x += 1;
        windowtop6.position.x += 1;
        windowtop7.position.x += 1;
        windowtop8.position.x += 1;
        windowGlassBottom.position.x += 1;
        windowGlasstop.position.x += 1;
        //Top sliding
        // windowGlassBot1.position.x += 1;
        // windowGlassBot2.position.x += 1;
        // windowSlider1.position.x += 1;
        // windowSlider2.position.x += 1;
        // windowSlider3.position.x += 1;
        // windowSlider4.position.x += 1;
        // windowSlider5.position.x += 1;
        // windowSlider6.position.x += 1;
        // windowSlider7.position.x += 1;
        // windowSlider8.position.x += 1;

        topline1.position.x += 1;
        topline2.position.x += 1;
        topline3.position.x += 1;
        topline4.position.x += 1;
        topinnerline1.position.x += 1;
        topinnerline2.position.x += 1;
        topinnerline3.position.x += 1;
        topinnerline4.position.x += 1;
        topinnerline5.position.x += 1;
        topinnerline6.position.x += 1;
        topinnerline7.position.x += 1;
        topinnerline8.position.x += 1;

        drawline1.position.x += 1;
        drawline2.position.x += 1;
        drawline3.position.x += 1;
        drawline4.position.x += 1;
        sideinner1.position.x += 1;
        sideinner2.position.x += 1;
        sideinner3.position.x += 1;
        sideinner4.position.x += 1;

        glassline1.position.x += 1;
        glassline2.position.x += 1;
        glassline3.position.x += 1;
        glassline4.position.x += 1;
        console.log("Move Right")
      }


      //#region practice
      // if (keyCode == 73) {

      //   var i = 0;
      //   var poistion1 = { x: 0, y: 0 }
      //   var target1 = { x: 20, y: 20 }
      //   var tween1 = new Tween(poistion1).to(target1, 5000);
      //   tween1.onUpdate(() => {
      //     windowSlider1.position.set(0, 10, 0)
      //   })
      //   if (i < 10) {
      //     // var i = 0;
      //     windowSlider1.position.y += 0.5;
      //     windowSlider2.position.y += 0.5;
      //     windowSlider3.position.y += 0.5;
      //     windowSlider4.position.y += 0.5;
      //     windowGlassBot1.position.y += 0.5;
      //     // increment ++;
      //     i = i + 1;
      //   }

      //   console.log(i);
      // }
      // if (keyCode == 75) {

      //   var i = 0;
      //   var decrement = 0;
      //   if (i < 8) {
      //     windowSlider1.position.y -= 0.5;
      //     windowSlider2.position.y -= 0.5;
      //     windowSlider3.position.y -= 0.5;
      //     windowSlider4.position.y -= 0.5;
      //     windowGlassBot1.position.y -= 0.5;

      //     console.log(i)
      //   }
      //   var i = i + 1;
      // }
      //#endregion

      if (keyCode = 73) {
        console.log("i key clicked")
        var position = new THREE.Vector3(10, -0.7, -0.4)

        if (framesashleft.getWorldPosition == frameright.getWorldPosition) {
          console.log("position coolaps")
        } else {
          framesashleft.position.x += 0.5;
          framesashtop.position.x += 0.5;
          framesashbot.position.x += 0.5;
          framesashright.position.x += 0.5;
        }
      }
    }

    //#endregion

    //#region Camera
    let aspectRatio = this.getAspectRatio()
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    // this.camera.position.z = this.cameraZ;
    // this.camera.position.set(0, 100, 100)
    // this.camera.position.x = this.cameraX;
    // this.camera.position.set(50, 50, 50)
    // this.camera.position.y = this.cameray;
    // this.camera.lookAt(this.camerax, this.cameray, this.cameraZ)
    // return cube1;

  }
  //#endregion

  //#region Animation using TWeen
  // private tween() {
  //   // var TWEEN = require('../../../node_modules/@tweenjs/tween.js')
  //   // var cube1 = this.scene.getObjectByName('cube')
  //   var w1 = this.scene.getObjectByName("w1")
  //   var wt1 = this.scene.getObjectByName("wT1")
  //   var wt2 = this.scene.getObjectByName("wT2")
  //   var wt3 = this.scene.getObjectByName("wT3")
  //   var wt4 = this.scene.getObjectByName("wT4")
  //   var wgt = this.scene.getObjectByName("wgT")
  //   var wgb1 = this.scene.getObjectByName("wgB1")
  //   var wgb2 = this.scene.getObjectByName("wgB2")
  //   var ws1 = this.scene.getObjectByName("wS1")
  //   var ws2 = this.scene.getObjectByName("wS2")
  //   var ws3 = this.scene.getObjectByName("wS3")
  //   var ws4 = this.scene.getObjectByName("wS4")


  //   //#region Practices of animation in different ways
  //   // var topcasement: THREE.Mesh[] = [wt1,wt2,wt3,wt4,wgt];
  //   // topcasement.push(wt1,wt2,wt3,wt4,wgt)

  //   // var animate = document.getElementById("Animate")
  //   // animate?.addEventListener('click', event => {
  //   // })
  //   // document.addEventListener("keydown", event => {
  //   //   var keyCode = event.which;
  //   //   if (keyCode == 84) {
  //   //     let then = 0;
  //   //     let now = 0.001;
  //   //     const delta = now - then;
  //   //     then = now;
  //   //     // this.cube.position.z += delta * speedInUnitsPerSecond;
  //   //     console.log("T key is clicked")
  //   //   }
  //   // });


  //   // const animationclip = AnimationClipCreator.CreateRotationAnimation(5 ,'x')
  //   // const mixer = new AnimationMixer(this.cube);
  //   // const action = mixer.clipAction(animationclip);
  //   // action.play();

  //   //#endregion

  //   //#region values of tween
  //   var position = {
  //     w1x: 0,
  //     w1y: 0,
  //     w1z: 0,

  //     wt1x: 0,
  //     wt1y: 0,
  //     wt1z: 0,

  //     wt2x: 2.5,
  //     wt2y: 14,
  //     wt2z: -0.2,

  //     wt3x: 0,
  //     wt3y: 0,
  //     wt3z: -0.2,

  //     wt4x: 0,
  //     wt4y: 0,
  //     wt4z: -0.2,

  //     wgb1x: 0,
  //     wgb1y: -11,
  //     wgb1z: 0,

  //     wgb2x: 0,
  //     wgb2y: -6,
  //     wgb2z: -0.5,

  //     wgtx: 0,
  //     wgty: 1,
  //     wgtz: 0,

  //     wgtpx: 0,
  //     wgtpy: 0,
  //     wgtpz: 0.5,

  //     ws1x: 1,
  //     ws1y: 4,
  //     ws1z: 0,

  //     ws2x: 9.5,
  //     ws2y: 4,
  //     ws2z: 0,

  //     ws3x: 1,
  //     ws3y: 4,
  //     ws3z: 0,

  //     ws4x: 1,
  //     ws4y: -0.5,
  //     ws4z: 0,



  //     // ws5x: 1.5,
  //     // ws5y: 10.5,
  //     // ws5z: -0.2,

  //     // ws6x: 1.5,
  //     // ws6y: 10.5,
  //     // ws6z: -0.2,

  //     // ws7x: 1.5,
  //     // ws7y: 10.5,
  //     // ws7z: -0.2,

  //     // ws8x: 1.5,
  //     // ws8y: 10.5,
  //     // ws8z: -0.2,



  //     cameraX: 0,
  //     cameraY: 0,
  //     cameraZ: 100
  //   }
  //   var target = {
  //     w1x: 20,
  //     w1y: 10,
  //     w1z: 0,

  //     wt1x: 0,
  //     wt1y: 0,
  //     wt1z: -5,

  //     wt2x: 8.3,
  //     wt2y: 14,
  //     wt2z: -5.2,

  //     wt2R: 5,


  //     wt3x: 0,
  //     wt3y: -0.95,
  //     wt3z: 0,

  //     wt4x: 0,
  //     wt4y: -0.95,
  //     wt4z: 0,



  //     wgb1x: 0,
  //     wgb1y: -7,
  //     wgb1z: 0,

  //     wgb2x: 1.5,
  //     wgb2y: 10.5,
  //     wgb2z: -0.2,


  //     wgtx: 0,
  //     wgty: 0.5,
  //     wgtz: 0,

  //     wgtpx: 0,
  //     wgtpy: 0,
  //     wgtpz: -0.2,


  //     ws1x: 1,
  //     ws1y: 8,
  //     ws1z: 0,

  //     ws2x: 9.5,
  //     ws2y: 8,
  //     ws2z: 0,

  //     ws3x: 1,
  //     ws3y: 8,
  //     ws3z: 0,

  //     ws4x: 1,
  //     ws4y: 3.5,
  //     ws4z: 0,

  //     // ws5x: 1.5,
  //     // ws5y: 10.5,
  //     // ws5z: -0.2,

  //     // ws6x: 1.5,
  //     // ws6y: 10.5,
  //     // ws6z: -0.2,

  //     // ws7x: 1.5,
  //     // ws7y: 10.5,
  //     // ws7z: -0.2,

  //     // ws8x: 1.5,
  //     // ws8y: 10.5,
  //     // ws8z: -0.2,

  //     cameraX: -50,
  //     cameraY: 50,
  //     cameraZ: 300
  //   }
  //   //#endregion

  //   var tween = new Tween(position).to(target, 5000);
  //   // var tweenMax = new Tween(position).to(target, 1)
  //   tween.easing(Easing.Circular.InOut)
  //   // var animate = document.getElementById("Animate")
  //   // animate?.addEventListener('click', event => {
  //   //   console.log("Animate key is clicked")
  //   tween.onUpdate(() => {

  //     // this.cube.position.x = position.x; // trail purpose
  //     // this.cube.position.y = position.y; // trail purpose
  //     // w1?.position.set( position.w1x, 10, 0) // trail purpose
  //     // w1?.rotation.set(position.w1x, position.w1y, position.w1z)

  //     //object position

  //     // wt2?.position.set(position.wt2x,position.wt2y, position.wt2z)
  //     // wt3?.position.set(position.wt3x,position.wt3y, position.wt3z)
  //     // wt4?.position.set(position.wt4x,position.wt4y, position.wt4z)

  //     wgb1?.position.set(position.wgb1x, position.wgb1y, position.wgb1z)
  //     wgt?.rotation.set(position.wgtx, position.wgty, position.wgtz)
  //     wgt?.position.set(position.wgtpx, position.wgtpy, position.wgtpz)


  //     ws1?.position.set(position.ws1x, position.ws1y, position.ws1z)
  //     ws2?.position.set(position.ws2x, position.ws2y, position.ws2z)
  //     ws3?.position.set(position.ws3x, position.ws3y, position.ws3z)
  //     ws4?.position.set(position.ws4x, position.ws4y, position.ws4z)

  //     // wt2?.rotation.x =position.w1x
  //     wt2?.position.set(position.wt2x, position.wt2y, position.wt2z)
  //     wt3?.rotation.set(position.wt3x, position.wt3y, position.wt3z)
  //     wt4?.rotation.set(position.wt4x, position.wt4y, position.wt4z)



  //     // ws1?.scale.set
  //     // this.camera.scale.set(50, 40, 50)
  //     //camera positions
  //     this.camera.position.z = position.cameraZ;
  //     // this.camera.position.y = position.cameraY;
  //     // this.camera.position.x = position.camerax;
  //   })
  //   // tweenMax.onUpdate(() => {
  //   //   w1?.rotation.set(position.w1x, position.w1y, position.w1z)
  //   // })
  //   // tween.delay(500);
  //   //  tween.repeat(2)


  //   // })

  //   return tween;

  // }
  //#endregion

  //#region DragControls 

  // for Left Sliding
  private Dragcontrols1() {

    var w1 = this.scene.getObjectByName("w1")
    var fsl = this.scene.getObjectByName("Fsl")
    var fsr = this.scene.getObjectByName("Fsr");
    var fst = this.scene.getObjectByName("Fst");
    var fsb = this.scene.getObjectByName("Fsb");
    // var grp = this.scene.getObjectByName("frame")
    var glass1 = this.scene.getObjectByName("GL")
    var glass2 = this.scene.getObjectByName("GLR")
    // var group = new THREE.Group();
    // group.name = 'frame';
    // group.add(fs1, fsr)
    // var window2 = document.getElementsByName("w2")

    var objects: any[] = []
    var position1 = new THREE.Vector3(0, 0, 0);
    var position2 = new THREE.Vector3(3.7, 0, 0);
    const dragcontrol = new DragControls(objects, this.camera, this.renderer.domElement)
    dragcontrol.getRaycaster()

    //Sliding active Button:-
    var slide = document.getElementById("SlidingLeft");
    slide?.addEventListener('click', event => {
      console.log("Slide Left is active");
      objects.push(glass1)
      dragcontrol.addEventListener('dragstart', function (event) {
        console.log("drag event happens")

        objects.forEach(object => {
          object.material.opacity = 0.6;
          object.material.color.set(Aqua)
          // object.position.clamp(position1, position2)

        })
      })
      dragcontrol.addEventListener('drag', event => {
        console.log("Drag");
        objects.forEach(object => {
          // object.material.opacity = 0.3;
          object.material.color.set(Aqua)
          object.position.clamp(position1, position2)

        })
      })
      dragcontrol.addEventListener('dragend', event => {
        console.log("Drag event finished");
        objects.forEach(object => {
          object.material.opacity = 0.3;
          // object.material.color(darkSoil)
        })
      })

      // control2.activate();
    });
    return dragcontrol;
  }


  // Dragcontrol for Right Sliding
  private DragcontrolRight() {
    var glass = this.scene.getObjectByName("GLR")
    var objects: any[] = []
    var position1 = new THREE.Vector3(-3.7, 0, -0.5);
    var position2 = new THREE.Vector3(0, 0, 0);
    const dragcontrol = new DragControls(objects, this.camera, this.renderer.domElement)
    dragcontrol.getRaycaster()

    //Sliding active Button:-
    var slide3 = document.getElementById("SlidingRight");
    slide3?.addEventListener('click', event => {
      console.log("Slide Right is active");

      objects.push(glass)
      dragcontrol.addEventListener('dragstart', function (event) {
        console.log("drag event happens")

        objects.forEach(object => {
          object.material.opacity = 0.6;
          object.material.color.set(Aqua)
          // object.position.clamp(position1, position2)

        })
      })
      dragcontrol.addEventListener('drag', event => {
        console.log("Drag");
        objects.forEach(object => {
          // object.material.opacity = 0.3;
          object.material.color.set(Aqua)
          object.position.clamp(position1, position2)

        })
      })
      dragcontrol.addEventListener('dragend', event => {
        console.log("Drag event finished");
        objects.forEach(object => {
          object.material.opacity = 0.3;
          // object.material.color(darkSoil)
        })
      })

      // control2.activate();
    });
    return dragcontrol;
  }


  //  DragControls For Casement
  private Dragcontrols2() {
    var glasstop = this.scene.getObjectByName("wgT")
    var objects: any[] = []
    var position1 = new THREE.Vector3(0, 0, 0);
    var position2 = new THREE.Vector3(0, 0, 0);
    const dragcontrol = new DragControls(objects, this.camera, this.renderer.domElement)
    dragcontrol.getRaycaster()
    var casementmovement = document.getElementById("CasementPlus");
    casementmovement?.addEventListener('click', event => {
      objects.push(glasstop);

    })
    dragcontrol.addEventListener('dragstart', function (event) {
      console.log("drag event happens")

      // objects.forEach(object => {
      //   object.material.opacity = 0.6;
      //   object.material.color.set(Aqua)
      //   // object.position.clamp(position1, position2)

      // })
      objects.forEach(object => {
        object.material.opacity = 0.6;
        // object.position.set(0, 0, 0.5)
      })



    })
    dragcontrol.addEventListener('drag', event => {
      console.log("Drag");
      objects.forEach(object => {
        // object.material.opacity = 0.3;
        object.material.color.set(Aqua)
        // object.rotation.clamp(position1, position2)
        object.position.clamp(position1, position2)
        // object.rotateOnAxis(new THREE.Vector3(1, 0, 0))
        // object.rotateY(2)

        // if(i <)
        var maxrotation = Math.PI / 2;
        // object.rotation.set(0, Math.PI/2, 0)
        // var math1 = THREE.MathUtils.clamp(0.1, 0, Math.PI /2)\
        object.rotateY(0.1)
        if (object.rotation.y < 1.5) {

        } else {
          console.log("Exceeds Rotation")
          object.rotation.set(0, 0, 0)
        }

        // if(object.rotateY >= maxrotation){
        // object.rotateY(0)
        // }
        // object.rotation.set(0, -Math.PI / 2 , 0)
      })
    })
    dragcontrol.addEventListener('dragend', event => {
      console.log("Drag event finished");
      objects.forEach(object => {
        object.material.opacity = 0.3;
        // object.position.set(0, 0, -0.5)
        // object.material.color(darkSoil)
        // object.position.set(0, 0, -0.5)
        // object.material.color(darkSoil)
        event['object'].position.set(0.8, 0, 0.5)
        console.log("position", object.rotation.y)

        // object.position.set(1.7, 0, 0.5)
      })
    })
    return dragcontrol;

  }

  //#endregion

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
    // return window.innerWidth / window.innerHeight;
  }

  //Render Function and 2D, 3D buttons
  private startRenderingLoop() {

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: RectangleComponent = this;
    // const times = [2, 10];
    // const axis = "x";
    // let tweens = this.tween();
    this.camera.updateProjectionMatrix();
    // let loopnew = this.loop();
    // document.body.appendChild(this.renderer.domElement)
    // let reload = Reload.DoReload()
    let control = this.orbitcontrol();
    let rel = Reload.DoReload();
    let control2 = this.Dragcontrols1(); //Controls
    let control3 = this.Dragcontrols2(); //Controls
    let control4 = this.DragcontrolRight(); //Controls

    (function render(this: any) {

      requestAnimationFrame(render);
      // window.requestAnimationFrame(render)
      // component.animatecube();

      // window.requestAnimationFrame(render)
      // component.animatecube();

      control.update();

      // tweens.update(); //Tweening

      control2.activate(); // DragControls
      control3.activate();
      control4.activate();



      component.renderer.render(component.scene, component.camera);

    }());

    //#region 2D , 3D buttons and Sliding button
    var ThreeDim = document.getElementById("threeDimension")
    ThreeDim?.addEventListener('click', event => {
      console.log("3D Active");
      control.enableRotate = true;
      this.camera.position.set(-200, 100, 300)
    })
    var TwoDim = document.getElementById("twoDimension")
    TwoDim?.addEventListener('click', event => {
      console.log("2D Active");
      this.camera.position.set(500, 200, 400)
      // control.dispose();
      control.enableRotate = false;
    })
    //#endregion

  }


  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
    // this.tween();


  }

  constructor() { }

  ngOnInit(): void {
  }

  helloabcd() {
    alert("Hello");
  }

  //#region Textures
  Textures1() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7]

    objectscene.forEach(object => {
      object.material = texture3.loader();
    })
    console.log("Tex-1 clicked")
    // alert("Texture 1 is load")

  }

  Textures2() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7]

    objectscene.forEach(object => {
      object.material = texture4.loader();
    })
    console.log("Tex-2 clicked")

  }

  Textures3() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7]

    objectscene.forEach(object => {
      object.material = texture5.loader();
    })
    console.log("Tex-1 clicked")

  }

  Textures4() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7]

    objectscene.forEach(object => {
      object.material = texture6.loader();
    })
    console.log("Tex-4 clicked")

  }

  Textures5() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7]

    objectscene.forEach(object => {
      object.material = texture7.loader();
    })
    console.log("Tex-5 clicked")

  }
  //#endregion

  //#region Colors with Button

  WhiteColor() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7];
    objectscene.forEach(object => {
      object.material.color.set(White)
    })
  }

  LightBrownColor() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7];
    objectscene.forEach(object => {
      object.material.color.set(LightBrown)
    })
  }

  DarkBrownColor() {
    var w1 = this.scene.getObjectByName("w1")
    var w2 = this.scene.getObjectByName("w2")
    var w3 = this.scene.getObjectByName("w3")
    var w4 = this.scene.getObjectByName("w4")
    var w5 = this.scene.getObjectByName("WT1")
    var w6 = this.scene.getObjectByName("WT2")
    var w7 = this.scene.getObjectByName("WT3")
    const objectscene: any[] = [w1, w2, w3, w4, w5, w6, w7];
    objectscene.forEach(object => {
      object.material.color.set(DarkBrown)
    })
  }
  //#endregion

}









