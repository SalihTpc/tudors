import axios, { AxiosRequestHeaders } from "axios";
import { baseURL } from "./config";
// import { logout } from "../store/features/auth/auth.slice";
import { store } from "../store/store";
import Cookies from "js-cookie";

// const headers: any = axios.defaults.headers;
// headers.common["Content-Type"] = "*/*";

// const instance = axios.create({
//   baseURL,
//   headers: headers,
// });

// instance.interceptors.request.use((config: any) => {
//   config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
//   return config;
// });

// instance.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status == 401) {
//       // store.dispatch(logout());
//     }
//     if (error.response && error.response.data) {
//       return Promise.reject(error.response.data);
//     }
//     return Promise.reject(error.message);
//   }
// );

// export { instance as axios };
