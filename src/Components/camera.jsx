import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three-stdlib";

const Camera = () => {

    const CameraController = () => {
        const { camera, gl } = useThree();

        // default position
        camera.position.set(0, 10, 20);

        useEffect(() => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 5;
            controls.maxDistance = 40;
            return () => {
                controls.dispose();
            };
        }, [camera, gl]);
        return null;
    };

    return (
        <CameraController />
    )

};

export default Camera;