import React from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useLoader, useThree } from "@react-three/fiber";

function SVGScene() {
  const data = useLoader(SVGLoader, '/Logo_simon_brachman.svg');
  const shapes = data.paths.flatMap((g) => g.toShapes(true));
  const { width: w, height: h } = useThree((state) => state.viewport);

  // Calculate the total number of shapes to identify the last one
  const totalShapes = shapes.length;

  return (
    <>
      {shapes.map((shape, index) => {
        // Determine the material based on whether the shape is the last one
        const isLastShape = index === totalShapes - 1;
        const materialProps = isLastShape ? 
          { color: 'black', side: THREE.DoubleSide } : // Change color for the last shape
          { side: THREE.DoubleSide }; // Default material for other shapes

        return (
          <mesh
            rotation={[0, 0, 0]}
            key={index}
            scale={w <= 6 ? [w * 0.0001, w * -0.0001, -0.001] : [w * 0.00015, w * -0.00015, -0.001]}
            position={[2, 3, 0]}
          >
            <shapeGeometry args={[shape]} />
            <meshBasicMaterial {...materialProps} />
          </mesh>
        );
      })}
    </>
  );
}

export default SVGScene;
