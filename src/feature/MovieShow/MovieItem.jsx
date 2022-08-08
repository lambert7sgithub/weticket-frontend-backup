import React from "react";
import "./movieitem.css";
import { Rate } from "antd";
import { Image } from "antd";

// export default class MovieItem extends React.Component {
   
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {

//     return (
//       <div className="box">
//         <Image width={150} height={200} src={this.props.picture} />
//         <h4 className="moviename">{this.props.movie_name}</h4>
//         <h5>评分：{this.props.score}</h5>
//         <Rate allowHalf defaultValue={4.5} />
//       </div>
//     );
//   }
// }

function MovieItem(props){
 
    return (
      <div className="box">
        <Image width={150} height={200} src={props.picture} />
        <h4 className="moviename">{props.movie_name}</h4>
        <h5>评分：{props.score}</h5>
        <Rate allowHalf defaultValue={4.5} />
      </div>
    );
  }

  export default MovieItem;

