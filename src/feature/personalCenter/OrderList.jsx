import React from "react";
import "./orders/order.css";
import {NavLink} from "react-router-dom";
import dayjs from "dayjs";

const OrderList = (props) => {
  return (
      <>
        <NavLink to={"/order/" + props.orderid}>
          <div className="OrderListShow">
            <div className="orderShow">
              <img alt="" src={props.imageurl}></img>
              <div className="showRight">
                <ul>
                  <li className="ita-movie">《{props.moviename}》</li>
                  <li className="ita-cinema">{props.cinemaname}</li>
                  <li className="ita-cinema">
                    {dayjs(props.startdate).format("YYYY-MM-DD HH:mm:ss")}
                  </li>
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
