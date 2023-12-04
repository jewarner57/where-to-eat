import './WindowContainer.css';
import MenuBar from '../MenuBar/MenuBar';
import WindowBody from '../WindowBody/WindowBody';

function WindowContainer({ windowContent, menuBarContent, title }) {
  return (
    <div className="WindowContainer">
      <MenuBar title={title} children={menuBarContent} />
      <WindowBody children={windowContent} />
    </div>
  );
}

export default WindowContainer;

