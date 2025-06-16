'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Create animated gradient
    float gradient = sin(uv.x * 10.0 + uTime) * 0.5 + 0.5;
    gradient *= sin(uv.y * 8.0 - uTime * 0.5) * 0.5 + 0.5;
    
    // Color palette
    vec3 color1 = vec3(0.1, 0.1, 0.3); // Dark blue
    vec3 color2 = vec3(0.3, 0.2, 0.5); // Purple
    
    // Mix colors based on gradient
    vec3 finalColor = mix(color1, color2, gradient);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniformsRef = useRef({
    uTime: { value: 0 }
  });

  useFrame((state) => {
    if (meshRef.current) {
      uniformsRef.current.uTime.value = state.clock.elapsedTime;
    }
  });

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: uniformsRef.current,
      }),
    []
  );

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}