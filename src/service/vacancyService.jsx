import {apiClient} from "../client/apiClient.js";

export const getVacancies = async (page = 1, perPage = 10) => {
    try {
        const response = await apiClient.get('/vacancy', {
            params: {
                page,
                per_page: perPage
            }
        });
        return response.data.data; // Return the whole response to access pagination data
    } catch (error) {
        console.error('Error fetching vacancy data:', error);
        throw error;
    }
};


