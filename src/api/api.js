import axios from "axios";

const env = process.env.NODE_ENV;
let baseURL = '';
if (env === 'development') {
    // baseURL = "https://weticket-backend.herokuapp.com/";
    baseURL = "http://localhost:8080/";
} else if (env === 'production') {
    baseURL = "https://weticket-backend.prod.herokuapp.com/";
}

const api = axios.create({
    baseURL
});

export default api;
