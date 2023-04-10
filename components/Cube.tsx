import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/cube.glb") as GLTFResult;
  const ref = useRef<THREE.Mesh>(null!);

  function mouseOver() {
    console.log("salut");
  }

  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        onPointerOver={mouseOver}
      />
    </group>
  );
}

export function CubeDiscord(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/cube.glb") as GLTFResult;
  const ref = useRef<THREE.Mesh>(null!);

  const [spring, set] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  function onMouseOver() {
    document.body.style.cursor = "pointer";
    set({ scale: [1.2, 1.2, 1.2] });
  }

  function onMouseOut() {
    document.body.style.cursor = "default";
    set({ scale: [1, 1, 1] });
  }

  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <group {...props} dispose={null}>
      <a.mesh
        onClick={() => window.open("https://discord.gg/3Z5Y2Y2", "_blank")}
        ref={ref}
        onPointerOver={onMouseOver}
        onPointerOut={onMouseOut}
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={spring.scale}
      />
    </group>
  );
}

useGLTF.preload("/cube.glb");
