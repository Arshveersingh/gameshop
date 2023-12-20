import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlaform from "../../hooks/usePlatform";
import useGameQueryStore from "../../stores/GameQueryStore";
import styles from "./GameHeadsing.module.css";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlaform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading
      className={styles.gameHeading}
      as="h1"
      marginY={4}
      marginTop={0}
      fontSize={{ base: "2.3rem", md: "2.5rem", lg: "3rem" }}
    >
      {heading}
    </Heading>
  );
};
