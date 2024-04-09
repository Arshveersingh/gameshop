import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useLikedGames = () => {
  const apiClient = new APIClient<number[]>("/liked_games");
  return useQuery({
    queryKey: ["likedGames"],
    queryFn: () => apiClient.getData(),
  });
};

export default useLikedGames;
