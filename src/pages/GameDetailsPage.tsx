import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundImage } from "../components/game/BackGroundImage/BackgroundImage";
import { ExpandableText } from "../components/common/ExpandableText";
import { GameAttributes } from "../components/game/GameAttributes";
import GameCarousel from "../components/game/GameCarousel/GameCarousel";
import { GameRating } from "../components/game/GameRating";
import { GameRequirements } from "../components/game/GameRequirements";
import { GameStores } from "../components/game/GameStore";
import { LoadingAnimation } from "../components/common/LoadingText";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <LoadingAnimation></LoadingAnimation>;
  if (error || !game) throw error;
  return (
    <>
      <BackgroundImage imgUrl={game.background_image}></BackgroundImage>
      <Box>
        <Heading
          textAlign={"center"}
          size={"3xl"}
          fontFamily="'Bebas Neue', 'Roboto', 'Sans-Serif';"
          marginBottom={0}
          letterSpacing={"8px"}
        >
          {game?.name}
        </Heading>
        <GameRating rating={game.rating}></GameRating>
      </Box>
      <GameCarousel gameId={game.id}></GameCarousel>
      <Text
        fontFamily=" 'Hepta Slab', 'Ubuntu Mono', 'Courier New', 'Monospace';"
        letterSpacing={0.6}
        lineHeight={2}
      >
        <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
      </Text>
      <GameAttributes game={game}></GameAttributes>
      <GameStores gameId={game.id}></GameStores>

      <GameRequirements game={game}></GameRequirements>

      <Button
        onClick={() => navigate(`/games/${game.id}/achievements`)}
        display={"block"}
        margin={"2rem auto"}
      >
        Check All Achievements
      </Button>
      {/* <RedditPosts gameId={game.id}>
      
      </RedditPosts> */}
    </>
  );
};
