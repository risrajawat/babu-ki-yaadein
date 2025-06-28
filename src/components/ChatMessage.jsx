import React from "react";

const ChatMessage = ({ sender, text, time, typing, streaming }) => {
  if (typing || streaming) {
    return (
      <div className="flex justify-start">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-2xl max-w-xs animate-pulse">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    );
  }

  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[40%] p-4 rounded-[25px] relative leading-relaxed shadow-md text-sm ${
          sender === "user"
            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white self-end rounded-br-md"
            : "bg-gradient-to-br from-pink-400 to-pink-500 text-white self-start rounded-bl-md"
        }`}
      >
        {sender === "bot" && (
          <span className="absolute -top-3 -left-3 text-lg opacity-30">❣️</span>
        )}
        <div>{text}</div>
        <div className="text-right text-xs mt-1 opacity-70">{time}</div>
        {sender === "bot" && (
          <span className="absolute -bottom-3 -right-3 text-lg opacity-20">
            💖
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
