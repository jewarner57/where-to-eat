import './App.css';
import SpinnerContainer from '../SpinnerContainer/SpinnerContainer';
import MenuBar from '../MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <div>
        <MenuBar /> 
        <SpinnerContainer />
      </div>
    </div>
  );
}

export default App;


// TODO
// Show a popup of the winning restaurant's details
// Allow user to control, location, cost, max-locations, radius
