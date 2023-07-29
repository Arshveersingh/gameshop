import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const fetchFn = () => {
  return apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);
};
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchFn,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
