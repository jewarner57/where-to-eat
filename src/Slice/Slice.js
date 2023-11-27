import './Slice.css';

function Slice(props) {
  const {totalSlices, sliceNumber, label} = props;

  const sliceWidth = 100 / totalSlices;
  const sliceStart = 25 - sliceWidth / 2;
  const sliceEnd = 25 + sliceWidth / 2;

  const sliceRotation = 360 / totalSlices * (sliceNumber - 1)
  const color = `hsl(${360 / (sliceNumber + 1)}, 70%, 50%)`;

  return (
    <div className="slice" style={{
      transform: `rotate(${sliceRotation}deg)`,
      background: `conic-gradient(
        transparent 0% ${sliceStart}%,
        ${color} ${sliceStart}% ${sliceEnd}%,
        transparent ${sliceEnd}% 100%
      )` }}>
      <p style={{ marginRight: '20px', userSelect: 'none' }} >{label}</p>
    </div>
  );
}

export default Slice;
