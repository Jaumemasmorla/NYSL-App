import { useData } from "../firebase";

export const useMessages = (gameId) => {
    const [messages, loading, error] = useData(`/messages/${gameId}`);
   
    return { messages, loading, error };
  };
  
  