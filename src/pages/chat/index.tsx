
import React, { useState } from 'react';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import AppLayout from '../../layout/AppLayout';
import ChatSidebar from './ChatSidebar';
import ChatHeader from './ChatHeader';
import ChatMessages, { Message } from './ChatMessages';
import MessageInput from './MessageInput';

const initialMessages : Message[] = [
  { from: 'client', text: 'I want to make an appointment tomorrow from 2:00 to 5:00pm?', time: '15 mins' },
  { from: 'admin', text: 'If don’t like something, I’ll stay away from it.', time: '2 hours ago' },
  { from: 'admin', text: 'They got there early, and got really good seats.', time: '2 hours ago' },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

   const [isOpen, setisOpen] = useState(false);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: 'admin', text: input, time: 'Just now' }]);
      setInput('');
    }
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Chat" />
      <div className="flex flex-col md:flex-row h-[calc(100vh-150px)] rounded-lg overflow-hidden shadow-lg  rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <ChatSidebar isOpen ={isOpen} setIsOpen={setisOpen}/>
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-between">
          <ChatHeader onMobileMenu={()=>setisOpen(!isOpen)}/>
          <ChatMessages messages={messages} />
          <MessageInput input={input} setInput={setInput} sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
}
