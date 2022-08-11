import api from "./api";

export const getFoods = (page) => {
  return api.get("/foods/" + page + "/3");
};
