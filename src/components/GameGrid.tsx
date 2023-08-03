import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameCard } from "../components/GameCard";
import useGames from "../hooks/useGames";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => {
        fetchNextPage();
      }}
      loader={<Spinner></Spinner>}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeleton.map((num) => {
            return (
              <GameCardContainer key={num}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            );
          })}

        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
