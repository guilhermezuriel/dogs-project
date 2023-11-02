import React from 'react';

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={{ username }}
        onChange={({ target }) => setUsername(target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={{ password }}
        onChange={({ target }) => setPassword(target.value)}
      ></input>
    </form>
  );
};

export default TokenPost;
