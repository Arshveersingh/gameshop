import axios from "axios";
import { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "42b009760d0548029af2616359e7b8b6",
  },
});
export { CanceledError };
