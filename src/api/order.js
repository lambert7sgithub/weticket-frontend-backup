import api from './api'

export const getOrderById = (orderId) => {
    return api.get("/order/"+orderId);
}
