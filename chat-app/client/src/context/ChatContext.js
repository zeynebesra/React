import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const values = {
    messages,
    setMessages,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

//export default ChatContext;

export const useChat = () => useContext(ChatContext);
