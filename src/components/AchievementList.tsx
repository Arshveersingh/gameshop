import {
  Card,
  CardBody,
  CardHeader,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import Game from "../entities/Game";
import useAchievements from "../hooks/useAchievements";

interface Props {
  game: Game;
}

export const AchievementList = ({ game }: Props) => {
  const { data, error } = useAchievements(game.id);
  const color = useColorModeValue("black.900", "black.400");
  const backgroundColor = useColorModeValue("white.900", "gray.900");

  if (error) {
    throw error;
  }
  if (data?.count === 0) {
    return;
  }

  return (
    <>
      <Heading margin={5}>{game.name} Achivements</Heading>
      <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, xl: 3 }}>
        {data?.results.map((achievement) => (
          <GridItem key={achievement.id}>
            <Card
              backgroundColor={backgroundColor}
              direction={{ base: "column", sm: "row" }}
            >
              <Stack>
                <HStack>
                  <Image
                    boxSize={"80px"}
                    src={achievement.image}
                    padding={0}
                  ></Image>
                  <Stack padding={0}>
                    <Text>{achievement.percent}%</Text>
                    <CardHeader
                      fontWeight={"bold"}
                      padding={0}
                      whiteSpace={"normal"}
                      fontSize={"lg"}
                    >
                      {achievement.name}
                    </CardHeader>
                  </Stack>
                </HStack>
                <CardBody padding={2}>
                  <Text pt={2} fontSize={"16px"} color={color}>
                    {achievement.description}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
