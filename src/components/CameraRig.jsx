import { easing } from 'maath'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CameraRig({ children }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    easing.damp3(
      groupRef.current.rotation,
      [
        (-state.pointer.y * state.viewport.height) / 128,
        (state.pointer.x * state.viewport.width) / 128,
        0
      ],
      0.5,
      delta
    )
  })
  

  return <group ref={groupRef}>{children}</group>
}
