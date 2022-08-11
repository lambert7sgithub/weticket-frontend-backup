import api from './api'


export const getPayOrderInfo = () => {
    return api.get("/payOrder")
}
