import axios from "axios";

const currentHostName = process.env.NODE_ENV;
console.log(document.location.hostname);
let baseURL;
if (currentHostName === 'weticket-frontend.herokuapp.com') {
    baseURL = "https://weticket-backend.herokuapp.com/";
} else if (currentHostName === 'weticket-frontend-prod.herokuapp.com') {
    baseURL = "https://weticket-backend.prod.herokuapp.com/";
} else {
    baseURL = "http://localhost:8080/";
}

const api = axios.create({
    baseURL
});

export default api;
