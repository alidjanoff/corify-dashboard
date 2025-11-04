import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

const $axios = axios.create({
  baseURL: "",
});

$axios.interceptors.request.use(
  async (config: any) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default $axios;
