import api from "./api";

export const getSchedule = (cinemaId,movieId) => {
  return api.get("/screenings/cinema/" + cinemaId+"/movie"+movieId);
};
export const getScheduleByTime = (cinemaId,movieId,date) => {
  return api.get("/screenings/cinema/" + cinemaId+"/movie"+movieId+"/"+date);
};