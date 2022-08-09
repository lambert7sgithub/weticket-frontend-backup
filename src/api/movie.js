import api from './api'


export const getMovieById = (id) => {
    return api.get("/movie/"+id)
}

export const findAllMovie = () => {
    return api.get("/movie/list");

}

export const getScreening = (movieId, cinemaId) => {
    return api.get(`/movie/list?movie-id=${movieId}&cinema-id=${cinemaId}`);
}
