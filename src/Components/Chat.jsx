import React from 'react';

export const ChatScreen = () => {
  
  const messages = [
    { id: 1, user: 'User1', text: 'Hello there!', time: '10:00 AM' },
    { id: 2, user: 'User2', text: 'Hi! How can I help you?', time: '10:05 AM' },
    { id: 3, user: 'User1', text: 'I have a question about the game.', time: '10:10 AM' },
    
  ];

  return (
    <div className="chat-screen">
      <div className="message-list">
        {messages.map(message => (
          <div key={message.id} className="message">
            <div className="message-info">
              <span className="message-user">{message.user}</span>
              <span className="message-time">{message.time}</span>
            </div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};


