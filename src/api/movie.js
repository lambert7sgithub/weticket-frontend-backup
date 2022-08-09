import api from './api'

export const findAllMovie = () => {
    return api.get("/movie/list");
}