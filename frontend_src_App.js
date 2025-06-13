import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';

function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  if (!token) {
    return (
      <div>
        <Login setToken={setToken} setUsername={setUsername} />
        <Register />
      </div>
    );
  }
  return <Chat token={token} username={username} />;
}

export default App;