import api from './api';


export const postLoginUser = (loginUser) => {
    return api.post("/session",loginUser)
}

