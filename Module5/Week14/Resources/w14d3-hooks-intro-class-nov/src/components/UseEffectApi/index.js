import { useState, useEffect } from 'react';

const UseEffectApi = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    // When you learn Redux, you will be dispatching a function that calls your ExpressJS api here
    const url = `https://randomuser.me/api/?results=10`;
    const call = async () => {
      const res = await fetch(url);
      const data = await res.json();
      await setInfo(data.results);
    };
    call();
  }, []);

  return (
    <div>
      <h1>Info:</h1>
      {info.map((item) => (
        <p>{item.email}</p>
      ))}
    </div>
  );
};
export default UseEffectApi;
