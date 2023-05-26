// import * as THREE from "three";
// import React, { useRef, useState, useEffect, useMemo } from "react";
// import { useGLTF } from "@react-three/drei";
// import { GLTF } from "three-stdlib";
// import { useFrame, useThree } from "@react-three/fiber";
// import { a, useSpring } from "@react-spring/three";

// type GLTFResult = GLTF & {
//   nodes: {
//     Cube: THREE.Mesh;
//   };
//   materials: {
//     Material: THREE.MeshStandardMaterial;
//   };
// };

// export function Model(props: JSX.IntrinsicElements["group"]) {
//   const { nodes, materials } = useGLTF("/cube.glb") as GLTFResult;
//   const ref = useRef<THREE.Mesh>(null!);
//   const [exploded, setExploded] = useState(false);
//   const { clock } = useThree();
//   const duration = 0.7;

//   // Store the initial positions of the vertices
//   const initPos = nodes.Cube.geometry.attributes
//     .position as THREE.BufferAttribute;
//   const initialPositions = useMemo(
//     () => new Float32Array(initPos.array),
//     [initPos.array]
//   );

//   function onClick() {
//     setExploded(true);
//     setTimeout(() => {
//       setExploded(false);
//     }, duration * 1000);
//   }

//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.01;

//       const geometry = ref.current.geometry as THREE.BufferGeometry;
//       const posTemp = nodes.Cube.geometry.attributes
//         .position as THREE.BufferAttribute;
//       const normTemp = nodes.Cube.geometry.attributes
//         .normal as THREE.BufferAttribute;
//       const positions = posTemp.array as Float32Array;
//       const normals = normTemp.array as Float32Array;

//       if (exploded) {
//         const elapsedTime = clock.getElapsedTime();
//         const progress = Math.min(elapsedTime / duration, 1);

//         for (let i = 0; i < positions.length; i += 3) {
//           const normal = new THREE.Vector3(
//             normals[i],
//             normals[i + 1],
//             normals[i + 2]
//           );
//           const distance = 0.075 * progress;
//           const newPosition = normal.multiplyScalar(distance);

//           positions[i] += newPosition.x;
//           positions[i + 1] += newPosition.y;
//           positions[i + 2] += newPosition.z;
//         }
//       } else {
//         for (let i = 0; i < positions.length; i += 3) {
//           const target = new THREE.Vector3(
//             initialPositions[i],
//             initialPositions[i + 1],
//             initialPositions[i + 2]
//           );
//           const currentPosition = new THREE.Vector3(
//             positions[i],
//             positions[i + 1],
//             positions[i + 2]
//           );
//           currentPosition.lerp(target, 0.02);

//           positions[i] = currentPosition.x;
//           positions[i + 1] = currentPosition.y;
//           positions[i + 2] = currentPosition.z;
//         }
//       }

//       geometry.attributes.position.needsUpdate = true;
//       geometry.computeVertexNormals();
//     }
//   });

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         ref={ref}
//         geometry={nodes.Cube.geometry}
//         material={materials.Material}
//         onClick={onClick}
//       />
//     </group>
//   );
// }

// // export function Model(props: JSX.IntrinsicElements["group"]) {
// //   const { nodes, materials } = useGLTF("/cube.glb") as GLTFResult;
// //   const ref = useRef<THREE.Mesh>(null!);
// //   const [expanded, setExpanded] = useState(false);
// //   const duration = 0.7;

// //   // Store the initial positions of the vertices
// //   const initialPositions = useMemo(
// //     () => new Float32Array([...nodes.Cube.geometry.attributes.position.array]),
// //     [nodes.Cube.geometry.attributes.position.array]
// //   );

// //   function onClick() {
// //     setExpanded(true);
// //     setTimeout(() => {
// //       setExpanded(false);
// //     }, duration * 1000);
// //   }

// //   useFrame(() => {
// //     if (ref.current) {
// //       ref.current.rotation.y += 0.01;

// //       const geometry = ref.current.geometry as THREE.BufferGeometry;
// //       const positions = geometry.attributes.position.array as Float32Array;

// //       if (expanded) {
// //         for (let i = 0; i < positions.length; i += 3) {
// //           const currentPosition = new THREE.Vector3(
// //             positions[i],
// //             positions[i + 1],
// //             positions[i + 2]
// //           );

// //           const targetPosition = new THREE.Vector3(
// //             initialPositions[i],
// //             initialPositions[i + 1],
// //             initialPositions[i + 2]
// //           );

// //           if (i === 24 || i === 27) {
// //             targetPosition.y += 1.5;
// //           } else if (i >= 0 && i <= 39) {
// //             const pivot = new THREE.Vector3(
// //               initialPositions[i],
// //               initialPositions[i + 1] - 0.5,
// //               initialPositions[i + 2]
// //             );
// //             const relativePosition = currentPosition.clone().sub(pivot);
// //             relativePosition.applyAxisAngle(
// //               new THREE.Vector3(1, 0, 0),
// //               Math.PI / 4
// //             );
// //             targetPosition.copy(relativePosition).add(pivot);
// //           }

// //           currentPosition.lerp(targetPosition, 0.02);

// //           positions[i] = currentPosition.x;
// //           positions[i + 1] = currentPosition.y;
// //           positions[i + 2] = currentPosition.z;
// //         }
// //       } else {
// //         for (let i = 0; i < positions.length; i += 3) {
// //           const currentPosition = new THREE.Vector3(
// //             positions[i],
// //             positions[i + 1],
// //             positions[i + 2]
// //           );
// //           const targetPosition = new THREE.Vector3(
// //             initialPositions[i],
// //             initialPositions[i + 1],
// //             initialPositions[i + 2]
// //           );

// //           currentPosition.lerp(targetPosition, 0.02);

// //           positions[i] = currentPosition.x;
// //           positions[i + 1] = currentPosition.y;
// //           positions[i + 2] = currentPosition.z;
// //         }
// //       }

// //       geometry.attributes.position.needsUpdate = true;
// //       geometry.computeVertexNormals();
// //     }
// //   });

// //   return (
// //     <group {...props} dispose={null}>
// //       <mesh
// //         ref={ref}
// //         geometry={nodes.Cube.geometry}
// //         material={materials.Material}
// //         onClick={onClick}
// //       />
// //     </group>
// //   );
// // }

// export function CubeDiscord(props: JSX.IntrinsicElements["group"]) {
//   const { nodes, materials } = useGLTF("/cube.glb") as GLTFResult;
//   const ref = useRef<THREE.Mesh>(null!);

//   const [spring, set] = useSpring(() => ({
//     scale: [1, 1, 1],
//     config: { mass: 1, tension: 170, friction: 26 },
//   }));

//   function onMouseOver() {
//     document.body.style.cursor = "pointer";
//     set({ scale: [1.2, 1.2, 1.2] });
//   }

//   function onMouseOut() {
//     document.body.style.cursor = "default";
//     set({ scale: [1, 1, 1] });
//   }

//   useFrame(() => (ref.current.rotation.y += 0.01));

//   return (
//     <group {...props} dispose={null}>
//       <a.mesh
//         onClick={() => window.open("https://discord.gg/3Z5Y2Y2", "_blank")}
//         ref={ref}
//         onPointerOver={onMouseOver}
//         onPointerOut={onMouseOut}
//         geometry={nodes.Cube.geometry}
//         material={materials.Material}
//         scale={spring.scale as any}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/cube.glb");
