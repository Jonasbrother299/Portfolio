import React, { useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { editable as e } from '@theatre/r3f';
import { useCurrentSheet } from '@theatre/r3f';
import {MeshBasicMaterial} from "three"

export default function RoomIntro(props) {
  const { nodes, materials } = useGLTF('/RoomIntro.glb')
  const exitRoomIntroRef = useRef();
  const sheet = useCurrentSheet(); 

 const exitRoomIntroObj = sheet.object('ExitRoom Intro', {
  opacity: 1,
});

useEffect(() => {
  exitRoomIntroObj.onValuesChange((props) => {
    if (exitRoomIntroRef.current) {
      exitRoomIntroRef.current.material.opacity = props.opacity;
    }
  });
}, [exitRoomIntroObj]);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coffee.geometry}
        material={materials.coffee}
        position={[7.446, 5.126, -32.724]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SchubladenSchreibtisch2.geometry}
        material={materials['Material.026']}
        position={[13.998, 1.849, -31.821]}
        scale={[0.867, 0.157, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tischplatte.geometry}
        material={materials['Material.043']}
        position={[6.686, 4.421, -32.727]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PC.geometry}
        material={materials['Material.001']}
        position={[7.719, 1.672, -34.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelf.geometry}
        material={materials['Material.026']}
        position={[8.759, 5.158, -34.041]}
        scale={[0.47, 0.754, 0.439]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelfoots1.geometry}
        material={materials['Material.026']}
        position={[9.072, 3.762, -34.403]}
        scale={[1, 1.189, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelffoots2.geometry}
        material={materials['Material.026']}
        position={[9.072, 3.762, -35.683]}
        scale={[1, 1.189, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelffoots4.geometry}
        material={materials['Material.026']}
        position={[12.756, 3.762, -34.403]}
        scale={[1, 1.189, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelffoots3.geometry}
        material={materials['Material.026']}
        position={[12.756, 3.762, -35.683]}
        scale={[1, 1.189, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.012']}
        position={[10.192, 5.411, -34.773]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mauspad.geometry}
        material={materials['Material.017']}
        position={[6.686, 4.421, -32.727]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.014']}
        position={[10.192, 5.411, -34.773]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.015']}
        position={[14.368, 5.958, -36.267]}
        rotation={[0, 0.449, 0]}
        scale={1.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SchubladenSchreibtisch2001.geometry}
        material={materials['Material.041']}
        position={[13.998, 1.849, -31.821]}
        scale={[0.867, 0.157, 1]}
      />
      <group position={[10.754, 4.767, -32.851]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094_1.geometry}
          material={materials['Material.011']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mauspad028.geometry}
        material={materials['Material.011']}
        position={[7.487, 4.284, -32.82]}
        scale={[0.62, 1.116, 0.777]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mauspad045.geometry}
        material={materials['Material.011']}
        position={[8.081, 4.285, -32.832]}
        scale={[0.62, 1.116, 0.777]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._679b_Var1_LOD0_room3_plants2_com002.geometry}
        material={materials['Material.016']}
        position={[-12.838, 2.243, 1.744]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.011, 0.013, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._679b_Var1_LOD0_room3_plants2_com003.geometry}
        material={materials['Material.013']}
        position={[-12.838, 2.243, 1.744]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.011, 0.013, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.019']}
        position={[13.865, 6.467, -35.368]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.689, -1, -0.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.028']}
        position={[-10.641, 1.673, -35.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-10.577, 3.867, -34.089]}
        scale={[0.863, 0.863, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.027']}
        position={[-10.868, 1.673, -19.04]}
        scale={[1.192, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_room1_wall.geometry}
        material={materials['Material.002']}
        position={[14.932, 8.523, 4.536]}
        scale={17.488}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[22.711, 8.523, -9.811]}
        scale={17.488}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.021']}
        position={[7.442, 4.638, -32.727]}
        scale={[1, 1.29, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Material}
        position={[6.591, 4.648, -33.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.009']}
        position={[-12.386, 1.608, -6.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030_room1_window.geometry}
        material={materials['Material.007']}
        position={[-0.688, 11.711, -16.613]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030_white_mat.geometry}
        material={materials['Material.008']}
        position={[-0.673, 11.711, -16.611]}
        scale={0.04}
      />
      <group position={[0, 3.644, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hinge_2001.geometry}
          material={materials['Bezel.001']}
          scale={0.01}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hello_world_room1_floor.geometry}
        material={materials['Material.003']}
        position={[-8.987, 10.604, -35.337]}
        rotation={[1.571, 0, 0]}
        scale={121.723}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_room1_furniture2002.geometry}
        material={materials['Material.023']}
        position={[12.229, 3.857, -28.573]}
        rotation={[-Math.PI / 2, 0, -1.905]}
      />
      <mesh
        ref={exitRoomIntroRef}
        castShadow
        receiveShadow
        geometry={nodes.room_entrance_2_bloom.geometry}
        // material={materials['Material.040']}
        material={new MeshBasicMaterial({ color: 'black', transparent: true, opacity: 1 })}
        position={[0.08, 7.713, -35.387]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.415, 1.838, 2.995]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_room1_wall001.geometry}
        material={materials['Material.039']}
        position={[14.932, 8.603, 4.536]}
        scale={17.488}
      />
      <group position={[6.591, 4.648, -33.174]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['Material.044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials['Material.009']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/RoomIntro.glb')
