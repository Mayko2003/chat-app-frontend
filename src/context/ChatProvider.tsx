import { useState } from 'react';
import { ChatContext } from './';
import { MessageService } from '../services';


export const ChatProvider = ({ children }: ChatProviderProps) => {

    const [receiver, setReceiver] = useState(null)


    const changeReceiver = (username: any) => {
        setReceiver(username)
    }

    const sendMessage = async (message: any) => {
        if (!receiver) return;

        const res = await MessageService.sendMessage(receiver, message)

        if (res.status !== 200) throw new Error(res.message)

    }


    return (
        <ChatContext.Provider value={{ receiver, changeReceiver, sendMessage }}>
            {children}
        </ChatContext.Provider>
    )
}

type ChatProviderProps = {
    children: React.ReactNode
}
