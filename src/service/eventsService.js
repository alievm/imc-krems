// Function to get news data from the API
import {apiClient} from "../client/apiClient.js";

export const getEvents = async () => {
    try {
        const response = await apiClient.get('/event'); // Make the GET request to the endpoint
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching news data:', error); // Log any errors
        throw error; // Re-throw the error for further handling
    }
};

