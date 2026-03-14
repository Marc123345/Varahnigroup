import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PropertyCubeProps {
  images: string[];
  activeIndex: number;
  onRotate?: (index: number) => void;
}

export function PropertyCube({ images, activeIndex, onRotate }: PropertyCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Create materials with textures
  const materials = useMemo(() => {
    const loader = new THREE.TextureLoader();
    
    return images.slice(0, 6).map((imageUrl) => {
      const texture = loader.load(imageUrl);
      texture.colorSpace = THREE.SRGBColorSpace;
      
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.4,
        metalness: 0.2,
      });
    });
  }, [images]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!isDragging) {
      // Smooth idle rotation
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + 0.2;
    }
  });

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <group 
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <mesh ref={meshRef} material={materials}>
        <boxGeometry args={[2, 2, 2]} />
      </mesh>
    </group>
  );
}
