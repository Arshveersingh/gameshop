import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import { GameTrailer } from "../components/GameTrailer";
import useGame from "../hooks/useGame";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading marginBottom={1}>{game?.name}</Heading>
        <ExpandableText maxChars={300}>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <Box marginBottom={5}>
          <GameTrailer gameId={game.id}></GameTrailer>
        </Box>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </GridItem>
    </SimpleGrid>
  );
};
