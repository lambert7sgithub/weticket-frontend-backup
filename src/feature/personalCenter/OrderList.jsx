import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
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

{
  /* <table class="listtable">
        <tr>
          <th>
            <ShoppingCartOutlined
              style={{
                fontSize: "20px",
                color: "red",
              }}
            />
            &nbsp;订单号:sdsdfasdasd2555'
          </th>
        </tr>
        <tr>
          <td>
            <div className="orderShow">
              <img alt="" src='/photos/1.jpg'></img>
              <div className="showRight">
                <ul>
                  <li>《寻梦环游记》</li>
                  <li>《珠海巨无霸影城》</li>
                  <li> 《周五1月1日 13:00》</li>
                </ul>
              </div>
            </div>
          </td>
          <td className="monyeStyle">￥200</td>
          
        </tr>
      </table> */
}
