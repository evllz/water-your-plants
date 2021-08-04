import axios from "axios";

export const axiosWithAuth = () => {
  console.log(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
