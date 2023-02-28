import { useContext } from 'react';
import { AuthContext } from '../../context';


export const Message = ({ message }: MessageProps) => {

    const { user } = useContext(AuthContext)

    return (
        <div className='col-lg-4 card mb-3 p-3 opacity-75 glass-container'>
            <h5 className='d-flex'>
                {message['fromUser']['username'] === user?.['username'] ? 'You' : message['fromUser']['username']}
                <span className='text-muted ms-auto' style={{fontSize: ".8em"}} >At testing</span>
            </h5>
            
            <p>{message['message']}</p>
        </div>
    )
}

type MessageProps = {
    message: any
}