import { useQuery } from "@tanstack/react-query";
import RedditPost from "../entities/RedditPost";
import APIClient from "../services/api-client";

const useRedditPosts = (gameId: number) => {
  const apiClient = new APIClient<RedditPost>(`games/${gameId}/reddit`);

  return useQuery({
    queryKey: ["redditPosts", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useRedditPosts;
