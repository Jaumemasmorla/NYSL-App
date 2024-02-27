import { useData } from "../firebase";

export const useMessages = (gameId) => {
    const [messages, loading, error] = useData(`/messages/${gameId}`);
    console.log("Messages:", messages);
    console.log("Loading:", loading);
    console.log("Error:", error);
    return { messages, loading, error };
  };
  
  