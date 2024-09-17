import React from "react";
import Hero from "./components/hero";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Squirrel } from "../../components/Squirrel";

export default function Home() {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Hero />
        <Squirrel />
      </ScrollControls>
    </>
  );
}
