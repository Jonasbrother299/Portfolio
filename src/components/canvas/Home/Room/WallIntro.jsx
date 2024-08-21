import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Sparkles } from '@react-three/drei/core/Sparkles'
import { editable as e } from '@theatre/r3f';
import { useCurrentSheet } from '@theatre/r3f';
import { MeshBasicMaterial } from 'three';

export default function WallIntro(props) {
  const { nodes, materials } = useGLTF('/WallIntro.glb')
  const wallEntranceRef = useRef();
  const sheet = useCurrentSheet(); 

  // Theatre.js objects for each text element
  const bigTextObj = sheet.object('Wall Entrance', {
    opacity: 1,
  });

  useEffect(() => {
    // Update positions and opacity for each text element
    bigTextObj.onValuesChange((props) => {
      if (wallEntranceRef.current) {
        wallEntranceRef.current.material.opacity = props.opacity;
      }
    });
}, [bigTextObj]);

  return (
    <group {...props} dispose={null}>
    <Sparkles position={[0, 10, 35]} scale={4 * 3} size={7} speed={0.4} count={30} color="#FFA500"/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Material.020']}
        position={[-0.109, 4.563, 24.324]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.025']}
        position={[-0.131, 10.064, 21.316]}
        scale={0.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.entrance_wall.geometry}
        material={materials['Material.029']}
        position={[-10.974, 3.966, 28.416]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.entrance_wall001.geometry}
        material={materials['Material.022']}
        position={[-10.974, 3.966, 28.416]}
      />
      <e.mesh
        ref={wallEntranceRef}
        theatreKey='WallIntroEntranceWall'
        castShadow
        receiveShadow
        geometry={nodes.room_entrance_1_bloom.geometry}
        material={new MeshBasicMaterial({ color: 'black', transparent: true, opacity: 1 })}  // Changing to MeshBasicMaterial with transparency
        position={[-0.298, 10.047, 20.79]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.338, 1.737, 2.831]}
      />
    </group>
  )
}

useGLTF.preload('/WallIntro.glb')