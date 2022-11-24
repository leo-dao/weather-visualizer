import { Canvas } from '@react-three/fiber';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './App.css';

function App() {

  let data = require('./worldcities.json');

  return (
    <div className="App">
      <Canvas id='Canvas'>

      </Canvas>
      <ReactSearchAutocomplete
        id="search"
        items={data}
      />
    </div>
  );
}

export default App;
