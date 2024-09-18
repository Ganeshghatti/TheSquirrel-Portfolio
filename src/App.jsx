import { Canvas } from "@react-three/fiber";
import "./App.css";
import Home from "./pages/home/Home";
import { OrbitControls, SpotLight, ScrollControls } from "@react-three/drei";
import { Squirrel } from "./components/Squirrel";

function App() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={3} />
      <SpotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={4} damping={0.25}>
        <Home />
        <Squirrel />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
