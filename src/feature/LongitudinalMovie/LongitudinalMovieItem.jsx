import React from "react";
import { Divider } from "antd";

const LongitudinalMovieItem = (props) => {
  const { movieName, picture, showTime, movieType } = props;
  return (
    <div className="movie-item">
      <div className="movie-item-panel">
        <img
          src={picture}
          className="movie-item-picture"
          alt="该套餐暂无实物图"
        ></img>
      </div>
      <div className="movie-description">
        <div className="movie-item-name">{movieName}</div>
        <div className="movie-show-time">{showTime}</div>
        <div className="movie-movie-type">{movieType}</div>
        <Divider className="divider"></Divider>
      </div>
    </div>
  );
};

export default LongitudinalMovieItem;
