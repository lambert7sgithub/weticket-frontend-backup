import React from "react";
import "./movieitem.css";
import { Rate } from "antd";
import { Image } from "antd";
import { NavLink } from "react-router-dom";



function MovieItem(props) {
  console.log(props)

  return (
    <div className="box">
      <NavLink to={"/MovieDetials/" + props.movieId}>
        <Image width={150} height={200} src={props.picture} />
      </NavLink>
      <h4 className="moviename">{props.movie_name}</h4>

      <h5>评分：{props.score}</h5>
      <Rate allowHalf defaultValue={4.5} />
    </div>
  );

}

export default MovieItem;

