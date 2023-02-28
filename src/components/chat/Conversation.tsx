import { useContext, useEffect } from 'react';
import { AuthContext, ChatContext } from '../../context';
import { useGetConversation } from '../../hooks';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { socket } from '../../config/socket.io';
import { Message } from './Message';


export const Conversation = () => {

    const { receiver } = useContext(ChatContext)

    const { messages, isLoading, error, addMessage } = useGetConversation(receiver || "")

    socket.on('message', (message: any) => {
        addMessage(message)
    });


    return (
        isLoading ? <LoadingSpinner /> :
            <div className='mt-3'>
                {
                    !error && messages.map((message, index) => <Message key={index} message={message} />)
                }
            </div>
    )
}
