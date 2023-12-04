import { useState } from 'react';
import { LOCAL_STORAGE_KEY } from '../utils';
import './SettingsContainer.css';
import IconReload from '../IconReload/IconReload';

function SettingsContainer({ setSearchParams, searchParams }) {
  const [location, setLocation] = useState(searchParams?.location || "New York City")
  const [searchRadius, setSearchRadius] = useState(searchParams?.radius || "2000")
  const [pieSliceCount, setPieSliceCount] = useState(searchParams?.limit || "10")
  const [priceMax, setPriceMax] = useState(searchParams?.price ? searchParams?.price.split(',').length : 4);

  const updateParams = (e, params) => {
    e.preventDefault()
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setSearchParams(params)
  }

  const togglePriceMax = (e) => {
    e.preventDefault()
    if(priceMax >= 4) {
      setPriceMax(1)
      return
    }
    setPriceMax(priceMax + 1)
  }

  const createPriceString = (number) => {
    return Array.from({ length: number }, (_, index) => index + 1).join(',')
  }

  return (
    <div className="SettingsContainer">
      <form onSubmit={(e) => updateParams(e, {
        location: location,
        radius: searchRadius,
        limit: pieSliceCount,
        price: createPriceString(priceMax)
      })}>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }} />
        </label>
        <label>
          Search Radius (Meters):
          <input type="number" value={searchRadius} onChange={(e) => { setSearchRadius(e.target.value) }} max="40000" />
        </label>
        <label>
          Pie Slice Count:
          <input type="number" value={pieSliceCount} onChange={(e) => { setPieSliceCount(e.target.value) }} max="50" />
        </label>
        <label>
          Max Price:
          <button className="priceButton" onClick={(e) => togglePriceMax(e)}>
            {Array.from({length: priceMax }, () => '$').join('')}
          </button>
        </label>
        <button type="submit"> <IconReload /> Update</button>
      </form>
    </div>
  );
}

export default SettingsContainer;

