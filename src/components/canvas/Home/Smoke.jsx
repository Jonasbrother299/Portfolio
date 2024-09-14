import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Import shaders
import vertexShader from '../../../shaders/coffeeSmoke/vertex';
import fragmentShader from '../../../shaders/coffeeSmoke/fragment';

export default function Smoke() {
    const smokeRef = useRef();
    const perlinTexture = useTexture('/perlin.png');

    // Create a gradient canvas texture
    const gradientTexture = useMemo(() => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');

        // Create a gradient
        const gradient = context.createLinearGradient(0, 0, 0, size);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Top (opaque)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Bottom (transparent)

        context.fillStyle = gradient;
        context.fillRect(0, 0, size, size);

        return new THREE.CanvasTexture(canvas);
    }, []);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (smokeRef.current) {
            smokeRef.current.material.uniforms.uTime.value = elapsedTime;
        }
    });

    return (
        <mesh
            ref={smokeRef}
            rotation={[0, 1, 0]}
            position={[7.5, 5.3, -32.75]}
            scale={[0.2, 0.2, 0.2]}
        >
            <planeGeometry args={[1.5, 6, 16, 64]} />
            <shaderMaterial
                attach="material"
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTime: { value: 0 },
                    uPerlinTexture: { value: perlinTexture }
                }}
                transparent={true}
                depthWrite={false}
                alphaMap={gradientTexture} // Apply the gradient texture as alpha map
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending} // Optional: to blend smoke with the scene
            />
        </mesh>
    );
}