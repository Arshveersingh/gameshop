import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlaform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/GameQueryStore";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlaform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={4} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};
