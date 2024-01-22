import { useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls: OrbitControls });

export const SphereToPlaneWithRotation = () => {
  const sphereRef = useRef();

  const texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/coachblockchain/Images/main/collage.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const textureColumns = 6;
  const textureRows = 4;

  useFrame(() => {
    if (sphereRef.current) {
      // Cambia el tamaño de la textura de la esfera
      sphereRef.current.material.map.repeat.set(textureColumns, textureRows);
      
      // Rotación continua de la esfera sobre su propio eje (Y)
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <mesh ref={sphereRef} onClick={() => {}}>
        <sphereGeometry args={[2.8, 32, 50]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      {/* <OrbitControls /> */}
    </>
  );
};


