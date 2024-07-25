import {apiClient} from "../client/apiClient.js";

export const getGallery = async (page = 1) => {
    try {
        const response = await apiClient.get(`/gallery?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching gallery data:', error);
        throw error;
    }
};