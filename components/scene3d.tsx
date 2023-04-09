import React from "react";
import { Canvas } from "@react-three/fiber";

const canvasStyle = {
  width: "140px",
  height: "140px",
  margin: "-30px",
  padding: "0px",
};

interface Scene3dProps {
  asset: JSX.Element;
}

const Scene3d: React.FC<Scene3dProps> = (props) => {
  return (
    <div style={canvasStyle}>
      <Canvas
        dpr={2}
        camera={{ fov: 75, near: 0.1, far: 8, position: [0, 2, 4] }}
      >
        <ambientLight intensity={0.5} />
        {/* <directionalLight color="red" position={[1, 1, 2]} /> */}
        {props.asset}
      </Canvas>
    </div>
  );
};

export default Scene3d;
