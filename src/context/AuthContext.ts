import { createContext } from 'react';

export const AuthContext = createContext({
    token: '',
    user: null,
    login: async (username: string, password: string) => { },
    logout: () => {},
    register: async (username: string, password: string) => { },
    checkAuth: async () => { },
});