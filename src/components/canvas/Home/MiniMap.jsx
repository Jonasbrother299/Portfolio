import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { LineBasicMaterial, BufferGeometry, Vector3, Color } from "three";
import { MathUtils } from "three/src/math/MathUtils";
import { useSnapshot } from "valtio";
import { useScroll } from "@react-three/drei/web/ScrollControls";
import state from "../../../store";


const material = new LineBasicMaterial({ color: "white" });
const geometry = new BufferGeometry().setFromPoints([
  new Vector3(0, -0.5, 0),
  new Vector3(0, 0.5, 0),
]);

function Minimap() {
  const ref = useRef();
  const scroll = useScroll();
  const { urls } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);
  useFrame((_, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length
      );
      child.scale.y = MathUtils.damp(child.scale.y, 0.1 + y / 6, 8, 8, delta);
    });
  });
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.5, 2]}
        />
      ))}
    </group>
  );
}

export default Minimap;