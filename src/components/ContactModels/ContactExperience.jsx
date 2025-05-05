import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import Computer from "../Models/Computer";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color="#fff4e6" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight
        position={[5, 9, 1]}
        intensity={2.5}
        color="#ffd925"
        castShadow
      />

      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        mixPolarAngle={Math.PI / 2}
      />
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#555e6a" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
