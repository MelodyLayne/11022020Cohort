import { useState, useEffect } from 'react';

import './UseEffect.css';

const UseEffect = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   setNum(Math.floor(Math.random() * 13000));
  // }, [num]);

  useEffect(() => {
    console.log('UseEffect1 ran');
  }, []);

  useEffect(() => {
    console.log('UseEffect2 ran', toggleTwo);

    if (toggleTwo) {
      console.log('UseEffect2 functionality ran', toggleTwo);
    }
  }, [toggleTwo]);

  useEffect(() => {
    console.log('UseEffect3 ran', count);

    return () => {
      console.log('UseEffect3 cleanup ran', count);
    };
  }, [count]);

  return (
    <div>
      {console.log('rendered or re-rendered')}

      <h1>UseEffect Component</h1>
      <h1>{num}</h1>
      <button onClick={() => setToggleOne((prevState) => !prevState)}>
        Toggle 1
      </button>
      <button onClick={() => setToggleTwo((prevState) => !prevState)}>
        Toggle 2
      </button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        UpCount
      </button>
    </div>
  );
};
export default UseEffect;
