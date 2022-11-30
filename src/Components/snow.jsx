import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Droplets from "../utils/droplets";

const Snow = () => {

    return (
        <Droplets count={200} speed={0.8} asset={"/assets/rain_droplet.glb"} />
    );
};

export default Snow;