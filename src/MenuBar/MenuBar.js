import './MenuBar.css';

function MenuBar({children, title}) {
  return (
    <div className='menuBar'>
      <p>{title}</p>
      <div style={{ cursor: 'pointer' }} onClick={() => { }} >
        {children}
      </div>
    </div>
  );
}

export default MenuBar;