import api from './api'

export const getMovieById = (id) => {
    return api.get("/movie/"+id)
}