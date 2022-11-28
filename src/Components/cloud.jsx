import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Cloud = () => {


    const { nodes, materials } = useGLTF('/assets/cloud.glb');


    return (
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            position={[0, 5, 0]}
        >
        </mesh>
    )
};

export default Cloud;