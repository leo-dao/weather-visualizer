import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ToneMapping } from "three";

const Rain = () => {
    // This will be props for rain information by api
    // rainCount --> how much rain is falling
    // rainSpeed [1, 2] --> how fast the rain is falling

    // Pass in width, depth, and height of cloud

    const { nodes, materials } = useGLTF('/assets/rain_droplet.glb');

    const rainCount = 200;
    const rainSpeed = 1;

    const ref = useRef(!null);

    const temp = new THREE.Object3D();


    const { positions, velocities } = useMemo(() => {
        let positions = [];
        let velocities = [];

        for (let i = 0; i < rainCount; i++) {

            // generating random position around cloud
            temp.position.set(
                Math.random() * 4 - 2,
                5 - Math.random(),
                Math.random() * 2 - 1
            );
            positions.push(temp.position.x, temp.position.y, temp.position.z);

            // generating random velocity for rain
            temp.velocity = new THREE.Vector3(
                0,
                (Math.random() * (rainSpeed * 2 - rainSpeed) + rainSpeed) / 15,
                0
            );
            velocities.push(temp.velocity.x, temp.velocity.y, temp.velocity.z);

            temp.scale.set(0.1, 0.1, 0.1);

        }
        return { positions, velocities };
    }, [rainCount, rainSpeed]);


    useFrame(() => {

        for (let i = 0; i < rainCount; i++) {

            temp.position.set(
                positions[i * 3],
                positions[i * 3 + 1] - velocities[i * 3 + 1],
                positions[i * 3 + 2]
            );

            if (temp.position.y < 0) {
                temp.position.y = 5;
            }

            positions[i * 3] = temp.position.x;
            positions[i * 3 + 1] = temp.position.y;
            positions[i * 3 + 2] = temp.position.z;


            temp.updateMatrix();
            ref.current.setMatrixAt(i, temp.matrix);
        }

        ref.current.instanceMatrix.needsUpdate = true;
    });


    return (
        <instancedMesh
            ref={ref}
            args={[nodes.Icosphere.geometry, nodes.Icosphere.material, rainCount]}
        >
            <meshStandardMaterial
                color='lightblue'
                transparent={true}
                opacity={0.7}
                metalness={0.8}
            />
        </instancedMesh>
    )
}

export default Rain