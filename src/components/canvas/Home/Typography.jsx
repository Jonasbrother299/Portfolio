import { useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei/core/Text'


export default function Typography() {
    const state = useThree()
    const { width, height } = state.viewport.getCurrentViewport(state.cameta, [0, 0, 12])
    const shared = { 
      font: '/PlayfairDisplay-Regular.ttf', 
      letterSpacing: 0.01, 
      color: 'white' }
    return (
      <>
        {/* <Text children="Emotion" anchorX="left" position={[-width / 1.5, -height / 10, -10]} scale={[ height / 2, width / 3, 0]} {...shared} />
        <Text children="in" anchorX="right" position={[width / 15, -height * 1.5, -10]} {...shared} />
        <Text children="Every " anchorX="right" position={[width / 2.5, -height * 2, 12]} {...shared} />
        <Text children="Frame" position={[0, -height * 4.624, 12]} {...shared} /> */}
      </>
    )
  }