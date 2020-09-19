import {
    Engine,
    Scene,
    Vector3,
    Mesh,
    MeshBuilder,
    HemisphericLight,
    ArcRotateCamera,
  } from "babylonjs";
  
  class Main {
    public canvas: any = document.getElementById("renderCanvas");
    private engine: Engine = new Engine(this.canvas, true);
    private scene: Scene = new Scene(this.engine);
    private camera: ArcRotateCamera = new ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 2,
      2,
      Vector3.Zero(),
      this.scene
    );
    private light: HemisphericLight = new HemisphericLight(
      "light1",
      new Vector3(1, 0, 0),
      this.scene
    );
    private sphere: Mesh = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 1 },
      this.scene
    );
    constructor() {
      this.camera.attachControl(this.canvas, true);
      this.engine.runRenderLoop(() => {
        this.scene.render();
      });
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    new Main();
  });
  