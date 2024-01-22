import { useRef, useState } from 'react'
import { Canvas, useFrame,useLoader  } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

const pexel = (id) =>
  `https://raw.githubusercontent.com/coachblockchain/Images/main/${id}.png`;

const images = [
  // Front
  { position: [0, 0, 3.5], rotation: [0, 0, 0], url: pexel(4048) },
  // Back
  { position: [-1.3, 0, 2.25], rotation: [0, 0, 0], url: pexel(10134) },
  { position: [1.3, 0, 2.25], rotation: [0, 0, 0], url: pexel(90) },
  // Left
  {
    position: [-1.75, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(4003),
  },
  {
    position: [-2.15, 0, 3.0],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(48),
  },
  {
    position: [-2, 0, 3.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(10331),
  },
  // Right
  {
    position: [1.75, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(10097),
  },
  {
    position: [2.15, 0, 3.0],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(4196),
  },
  {
    position: [2, 0, 3.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(10215),
  },
];

const lights = [
  { position: [10, 10, 10] },
  { position: [-10, -10, -10] },
  // Agrega más puntos de luz si lo deseas
];

function PlaneWithTexture({ position, rotation, url }) {
  const texture = useLoader(THREE.TextureLoader, url)
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

 

  return (
    <mesh
      position={position}
     
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial map={texture} color={hovered ? 'white' : 'orange'} />
    </mesh>
  )

  
}

function FrameBehind({ position, rotation }) {
  const ref = useRef()

  return (
    <mesh position={position}  ref={ref}>
      <planeGeometry args={[1.2, 1.2]} />
      <meshBasicMaterial color="black" />
    </mesh>
  )
}

function MovingLights() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    groupRef.current.rotation.y = elapsedTime * 0.2 // Velocidad de rotación
  })

  return (
    <group ref={groupRef}>
      {lights.map((light, index) => (
        <pointLight key={index} position={light.position} intensity={1} decay={2} distance={50} />
      ))}
    </group>
  )
}


export const MovingCube = () => {
  return (
    <Canvas>
      <ambientLight />
      <MovingLights />
      {images.map((img, index) => (
        <group key={index}>
          <FrameBehind position={img.position}  />
          <PlaneWithTexture position={img.position}  url={img.url} />
        </group>
      ))}
      {/* <OrbitControls /> */}
    </Canvas>
  )
}

