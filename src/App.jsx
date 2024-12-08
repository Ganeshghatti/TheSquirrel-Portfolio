import { Canvas } from "@react-three/fiber";
// import { useRef, useState, useEffect } from "react";
// import "./App.css";
import Home from "./pages/home/Home";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { Squirrel } from "./components/Squirrel";
import React from "react";
import Clients from "./components/Clients/Clients";

function App() {
  return (
    <>
      {/* <div
        className="w-screen h-screen fixed top-0 left-0 z-10 border"
        id="squirrel-model"
      >
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={4} />
          <SpotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <Squirrel />
        </Canvas>
      </div> */}
      <Home />
    </>
  );
}

export default App;
