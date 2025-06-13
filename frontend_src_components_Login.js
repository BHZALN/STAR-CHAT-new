import React, { useState } from 'react';
import { login } from '../api';

function Login({ setToken, setUsername }) {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(username, password);
    if (res.token) {
      setToken(res.token);
      setUsername(res.username);
    } else {
      alert(res.msg || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={username} onChange={e => setUser(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={e => setPass(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;