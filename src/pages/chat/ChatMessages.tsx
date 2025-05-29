import React from 'react';

export interface Message {
  from: 'admin' | 'client';
  text: string;
  time: string;
}

export default function ChatMessages({ messages }: { messages: Message[] }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.from === 'admin' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
            msg.from === 'admin'
              ? 'bg-primary text-white rounded-br-none'
              : 'bg-[#F1F5F9] dark:bg-meta-4 dark:text-white rounded-bl-none'}`}>
            {msg.text}
            <div className="text-[10px] text-right mt-1 opacity-70">{msg.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
