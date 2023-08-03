import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { GameGrid } from "./components/GameGrid";
import { GameHeading } from "./components/GameHeading";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "220px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading></GameHeading>
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector></PlatformSelector>
              <SortSelector></SortSelector>
            </HStack>
          </Box>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
