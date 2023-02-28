import { useContext } from 'react';
import { ChatContext } from '../../context';


export const UserItem = ({ user }: UserItemProps) => {

    const { changeReceiver, receiver } = useContext(ChatContext)

    const handleClick = (e: any) => {
        if (receiver === user.username) return;
        changeReceiver(user.username)
    }

    return (
        <div
            className={
                `card glass-container mb-1 shadow-lg 
                ${user.username === receiver ? 'bg-light opacity-25 text-dark' : ''}`
            }
            style={{ height: "4em" }}
            onClick={handleClick}
        >
            <span className="text-center my-auto">{user.username}</span>
        </div>
    )
}

type UserItemProps = {
    user: any
}