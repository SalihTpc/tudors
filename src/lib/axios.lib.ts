// import axios, { AxiosRequestHeaders } from "axios";
// import { baseURL } from "./config";
// import { logout } from "../store/features/auth/auth.slice";
// import { store } from "../store/store";
// import Cookies from "js-cookie";

import axios from "axios";
import { baseURL } from "./config";

const headers: any = axios.defaults.headers;
headers.common["Content-Type"] = "application/json";
// headers.common["Access-Control-Allow-Origin"] = "http://localhost:3000";
// headers.common["Access-Control-Allow-Credentials"] = "true";

const instance = axios.create({
  baseURL,
  headers: headers,
});

// instance.interceptors.request.use((config: any) => {
//   config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
//   return config;
// });

instance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    throw error.code;
    console.log(error.status);
    // if (error.response.status == 401) {
    //   // store.dispatch(logout());
    // }
    // if (error.response && error.response.data) {
    //   return Promise.reject(error.response.data);
    // }
    // return Promise.reject(error.message);
  }
);

export { instance as axios };
