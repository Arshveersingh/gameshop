import {
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";
import iosSVG from "../assets/apple-ios.svg";
import linuxSVG from "../assets/linux-tux.svg";
import androidSVG from "../assets/logo-android.svg";
import macbookSVG from "../assets/mac-os-2.svg";
import nintendoSVG from "../assets/nintendo-2.svg";
import playstationSVG from "../assets/playstation-logo-and-wordmark.svg";
import windowsSVG from "../assets/windows-darkblue-2012-svg.svg";
import xboxSVG from "../assets/xbox-9.svg";
import Game from "../entities/Game";
import { CriticScore } from "./CriticScore";

interface Props {
  game: Game;
}

export const GameAttributes = ({ game }: Props) => {
  const imgMap: { [key: string]: string } = {
    pc: windowsSVG,
    playstation: playstationSVG,
    xbox: xboxSVG,
    nintendo: nintendoSVG,
    mac: macbookSVG,
    linux: linuxSVG,
    ios: iosSVG,
    android: androidSVG,
  };

  return (
    <>
      <Flex
        flexWrap={"wrap"}
        gap={"1rem"}
        margin={"1rem auto"}
        marginBottom={"3rem"}
        justifyContent={"center"}
        alignItems={"center"}
        maxWidth={"70vw"}
      >
        <Heading
          width={"2xl"}
          display={"block"}
          margin={"auto"}
          marginTop={"2rem"}
          textAlign={"center"}
        >
          Platforms
        </Heading>
        {game.parent_platforms?.map(({ platform }) => (
          <Image
            height={"4rem"}
            key={platform.id}
            src={imgMap[platform.slug]}
          ></Image>
        ))}
      </Flex>
      <SimpleGrid
        borderTop={"1px solid rgb(75, 78, 83)"}
        templateColumns={"1fr 1fr"}
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
              <Text key={genre.id} marginRight={"1.2rem"} display={"inline"}>
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
