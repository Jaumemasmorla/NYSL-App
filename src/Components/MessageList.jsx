import React, { useState } from "react";
import { useMessages } from "./UseMessages";
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth"; 


export const MessageList = ({ gameId, onClick, selectedGameId }) => {
  const { messages, loading, error } = useMessages(gameId);

  if (loading) return <div>Loading messages...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Messages for Game {gameId}</h2>
      <button onClick={() => onClick(gameId)}>View Messages</button>
      {selectedGameId === gameId &&
        messages &&
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export const Chat = () => {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const gameIds = ["game-1", "game-2", "game-3"];

  const handleSelectGame = (gameId) => {
    setSelectedGameId(gameId);
  };

  const handleSubmitMessages = (message) => {
   
    const db = getDatabase();
    const newMessageRef = push(ref(db, `messages/${selectedGameId}`));
    const messageId = newMessageRef.key;
    const timestamp = Date.now();
   
    const auth = getAuth();
    const authorEmail = auth.currentUser ? auth.currentUser.email : "unknown@example.com";

    const messageData = {
      author: authorEmail,
      text: message,
      timestamp: timestamp,
    };
    set(ref(db, `messages/${selectedGameId}/${messageId}`), messageData);
  };

  return (
    <div>
      {gameIds.map((gameId) => (
        <div key={gameId}>
          <MessageList
            gameId={gameId}
            onClick={handleSelectGame}
            selectedGameId={selectedGameId}
          />
          {selectedGameId === gameId && (
            <ChatInput onSubmit={handleSubmitMessages} />
          )}
        </div>
      ))}
    </div>
  );
};