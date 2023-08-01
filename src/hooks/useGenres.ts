import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APICliet, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
const apiClient = new APICliet<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
