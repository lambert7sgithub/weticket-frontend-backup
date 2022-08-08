import React from "react";
import "./movieitem.css";
import { Rate } from "antd";
import { Image } from "antd";

export default class MovieItem extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="box">
        <Image width={150} height={200} src={this.props.url} />
        <h4 className="moviename">{this.props.movieName}</h4>
        <h5>评分：{this.props.score}</h5>
        <Rate allowHalf defaultValue={4.5} />
      </div>
    );
  }
}
