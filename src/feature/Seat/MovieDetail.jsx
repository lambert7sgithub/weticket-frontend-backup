import { Image, Button } from "antd";
import { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useNavigate } from "react-router-dom";
const MovieDetail = (props) => {
  const navigate = useNavigate();
  const { movieDetail, screening } = props;
  const [seats, setSeats] = useState(props.seats);

  useEffect(() => {
    let filterSeat = props.seats.filter((seat) => {
      return seat.status === 1;
    });
    setSeats(filterSeat);
  }, [props.seats]);

  localStorage.setItem("movieDetail", JSON.stringify(movieDetail));
  localStorage.setItem("screening", JSON.stringify(screening));
  localStorage.setItem("selectSeats", JSON.stringify(seats));

  const toPay = () => {
    navigate("/pay");
  };

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <div className="movie-thumb">
          <Image src={movieDetail.picture} />
        </div>
        <div>
          <div className="movie-name">名字：{movieDetail.movieName}</div>
          <div className="movie-version">
            版本：
            {movieDetail.movieLang}
          </div>
          <div className="movie-length">
            片长：
            {movieDetail.movieLength}
          </div>
        </div>
      </div>
      <div className="movie-detail-body">
        <div className="d1">
          影院：
          {movieDetail.cinema}
        </div>
        <div className="d1">
          影厅：
          {movieDetail.screeningRoom}
        </div>
        <div className="d1">
          场次：
          {screening}
        </div>
        <div className="price">
          原价： ￥{movieDetail.price}x{seats.length}
        </div>
        <div className="movie-seat">
          已选座位：
          {seats.map((seat, index) => {
            return (
              <div key={index}>
                {seat.x + 1}排{seat.y + 1}座
              </div>
            );
          })}
        </div>
        <div className="movie-price">
          <div className="movie-price-tot">
            总价： ￥{movieDetail.price * seats.length}
          </div>
        </div>
        <div className="buy">
          <Button
            type="primary"
            danger
            shape="round"
            size="large"
            onClick={toPay}
          >
            购买
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
