// Wave.jsx
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Preload } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene, animations } = useGLTF("/assets/models/wave/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} />;
}

export default function WaveCanvas() {
  // 1) Create a ref for OrbitControls:
  const orbitRef = useRef();

  return (
    <div
      style={{
        width: "100%",
        height: "900px",
        position: "relative",
        overflow: "visible",
        zIndex: 2,
      }}
    >
      <Canvas
        camera={{
          near: 0.01,
          far: 2000,
          position: [-0.8994117668328111, -2.1031879068090946, 1.2505159511349504], //got specific camera position from console.log using dev tools
          fov: 45
        }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: "170%", height: "100%", background: "transparent" }}
        onCreated={(state) => {
          state.scene.background = null; 
          state.gl.outputEncoding = THREE.sRGBEncoding;
        }}
      >
        <Suspense fallback={null}>
          {/* 2) Use the ref on OrbitControls and add onChange */}
          <OrbitControls
            ref={orbitRef}
            enableRotate
            enablePan
            enableZoom={false}
            // 3) onChange logs camera info each time you drag/zoom
            onChange={(e) => {
              const camPos = e.target.object.position;
              const targetPos = e.target.target;
              console.log("Camera position:", camPos);
              console.log("OrbitControls target:", targetPos);
            }}
          />

          <hemisphereLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
