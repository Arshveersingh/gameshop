import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
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
import { DefinitionItem } from "./DefinitionItem";

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
        gap={"1.5rem"}
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
      <SimpleGrid columns={2} as="dl">
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
        <DefinitionItem term="ESRB Rating">
          <Text>{game.esrb_rating?.name || "Not Rated"}</Text>
        </DefinitionItem>
        <DefinitionItem term="Developers">
          {game.developers.map((developer) => (
            <Text key={developer.id}>{developer.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};
