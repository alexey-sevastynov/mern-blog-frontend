import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1313",
});

export default instance;

