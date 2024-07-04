import axios from 'axios';
import {apiClient} from "../client/apiClient.js";


// Function to get news data from the API
export const getNews = async () => {
    try {
        const response = await apiClient.get('/new'); // Make the GET request to the endpoint
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching news data:', error); // Log any errors
        throw error; // Re-throw the error for further handling
    }
};


// Function to get news data from the API
export const getNewsById = async (id) => {
    try {
        const response = await apiClient.get(`/new/${id}`); // Make the GET request to the endpoint
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching news data:', error); // Log any errors
        throw error; // Re-throw the error for further handling
    }
};

