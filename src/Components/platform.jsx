import React from "react";


const Platform = () => {

    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
            <circleBufferGeometry attach='geometry' args={[30, 30]} />
            <meshStandardMaterial attach='material' color='hotpink' />
        </mesh>
    )
};

export default Platform;

