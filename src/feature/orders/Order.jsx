import React ,{useState}from "react";
import  './orderCss/order.css'
import {ShoppingCartOutlined} from '@ant-design/icons';
import { useEffect } from "react";
import {getOrderById} from '../../api/order'
import { useDispatch } from "react-redux";
const Order = () => {

    const [state,setState] =useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getOrderById("hjijkuhjgsnjiuyg15467154shsgdlos").then((response) => {
            console.log(response.data);
            setState(response.data)
        }).catch((error) => {
            alert(error);
        })
    }, [dispatch]);
       

  return (
    <div className="orderTable">
      <h4>
        <ShoppingCartOutlined
          style={{
            fontSize: "20px",
            color: "red",
          }}
        />
        &nbsp;订单号:{state.orderid}
      </h4>
      <table class="gridtable">
        <tr>
          <th>电影</th>
          <th>场次</th>
          <th>票数</th>
          <th>价格</th>
          <th>使用</th>
        </tr>
        <tr>
          <td>
            <div className="movieShow">
              <img alt="" src={state.imageurl}></img>
              <div className="showRight">
                <ul>
                  <li>{state.moviename}</li>
                  <li>版本：{state.language}</li>
                  <li>片场：{state.length}</li>
                </ul>
              </div>
            </div>
          </td>
          <td>
            <ul className="changci">
              <li>{state.cinemaname}</li>
              <li>4号激光厅</li>
              <li>8月8日(周一)22:20</li>
            </ul>
          </td>
          <td>{state.votes}</td>
          <td className="monyeStyle">￥{state.unitprice}</td>
          <td>{state.unitprice === false?"未使用":"已使用"}</td>
        </tr>
      </table>
    </div>
  );
};

export default Order;