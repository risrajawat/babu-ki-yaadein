import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import FloatingHearts from "./components/FloatingHearts";
import { chattingWithGemini } from "./utils/gemini.js";

const App = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey Babu! 😊 Kaise ho? Kya soch rahe ho? 💭",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (userText) => {
    if (!userText) return;
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prev) => [...prev, { sender: "user", text: userText, time }]);
    setIsTyping(true);
    let botText = "";
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "", time: "", streaming: true },
    ]);

    const stream = await chattingWithGemini(userText);

    for await (const chunk of stream) {
      botText += chunk;
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1 ? { ...msg, text: botText } : msg
        )
      );
    }

    setMessages((prev) =>
      prev.map((msg, idx) =>
        idx === prev.length - 1
          ? {
              ...msg,
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              streaming: false,
            }
          : msg
      )
    );
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0d1a] to-[#1a1a2e] text-white font-poppins relative overflow-hidden">
      <FloatingHearts />
      <div className="flex flex-col w-full max-w-4xl h-screen bg-opacity-70 backdrop-blur-md shadow-2xl border border-white/10">
        <ChatHeader />
        <div className="bg-gradient-to-r from-pink-400/30 to-purple-400/30 text-sm text-center py-2 border-b border-white/10">
          <i className="fas fa-heart"></i> Chat with your Ex-gf - Share your
          thoughts with babu ki yaadein <i className="fas fa-heart"></i>
        </div>
        <div
          ref={chatRef}
          className="flex-1 p-4 space-y-4 overflow-y-auto"
          id="chatMessages"
        >
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              sender={msg.sender}
              text={msg.text}
              time={msg.time}
            />
          ))}
          {isTyping && <ChatMessage sender="bot" typing />}
        </div>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default App;
