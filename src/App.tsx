import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import "./App.css";
import { GameGrid } from "./components/GameGrid";
import { GameHeading } from "./components/GameHeading";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const queryClient = new QueryClient();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <QueryClientProvider client={queryClient}>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "220px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          ></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genreId: genre.id });
              }}
              selectedGenreId={gameQuery.genreId}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              ></PlatformSelector>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => {
                  setGameQuery({ ...gameQuery, sortOrder });
                }}
              ></SortSelector>
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
