import api from './api'

export const postUser = (newUser) => {
    console.log('111')
    return api.post("/user",newUser)
}