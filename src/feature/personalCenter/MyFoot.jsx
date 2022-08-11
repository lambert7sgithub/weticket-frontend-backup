import React,{useEffect, useState}from 'react';
import {findFootOrdersByUserId} from "../../api/order";
import { useDispatch } from "react-redux";
import FoodList from './FoodList';
const MyFoot = () => {
    const [foodorders,setFoodOrders] = useState([])

    const dispatch = useDispatch();
    useEffect(() => {
        findFootOrdersByUserId(1).then((response) => {
            console.log(response.data);
            setFoodOrders(response.data)
        }).catch((error) => {
            alert(error);
        })
    }, [dispatch]);

    return (
        <div>
             <h1>美食订单</h1>
             {foodorders.map((items,index) => {
                    return <FoodList {...items} key={index}/>;
            })}
        
        </div>
    );
};

export default MyFoot;