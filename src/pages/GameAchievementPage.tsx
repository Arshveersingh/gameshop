import {
  Box,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import useAchievements from "../hooks/useAchievements";
import useGame from "../hooks/useGame";
import { LoadingAnimation } from "../components/common/LoadingAnimation";

export const GameAchievementPage = () => {
  const { slug } = useParams();
  const {
    data: achievements,
    error,
    isLoading: isLoadingAchievements,
    fetchNextPage,
    hasNextPage,
  } = useAchievements(slug ?? "");
  const { data: game, isLoading: isLoadingGames } = useGame(slug ?? "");
  const totalAchievements = achievements?.pages[0].count;
  const fetchedAchievementsCount =
    achievements?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;
  const backgroundColor = useColorModeValue("white.900", "gray.900");
  const color = useColorModeValue("black.900", "black.400");
  if (error) return <Text>{error.message}</Text>;
  if (isLoadingGames || isLoadingAchievements)
    return <LoadingAnimation></LoadingAnimation>;
  if (!game) return;
  return (
    <InfiniteScroll
      dataLength={fetchedAchievementsCount}
      hasMore={!!hasNextPage}
      next={() => {
        fetchNextPage();
      }}
      loader={
        <Box textAlign={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.600"
            size="lg"
          ></Spinner>
        </Box>
      }
    >
      <Heading margin={5}>Total {totalAchievements} Achievements</Heading>
      {achievements?.pages.map((page, index) => (
        <React.Fragment key={index}>
          <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, xl: 3 }}>
            <React.Fragment key={index}>
              {page.results.map((achievement) => (
                <GridItem key={achievement.id}>
                  <Card
                    height={"100%"}
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
                            P{achievement.name}
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
            </React.Fragment>
          </SimpleGrid>
        </React.Fragment>
      ))}
    </InfiniteScroll>
  );
};
