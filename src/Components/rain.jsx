import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Droplets from "../utils/droplets";

const Rain = () => {

    return (
        <Droplets count={530} speed={1} asset={"/assets/rain_droplet.glb"} />
    );
};

export default Rain;