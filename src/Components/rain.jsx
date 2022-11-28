import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ToneMapping } from "three";

const Rain = () => {
    // This will be props for rain information by api
    // rainCount --> how much rain is falling
    // rainSpeed --> how fast the rain is falling

    // Pass in width, depth, and height of cloud

    const rainCount = 50;
    const rainSpeed = 0.5;

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
                (Math.random() * (1 + rainSpeed - 1) + 1) / 10,
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
        <instancedMesh ref={ref} args={[null, null, rainCount]}>
            <sphereBufferGeometry attach='geometry' />
            <meshStandardMaterial attach='material' color='blue' />
        </instancedMesh>
    )
}

export default Rain