import { useForm } from 'react-hook-form';
import { socket } from '../../config/socket.io';
import { useContext } from 'react';
import { ChatContext } from '../../context';


export const MessageInput = () => {

    const { register, handleSubmit, reset } = useForm()

    const { sendMessage } = useContext(ChatContext)

    const onSubmit = (data: any) => {
        sendMessage(data.message).catch((err: any) => console.log(err))

        // clear input
        reset()
    }

    return (
        <div className="mt-auto mb-1">
            <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-10 me-auto">
                    <input
                        type="text"
                        className="form-control bg-transparent text-light"
                        placeholder="Type your message"
                        {...register("message", { required: "Message is required" })} />
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-info w-50 ms-3" type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}
