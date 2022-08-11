import React from "react";
import "./orders/order.css";

const FoodList = (props) => {
  return (
      <>
        <div className="OrderListShow">
          <div className="orderShow">
            <img alt="" src={props.picture}/>
            <div className="showRight">
              <ul>
                <li>《{props.foodname}》</li>
                <li>{props.count}份</li>
              </ul>
            </div>
          </div>
          <div className="monyeStyle">￥{props.totalprice}</div>
        </div>
      </>
  );
};

export default FoodList;
