import React from 'react';
import { FiSend } from 'react-icons/fi';
import Button from '../../components/ui/button/Button';

export default function MessageInput({
  input,
  setInput,
  sendMessage,
}: {
  input: string;
  setInput: (v: string) => void;
  sendMessage: () => void;
}) {
  return (
    <div className="border-t border-stroke dark:border-strokedark p-4 flex items-center gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type a message"
        className="flex-1 px-4 py-2 rounded-md border border-stroke dark:border-strokedark dark:bg-form-input dark:text-white focus:outline-none"
      />
    

       <Button
                size="sm"
                variant="primary"
               
               onClick={sendMessage}
              >
               <FiSend size={18} color='white'/>
              </Button>
    </div>
  );
}
