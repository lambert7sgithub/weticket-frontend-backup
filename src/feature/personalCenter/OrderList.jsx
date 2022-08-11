import React from "react";
import "./orders/order.css";
const OrderList = (props) => {
  return (
    <>
    <div className="OrderListShow">
      <div className="orderShow">
        <img alt="" src="/photos/1.jpg"></img>
        <div className="showRight">
          <ul>
            <li>《{props.moviename}》</li>
            <li>《{props.cinemaname}》</li>
            <li> 《{props.startdate}》</li>
          </ul>
        </div>
      </div>
      <div className="monyeStyle">￥{props.allprice}</div>
    </div>
    </>
  );
};

export default OrderList;
