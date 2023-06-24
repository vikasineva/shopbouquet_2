import axios from "axios";
import user from "../store/user";

const baseUrl = process.env.REACT_APP_API;

const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
});

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = user.isAuthorized && `Bearer ${window.localStorage.getItem(
    "token"
  )}`;

  return config;
});

export default axiosInstance;
