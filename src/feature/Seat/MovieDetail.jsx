import {Image} from "antd";
import './MovieDetail.css';

const MovieDetail = (props) => {
    const {movieDetail} = props;
    return (
        <div className="movie-detail">
            <div className="movie-detail-header">
                <div className="movie-thumb">
                    <Image className="movie-thumb-img" src="../../../public/photos/1.jpg"/>
                </div>
                <div className="movie-desc">
                    <div className="movie-name">
                        {movieDetail.movieName}
                    </div>
                    <div className="movie-version">
                        版本：
                        <div className="value">
                            {movieDetail.movieVersion}
                        </div>
                    </div>
                    <div className="movie-length">
                        片长：
                        <div className="value">
                            {movieDetail.movieLength}
                        </div>
                    </div>
                </div>
            </div>
            <div className="movie-detail-body">
                <div className="movie-cinema">
                    影院：
                    <div className="value">
                        {movieDetail.cinema}
                    </div>
                </div>
                <div className="movie-room">
                    影厅：
                    <div className="value">
                        {movieDetail.room}
                    </div>
                </div>
                <div className="movie-screening">
                    场次：
                    <div className="value">
                        {movieDetail.screening}
                    </div>
                </div>
            </div>
            <div className="movie-seat-desc">
                <div className="movie-seat">
                    座位：
                </div>
                <div className="value">
                    {movieDetail.seatDetail}
                </div>
            </div>
            <div className="movie-detail-footer">
                <div className="movie-price">
                    <div className="movie-price-cal">
                        原价：
                        <div className="value">
                            ￥{movieDetail.price}x{movieDetail.quantity}
                        </div>
                    </div>
                    <div className="movie-price-tot">
                        总价：
                        <div className="value">
                            ￥{movieDetail.price * movieDetail.quantity}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default MovieDetail;
