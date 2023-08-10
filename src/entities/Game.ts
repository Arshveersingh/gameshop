import Developer from "./Developer";
import ESRB from "./EsrbRating";
import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  genres: Genre[];
  publishers: Publisher[];
  developers: Developer[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  esrb_rating: ESRB;
  description_raw: string;
}
export default Game;
