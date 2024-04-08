import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Game from "../../../entities/Game";
import getCroppedImages from "../../../services/image-url";
import { Emoji } from "../../common/Emoji";
import { CriticScore } from "../CriticScore";
import { PlatformIconList } from "../PlatformIconList";
import styles from "./GameCard.module.css";
import { getToken } from "../../../services/token";
import APIClient from "../../../services/api-client";

interface Props {
  game: Game;
}
// Returns true if the game is released.
const checkReleaseDate = (releaseDate: string) => {
  return releaseDate <= new Date().toISOString().split("T")[0]; // format YYYY-MM-DD
};

export const GameCard = ({ game }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const backgroundColor = useColorModeValue("whitesmoke", "gray.700");
  const navigate = useNavigate();

  const handleLike = async (gameId: number) => {
    const token = getToken();
    if (token === null) {
      navigate("/signup");
    }
    setIsLiked(!isLiked);
    if (isLiked === false) {
      const apiClient = new APIClient(`like_game/${gameId}`);
      const response = await apiClient.put();
      console.log(response);
      if (response.status !== 200) {
        setIsLiked(false);
      }
    } else {
      const apiClient = new APIClient(`unlike_game/${gameId}`);
      const response = await apiClient.put();
      console.log(response);
      if (response.status !== 200) {
        setIsLiked(true);
      }
    }
  };

  return (
    <Card
      background={backgroundColor}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Box cursor={"pointer"} onClick={() => navigate(`/games/${game.slug}`)}>
        <Skeleton height={imageLoading ? "200px" : ""} isLoaded={!imageLoading}>
          <Image
            alt={game.name}
            width={"100%"}
            position={"relative"}
            className={styles.gameCardImage}
            src={getCroppedImages(game.background_image)}
            onLoad={() => setImageLoading(false)}
          ></Image>
          {isMouseOver && (
            <Box
              onClick={(event) => {
                event.stopPropagation();
                handleLike(game.id);
              }}
              position={"absolute"}
              bottom={"90px"}
              right={"20px"}
            >
              {isLiked && <FaHeart color="deeppink" size={"35px"}></FaHeart>}
              {!isLiked && (
                <FaRegHeart color="deeppink" size={"35px"}></FaRegHeart>
              )}
            </Box>
          )}
        </Skeleton>
      </Box>
      <CardBody paddingY={2} paddingX={3}>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading
          fontSize={"xl"}
          fontFamily="'Bebas Neue', 'Roboto', 'Sans-Serif';"
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Link to={`/games/${game.slug}`}>
            <Text
              background={
                "linear-gradient(0deg, rgba(255,204,51,1) 34%, rgba(255,153,0,1) 81%);"
              }
              backgroundClip={"text"}
              color={isMouseOver ? "transparent" : ""}
              noOfLines={1}
              fontWeight={1}
              letterSpacing={2}
            >
              {game.name}
            </Text>
          </Link>
          <Emoji
            rating={checkReleaseDate(game.released) ? game.rating : -1}
          ></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};
