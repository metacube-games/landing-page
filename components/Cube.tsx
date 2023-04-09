import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

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

useGLTF.preload("/cube.glb");
