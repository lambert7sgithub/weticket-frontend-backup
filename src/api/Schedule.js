import api from "./api";

export const getSchedule = (cinemaId) => {
  return api.get("/screenings/" + cinemaId);
};
