// Smoke.js
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Import shaders
import vertexShader from '../../../shaders/coffeeSmoke/vertex';
import fragmentShader from '../../../shaders/coffeeSmoke/fragment';

export default function Smoke()  {
    const smokeRef = useRef();
    const perlinTexture = useTexture('/perlin.png');

    // Smoke material uniforms
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uPerlinTexture: { value: perlinTexture }
    }), [perlinTexture]);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (smokeRef.current) {
            smokeRef.current.material.uniforms.uTime.value = elapsedTime;
        }
    });

    return (
        <mesh ref={smokeRef} rotation={[0, 1, 0]} position={[7.5, 5.3, -32.75]}  scale={[0.2,0.2,0.2]}>
            <planeGeometry args={[1.5, 6, 16, 64]} />
            <shaderMaterial
                attach="material"
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
                transparent={true}
                depthWrite={false}
            />
        </mesh>
    );
};