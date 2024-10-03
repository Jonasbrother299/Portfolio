// Loader.js
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import  MovingBall from './canvas/MovingBall/MovingBall';
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
const messages = [
  'Setting up shaders',
  'Optimizing the scene',
  'Loading textures',
  'Preparing assets',
  'Initializing environment',
];

const Loader = ({ loading }) => {
  const { progress } = useProgress();
  const [messageIndex, setMessageIndex] = useState(0);

  // Cycle through messages one time
  useEffect(() => {
    if (messageIndex < messages.length - 1) {
      const messageTimer = setInterval(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
      }, 1500); // Change message every 1.5 seconds

      return () => clearInterval(messageTimer); // Clean up the interval on unmount
    }
  }, [messageIndex]);

  if (!loading) return null; // Show loader only when loading

  return (
    <Html center>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#121212', // Dark background for contrast
          color: '#f1f1f1', // Light text color
        }}
      >
        {/* Canvas with MovingBall component */}
        <Canvas
          style={{
            width: '100%',
            height: '700px',
            marginBottom: '20px', // Adds space between canvas and progress text
          }}
        >
          <EffectComposer>
            <Bloom
              intensity={1.5} // Higher intensity for more glow
              luminanceThreshold={0.5} // Lower to capture more colors
              luminanceSmoothing={0.1} // Adjust to control the smoothness
              kernelSize={KernelSize.HUGE} // Change the kernel size to adjust bloom spread
            />
          </EffectComposer>
          <MovingBall /> {/* Render your MovingBall component here */}
        </Canvas>

        {/* Dynamic text displaying messages */}
        <p
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: -250,
          }}
        >
          {messages[messageIndex]}
        </p>

        {/* Progress Text */}
        <p
          style={{
            fontSize: 42, // Larger font size
            fontWeight: 'bold',
            marginTop: 20,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;