import { Suspense} from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import { Preload } from "@react-three/drei/core/Preload";
import { ScrollControls } from "@react-three/drei/web/ScrollControls";
import { useScroll } from "@react-three/drei";
import { getProject, val} from "@theatre/core"
import { SheetProvider, PerspectiveCamera, useCurrentSheet} from "@theatre/r3f"
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { CineonToneMapping} from "three";

import Smoke from "./Smoke";
import Loader from "../../Loader";
import AnimatedText from "./AnimatedText";
import Room from "./Room/Room";
import CameraControll from "./CameraControll"
import EnvironmentLoader from "./EnvironmentLoader";
import stateflyThrough from "../../../flythrough/stateflyThrough.json"
import studio from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"

// studio.extend(extension)
// studio.initialize()

const CanvasHome = () => {
    const sheet = getProject("fly through", { state: stateflyThrough }).sheet("Scene")
  
    return (
      <>
        <Canvas
          dpr={[1, 1.5]}
          shadows
          gl={{
            alpha: true,
            tencil: true,
            depth: true,
            antialias: true,
            powerPreference: "high-performance",
            toneMapping: CineonToneMapping,
            preserveDrawingBuffer: true,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Smoke/>
            <CameraControll/>
              <EnvironmentLoader/>
                <ambientLight intensity={2}/>
                {/* <OrbitControls></OrbitControls> */}
                <ScrollControls pages={5} damping={0.5}>
                  <SheetProvider sheet={sheet}>  
                    <Scene/>
                    <AnimatedText/>
                  </SheetProvider>
                </ScrollControls>
          </Suspense>
        </Canvas>
      </>
    );
};

export default CanvasHome;


function Scene() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()
  
  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
});
  return (
    <>
          {/* <Env /> */}
          <EffectComposer>
            <Bloom intensity={0.1} luminanceThreshold={0.1} luminanceSmoothing={0.2} height={300}/>
          </EffectComposer>
              <Suspense fallback={<Loader />}>
           <Room />
          </Suspense>
          <Preload />
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[0,0,0]}
            fov={45}
            near={0.1}
            far={2000}
          />
    </>
  )
}