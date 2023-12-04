import { useState } from 'react';
import WindowContainer from '../WindowContainer/WindowContainer';
import SpinnerContainer from '../SpinnerContainer/SpinnerContainer'
import './App.css';
import SettingsContainer from '../SettingsContainer/SettingsContainer';
import { loadFromLocalStorage, LOCAL_STORAGE_KEY } from '../utils';

function App() {
  const previousSettings = loadFromLocalStorage(LOCAL_STORAGE_KEY)?.params;
  const [searchParams, setSearchParams] = useState(previousSettings);

  return (
    <div className="App">
      <div className="AppPanels">
        <WindowContainer title={'Where to eat?'} windowContent={<SpinnerContainer settingsParams={searchParams} setSettingsParams={setSearchParams} />} />
        <WindowContainer 
          title={'Settings'} 
          windowContent={
            <SettingsContainer setSearchParams={setSearchParams} searchParams={searchParams} />
          } />
      </div>
    </div>
  );
}

export default App;


// TODO
// show a smaller window to the right with the settings and another one to the left with the current winner
// Show a popup of the winning restaurant's details

