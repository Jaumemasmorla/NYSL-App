import React, { useState } from "react";

import { useMessages } from "./UseMessages";
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth"; 

export const MessageList = ({ gameId }) => {
  const { messages, loading, error } = useMessages(gameId);

  if (loading) return <div>Loading messages...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Messages for Game {gameId}</h2>
      {messages &&
        Object.entries(messages).map(([messageId, message]) => (
          <div key={messageId}>
            <p>
              {message.author}: {message.text}
            </p>
            <p>Timestamp: {new Date(message.timestamp).toLocaleString()}</p>
          </div>
        ))}
    </div>
  );
};

const ChatInput = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      onSubmit(message);
      setMessage("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        
        bottom: 0,
        left: 0,
        width: "35%",
        backgroundColor: "#f0f0f0",
        padding: "10px",
        borderTop: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        height: "50px",
      }}
    >
      <div className="input-group" style={{ flexGrow: 1 }}>
        <input
          type="text"
          className="form-control"
          placeholder="Type your message here..."
          value={message}
          onChange={handleChange}
          aria-label="Type your message here"
          aria-describedby="send-button"
        />
        <button className="btn btn-primary" type="submit" id="send-button">
          Post
        </button>
      </div>
    </form>
  );
};

export const Chat = () => {
  const gameIds = ["game-1", "game-2", "game-3"];
  const handleSubmitMessages = (message) => {
    const db = getDatabase();
    const newMessageRef = push(ref(db, "messages"));
    const messageId = newMessageRef.key;
    const timestamp = Date.now();

   
    const auth = getAuth();
    const authorEmail = auth.currentUser ? auth.currentUser.email : "unknown@example.com";

    const messageData = {
      author: authorEmail,
      text: message,
      timestamp: timestamp,
    };
    set(ref(db, `messages/${messageId}`), messageData);
  };

  return (
    <div>
      {gameIds.map((gameId) => (
        <MessageList key={gameId} gameId={gameId} />
      ))}
      <ChatInput onSubmit={handleSubmitMessages} />
    </div>
  );
};

