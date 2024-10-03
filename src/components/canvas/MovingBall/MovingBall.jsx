import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three/src/math/Color.js";
import {  MathUtils } from "three/src/math/MathUtils.js";

import vertexShader from "../shader/vertex.js";
import fragmentShader from "../shader/fragmentShader.js";

export default function MovingBall() {

  const uniformsRef = useRef({
    u_intensity: { value: 0.3 },
    u_time: { value: 0.3 },
    u_colorA: { value: new Color("#1E90FF") }, // Dark Orange
    u_colorB: { value: new Color("#FF8C00") }, // Blue
  });

  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const { clock } = state;
      const targetIntensity = hovered ? 0.55 : 0.25;
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        targetIntensity,
        0.025
      );
      mesh.current.material.uniforms.u_time.value =
        0.3 * clock.getElapsedTime();
  });

  const handlePointerMove = (event) => {
    setHovered(true);
  };

  const handlePointerOut = (event) => {
    setHovered(false);
  };

  return (
    <>
      <mesh
        onPointerMove={handlePointerMove}
        onPointerOver={handlePointerMove}
        onPointerOut={handlePointerOut}
        ref={mesh}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniformsRef.current} // Use the updated uniforms from useRef
          wireframe={false}
        />
      </mesh>
    </>
  );
}
