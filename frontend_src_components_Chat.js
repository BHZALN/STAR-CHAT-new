import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../api';

function Chat({ token, username }) {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (token) {
      getMessages(token).then(setMessages);
    }
  }, [token]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!content) return;
    await sendMessage(content, token);
    setContent('');
    getMessages(token).then(setMessages);
  };

  return (
    <div>
      <h2>Star Chat</h2>
      <div>
        {messages.map((m, i) => (
          <div key={i}><b>{m.sender?.username || 'Anon'}</b>: {m.content}</div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <input value={content} onChange={e => setContent(e.target.value)} placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;