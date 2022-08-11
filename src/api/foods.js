import api from "./api";

export const getFoods = (page) => {
  return api.get("/foods/" + page + "/3");
};
export const addFoodOrder = (foodOrder) => {
  return api.post("/food-orders", foodOrder);
};
