import { useState, useEffect } from 'react';

const Decrementer = () => {
  const [num, setNum] = useState(100);

  // uncomment the useEffect below
  useEffect(() => {
    const downCount = setInterval(function () {
      setNum((prevNum) => prevNum - 1);
    }, 1000);

    return () => {
      clearInterval(downCount);
    };
  }, []);

  return (
    <div>
      <h1>Countdown: {num}</h1>
    </div>
  );
};

//parent component
const Unmount = () => {
  const [dismount, setDismount] = useState(false);

  return (
    <div>
      <h1>Umount Component</h1>
      <button onClick={() => setDismount((prevMount) => !prevMount)}>
        {dismount ? 'Unmount Decrementer' : 'Mount Decrementer'}
      </button>
      {dismount && <Decrementer />}
    </div>
  );
};

export default Unmount;
