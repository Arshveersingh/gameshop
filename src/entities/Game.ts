import Developer from "./Developer";
import ESRB from "./ESRB";
import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  genres: Genre[];
  released: string;
  publishers: Publisher[];
  developers: Developer[];
  parent_platforms: { platform: Platform }[];
  platforms: {
    platform: Platform;
    requirements: { minimum?: string; recommended?: string };
  }[];
  metacritic: number;
  rating: number;
  esrb_rating: ESRB;
  description_raw: string;
  description: string;
}
export default Game;
