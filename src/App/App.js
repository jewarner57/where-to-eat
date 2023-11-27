import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import './App.css';
import IconDown from '../IconDown/IconDown';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils';

function App() {
  const LOCAL_STORAGE_KEY = 'nearby-place-names-for-spinner'
  const [labels, setLabels] = useState(['Loading'])
  const [rotation, setRotation] = useState(0)
  const location = '';
  const spinWheel = () => {
    const newRotation = rotation + Math.random() * 3000 + 1000
    setRotation(newRotation);
    
    const spin = ''
    const winner = ''
    const sliceSize = 360 / 7;
    const contender = (newRotation % 360) / sliceSize
    console.log(Math.floor(contender))
    console.log(labels[Math.floor(contender)])
  }

  useEffect(() => {
    if(loadFromLocalStorage(LOCAL_STORAGE_KEY)) {
      setLabels(loadFromLocalStorage(LOCAL_STORAGE_KEY).split(','));
      return
    }

    console.log('duplicate call test')

    // fetch the google maps places data
    const places = ['Subway', 'Fosters Freeze', 'McDonalds', 'Panera Bread', 'Happy Hound Diner', 'Jack in the Box', 'Starbucks'];
    
    // setLabels(places);
    // saveToLocalStorage(LOCAL_STORAGE_KEY, places)
  }, [])


  return (
    <div className="App">
      <IconDown />
      <Spinner rotation={rotation} spinWheel={spinWheel} labels={labels} ></Spinner>
    </div>
  );
}

export default App;
