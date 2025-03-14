/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/nintendo_switch/nintendo_switch.glb 
*/

import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Switch(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/nintendo_switch/nintendo_switch.glb')

  useFrame((state, delta) => {
    if(group.current) group.current.rotation.y += delta * 0.1;
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane002_0.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Plane002_3.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Plane002_4.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.Plane_0.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.Plane001_0.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.009']} />
    </group>
  )
}

useGLTF.preload('/nintendo_switch.glb')
