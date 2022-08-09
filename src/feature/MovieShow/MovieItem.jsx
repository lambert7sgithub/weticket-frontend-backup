import React from "react";
import "./movieitem.css";
import { Rate } from "antd";
import { Image } from "antd";
import {NavLink} from "react-router-dom";

const MovieItem = (props) => {
    return (
      <div className="box">
        <NavLink to={"/MovieDetials/"+props.id}>
        <Image width={150} height={200} src={props.url} />
        </NavLink>
        <h4 className="moviename">{props.movieName}</h4>
        <h5>评分：{props.score}</h5>
        <Rate allowHalf defaultValue={4.5} />
      </div>
    );
  
}

export default MovieItem;
