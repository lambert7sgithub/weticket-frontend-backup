import api from './api'

export const postUser = (newUser) => {
    return api.post("/user",newUser)
}