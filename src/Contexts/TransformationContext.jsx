import { createContext, useContext, useState } from 'react';
import * as THREE from 'three'

const TransformationContext = createContext();

export const ConfiguratorProvider = ({ children }) => { 
    const [switchPosition, setSwitchPosition] = useState(THREE.Vector3(0, 0, 0));
    const [PS4Position, setPs4Position] = useState(THREE.Vector3(0, -5, 0));
    const [XBOXPosition, setXBOXPosition] = useState(THREE.Vector3(0, -10, 0));

    return <ConfiguratorContext.Provider
    value={{
        switchPosition,
        setSwitchPosition,
        PS4Position,
        setPs4Position,
        XBOXPosition,
        setXBOXPosition,
}}>
    {children}
</ConfiguratorContext.Provider>
}


export const useTransformation = () => {
    return useContext(TransformationContext);
}