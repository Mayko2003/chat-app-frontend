import { useContext } from 'react';
import { ChatContext } from '../context';
import { Header, ListUsers, MessageInput, Conversation } from '../components';


export const ChatPage = () => {

    const { receiver } = useContext(ChatContext)

    return (
        <>
            <Header />
            <div className='d-lg-flex mt-1 h-100'>
                <div className='col-lg-2 d-flex'>
                    <ListUsers />
                    <div className='d-none d-lg-block vr ms-auto me-2'></div>
                </div>
                <div className='col-lg-10 d-flex flex-column'>
                    {receiver && <Conversation />}
                    <MessageInput />
                </div>
            </div>
        </>
    )
}
