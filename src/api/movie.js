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


// export const getSeatDetail = (movieId, cinemaId, screeningId) => {
//     return api.get(`/movie/${movieId}/cinema/${cinemaId}/screenings/${screeningId}`)
// }

export const getBookingSeats = (screeningId,seats) => {
    return api.post(`/screenings/${screeningId}`,seats)
}

export const getAllSeats = (screeningId) => {
    return api.get(`/screenings/${screeningId}`)
}

export const getMovieDetail = (screeningId) => {
    return api.get(`/screenings/${screeningId}/detail`)
}

