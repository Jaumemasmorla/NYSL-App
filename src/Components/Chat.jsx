import React from 'react';

export const Chat = () => {
  // Hardcoded messages for demonstration
  const messages = [
    { author: 'User1', text: 'Hello!', timestamp: new Date().toLocaleString() },
    { author: 'User2', text: 'Hi there!', timestamp: new Date().toLocaleString() },
    { author: 'User1', text: 'How are you?', timestamp: new Date().toLocaleString() }
  ];

  return (
    <div>
      <h2>Chat</h2>
      {messages.map((message, index) => (
        <div key={index}>
          <p>{message.author}: {message.text}</p>
          <p>Timestamp: {message.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;
