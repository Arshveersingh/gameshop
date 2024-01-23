import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import Game from "../../entities/Game";
import { PlatformIconList } from "../PlatformIconList";
import { CriticScore } from "../CriticScore";
import getCroppedImages from "../../services/image-url";
import { Emoji } from "../Emoji";
import { Link } from "react-router-dom";
import styles from "./GameCard.module.css";

interface Props {
  game: Game;
}
// Returns true if the game is released
const checkReleaseDate = (releaseDate: string) => {
  return releaseDate <= new Date().toISOString().split("T")[0]; // format YYYY-MM-DD
};

export const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();
  const background = colorMode === "dark" ? "gray.700" : "whitesmoke";
  return (
    <Card background={background}>
      <Link to={`/games/${game.slug}`}>
        <Image
          width={"100%"}
          className={styles.gameCardImage}
          src={getCroppedImages(game.background_image)}
        ></Image>
      </Link>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading
          fontSize={"2xl"}
          fontFamily="'Bebas Neue', 'Roboto', 'Sans-Serif';"
        >
          <Link to={`/games/${game.slug}`}>
            <Text fontWeight={1} letterSpacing={2}>
              {game.name}
            </Text>
          </Link>
        </Heading>
        <Emoji
          rating={checkReleaseDate(game.released) ? game.rating : -1}
        ></Emoji>
      </CardBody>
    </Card>
  );
};
