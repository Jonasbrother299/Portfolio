import { MathUtils }from "three"
import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Image } from '@react-three/drei/core/Image';
import { Text } from '@react-three/drei/core/Text';

function AnimatedImage({ url, scale, position }) {
  const visible = useRef(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  const { height } = useThree((state) => state.viewport)

  useEffect(() => {
    if (ref.current) {
      ref.current.position.y = visible.current ? 0 : -height / 2 + 1;
    }
  }, [height]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y = MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta);
      ref.current.material.zoom = MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta);
    }
  });

  return (
    <group position={position}>
      <Image
        ref={ref}
        url={url}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onUpdate={(self) => (visible.current = true)} // Ensure visibility is set when the image is ready
      />
    </group>
  );
}

export default function RoomProjects() {
    const { width: w, height: h } = useThree((state) => state.viewport)
    const [viewportWidth, setViewportWidth] = useState(100);
    const viewportWidthRef = useRef(viewportWidth);

    // Save the initial width and update the ref when it changes
    useEffect(() => {
      if (w > 0) {
        viewportWidthRef.current = w;
        setViewportWidth(w);
      }
    }, [w]);

// console.log(viewportWidth)

    const calculateImageScale = (w) => {
        if (w  <= 84 ) {
          // Scale formula for small widths
          return [w / 4.51, w / 8, 1];
        } else if (w <= 150) {
          // Scale formula for medium widths
          return [w / 4.5, w / 8, 1];
        } else if (w <= 244) {
          // Scale formula for large widths
          return [w / 6.5, w / 11.5, 1];
        } else {
          // Scale formula for very large widths
          return [w / 5, w / 7, 1];
        }
      };
      
      const imageScale = calculateImageScale(viewportWidth);

      console.log(viewportWidth)
    return (
    <>
      <mesh position={[0, 0, -190]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <Text position={viewportWidth >= 240 ? [-6,16,-186] : viewportWidth <= 260 ? [-6,16,-186] : [-6,16,-186]} scale={viewportWidth >= 240 ? 5 : viewportWidth <= 150 ? 3 : 5}>&lt;Portfolio /&gt;</Text>
      <AnimatedImage url="/PhotografWebsite.png" scale={imageScale} position={[0, 15, -189]} />
      {/* <AnimatedImage url="/PhotografWebsite.png" scale={[viewportWidth / 4, viewportWidth / 5, 1]} position={[viewportWidth / 4, - h * 1.2, -189]} />
      <AnimatedImage url="/PartyPilot.png" scale={[viewportWidth / 4, viewportWidth / 5, 1]} position={[-viewportWidth / 4, - h * 2, -189]} /> */}
      {/* Add more images as needed */}
    </>
  );
}