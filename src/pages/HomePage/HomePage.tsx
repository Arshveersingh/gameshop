import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { DateSelector } from "../../components/game/DateSelector";
import { GameGrid } from "../../components/game/GameGrid";
import { GameHeading } from "../../components/game/GameHeading";
import { GenreList } from "../../components/game/GenreList";
import { PlatformSelector } from "../../components/game/PlatformSelector";
import { SortSelector } from "../../components/game/SortSelector";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <Grid
      className={styles.gameGrid}
      templateAreas={{ base: ` "main"`, lg: ` "aside main"` }}
      templateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
          <Show above="md">
            <HStack className={styles.filters} spacing={5} marginBottom={5}>
              <PlatformSelector></PlatformSelector>
              <SortSelector></SortSelector>
              <DateSelector></DateSelector>
            </HStack>
          </Show>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};
