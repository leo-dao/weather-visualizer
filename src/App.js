import { Canvas } from '@react-three/fiber';
import Search from './Components/Search';
import Platform from './Components/Platform';
import Cloud from './Components/Cloud';
import { OrbitControls } from 'three-stdlib/controls/OrbitControls'
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import './App.css';


function App() {

  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;
  };

  return (
    <div className="App">
      <Search />
      <Canvas id='canvas'>
        <CameraController />
        <spotLight position={[0, 100, 0]} angle={Math.PI} penumbra={0} />
        <Cloud />
        <Platform />
      </Canvas>


    </div>


  );
}

export default App;
