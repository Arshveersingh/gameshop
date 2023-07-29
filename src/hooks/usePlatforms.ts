import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { Platform } from "./useGames";

const fetchFn = () => {
  return apiClient
    .get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then((res) => res.data);
};
const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchFn,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });
};
export default usePlatforms;
