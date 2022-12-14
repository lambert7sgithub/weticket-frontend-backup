import { Button, Image, message, Switch } from "antd";
import { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useNavigate } from "react-router-dom";

const MovieDetail = (props) => {
  const navigate = useNavigate();
  const { movieDetail, screening } = props;
  const [seats, setSeats] = useState(props.seats);
  const [willingPair, setPair] = useState(true);

  useEffect(() => {
    let filterSeat = props.seats.filter((seat) => {
      return seat.status === 1;
    });
    setSeats(filterSeat);
  }, [props.seats]);

  localStorage.setItem("movieDetail", JSON.stringify(movieDetail));
  localStorage.setItem("screening", JSON.stringify(screening));
  localStorage.setItem("selectSeats", JSON.stringify(seats));
  localStorage.setItem("willingPair", JSON.stringify(willingPair));

  const toPay = () => {
    const username = sessionStorage.getItem("username");
    if(seats.length === 0){
        message.error("请先购买!")
        return
    }
    if (username === undefined || username === null || username.length === 0) {
      message.info("请先登陆");
      navigate("/login");
    } else {
      navigate("/pay");
    }
  };

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <div className="movie-thumb">
          <Image src={movieDetail.picture} />
        </div>
        <div>
          <div className="movie-name">影片名：{movieDetail.movieName}</div>
          <div className="movie-version">
            版本：
            {movieDetail.movieLang}
          </div>
          <div className="movie-length">
            片长：
            {movieDetail.movieLength}分钟
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
        <div className="d1">场次： 第{screening}场</div>
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
          <div className="pair-switch">
            是否愿意结伴观看
            <Switch
              checkedChildren="开启"
              unCheckedChildren="关闭"
              defaultChecked
              onChange={(e) => {
                setPair(!e);
                console.log(e);
              }}
            />
          </div>

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
