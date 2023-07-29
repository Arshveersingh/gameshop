import useGames from "../hooks/useGames";
import { GameCard } from "../components/GameCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
export const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeleton.map((num) => {
          return (
            <GameCardContainer key={num}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          );
        })}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
