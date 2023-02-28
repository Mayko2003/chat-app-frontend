import { MyChatAPI } from '../api';

export const AuthService = {
    login: async (username: string, password: string) => {
        try {
            const response = await MyChatAPI.post('/auth/login', { username, password });
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
    getUser: async () => {
        try {
            const response = await MyChatAPI.get('/auth/me');
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
};