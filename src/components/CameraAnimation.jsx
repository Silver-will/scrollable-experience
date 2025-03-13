import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import * as THREE from 'three'
import { useSwitchRef } from './Nintendo_switch'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const cameraTarget = new THREE.vector(0, 0, 0);

export default function CameraAnimation()
{
    const tl = gsap.timeline()

    const camera = useThree((state) => state.camera)

    const switchGroup = useSwitchRef();
    
    useFrame((state) => {
        switchGroup.current.rotation.z += 0.1;
      })
    

    return null;
}