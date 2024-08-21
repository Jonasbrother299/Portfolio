// Loader.js
import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500); // 0.5 seconds delay before hiding the loader

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (!showLoader) return null;
  
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
        {/* Large Spinner or Logo */}
        <div
          style={{
            width: 200,
            height: 200,
            border: '10px solid #f1f1f1',
            borderTop: '10px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 2s linear infinite',
          }}
        />
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
      {/* Adding keyframes for the spinner */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default Loader;