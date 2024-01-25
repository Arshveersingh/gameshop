import {
  Box,
  Text,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

export const GameRequirements = ({ game }: Props) => {
  const color = useColorModeValue("black.900", "gray.400");
  const platforms = game.platforms.filter(
    (obj) => Object.keys(obj.requirements).length !== 0
  );

  return (
    <>
      {platforms.length > 0 && (
        <Text fontSize={"3xl"}>System Requirements</Text>
      )}
      <Tabs>
        <TabList>
          {platforms.map(({ platform }) => {
            return <Tab fontSize={"2xl"}>{platform.name}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {platforms.map(({ platform, requirements }) => {
            let minimumReq = requirements.minimum?.startsWith("Minimum:")
              ? requirements.minimum.substring("Minimum:".length)
              : requirements.minimum;
            let recommendedReq = requirements.recommended?.startsWith(
              "Recommended:"
            )
              ? requirements.recommended.substring("Recommended:".length)
              : requirements.recommended;
            return (
              <TabPanel>
                <SimpleGrid
                  templateColumns={"1fr 1fr"}
                  gap={4}
                  margin={4}
                  key={platform.id}
                >
                  <GridItem>
                    {minimumReq && (
                      <Text fontSize={"2xl"} color={color}>
                        Minimum
                      </Text>
                    )}
                    {minimumReq?.split("\n").map((text) => {
                      if (text.includes(":")) {
                        const textArray = text.split(":", 2);
                        return (
                          <Box>
                            <Text
                              fontSize={"xl"}
                              color={color}
                              display={"inline"}
                            >
                              {textArray[0]}:
                            </Text>
                            <Text display={"inline"} fontSize={"xl"}>
                              {textArray[1]}
                            </Text>
                          </Box>
                        );
                      }
                      return (
                        <Text fontSize={"xl"} paddingLeft={4}>
                          {text}
                        </Text>
                      );
                    })}
                  </GridItem>
                  <GridItem>
                    {recommendedReq && (
                      <Text fontSize={"2xl"} color={color}>
                        Recommended
                      </Text>
                    )}
                    {recommendedReq?.split("\n").map((text) => {
                      if (text.includes(":")) {
                        const textArray = text.split(":", 2);
                        return (
                          <Box>
                            <Text
                              fontSize={"xl"}
                              color={color}
                              display={"inline"}
                            >
                              {textArray[0]}:
                            </Text>
                            <Text display={"inline"} fontSize={"xl"}>
                              {textArray[1]}
                            </Text>
                          </Box>
                        );
                      }
                      return (
                        <Text fontSize={"xl"} paddingLeft={4}>
                          {text}
                        </Text>
                      );
                    })}
                  </GridItem>
                </SimpleGrid>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </>
  );
};
