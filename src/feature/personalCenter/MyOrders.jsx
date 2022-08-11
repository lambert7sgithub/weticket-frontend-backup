import React,{useEffect, useState}from 'react';
import OrderList from './OrderList.jsx';
import {findOrdersByUserId} from "../../api/order";
import { useDispatch } from "react-redux";
const MyOrders = () => {
    const [orders,setOrders] = useState([])

    const dispatch = useDispatch();
    useEffect(() => {
        findOrdersByUserId(1).then((response) => {
            console.log(response.data);
            setOrders(response.data)
        }).catch((error) => {
            alert(error);
        })
    }, [dispatch]);

    return (
        <div>
             <h1>我的订单</h1>
             {orders.map((items,index) => {
                    return <OrderList {...items} key={index}/>;
            })}
        
        </div>
    );
};

export default MyOrders;