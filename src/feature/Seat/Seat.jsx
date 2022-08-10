import MovieDetail from "./MovieDetail";

const Seat = (props) => {
  return (
      <div className="seat-movie-detail" >
          <MovieDetail movieId={props.movieId} cinemaId={props.cinemaId} scnId={props.scnId}/>
      </div>

  );
}

export default Seat;
