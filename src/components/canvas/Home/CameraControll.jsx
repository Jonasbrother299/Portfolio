import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';

export default function CameraControl() {
    const { camera } = useThree();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isScrolling, setIsScrolling] = useState(false);
    const smoothRotation = useRef({ x: 0, y: 0 }); // To store smooth rotation state
  
    // Set default rotation values
    const defaultRotation = { x: 0, y: 0 };
  
    // Handle mouse movement
    useEffect(() => {
      const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        setMousePos({ x, y });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    // Handle scroll event
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 100); // Adjust delay as needed
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Update camera rotation and position
    useFrame(() => {
      const sensitivity = 0.01;
      const smoothFactor = 0.1; // Adjust for smoother or faster transition
  
      if (isScrolling) {
        // Smoothly interpolate to default rotation
        smoothRotation.current.x += (defaultRotation.x - smoothRotation.current.x) * smoothFactor;
        smoothRotation.current.y += (defaultRotation.y - smoothRotation.current.y) * smoothFactor;
  
        camera.rotation.x = smoothRotation.current.x;
        camera.rotation.y = smoothRotation.current.y;
      } else {
        // Update camera rotation based on mouse position
        smoothRotation.current.x += (mousePos.y * sensitivity - smoothRotation.current.x) * 0.1;
        smoothRotation.current.y += (mousePos.x * sensitivity - smoothRotation.current.y) * 0.1;
  
        // Apply rotation to the camera
        camera.rotation.x = smoothRotation.current.x;
        camera.rotation.y = smoothRotation.current.y;
  
        // Limit the X rotation to prevent flipping
        camera.rotation.x = Math.max(Math.min(camera.rotation.x, Math.PI / 2 - 0.1), -Math.PI / 2 + 0.1);
      }
    });
  
    return null;
  }