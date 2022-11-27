import React from "react";
import { useGLTF } from "@react-three/drei";

const Cloud = () => {


    const { nodes, materials } = useGLTF('/assets/cloud.glb');

    console.log(nodes, materials);

    return (
        <group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                position={[0, 5, 0]}
            >
            </mesh>
        </group>
    )
};

export default Cloud;