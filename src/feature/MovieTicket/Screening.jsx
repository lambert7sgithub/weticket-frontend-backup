import {getScreening} from "../../api/movie";

const SeatAndTicket = (props) => {
  const {movieId, cinemaId} = props;
  const res = getScreening(movieId, cinemaId)
      .then(res => {return res.data})
      .catch(err => {
        console.log(err);
      });
  return (
      <div className="screening-table">

      </div>
  );
}
export default SeatAndTicket;
