import React from "react";
import { Button, Divider } from "antd";
import "./SingleFood.css";

const SingleFood = (props) => {
  const { name, picture, inventory, price } = props;
  return (
    <div className="single-food">
      <div className="picture-panel">
        <img src={picture} className="picture" alt=""></img>
      </div>
      <div className="info-panel">
        <div className="title">{name}</div>
        <Divider></Divider>
        <div className="price-panel">
          <div className="price-label">门市价：</div>
          <div className="price-symbol">￥</div>
          <div className="food-price">{price}</div>
        </div>

        <div className="buy-panel">
          <Button
            type="primary"
            shape="round"
            size="large"
            disabled={inventory === 0}
          >
            {inventory === 0 ? "已售罄" : "立即抢购"}
          </Button>
          <div className="inventory">库存：{inventory}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
