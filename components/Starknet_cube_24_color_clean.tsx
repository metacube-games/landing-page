/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 --types starknet_cube_24_color_clean.glb
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame, useThree } from "@react-three/fiber";


type GLTFResult = GLTF & {
  nodes: {
    Plane002_1: THREE.Mesh
    Plane002_2: THREE.Mesh
    Plane002: THREE.Mesh
    Plane003: THREE.Mesh
  }
  materials: {
    ['Free Block Material']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export function ModelStarknet(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/starknet_cube_24_color_clean.glb') as GLTFResult
  const ref_stark_1 = useRef<THREE.Mesh>(null!);
  const ref_stark_2 = useRef<THREE.Mesh>(null!);
  const ref_top_star = useRef<THREE.Mesh>(null!);
  const ref_bottom_star = useRef<THREE.Mesh>(null!);

  const rotationAmplitude = 0.5;
  const levitationAmplitude = 0.1;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref_top_star.current.rotation.z = Math.sin(time) * rotationAmplitude;
    ref_bottom_star.current.rotation.z = Math.sin(time) * rotationAmplitude;
    ref_stark_1.current.position.y = Math.sin(2 * time) * levitationAmplitude;
    ref_stark_2.current.position.y = Math.sin(2 * time) * levitationAmplitude;


  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={ref_top_star} geometry={nodes.Plane002.geometry} material={materials['Material.002']} />
      <mesh ref={ref_bottom_star} geometry={nodes.Plane003.geometry} material={materials.Material} />
      <mesh ref={ref_stark_1} geometry={nodes.Plane002_1.geometry} material={materials['Free Block Material']} />
      <mesh ref={ref_stark_2} geometry={nodes.Plane002_2.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/starknet_cube_24_color_clean.glb')
