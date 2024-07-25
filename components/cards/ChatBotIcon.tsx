import React from 'react';
import { MdChat } from "react-icons/md";
const ChatIcon: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4">
        <form action="https://hlolak-chatbot.vercel.app/">

      <button className="bg-white text-[#ab994e] p-4 rounded-full shadow-lg hover:ring-white/90 focus:outline-none focus:ring-2 focus:ring-white/90">
      <MdChat  />
      </button>
        </form>
    </div>
  );
};

export default ChatIcon;
