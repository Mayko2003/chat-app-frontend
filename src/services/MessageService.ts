import { MyChatAPI } from "../api";

export const MessageService = {
    getConversation: async (username: string) => {
        try {
            const res = await MyChatAPI.get(`/message/conversation/${username}`);
            return res.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
    sendMessage: async (username: string, message: string) => {
        try {
            const res = await MyChatAPI.post(`/message/send/${username}`, {
                message
            });
            return res.data;
        } catch (error: any) {
            return error.response.data;
        }
    }
};