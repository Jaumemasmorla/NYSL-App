import React from "react";
import { useMessages } from "./UseMessages";

export const MessageList = ({ gameId }) => {
  const { messages, loading, error } = useMessages(gameId);

  if (loading) return <div>Loading messages...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Messages for Game {gameId}</h2>
      {messages && Object.entries(messages).map(([messageId, message]) => (
        <div key={messageId}>
          <p>{message.author}: {message.text}</p>
          <p>Timestamp: {new Date(message.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};
