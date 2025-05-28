import React from 'react';
import { FiPhone, FiVideo, FiMoreVertical, FiMenu } from 'react-icons/fi';

export default function ChatHeader({ onMobileMenu }: { onMobileMenu: () => void }) {
  return (
    <div className="border-b border-stroke dark:border-strokedark p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/images/user/user-02.jpg" alt="user" className="w-10 h-10 rounded-full" />
        <div>
          <h4 className="font-semibold text-black dark:text-white">Lindsey Curtis</h4>
          <span className="text-xs text-green-500">Online</span>
        </div>
      </div>
      <div className="flex gap-4 text-gray-400 dark:text-gray-300">
        <FiPhone className="cursor-pointer" />
        <FiVideo className="cursor-pointer" />
        <FiMoreVertical className="cursor-pointer" />
        <div className="md:hidden">
          <FiMenu className="cursor-pointer" onClick={onMobileMenu} />
        </div>
      </div>
    </div>
  );
}
