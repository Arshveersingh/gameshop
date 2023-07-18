import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatfromIconList } from "./PlatfromIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>

        <PlatfromIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatfromIconList>
      </CardBody>
    </Card>
  );
};
