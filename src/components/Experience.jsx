import CameraRig from './CameraRig';
import { Switch } from './Nintendo_switch'
import { PS4 } from './PS4';
import { XBOX} from './XBOX'
import { Particles } from './Particles'
import { OrbitControls, Environment,Lightformer,Text, Center,AccumulativeShadows,RandomizedLight, Float, Billboard } from "@react-three/drei";
import {
    EffectComposer,
    Bloom,
    DepthOfField,
    SMAA,
    HueSaturation
 } from '@react-three/postprocessing';
import { Suspense } from 'react';
import CameraAnimation from './CameraAnimation';
export default function () {
    return (
        <>
            <Suspense>
            <CameraRig>
            <Float rotation={[0, -Math.PI / 2.5, 0]} floatIntensity={4} rotationIntensity={4}>
                    <Switch />
                    </Float>
                    <PS4 />
                    <XBOX/>
                <Environment preset="city" environmentIntensity={3}>
                <Lightformer form="rect" intensity={1} position={[2, 3, 3]} scale={5} />
                <Lightformer form="rect" intensity={2} position={[-2, 2, -4]} scale={5} />
            </Environment>
                <EffectComposer multisampling={2}>
                    <SMAA/>
                    <Bloom mimapBlur intensity={0.5} levels={5} />
                    <HueSaturation saturation={0.3} hue={0.5} />
            </EffectComposer>
            <Particles particlesCount={200} />
            <Billboard>
            <Text
                color='white'
                rotation={[0, 0, 0]} position={[0, 1.5, -3]}>Refurbished and Ready
            </Text>
            </Billboard>
                </CameraRig>
                <CameraAnimation/>
            </Suspense>
        </>
    )
}