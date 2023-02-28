import axios from 'axios';

export const MyChatAPI = axios.create({
    baseURL: import.meta.env.VITE_MYCHAT_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
});
