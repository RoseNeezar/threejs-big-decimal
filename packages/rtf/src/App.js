import logo from "./logo.svg";
import "./App.css";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const Box = (props) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color="blue" />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadows="true"
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <OrbitControls />
        <axesHelper args={[5]} />
        <Box position={[0, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
