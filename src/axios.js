import axios from "axios";

const instance = axios.create({
  baseURL: "https://fullstack-project-qfu9.onrender.com",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;
