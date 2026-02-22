import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import * as THREE from "three";

export type GlobeMarker = {
  lat: number;
  lng: number;
  src: string;
  label: string;
};

interface GlobeConfig {
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
}

interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: GlobeConfig;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function GlobeInternal({ markers = [], config = {}, onMarkerClick, onMarkerHover }: Globe3DProps) {
  const globeRef = useRef<THREE.Group>(null);
  const globeInstance = useMemo(() => new ThreeGlobe(), []);

  useEffect(() => {
    globeInstance
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .pointsData(markers)
      .pointAltitude(0.07)
      .pointColor(() => "#4da6ff")
      .pointRadius(0.5);

    if (config.atmosphereColor) {
      globeInstance.atmosphereColor(config.atmosphereColor);
    }
    globeInstance.showAtmosphere(true);
  }, [markers, config, globeInstance]);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += config.autoRotateSpeed || 0.001;
    }
  });

  return <primitive object={globeInstance} ref={globeRef} scale={[0.1, 0.1, 0.1]} />;
}

export function Globe3D(props: Globe3DProps) {
  return (
    <div className="w-full h-full relative min-h-[300px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <OrbitControls enableZoom={false} autoRotate={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GlobeInternal {...props} />
      </Canvas>
    </div>
  );
}
