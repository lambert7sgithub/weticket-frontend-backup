import api from './api'

export const addSocialForm = (formData) => {
    return api.post("/socialForm", formData)
};