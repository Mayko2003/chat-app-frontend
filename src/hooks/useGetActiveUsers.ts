import { useEffect, useState } from 'react';
import { UserService } from '../services';

export const useGetActiveUsers = () => {

    const [state, setState] = useState({
        users: [],
        isLoading: true,
        error: null,
    })



    const getUsers = async () => {
        const res = await UserService.getActiveUsers();

        if (res.status === 200) return res.data;

        throw new Error(res.message);

    };

    useEffect(() => {

        getUsers().then((users) => {
            setState({
                ...state,
                users,
                isLoading: false,
            })
        }).catch((error) => {
            setState({
                ...state,
                error,
                isLoading: false,
            })
        })

    }, [])


    return {
        ...state,
    }
}
