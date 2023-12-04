import Slice from '../Slice/Slice';
import './Spinner.css';

function Spinner({ rotation, spinWheel, labels, loading }) {
  const sections = loading ? Array(50).join(".").split(".") : labels;
  const totalSlices = sections.length;

  return (
    <div className="Spinner" 
      style={{ 
        transition: 'all 8s cubic-bezier(0.10, 1, 0.10, 1)', 
        transform: `rotate(${rotation}deg)`,
        animation: loading ? `loadingSpin 4s linear infinite` : 'none',
      }}
    >
      <div className='spin-button' onClick={() => spinWheel()} ></div>
      {sections.map((label, index) => {
        return <Slice key={`${label}-${index}`} totalSlices={totalSlices} sliceNumber={index} label={label}></Slice>
      })}
    </div>
  );
}

export default Spinner;
