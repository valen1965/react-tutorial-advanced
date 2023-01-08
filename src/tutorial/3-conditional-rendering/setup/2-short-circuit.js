import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello people';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>value:{secondValue}</h2> */}
      <h1>{text || 'John Doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {/* {text ? text : <h1>there is no text</h1>} */}
      {isError ? (
        <p>there has been an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
