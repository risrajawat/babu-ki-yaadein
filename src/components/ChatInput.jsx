import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex items-center p-4 bg-[#282846cc] border-t border-white/10">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 p-3 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
        placeholder="Message Pyaru..."
      />
      <button
        onClick={handleSend}
        className="w-12 h-12 ml-4 cursor-pointer rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition"
      >
        <IoIosSend className='text-2xl'/>
      </button>
    </div>
  );
};

export default ChatInput;