import Slice from '../Slice/Slice';
import './Spinner.css';

function Spinner({ rotation, spinWheel }) {
  const labels = ['McDonalds', 'Panera Bread', 'Happy Hound Diner', 'Jack in the Box', 'Starbucks']
  const totalSlices = labels.length;

  return (
    <div className="Spinner" style={{ transition: 'all 4s cubic-bezier(0.20, 0.1, 0.20, 1)', transform: `rotate(${rotation}deg)` }}>
      <div className='spin-button' onClick={() => spinWheel()} ></div>
      {labels.map((label, index) => {
        return <Slice totalSlices={totalSlices} sliceNumber={index} label={label}></Slice>
      })}
    </div>
  );
}

export default Spinner;
