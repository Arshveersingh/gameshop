import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../stores/GameQueryStore";

const convertToTitleCase = (str: string) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase().concat(word.substring(1)))
    .join(" ");
};
export const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = gameQuery.searchText
    ? `Search: ${convertToTitleCase(gameQuery.searchText)}`
    : `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading
      as="h1"
      marginY={4}
      marginTop={0}
      fontSize={{ base: "2.3rem", sm: "1.5rem", md: "2.5rem", lg: "3rem" }}
      color={"transparent"}
      backgroundClip={"text"}
      backgroundImage={
        "linear-gradient(0deg, rgba(131,58,180,1) 34%, rgba(233,67,67,1) 81%);"
      }
    >
      {heading}
    </Heading>
  );
};
