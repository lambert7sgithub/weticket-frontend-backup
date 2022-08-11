import axios from "axios";

const currentHostName = document.location.hostname;
let baseURL;
if (currentHostName === 'weticket-frontend.herokuapp.com') {
    baseURL = "https://weticket-backend.herokuapp.com/";
} else if (currentHostName === 'weticket-frontend-prod.herokuapp.com') {
    baseURL = "https://weticket-backend-prod.herokuapp.com/";
} else {
    baseURL = "http://localhost:8080/";
}
let TOKEN = sessionStorage.getItem("token");
const getToken = () => {
  if (TOKEN !== null) {
      return {Authorization: TOKEN};
  } else {
      return null;
  }
}
const api = axios.create({
    baseURL, headers: getToken()
});

export default api;
