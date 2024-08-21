import { useRef, useEffect } from 'react';
import { Text } from '@react-three/drei';
import { editable as e } from '@theatre/r3f';
import { useCurrentSheet } from '@theatre/r3f';

export default function AnimatedText() {
  const bigIntrotextRef = useRef();
  const smallIntroTextRef = useRef();
  const frontendTitleRef = useRef();
  const frontendDescRef = useRef();
  const designerTitleRef = useRef();
  const designerDescRef = useRef();
  const sheet = useCurrentSheet();

  // Theatre.js objects for each text element
  const bigTextObj = sheet.object('Big Heading', {
    x: -8,
    y: 14,
    z: 27,
    opacity: 1,
  });

  const smallTextObj = sheet.object('Small Heading', {
    x: 7,
    y: 10,
    z: 27,
    opacity: 1,
  });

  const frontendTitleObj = sheet.object('Frontend Title', {
    x: -8,
    y: 4,
    z: 27,
    opacity: 1,
  });

  const frontendDescObj = sheet.object('Frontend Description', {
    x: -8,
    y: 2,
    z: 27,
    opacity: 1,
  });

  const designerTitleObj = sheet.object('Designer Title', {
    x: -8,
    y: -2,
    z: 27,
    opacity: 1,
  });

  const designerDescObj = sheet.object('Designer Description', {
    x: -8,
    y: -4,
    z: 27,
    opacity: 1,
  });

  useEffect(() => {
    // Update positions and opacity for each text element
    bigTextObj.onValuesChange((props) => {
      if (bigIntrotextRef.current) {
        bigIntrotextRef.current.position.set(props.x, props.y, props.z);
        bigIntrotextRef.current.material.opacity = props.opacity;
      }
    });

    smallTextObj.onValuesChange((props) => {
      if (smallIntroTextRef.current) {
        smallIntroTextRef.current.position.set(props.x, props.y, props.z);
        smallIntroTextRef.current.material.opacity = props.opacity;
      }
    });

    frontendTitleObj.onValuesChange((props) => {
      if (frontendTitleRef.current) {
        frontendTitleRef.current.position.set(props.x, props.y, props.z);
        frontendTitleRef.current.material.opacity = props.opacity;
      }
    });

    frontendDescObj.onValuesChange((props) => {
      if (frontendDescRef.current) {
        frontendDescRef.current.position.set(props.x, props.y, props.z);
        frontendDescRef.current.material.opacity = props.opacity;
      }
    });

    designerTitleObj.onValuesChange((props) => {
      if (designerTitleRef.current) {
        designerTitleRef.current.position.set(props.x, props.y, props.z);
        designerTitleRef.current.material.opacity = props.opacity;
      }
    });

    designerDescObj.onValuesChange((props) => {
      if (designerDescRef.current) {
        designerDescRef.current.position.set(props.x, props.y, props.z);
        designerDescRef.current.material.opacity = props.opacity;
      }
    });

  }, [bigTextObj, smallTextObj, frontendTitleObj, frontendDescObj, designerTitleObj, designerDescObj]);

  const textConfig = {
    lineHeight: 1.2,
    letterSpacing: 0.1,
  };

  return (
    <e.group theatreKey="text">
      <Text
        ref={bigIntrotextRef}
        {...textConfig}
        fontSize={0.08}
        scale={10}
        color="white"
        font='./font/Sarabun-Medium.ttf'
        material-transparent={true}
      >
        Crafting Immersive {'\n'}3D Worlds
      </Text>

      <Text
        ref={smallIntroTextRef}
        letterSpacing={0.02}
        lineHeight={1.7}
        fontSize={0.035}
        scale={10}
        color="white"
        material-transparent={true}
      >
        Shaping Visions in 3D.
        {'\n'}Scroll to Explore My Journey.
        {'\n'}Through Innovation and Creativity.
      </Text>

      <Text
        ref={frontendTitleRef}
        fontSize={0.09} // Bigger font size for the title
        scale={10}
        color="white"
        material-transparent={true}
      >
        Frontend Developer
      </Text>

      <Text
        ref={frontendDescRef}
        fontSize={0.06}
        scale={10}
        color="white"
        material-transparent={true}
      >
        I build interactive and {'\n'}visually stunning web applications.
      </Text>

      <Text
        ref={designerTitleRef}
        fontSize={0.09} // Bigger font size for the title
        scale={10}
        color="white"
        material-transparent={true}
      >
        3D Designer
      </Text>

      <Text
        ref={designerDescRef}
        fontSize={0.09}
        scale={10}
        color="white"
        material-transparent={true}
      >
        I craft immersive 3D experiences {'\n'}that blend technology with creativity.
      </Text>
    </e.group>
  );
}