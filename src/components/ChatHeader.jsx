import React from 'react';
import { assets } from '../assets/assets';

const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 flex items-center shadow-md">
    <div className="w-11 h-11 overflow-hidden rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center mr-4 border-2 border-white">
      
      <img src={assets.profile_pic} alt="" className='w-full h-full object-cover'/>
    </div>
    <div className="flex-1">
      <h1 className="font-dancing text-2xl font-bold flex items-center">Ex-gf 💔<span className="ml-1 animate-pulse">❤️</span></h1>
      <div className="flex items-center text-xs mt-1">
        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
        Online - Last seen just now
      </div>
    </div>
  </div>
  )
}

export default ChatHeader;