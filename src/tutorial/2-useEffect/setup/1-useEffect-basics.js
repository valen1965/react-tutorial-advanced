import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call use effect');
    if (value >= 1 || value < 0) {
      document.title = `New messages(${value})`;
    } else {
      document.title = 'React App';
    }
  }, [value]);

  useEffect(() => {
    console.log('initial render');
  }, []);

  console.log('render component');
  return (
    <>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <button className='btn' onClick={() => setValue(value - 1)}>
        reduce
      </button>
      <h1>{value}</h1>
    </>
  );
};

export default UseEffectBasics;
