import './MenuBar.css';
import IconSettings from '../IconSettings/IconSettings';

function MenuBar() {
  return (
    <div className='menuBar'>
      <p>Where to eat?</p>
      <div style={{ cursor: 'pointer' }} onClick={() => { }} >
        <IconSettings />
      </div>
    </div>
  );
}

export default MenuBar;