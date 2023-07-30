import { useQuery } from "@tanstack/react-query";
import APICliet from "../services/api-client";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APICliet<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 5 * 1000,
  });
};
export default useGames;
