import api from './api'


export const getMovieById = (id) => {
    return api.get("/movie/"+id)
}

export const findAllMovie = () => {
    return api.get("/movie/list");

}