import { isEditable } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import url from './gitUsers.json';

// const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    setIsLoading(true);
    let user = url[99];
    if (user) {
      const { login } = user;
      setUser(login);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError(true);
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>There is an error</h2>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
