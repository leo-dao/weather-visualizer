import React from "react";
import { FontLoader, TextGeometry } from "three-stdlib";
import { extend } from "@react-three/fiber";
import poppins from '../utils/Poppins_Regular.json';

extend({ TextGeometry });

const Text = (props) => {

    const font = new FontLoader().parse(poppins);

    return (
        <mesh position={props.position}>
            <textGeometry args={[props.font, {
                font: font,
                size: 5,
                height: 0.3
            }
            ]}
            />
            <meshStandardMaterial attach='material' color={'black'} />
        </mesh>
    )
};

export default Text;