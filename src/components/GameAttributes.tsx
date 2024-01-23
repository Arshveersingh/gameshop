import {
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
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
      <Heading
        width={"2xl"}
        display={"block"}
        margin={"1rem auto"}
        textAlign={"center"}
      >
        Platforms
      </Heading>
      <Flex
        flexWrap={"wrap"}
        gap={"1rem"}
        margin={"1rem auto"}
        justifyContent={"center"}
        alignItems={"center"}
        maxWidth={"70vw"}
      >
        {game.parent_platforms?.map(({ platform }) => (
          <Image
            height={"4rem"}
            key={platform.id}
            src={imgMap[platform.slug]}
          ></Image>
        ))}
      </Flex>
      <SimpleGrid templateColumns={"1fr 1fr"} padding={"2rem"}>
        <GridItem>
          <Text fontSize={"1.2rem"}>Metacritic</Text>
        </GridItem>
        <GridItem>
          <CriticScore
            score={game.metacritic}
            fontSize={"1.2rem"}
          ></CriticScore>
        </GridItem>
        <GridItem>
          <Text fontSize={"1.2rem"}>Genres</Text>
        </GridItem>
        <GridItem>
          {game.genres.map((genre) => (
            <Text fontSize={"1.2rem"}>{genre.name}&nbsp;</Text>
          ))}
        </GridItem>
        <GridItem>
          <Text fontSize={"1.2rem"}>Publishers</Text>
        </GridItem>
        <GridItem>
          {game.publishers.map((publisher) => (
            <Text fontSize={"1.2rem"}>{publisher.name}&nbsp;</Text>
          ))}
        </GridItem>
        <GridItem>
          <Text fontSize={"1.2rem"}>ESRB Rating</Text>
        </GridItem>
        <GridItem>
          <Text fontSize={"1.2rem"}>
            {game.esrb_rating?.name || "Not Rated"}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize={"1.2rem"}>Developers</Text>
        </GridItem>
        <GridItem>
          {game.developers.map((developer) => (
            <Text fontSize={"1.2rem"}>{developer.name}&nbsp;</Text>
          ))}
        </GridItem>
      </SimpleGrid>
    </>
  );
};
