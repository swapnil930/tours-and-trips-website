import api from "./api";

export const getTours = async () => {
  return await api.get("/tours");
};
import api from "./api";

export const bookTour = async (data) => {
  return await api.post("/booking", data);
};
