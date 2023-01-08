import React, { useState, useEffect } from 'react';
import url from './gitUsers.json';

// const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = url;
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}></a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UseEffectFetchData;
