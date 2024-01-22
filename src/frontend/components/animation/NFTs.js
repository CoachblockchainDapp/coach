import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useTexture, shaderMaterial } from "@react-three/drei"

export const ImageFadeMaterial = shaderMaterial(
    {
        effectFactor: 1.2,
        dispFactor: 0,
        tex: undefined,
        tex2: undefined,
        disp: undefined
    },
    ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
    ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
)

extend({ ImageFadeMaterial })

const frameMaterialGold = new THREE.MeshStandardMaterial({
    color: 0xe6b566, // Color dorado
    metalness: 1, // Aumenta la sensación de metal
    roughness: 0.25, // Controla la suavidad del brillo del material
});



function FadingImage() {
    const ref = useRef()
    const [texture1, texture2, dispTexture] = useTexture(["https://raw.githubusercontent.com/coachblockchain/Images/main/10268.png", "https://raw.githubusercontent.com/coachblockchain/Images/main/10298.png", "https://raw.githubusercontent.com/coachblockchain/Images/main/10134.png"])
    const [hovered, setHover] = useState(false)
    useFrame(() => {
        ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075)
    })
    return (
        <group>
        {/* Fondo negro */}
        <mesh>
          <planeGeometry args={[2.4, 2.4]} />
          <meshStandardMaterial attach="material" color={0x000000} side={THREE.BackSide} />
        </mesh>
      
        {/* Marco dorado */}
        <mesh>
          <planeGeometry args={[2.2, 2.2]} />
          <meshStandardMaterial attach="material" color={0xffffff} {...frameMaterialGold} side={THREE.BackSide} />
        </mesh>
      
        {/* Plano con imagen */}
        <mesh onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
          <planeGeometry args={[1.8, 1.8]} />
      
          <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
        </mesh>
      </group>
      
    )
}

// eslint-disable-next-line no-undef
export const NFTs = () => {

return (
 
        <Canvas camera={{ position: [0, 0, 0], fov: 50 }}>
            <FadingImage />
        </Canvas>
   
)
}
