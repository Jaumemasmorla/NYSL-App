import React from "react";
import { useData } from "../firebase";

export const Chat = ({ gameId }) => {
    const [messages, loading, error] = useData("/messages");

    if (loading) {
      return <div>Loading messages...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    let gameMessages = [];
    if (messages[gameId]) {
      gameMessages = Object.keys(messages[gameId]).map((messageId) => ({
        id: messageId,
        ...messages[gameId][messageId]
      }));
    }

    return (
      <div>
        <h2>Messages for Game: {gameId}</h2>
        <ul>
          {gameMessages.map((message) => (
            <li key={message.id}>
              <div>
                <strong>Author:</strong> {message.author}
              </div>
              <div>
                <strong>Message:</strong> {message.text}
              </div>
              <div>
                <strong>Timestamp:</strong>{" "}
                {new Date(message.timestamp).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};
