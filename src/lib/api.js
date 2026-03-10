import axios from "axios";

// const api = axios.create({
//   baseURL: "https://furniture-api.fly.dev/v1",
// });
const api = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
