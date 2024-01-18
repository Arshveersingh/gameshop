import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Achievement from "../entities/Achievement";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const useAchievements = (gameId: number | string) => {
  const apiClient = new APIClient<Achievement>(`games/${gameId}/achievements`);

  return useInfiniteQuery<FetchResponse<Achievement>, Error>({
    queryKey: ["achievements", gameId],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};
export default useAchievements;
