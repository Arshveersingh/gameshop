import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameGrid } from "../../components/GameGrid";
import { GameHeading } from "../../components/GameHeading/GameHeading";
import { GenreList } from "../../components/GenreList";
import { PlatformSelector } from "../../components/PlatformSelector";
import { SortSelector } from "../../components/SortSelector";
import { DateSelector } from "../../components/DateSelector";
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
