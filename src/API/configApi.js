import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_PATH_API,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
