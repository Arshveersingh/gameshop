import { useQuery } from "@tanstack/react-query";
import Store from "../entities/Store";
import APIClient, { FetchResponse } from "../services/api-client";

const useStore = (gameId: number) => {
  const apiClient = new APIClient<Store>(`/games/${gameId}/stores`);

  return useQuery<FetchResponse<Store>, Error>({
    queryKey: ["stores", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useStore;
