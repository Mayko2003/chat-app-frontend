import { MyChatAPI } from "../api";
import { User } from '../types';

export const UserService = {
    getUser: async (userId: string) => { },
    getUsers: async () => { },
    createUser: async (user: User) => {
        try {
            const response = await MyChatAPI.post("/user/create", user);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
    getActiveUsers: async () => {
        try {
            const response = await MyChatAPI.get("/user/active");
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
};