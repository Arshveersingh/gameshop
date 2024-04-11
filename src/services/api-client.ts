import axios, { AxiosRequestConfig } from "axios";
import { CanceledError } from "axios";
import { isTokenExpired, setToken, getToken } from "./token";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://gameshop-backend.onrender.com/",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    const token = getToken();
    if (token && !axiosInstance.defaults.headers.common.Authorization) {
      this.setAuthToken(token);
    }
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  getData = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  post = (data?: any) => {
    return axiosInstance.post(this.endpoint, data);
  };

  put = (data?: any) => {
    return axiosInstance.put(this.endpoint, data);
  };

  setAuthToken = (token: string) => {
    if (!isTokenExpired(token)) {
      setToken(token);
      axiosInstance.interceptors.request.use(
        (config) => {
          config.headers["Authorization"] = `Bearer ${token}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    }
  };
}

export { CanceledError };
export default APIClient;
