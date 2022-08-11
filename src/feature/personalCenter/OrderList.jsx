import React from "react";
import "./orders/order.css";
const OrderList = (props) => {
  return (
    <>
    <h1>我的订单</h1>
    <div className="OrderListShow">
      <div className="orderShow">
        <img alt="" src="/photos/1.jpg"></img>
        <div className="showRight">
          <ul>
            <li>《寻梦环游记》</li>
            <li>《珠海巨无霸影城》</li>
            <li> 《周五1月1日 13:00》</li>
          </ul>
        </div>
      </div>
      <div className="monyeStyle">￥200</div>
    </div>
    </>
  );
};

export default OrderList;
