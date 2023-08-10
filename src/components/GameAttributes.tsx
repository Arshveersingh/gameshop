import { SimpleGrid, Text } from "@chakra-ui/react";
import { CriticScore } from "./CriticScore";
import { DefinitionItem } from "./DefinitionItem";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

export const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} fontSize={"18px"}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Age Rating">
        <Text>{game.esrb_rating?.name || "Not Rated"}</Text>
      </DefinitionItem>
      <DefinitionItem term="Developers">
        {game.developers.map((developer) => (
          <Text key={developer.id}>{developer.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
