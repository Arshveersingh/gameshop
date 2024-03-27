import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingAnimation } from "../components/common/LoadingAnimation";
import { BackgroundImage } from "../components/game/BackGroundImage/BackgroundImage";
import { GameAttributes } from "../components/game/GameAttributes";
import GameCarousel from "../components/game/GameCarousel/GameCarousel";
import { GameRating } from "../components/game/GameRating";
import { GameRequirements } from "../components/game/GameRequirements";
import { GameStores } from "../components/game/GameStore";
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
          size={"2xl"}
          fontFamily="'Bebas Neue', 'Roboto', 'Sans-Serif';"
          marginBottom={4}
          background={
            "linear-gradient(0deg, rgba(255,215,0,1) 50%, rgba(255,165,0,1) 87%);"
          }
          backgroundClip={"text"}
          color={"transparent"}
          letterSpacing={"8px"}
        >
          {game?.name}
        </Heading>
        <GameRating rating={game.rating}></GameRating>
      </Box>
      <GameCarousel gameId={game.id}></GameCarousel>
      <Box
        fontFamily=" 'Hepta Slab', 'Ubuntu Mono', 'Courier New', 'Monospace';"
        letterSpacing={0.6}
        lineHeight={2}
      >
        <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
      </Box>
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
