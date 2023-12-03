import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import './App.css';
import IconDown from '../IconDown/IconDown';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils';

function App() {
  const LOCAL_STORAGE_KEY = 'nearby-place-names-for-spinner'
  const [labels, setLabels] = useState(['Loading'])
  const [rotation, setRotation] = useState(0)
  const [sliceCount, setSliceCount] = useState(20);
  const spinWheel = () => {
    const newRotation = rotation + Math.random() * 3000 + 1000
    setRotation(newRotation);
    
    const sliceSize = 360 / sliceCount;
    console.log(sliceSize)
    const contender = ((newRotation*-1) % 360) / sliceSize
    console.log(Math.floor(Math.abs(contender)))
    console.log(labels[Math.floor(Math.abs(contender))])

    // rotation / sliceSize
  }

  useEffect(() => {
    if(loadFromLocalStorage(LOCAL_STORAGE_KEY)) {
      setLabels(loadFromLocalStorage(LOCAL_STORAGE_KEY).split(','));
      return
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    };

    const params = {
      term: 'restaurant',
      location: 'Los Gatos',
      radius: 5000,
      limit: 20,
    };

    // fetch nearby restaurants from yelp api
    const url = new URL('https://corsproxy.io/?https://api.yelp.com/v3/businesses/search?');
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        const places = response?.businesses || []
        const labels = places.map((place) => {
          return place?.name
        })
        setLabels(labels);
        saveToLocalStorage(LOCAL_STORAGE_KEY, labels)
      })
      .catch(err => console.error(err));
  }, [])


  return (
    <div className="App">
      <IconDown />
      <Spinner rotation={rotation * -1} spinWheel={spinWheel} labels={labels} ></Spinner>
    </div>
  );
}

export default App;
