// import React,{useEffect, useState}from 'react';
import OrderList from './OrderList.jsx';
const MyOrders = () => {
    // const [orders,setOrders] = useState([]);
    // const [state,setState] =useState([]);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     getOrderById("hjijkuhjgsnjiuyg15467154shsgdlos").then((response) => {
    //         console.log(response.data);
    //         setState(response.data)
    //     }).catch((error) => {
    //         alert(error);
    //     })
    // }, [dispatch]);
    return (
        <div>
           <OrderList />
        </div>
    );
};

export default MyOrders;