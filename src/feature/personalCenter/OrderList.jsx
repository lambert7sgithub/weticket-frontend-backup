import React from "react";
import "./orders/order.css";
import {NavLink} from "react-router-dom";
const OrderList = (props) => {
  return (
    <>
    <NavLink to={"/order/" + props.orderid}>
    <div className="OrderListShow" >
    
      <div className="orderShow">
        <img alt="" src={props.imageurl}></img>
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
    </NavLink>
    </>
  );
};

export default OrderList;
