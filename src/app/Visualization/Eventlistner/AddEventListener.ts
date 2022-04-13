import * as THREE from "three";
import { Vector2 } from "three";

export const addObjectClickListener = (
    camera: any,
    scene: { children: any; },
    raycaster: { setFromCamera: (arg0: Vector2, arg1: any) => void; intersectObjects: (arg0: any) => any; },
    objectToWatch: { uuid: any; },
    onMouseClick: () => void,
  ) => {
    const objectToWatchId = objectToWatch.uuid;
    let mouse = new THREE.Vector2();
    
    document.addEventListener(
      "click",
      (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children);

        const isIntersected = intersects.find(
          (intersectedEl: { object: { uuid: any; }; }) => intersectedEl.object.uuid === objectToWatchId
        );

        if (isIntersected) {
          onMouseClick();
        }
      },
      false
    );
  };