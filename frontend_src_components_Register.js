import React, { useState } from 'react';
import { register } from '../api';

function Register() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(username, password);
    alert(res.msg || 'Registration failed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input value={username} onChange={e => setUser(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={e => setPass(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;