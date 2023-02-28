import { createContext } from 'react';

export const ChatContext = createContext({
    receiver: null,
    changeReceiver: (username: string) => {},
    sendMessage: async(message: string) => {},
});