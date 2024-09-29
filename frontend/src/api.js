import axios from 'axios';

// Create an Axios instance with default configuration
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8082',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;