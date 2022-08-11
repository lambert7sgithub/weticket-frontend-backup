import React from "react";
import "./movieitem.css";
import {Image, Rate} from "antd";
import {NavLink} from "react-router-dom";

function MovieItem(props) {
    return (
        <div className="box">
            <NavLink to={"/MovieDetails/" + props.movieId}>
                <Image  width={150} height={200} src={props.picture}/>
            </NavLink>
            <h4 className="moviename">{props.movieName}</h4>

            <h5>评分：{props.score}</h5>
            <Rate allowHalf disabled defaultValue={props.score / 20}/>
        </div>
    );
}

export default MovieItem;
