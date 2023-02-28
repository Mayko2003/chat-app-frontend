import { MessageService } from "../services"
import { useState, useEffect } from 'react';

export const useGetConversation = (username: string) => {

    const [state, setState] = useState({
        messages: new Array(),
        isLoading: false,
        error: null
    })


    const getConversation = async () => {
        const res = await MessageService.getConversation(username);

        if (res.status === 200) return res.data;
        throw new Error(res.message);
    }

    const addMessage = (message: any) => {
        setState({
            ...state,
            messages: [...state.messages, message]
        })
    }

    useEffect(() => {

        getConversation().then((messages) => {
            setState({
                ...state,
                messages,
                isLoading: false
            })
        }).catch((error) => {
            setState({
                ...state,
                error,
                isLoading: false
            })
        })

    }, [username])


    return {
        ...state,
        addMessage
    }
}