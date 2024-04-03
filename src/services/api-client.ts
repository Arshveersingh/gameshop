import axios, { AxiosRequestConfig } from "axios";
import { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

// const axiosInstance = axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "42b009760d0548029af2616359e7b8b6",
//   },
// });
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
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
  post = (data: any) => {
    return axiosInstance.post(this.endpoint, data);
  };
}

export { CanceledError };
export default APIClient;
