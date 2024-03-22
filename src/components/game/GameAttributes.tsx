import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Game from "../../entities/Game";
import { CriticScore } from "./CriticScore";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <Heading
        display={"block"}
        margin={"auto"}
        marginTop={"1.2rem"}
        textAlign={"center"}
      >
        Platforms
      </Heading>
      <Flex
        gap={"1rem"}
        margin={"1rem auto"}
        placeContent={"center"}
        maxWidth={"80vw"}
      >
        <PlatformIconList
          boxSize={"2.6rem"}
          platforms={game.parent_platforms?.map((p) => p.platform)}
        ></PlatformIconList>
      </Flex>

      <SimpleGrid
        borderTop={"1px solid rgb(75, 78, 83)"}
        templateColumns={"1fr 1fr"}
        overflowX={"scroll"}
      >
        <GridItem
          borderBottom={"1px solid rgb(75, 78, 83)"}
          padding={"1rem 0.5rem"}
        >
          <Text fontSize={"1.2rem"}>Metacritic</Text>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <CriticScore
            score={game.metacritic}
            fontSize={"1.2rem"}
          ></CriticScore>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Text fontSize={"1.2rem"}>Genres</Text>
        </GridItem>
        <GridItem
          padding={"1.2rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Box fontSize={"1.2rem"} gap={"2rem"}>
            {game.genres.map((genre) => (
              <Text key={genre.id} marginRight={"1.2rem"} display={"block"}>
                {genre.name}
              </Text>
            ))}
          </Box>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Text fontSize={"1.2rem"}>Publishers</Text>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Box fontSize={"1.2rem"} gap={"2rem"}>
            {game.publishers.map((publisher) => (
              <Text
                key={publisher.id}
                marginRight={"1.2rem"}
                display={"inline"}
              >
                {publisher.name}
              </Text>
            ))}
          </Box>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Text fontSize={"1.2rem"}>ESRB Rating</Text>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Text fontSize={"1.2rem"}>
            {game.esrb_rating?.name || "Not Rated"}
          </Text>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Text fontSize={"1.2rem"}>Developers</Text>
        </GridItem>
        <GridItem
          padding={"1rem 0.5rem"}
          borderBottom={"1px solid rgb(75, 78, 83)"}
        >
          <Box fontSize={"1.2rem"} gap={"2rem"}>
            {game.developers.map((developer) => (
              <Text
                key={developer.id}
                marginRight={"1.2rem"}
                display={"inline"}
              >
                {developer.name}
              </Text>
            ))}
          </Box>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
