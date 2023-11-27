import Slice from '../Slice/Slice';
import './Spinner.css';

function Spinner({ rotation, spinWheel, labels }) {
  const totalSlices = labels.length;

  return (
    <div className="Spinner" style={{ transition: 'all 4s cubic-bezier(0.20, 0.1, 0.20, 1)', transform: `rotate(${rotation}deg)` }}>
      <div className='spin-button' onClick={() => spinWheel()} ></div>
      {labels.map((label, index) => {
        return <Slice key={`${label}-${index}`} totalSlices={totalSlices} sliceNumber={index} label={label}></Slice>
      })}
    </div>
  );
}

export default Spinner;
