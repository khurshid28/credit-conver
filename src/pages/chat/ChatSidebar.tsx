import React from 'react';

const users = [
  { name: 'Kaiya George', role: 'Project Manager', time: '15 mins', avatar: '/images/user/user-01.jpg' },
  { name: 'Lindsey Curtis', role: 'Designer', time: '30 mins', avatar: '/images/user/user-02.jpg' },
  { name: 'Zain Geidt', role: 'Content Writer', time: '45 mins', avatar: '/images/user/user-03.jpg' },
];

export default function ChatSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
  return (
    <div
      className={`fixed md:static top-0 left-0 z-50 h-full w-64 md:w-1/3 lg:w-1/4 bg-white dark:bg-boxdark border-r border-stroke dark:border-strokedark shadow-lg transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-lg font-semibold text-black dark:text-white">Chats</h2>
        <button onClick={() => setIsOpen(false)}>
          <span className="text-xl text-black dark:text-white">×</span>
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-md border border-stroke dark:border-strokedark dark:bg-form-input dark:text-white"
        />
        <div className="mt-4 space-y-4">
          {users.map((user, i) => (
            <div key={i} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-meta-4 p-2 rounded-md">
              <img src={user.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
              <div>
                <h4 className="text-sm font-semibold text-black dark:text-white">{user.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user.role}</p>
              </div>
              <span className="ml-auto text-xs text-gray-400">{user.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
