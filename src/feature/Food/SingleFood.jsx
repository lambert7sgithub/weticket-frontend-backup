import React from "react";
import { Divider } from "antd";
import "./SingleFood.css";
const SingleFood = (props) => {
  const { name, picture, inventory, price } = props;
  return (
    <div className="singleFood">
      <div className="picture">
        <img src={picture} alt=""></img>
      </div>
      <div>
        <div className="title">{name}</div>
        <Divider></Divider>
        门市价：{price}
        <div>库存：{inventory}</div>
      </div>
    </div>
  );
};

export default SingleFood;
