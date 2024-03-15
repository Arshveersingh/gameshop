import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundImage } from "../components/BackGroundImage/BackgroundImage";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import GameCarousel from "../components/GameCarousel/GameCarousel";
import { GameRating } from "../components/GameRating";
import { GameRequirements } from "../components/GameRequirements";
import { GameStores } from "../components/GameStore";
import { LoadingAnimation } from "../components/LoadingText";
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
      <ExpandableText
        fontFamily="'Ubuntu Mono', 'Courier New', 'Monospace';"
        maxChars={300}
      >
        {game.description_raw}
      </ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      <GameStores gameId={game.id}></GameStores>

      <GameRequirements game={game}></GameRequirements>
      {/* <AchievementList game={game}></AchievementList> */}
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
