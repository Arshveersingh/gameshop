import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AchievementList } from "../components/AchievementList";
import { BackgroundImage } from "../components/BackGroundImage/BackgroundImage";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import GameCarousel from "../components/GameCarousel/GameCarousel";
import { GameRequirements } from "../components/GameRequirements";
import { GameStores } from "../components/GameStore";
import { RedditPosts } from "../components/RedditPosts";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <>
      <BackgroundImage imgUrl={game.background_image}></BackgroundImage>
      <Heading
        size={"3xl"}
        fontFamily="'Bebas Neue', 'Roboto', 'Sans-Serif';"
        marginBottom={1}
      >
        {game?.name}
      </Heading>

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
      <AchievementList game={game}></AchievementList>
      <RedditPosts gameId={game.id}></RedditPosts>
    </>
  );
};
