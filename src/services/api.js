import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8085', // Replace with your API base URL
})

export default api