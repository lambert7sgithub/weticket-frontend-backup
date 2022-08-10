import api from './api'

export const postLoginUser = (loginUser) => {
    return api.post("/session",loginUser)
}

export const postUser = (user) =>{
    return api.post("/user",user)
}

