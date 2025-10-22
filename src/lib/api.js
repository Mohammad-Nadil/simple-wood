import axios from "axios";

const api = axios.create({
  baseURL: "https://furniture-api.fly.dev/v1",
});

export default api;
