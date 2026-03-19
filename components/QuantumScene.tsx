/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

// Fix: Extend JSX.IntrinsicElements to include Three.js elements to resolve TypeScript errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      group: any;
      fog: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

const ConnectionNode = ({ position, color, size = 1 }: { position: [number, number, number]; color: string; size?: number }) => {
  return (
    <Sphere args={[0.08 * size, 16, 16]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        toneMapped={false}
      />
    </Sphere>
  );
};

const NetworkGroup = () => {
    const groupRef = useRef<THREE.Group>(null);
    const count = 30;
    
    // Generate random nodes
    const nodes = useMemo(() => {
        const temp = [];
        for(let i=0; i<count; i++) {
            temp.push({
                pos: [
                    (Math.random() - 0.5) * 10, 
                    (Math.random() - 0.5) * 6, 
                    (Math.random() - 0.5) * 5
                ] as [number, number, number],
                size: Math.random() + 0.5,
                color: Math.random() > 0.6 ? '#F2C965' : '#1A4D43' // Gold or lighter green
            })
        }
        return temp;
    }, []);

    // Create lines between close nodes
    const lines = useMemo(() => {
        const tempLines = [];
        for(let i=0; i<nodes.length; i++) {
            for(let j=i+1; j<nodes.length; j++) {
                const dist = new THREE.Vector3(...nodes[i].pos).distanceTo(new THREE.Vector3(...nodes[j].pos));
                if(dist < 3.5) {
                    tempLines.push({
                        start: nodes[i].pos,
                        end: nodes[j].pos
                    })
                }
            }
        }
        return tempLines;
    }, [nodes]);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {nodes.map((n, i) => (
                <ConnectionNode key={i} position={n.pos} color={n.color} size={n.size} />
            ))}
            {lines.map((l, i) => (
                <Line 
                    key={`line-${i}`} 
                    points={[l.start, l.end]} 
                    color="#1A4D43" 
                    lineWidth={1} 
                    transparent 
                    opacity={0.3} 
                />
            ))}
        </group>
    )
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none bg-[#12332E]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <fog attach="fog" args={['#12332E', 5, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#F2C965" />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
            <NetworkGroup />
        </Float>

        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
};