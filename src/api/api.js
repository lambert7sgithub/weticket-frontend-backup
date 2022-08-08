import axios from "axios";

// const env = process.env.NODE_ENV;
// let baseURL = '';
// if (env === 'development') {
//     baseURL = "https://weticket-backend.herokuapp.com/";
// } else if (env === 'production') {
//     baseURL = "https://weticket-backend.prod.herokuapp.com/";
// }

const api = axios.create({
    baseURL:"https://62ea0bc701787ec71220262c.mockapi.io"
});

export default api;
