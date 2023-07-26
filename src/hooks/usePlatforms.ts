import platforms from "../data/platforms";

const usePlatforms = () => {
  return { data: platforms, isLoading: false, error: null };
};
export default usePlatforms;
