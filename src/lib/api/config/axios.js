import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Your base URL
    timeout: 5000,
});

export default axiosInstance;