import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8082',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch topics function
export const fetchTopics = async () => {
  try {
    const response = await API.get('/openai/response/chatcmpl-AClplE4BhWY5ZpKKhmQubs6E2O67j'); // Update the endpoint accordingly
    return response.data; // Assuming the response contains an array of topics
  } catch (error) {
    console.error("Error fetching topics:", error);
    throw error; // Rethrow to handle it in the calling function
  }
};

export default API;
