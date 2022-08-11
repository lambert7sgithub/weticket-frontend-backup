import api from "./api";
export const getOrderById = (orderId) => {
  return api.get("/order/" + orderId);
};
export const findOrdersByUserId = (userId) => {
  return api.get("/order/user/" + userId, {
    headers: { Authorization: sessionStorage.getItem("token") },
  });
};

export const findFootOrdersByUserId = (userId) => {
  return api.get("/food-orders/user/" + userId,{
    headers: { Authorization: sessionStorage.getItem("token") },
  });
};
