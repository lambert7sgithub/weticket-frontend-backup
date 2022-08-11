import React from 'react';
import "./orders/order.css";
import {NavLink} from "react-router-dom";
const FoodList = (props) => {
    return (
        <>
        <NavLink to={"/foodorder/" + props.orderid}>
        <div className="OrderListShow" >
        
          <div className="orderShow">
            <img alt="" src="/food/1.jpg"></img>
            <div className="showRight">
              <ul>
                <li>名称:《{props.foodname}》</li>
                <li>份数:《{props.count}》</li>
              </ul>
            </div>
          </div>
          <div className="monyeStyle">￥{props.totalPrice}</div>
        </div>
        </NavLink>
        </>
      );
};

export default FoodList;