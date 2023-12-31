import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import { GameTrailer } from "../components/GameTrailer";
import { BackgroundImage } from "../components/BackGroundImage/BackgroundImage";
import { GameStores } from "../components/GameStore";
import useGame from "../hooks/useGame";
import { AchievementList } from "../components/AchievementList";
import { RedditPosts } from "../components/RedditPosts";
import { GameRequirements } from "../components/GameRequirements";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <>
      <BackgroundImage imgUrl={game.background_image}></BackgroundImage>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading marginBottom={1}>{game?.name}</Heading>
          <ExpandableText maxChars={300}>{game.description_raw}</ExpandableText>
          <GameAttributes game={game}></GameAttributes>
          <GameStores gameId={game.id}></GameStores>
        </GridItem>
        <GridItem>
          <Box marginBottom={5}>
            <GameTrailer gameId={game.id}></GameTrailer>
          </Box>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
      </SimpleGrid>
      <GameRequirements game={game}></GameRequirements>
      <AchievementList game={game}></AchievementList>
      <RedditPosts gameId={game.id}></RedditPosts>
    </>
  );
};
