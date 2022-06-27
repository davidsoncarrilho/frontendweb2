import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3333",
});

const token = localStorage.getItem("token");

if (token) {
  API.defaults.headers.common["Authorization"] = token;
}
