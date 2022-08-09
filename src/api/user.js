import api from './api'

export const postUser = (newUser) => {
    return api.post("/user",newUser)
}


export const postLoginUser = (loginUser) => {
    return api.post("/session",loginUser)
}
