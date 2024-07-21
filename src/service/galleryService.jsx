import {apiClient} from "../client/apiClient.js";

export const getGallery = async () => {
    try {
        const response = await apiClient.get('/gallery');
        return response.data;
    } catch (error) {
        console.error('Error fetching news data:', error);
        throw error;
    }
};