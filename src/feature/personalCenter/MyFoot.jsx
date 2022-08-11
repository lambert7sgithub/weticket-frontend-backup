import React, {useEffect, useState} from 'react';
import {findFootOrdersByUserId} from "../../api/order";
import {useDispatch} from "react-redux";
import FoodList from './FoodList';
import "./personorder.css";

const MyFoot = () => {
    const [foodorders, setFoodOrders] = useState([])

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
            <div className='order-title'>美食订单：</div>
             {foodorders.map((items,index) => {
                    return <FoodList {...items} key={index}/>;
            })}

        </div>
    );
};

export default MyFoot;
