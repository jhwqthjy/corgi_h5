import axios from "axios";
// import Qs from "qs";
import { BASE_API_URL, CORGI_PUBLIC_TOKEN } from "@/config";

const isObject = (data: any) =>
  Object.prototype.toString.call(data) === "[object Object]";

// create an axios instance
const service = axios.create({
  baseURL: BASE_API_URL, // url = base url + request url
  // transformRequest: [
  //   function (data = {}) {
  //     Object.keys(data).forEach((element) => {
  //       if (isObject(data[element])) {
  //         data[element] = JSON.stringify(data[element]);
  //       }
  //     });
  //     return Qs.stringify(data);
  //   },
  // ],
  timeout: 30000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (config.url?.startsWith(BASE_API_URL) || config.url?.startsWith("/")) {
      config.headers["jwt"] = CORGI_PUBLIC_TOKEN;
    }

    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 0) {
      return Promise.reject(res.msg);
    } else {
      return res.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const request = service as any;
