import { Flex, GridItem, Heading, Image, SimpleGrid } from "@chakra-ui/react";
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
      <SimpleGrid templateColumns={"1fr 2fr"} padding={"2rem"}>
        <GridItem>Metacritic</GridItem>
        <GridItem>
          <CriticScore score={game.metacritic} fontSize={"18px"}></CriticScore>
        </GridItem>
        <GridItem>Genres</GridItem>
        <GridItem>
          {game.genres.map((genre) => (
            <>{genre.name}&nbsp;</>
          ))}
        </GridItem>
        <GridItem>Publishers</GridItem>
        <GridItem>
          {game.publishers.map((publisher) => (
            <>{publisher.name}&nbsp;</>
          ))}
        </GridItem>
        <GridItem>ESRB Rating</GridItem>
        <GridItem>{game.esrb_rating?.name || "Not Rated"}</GridItem>
        <GridItem>Developers</GridItem>
        <GridItem>
          {game.developers.map((developer) => (
            <>{developer.name}&nbsp;</>
          ))}
        </GridItem>
      </SimpleGrid>
    </>
  );
};
