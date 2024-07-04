import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://api.imctashkent.uz/api',
    headers: {
        'Content-Type': 'application/json',
    },
});