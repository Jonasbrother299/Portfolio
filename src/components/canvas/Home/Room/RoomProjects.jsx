import { MathUtils } from "three";
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Image } from "@react-three/drei/core/Image";
import { Text } from "@react-three/drei/core/Text";
import state from '../../../../store';

function AnimatedImage({ url, scale, position, id }) {
  const visible = useRef(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  const { height } = useThree((state) => state.viewport);

  useEffect(() => {
    if (ref.current) {
      ref.current.position.y = visible.current ? 0 : -height / 2 + 1;
    }
  }, [height]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y = MathUtils.damp(
        ref.current.position.y,
        visible.current ? 0 : -height / 2 + 1,
        4,
        delta
      );
      ref.current.material.zoom = MathUtils.damp(
        ref.current.material.zoom,
        visible.current ? 1 : 1.5,
        4,
        delta
      );
    }
  });

  const handleClick = () => {
    state.clicked = id; // Set clicked to true when image is clicked
  };

  return (
    <group position={position}>
      <Image
        ref={ref}
        url={url}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick} // Trigger onClick
        onUpdate={(self) => (visible.current = true)}
      />
    </group>
  );
}

export default function RoomProjects() {
  const { width: w } = useThree((state) => state.viewport);
  const [viewportWidth, setViewportWidth] = useState(100);
  const viewportWidthRef = useRef(viewportWidth);

  useEffect(() => {
    if (w > 0) {
      viewportWidthRef.current = w;
      setViewportWidth(w);
    }
  }, [w]);

  const calculateImageScale = (w) => {
    if (w <= 84) {
      return [w / 4.51, w / 8, 1];
    } else if (w <= 150) {
      return [w / 4.5, w / 8, 1];
    } else if (w <= 244) {
      return [w / 6.5, w / 11.5, 1];
    } else {
      return [w / 5, w / 7, 1];
    }
  };

  const imageScale = calculateImageScale(viewportWidth);


  return (
    <>
      {/* 3D content */}
      <mesh position={[0, 0, -190]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <Text
        position={
          viewportWidth >= 240
            ? [-6, 16, -186]
            : viewportWidth <= 260
            ? [-6, 16, -186]
            : [-6, 16, -186]
        }
        scale={viewportWidth >= 240 ? 5 : viewportWidth <= 150 ? 3 : 5}
      >
        &lt;Portfolio /&gt;
      </Text>
      <AnimatedImage
        url="/PhotografWebsite.png"
        scale={imageScale}
        position={[0, 15, -189]}
        id="Photograf"
      />

       <AnimatedImage
        url="/PartyPilot.png"
        scale={imageScale}
        position={[0, -5, -189]}
        id="PartyPilot"
      />
    </>
  );
}