import api from "./api";

export const getCinema = () => {
  return api.get("/cinemas");
};
