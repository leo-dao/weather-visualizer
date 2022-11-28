import { Canvas } from '@react-three/fiber';
import Search from './Components/search';
import Platform from './Components/platform';
import Cloud from './Components/cloud';
import Rain from './Components/rain';
// import grid
import { OrbitControls } from 'three-stdlib/controls/OrbitControls'
import { Suspense, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import './App.css';
import { GridHelper } from 'three';


function App() {

  const CameraController = () => {
    const { camera, gl } = useThree();

    // default position
    camera.position.set(0, 10, 20);

    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 5;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;
  };

  const Grid = () => {
    const { scene } = useThree();
    useEffect(() => {
      const grid = new GridHelper(100, 100, 0x000000, 0x000000);
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      scene.add(grid);
    }, [scene]);
    return null;
  };


  return (
    <div className="App">
      <Search />
      <Canvas id='canvas'>
        <Suspense fallback={null}>
          <CameraController />
          <spotLight position={[0, 100, 0]} angle={Math.PI} penumbra={0} />
          <Cloud />
          <Rain />
          <Platform />
          <Grid />
        </Suspense>
      </Canvas>


    </div>


  );
}

export default App;
