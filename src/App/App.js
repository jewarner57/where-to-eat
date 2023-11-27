import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import './App.css';
import IconDown from '../IconDown/IconDown';

function App() {
  const [rotation, setRotation] = useState(0)
  const spinWheel = () => {
    setRotation(rotation + Math.random()*3000 + 500);
    console.log(rotation)
  }

  return (
    <div className="App">
      <IconDown />
      <Spinner rotation={rotation} spinWheel={spinWheel} ></Spinner>
    </div>
  );
}

export default App;
