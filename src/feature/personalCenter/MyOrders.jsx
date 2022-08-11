import React, {useEffect, useState} from "react";
import OrderList from "./OrderList.jsx";
import {findOrdersByUserId} from "../../api/order";
import {useDispatch} from "react-redux";
import "./personorder.css";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        findOrdersByUserId(1)
            .then((response) => {
                console.log(response.data);
                setOrders(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }, [dispatch]);

    return (
        <div>
            <div className="order-title">电影订单：</div>
            {orders.map((items, index) => {
                return <OrderList {...items} key={index}/>;
            })}
        </div>
    );
};

export default MyOrders;
