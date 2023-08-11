import { useQuery } from "@tanstack/react-query";
import Achievement from "../entities/Achievement";
import APIClient from "../services/api-client";

const useAchievements = (gameId: number) => {
  const apiClient = new APIClient<Achievement>(`games/${gameId}/achievements`);

  return useQuery({
    queryKey: ["achievements", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useAchievements;
