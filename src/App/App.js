import { useState } from 'react';
import WindowContainer from '../WindowContainer/WindowContainer';
import SpinnerContainer from '../SpinnerContainer/SpinnerContainer'
import './App.css';
import SettingsContainer from '../SettingsContainer/SettingsContainer';

function App() {
  const [searchParams, setSearchParams] = useState({});

  return (
    <div className="App">
      <div className="AppPanels">
        <WindowContainer title={'Where to eat?'} windowContent={<SpinnerContainer settingsParams={searchParams} />} />
        <WindowContainer 
          title={'Settings'} 
          windowContent={
            <SettingsContainer setSearchParams={setSearchParams} />
          } />
      </div>
    </div>
  );
}

export default App;


// TODO
// show a smaller window to the right with the settings and another one to the left with the current winner
// Show a popup of the winning restaurant's details

