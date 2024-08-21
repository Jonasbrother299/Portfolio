import React, { useRef, useMemo } from "react";
import { useGLTF, Clone } from "@react-three/drei";
import { Color, Vector3 } from "three"
import { ToonShader } from "../Shader/ToonShader";

import { GhibliShader } from "../Shader/GhibliShader";

export default function GhibliTree(props) {
    const { nodes, materials } = useGLTF("/Ghibli_Tree.glb");

    const uniforms = useMemo(() => {
        return {
            ...ToonShader.uniforms,
            uBaseColor: { value: new Color('#498973') },
            uAmbientColor: { value: new Color('#050505') },
            uDirLightColor: { value: new Color('yellow') },
            uDirLightPos: { value: new Vector3(15, 15, 15) },
            uLineColor1: { value: new Color('#808080') },
            uLineColor2: { value: new Color('808088') },
        }
    })

    const uniformsGhibli = useMemo(() => {
        return {

            colorMap: {
                value: [
                    new Color('#427062'),
                    new Color('#33594e'),
                    new Color('#234549'),
                    new Color('#1e363f')
                ]
            },
            brightnessThreshold: {
                value: [0.9, 0.45, 0.001]
            },
            lightPosition: {
                value: new Vector3(0, 15, 15),
            }
        }

    })
    return (
        <group {...props} scale={[2,2,2]} position={[-31, 1, -23]} dispose={null}>
            <group position={[0, 0, 0]}  rotation={[0, 0, -1]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                // material={materials["Stylized foliage"]}
                >
                    <meshStandardMaterial ></meshStandardMaterial>
                    <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_1.geometry}
                // material={materials["Stylized foliage"]}
                >
                    <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
                </mesh>

                <mesh
                position={[0,0,-3]}
                castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                // material={materials["Stylized foliage"]}
                >
                    <meshStandardMaterial ></meshStandardMaterial>
                    <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_1.geometry}
                // material={materials["Stylized foliage"]}
                >
                    <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
                </mesh>

                <mesh
                position={[0,0,-7]}
                castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                // material={materials["Stylized foliage"]}
                >
                    <meshStandardMaterial ></meshStandardMaterial>
                    <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_1.geometry}
                // material={materials["Stylized foliage"]}
                >
                    <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("/Ghibli_Tree.glb");