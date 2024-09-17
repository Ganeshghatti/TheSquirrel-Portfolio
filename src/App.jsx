import React, { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, SpotLight } from "@react-three/drei";
import { Squirrel } from "./components/Squirrel";
import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Environment preset="forest" background />
          <SpotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <Squirrel position={[0, -2, 0]} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
