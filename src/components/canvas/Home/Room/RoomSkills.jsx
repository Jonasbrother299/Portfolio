import { useEffect, useRef, useState} from "react"
import { Text, useGLTF } from '@react-three/drei'
import { editable as e } from '@theatre/r3f';
import { useCurrentSheet } from '@theatre/r3f';
import { MeshBasicMaterial } from "three"
import { Html } from "@react-three/drei";
import { RoundedBox } from '@react-three/drei'

export default function RoomSkills(props) {
  const [cssLogohovered, setCssLogoHovered] = useState(false);
  const [sassLogohovered, setSassLogoHovered] = useState(false);
  const [reactLogohovered, setReactLogoHovered] = useState(false);
  const [htmlLogohovered, setHtmlLogoHovered] = useState(false);
  const [threeLogohovered, setThreeLogoHovered] = useState(false);
  const [certificatehovered, setCertificateHovered] = useState(false);

  const { nodes, materials } = useGLTF('/RoomSkills.glb')
  const sheet = useCurrentSheet();
  const exitRoomSkillsRef = useRef();

  const handleCertificateHover = () => setCertificateHovered(true);
  const handleCertificateOut = () => setCertificateHovered(false);

  const handleClick = () => {
    window.open("https://threejs-journey.com/certificate/view/9512", "_blank");
  };
  const exitRoomSkillsObj = sheet.object('ExitRoom Skills', {
    opacity: 1,
  });

  useEffect(() => {
    exitRoomSkillsObj.onValuesChange((props) => {
      if (exitRoomSkillsRef.current) {
        exitRoomSkillsRef.current.material.opacity = props.opacity;
      }
    });
  }, [exitRoomSkillsRef]);

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
        ref={exitRoomSkillsRef}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={new MeshBasicMaterial({ color: 'black', transparent: true, opacity: 1 })}
        // material={materials['Material.035']}
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
      <mesh 
        scale={1} 
        position={[-21.5,10,-90]}  
        onPointerOver={() => setCssLogoHovered(true)}
        onPointerOut={() => setCssLogoHovered(false)}
      >
        <boxGeometry args={[4,6, 5]}></boxGeometry>
        <meshBasicMaterial opacity={0} transparent={true} ></meshBasicMaterial>
      </mesh>
      {cssLogohovered && (
        <group position={[-21.5,17,-90]}>
          <mesh  position={[-3,2,-10]}>
          <RoundedBox args={[10, 10, 0.5]} radius={0.5} smoothness={4}>
            <meshBasicMaterial color="#222222" />
          </RoundedBox>
            <Text position={[-3.1,3.5,1]}>CSS</Text>
            <Text fontSize={0.55} position={[-0.3,2,1]}> {"3+ Years of Experience with CSS"}</Text>
            <Text fontSize={0.55} position={[0.4, 0.7, 1]} color="#cccccc">
              {"Proficient in Flexbox, Media Queries, "}
            </Text>
            <Text fontSize={0.55} position={[-0.75, -0.2, 1]} color="#cccccc">
              {"Transitions, and Animations"}
            </Text>

            <Text position={[-0.7, -1.4, 1]} fontSize={0.55} color="#cccccc">
          {"Skilled in BEM Methodology "}
        </Text>
        <Text position={[-1.3, -2.3, 1]} fontSize={0.55} color="#cccccc">
          {"and Responsive Design "}
        </Text>
          </mesh>
        </group>
      )}
        <mesh 
        scale={1} 
        position={[-7.5,14,-127]}  
        onPointerOver={() => setReactLogoHovered(true)}
        onPointerOut={() => setReactLogoHovered(false)}
      >
        <boxGeometry args={[6,7, 5]}></boxGeometry>
        <meshBasicMaterial opacity={0} transparent={true} ></meshBasicMaterial>
      </mesh>
      {reactLogohovered && (
        <group position={[-5,22,-123]}>
          <mesh  position={[-3,2,-10]}>
          <RoundedBox args={[10, 10, 0.5]} radius={0.5} smoothness={4}>
            <meshBasicMaterial color="#222222" />
          </RoundedBox>
            <Text position={[-3.1,3.5,1]}>React</Text>
            <Text fontSize={0.55} position={[-0.3,2,1]}> {"2 Years of Experience with React"}</Text>
            <Text fontSize={0.55} position={[-0.5, 0.7, 1]} color="#cccccc">
            {"State Management with Valtio"}
            </Text>
            <Text fontSize={0.55} position={[-0.1, -0.2, 1]} color="#cccccc">
            {"Proficient in React Hooks, and JSX"}
            </Text>

            <Text position={[-1.1, -1.4, 1]} fontSize={0.55} color="#cccccc">
            {"Component-Based Design"}
        </Text>
        <Text position={[-1.4, -2.3, 1]} fontSize={0.55} color="#cccccc">
          {"and Reusable UI Design"}
        </Text>
          </mesh>
        </group>
      )}
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
        <mesh 
        scale={1} 
        position={[14.5,14,-127]}  
        onPointerOver={() => setThreeLogoHovered(true)}
        onPointerOut={() => setThreeLogoHovered(false)}
      >
        <boxGeometry args={[7.5,17, 5]}></boxGeometry>
        <meshBasicMaterial opacity={0} transparent={true} ></meshBasicMaterial>
      </mesh>
      {threeLogohovered && (
        <group position={[19,16,-123]}>
          <mesh  position={[-3,2,-10]}>
          <RoundedBox args={[10, 10, 0.5]} radius={0.5} smoothness={4}>
            <meshBasicMaterial color="#222222" />
          </RoundedBox>
            <Text position={[-3.1,3.5,1]}>Three.js</Text>
            <Text fontSize={0.55} position={[-0.5,2,1]}> {"4 Years of Experience with Three.js"}</Text>
            <Text fontSize={0.55} position={[-0.65, 0.7, 1]} color="#cccccc">
            {"Proficient in WebGL and Shaders"}
            </Text>
            <Text fontSize={0.55} position={[-0.2, -0.2, 1]} color="#cccccc">
            {"Skilled in 3D Modeling & Animations"}
            </Text>
            <Text position={[-0.2, -1.4, 1]} fontSize={0.55} color="#cccccc">
            {"Experience with Scene Management"}
        </Text>
        <Text
            onPointerOver={handleCertificateHover}
            onPointerOut={handleCertificateOut}
            onClick={handleClick}
            position={[-0.5, -3.2, 1]}
            fontSize={certificatehovered ? 0.65 : 0.55} // Increase size on hover
            color={certificatehovered ? "#ffffff" : "#cccccc"} // Change color on hover
          >
            {"Certificate"}
        </Text>
          </mesh>
        </group>
      )}
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
         <mesh 
        scale={1} 
        position={[20,14,-84]}  
        onPointerOver={() => setHtmlLogoHovered(true)}
        onPointerOut={() => setHtmlLogoHovered(false)}
      >
        <boxGeometry args={[6,7, 3]}></boxGeometry>
        <meshBasicMaterial opacity={0} transparent={true} ></meshBasicMaterial>
      </mesh>
      {htmlLogohovered && (
        <group position={[17,12,-84]}>
          <mesh  position={[-3,2,-10]}>
          <RoundedBox args={[10, 10, 0.5]} radius={0.5} smoothness={4}>
            <meshBasicMaterial color="#222222" />
          </RoundedBox>
            <Text position={[-3.3,3.5,1]}>HTML</Text>
            <Text fontSize={0.55} position={[-0.7,2,1]}> {"4 Years of Experience with HTML"}</Text>
            <Text fontSize={0.55} position={[-0.2, 0.7, 1]} color="#cccccc">
            {"Expert in Semantic HTML and Forms"}
            </Text>
            <Text fontSize={0.55} position={[-0.9, -0.2, 1]} color="#cccccc">
              {"Responsive Tables and Layouts"}
            </Text>
            <Text position={[-1.5, -1.4, 1]} fontSize={0.55} color="#cccccc">
              {"Accessibility Best Practices"}
            </Text>
            <Text position={[-1.1, -2.3, 1]} fontSize={0.55} color="#cccccc">
              {"SEO Optimization Techniques"}
            </Text>
          </mesh>
        </group>
      )}
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
      <mesh 
        scale={1} 
        position={[-11.4,9,-105]}  
        onPointerOver={() => setSassLogoHovered(true)}
        onPointerOut={() => setSassLogoHovered(false)}
      >
        <boxGeometry args={[7,7, 3]}></boxGeometry>
        <meshBasicMaterial opacity={0} transparent={true} ></meshBasicMaterial>
      </mesh>
      {sassLogohovered && (
        <group position={[-9.5,15,-100]}>
          <mesh  position={[-3,2,-10]}>
          <RoundedBox args={[10, 10, 0.5]} radius={0.5} smoothness={4}>
            <meshBasicMaterial color="#222222" />
          </RoundedBox>
            <Text position={[-3.1,3.5,1]}>SASS</Text>
            <Text fontSize={0.55} position={[-0.3,2,1]}> {"3+ Years of Experience with SASS"}</Text>
            <Text fontSize={0.55} position={[0.3, 0.7, 1]} color="#cccccc">
              {"Proficient in Flexbox, Media Queries, "}
            </Text>
            <Text fontSize={0.55} position={[-0.85, -0.2, 1]} color="#cccccc">
              {"Transitions, and Animations"}
            </Text>

            <Text position={[-0.85, -1.4, 1]} fontSize={0.55} color="#cccccc">
          {"Skilled in BEM Methodology "}
        </Text>
        <Text position={[-1.5, -2.3, 1]} fontSize={0.55} color="#cccccc">
          {"and Responsive Design "}
        </Text>
          </mesh>
        </group>
      )}
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
