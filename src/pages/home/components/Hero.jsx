import React from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function Hero() {
  return (
    <Scroll html>
      <div>hero</div>
    </Scroll>
  );
}
