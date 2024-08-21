import { useGLTF } from '@react-three/drei'
import { editable as e } from '@theatre/r3f';
import { useCurrentSheet } from '@theatre/r3f';

export default function RoomSkills(props) {
  const { nodes, materials } = useGLTF('/RoomSkills.glb')
  const sheet = useCurrentSheet();


  return (
    <e.group  {...props} dispose={null} theatreKey='RoomSkills'>
      <group position={[-0.226, 8.839, -122.643]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_room2_blocks.geometry}
          material={materials['Material.032']}
          position={[14.848, -7.23, -8.732]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.035']}
        position={[0.061, 14.296, -147.493]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={3.514}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials['Material.046']}
        position={[18.494, 6.999, -86.06]}
        scale={1.299}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Material.064']}
        position={[38.23, 0.584, -123.468]}
        rotation={[0, -0.07, 0]}
        scale={1.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.034']}
        position={[3.713, 5.081, -144.021]}
      />
      <e.mesh
        theatreKey='ReactLogo'
        castShadow
        receiveShadow
        geometry={nodes.React_Logo.geometry}
        material={materials['Material.051']}
        position={[-11.65, 9.749, -125.943]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={8.121}
      />
      <e.mesh
        theatreKey='ThreejsLogo'
        castShadow
        receiveShadow
        geometry={nodes.Threejs_logo.geometry}
        material={materials['Material.057']}
        position={[11.778, 12.579, -128.226]}
        rotation={[-Math.PI / 2, 0, -0.142]}
        scale={30.622}
      />
      <e.group position={[16.805, 11.057, -85.228]} rotation={[Math.PI / 2, 0, 0]} scale={112.793} theatreKey='HTMLLogo'>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials['Material.053']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002_1.geometry}
          material={materials['Material.054']}
        />
      </e.group>
      <e.group position={[-24.857, 7.263, -92.429]} rotation={[Math.PI / 2, 0, 0]} scale={287.716} theatreKey='CSSLogo'>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polygon2989002.geometry}
          material={materials['Material.050']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polygon2989002_1.geometry}
          material={materials['SVGMat.037']}
        />
      </e.group>
      <e.mesh
        theatreKey='SASSLogo'
        castShadow
        receiveShadow
        geometry={nodes.SASS_Logo.geometry}
        material={materials['Material.037']}
        position={[-15.27, 5.457, -105.904]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={48.283}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034_room2_blocks001.geometry}
        material={materials['Material.033']}
        position={[14.622, 1.73, -131.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_room2_floor.geometry}
        material={materials['Material.031']}
        position={[0.783, 0.392, -94.83]}
        scale={[1.488, 1, 1]}
      />
    </e.group>
  )
}

useGLTF.preload('/RoomSkills.glb')
