import useGames from "../hooks/useGames";
import { GameCard } from "../components/GameCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeleton.map((num) => {
            return (
              <GameCardContainer>
                <GameCardSkeleton key={num}></GameCardSkeleton>
              </GameCardContainer>
            );
          })}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
