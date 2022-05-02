import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.234.116.203:5000/api'
})

export default api;