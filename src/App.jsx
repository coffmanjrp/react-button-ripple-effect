import { useState } from 'react';
import './App.scss';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [left, setLeft] = useState('');
  const [top, setTop] = useState('');

  const handleClick = (e) => {
    setIsClicked(true);

    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    setLeft(xInside);
    setTop(yInside);

    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <div className="App">
      <button type="button" className="ripple" onClick={(e) => handleClick(e)}>
        Click Me
        {isClicked && <span className="circle" style={{ top, left }} />}
      </button>
    </div>
  );
}

export default App;
