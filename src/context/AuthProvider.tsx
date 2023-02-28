import { AuthService, UserService } from "../services"
import { AuthContext } from "./AuthContext"
import { useState } from 'react';
import { socket } from "../config/socket.io";
import { MyChatAPI } from "../api";


export const AuthProvider = ({ children }: AuthContextType) => {

    const [token, setToken] = useState('')
    const [user, setUser] = useState(null)

    const login = async (username: string, password: string) => {

        const res = await AuthService.login(username, password)

        if (res.status === 200) {
            const { token, user } = res.data;

            localStorage.setItem('token', token);
            setToken(token);
            setUser(user);

            socket.emit('login', user.username);

            MyChatAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
        }
        else throw new Error(res.message);
    }

    const logout = () => {
        localStorage.removeItem('token');

        socket.emit('logout', user?.['username']);

        setToken('');
        setUser(null);

    }

    const register = async (username: string, password: string) => {

        const res = await UserService.createUser({ username, password, id: null })

        if (res.status !== 201) {
            throw new Error(res.message);
        }
    }

    const checkAuth = async () => {

        const res = await AuthService.getUser();

        if (res.status === 200) {
            const user = res.data;
            setUser(user);

            socket.emit('login', user.username);
        }
        else {
            logout();
        }

    }


    return (
        <AuthContext.Provider value={{ login, logout, user, token, register, checkAuth }}>
            {children}
        </AuthContext.Provider>
    )
}


type AuthContextType = {
    children: React.ReactNode
}
