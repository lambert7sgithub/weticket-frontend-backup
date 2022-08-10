import { Image, Button } from "antd";
import "./MovieDetail.css";

const MovieDetail = (props) => {
  const { movieDetail } = props;
  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <div className="movie-thumb">
          <Image src="../../../public/photos/1.jpg" />
        </div>
        <div>
          <div className="movie-name">名字：{movieDetail.movieName}</div>
          <div className="movie-version">
            版本：
            {movieDetail.movieVersion}
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
          {movieDetail.room}
        </div>
        <div className="d1">
          场次：
          {movieDetail.screening}
        </div>
        <div className="price">
          原价： ￥{movieDetail.price}x{movieDetail.quantity}
        </div>
        <div className="movie-seat">
          已选座位：
          {movieDetail.seatDetail}
        </div>
        <div className="movie-price">
          <div className="movie-price-tot">
            总价： ￥{movieDetail.price * movieDetail.quantity}
          </div>
        </div>
        <div className="buy">
          <Button type="primary" danger shape='round' size="large">
            购买
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
