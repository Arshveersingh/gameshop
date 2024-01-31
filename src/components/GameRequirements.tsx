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
  const primaryColor = useColorModeValue("blue.600", "gray.400");
  const secondaryColor = useColorModeValue("black", "white");
  const platforms = game.platforms.filter(
    (obj) => Object.keys(obj.requirements).length !== 0
  );

  return (
    <>
      {platforms.length > 0 && <Text fontSize={"xl"}>System Requirements</Text>}
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
              <TabPanel
                fontFamily={"'Roboto', 'Monospace';"}
                lineHeight={"2.5rem"}
              >
                <SimpleGrid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap={4}
                  margin={4}
                  key={platform.id}
                >
                  <GridItem>
                    {minimumReq && (
                      <Text
                        fontSize={"2xl"}
                        color={primaryColor}
                        letterSpacing={2}
                      >
                        Minimum
                      </Text>
                    )}
                    {minimumReq?.split("\n").map((text) => {
                      if (text.includes(":")) {
                        const textArray = text.split(":", 2);
                        return (
                          <Box fontSize={"xl"}>
                            <Text
                              paddingRight={"5px"}
                              color={primaryColor}
                              display={"inline"}
                            >
                              {textArray[0]}:
                            </Text>
                            <Text color={secondaryColor} display={"inline"}>
                              {textArray[1]}
                            </Text>
                          </Box>
                        );
                      }
                      return (
                        <Text fontSize={"lg"} paddingLeft={4}>
                          {text}
                        </Text>
                      );
                    })}
                  </GridItem>
                  <GridItem>
                    {recommendedReq && (
                      <Text
                        fontSize={"2xl"}
                        color={primaryColor}
                        letterSpacing={2}
                      >
                        Recommended
                      </Text>
                    )}
                    {recommendedReq?.split("\n").map((text) => {
                      if (text.includes(":")) {
                        const textArray = text.split(":", 2);
                        return (
                          <Box fontSize={"xl"}>
                            <Text color={primaryColor} display={"inline"}>
                              {textArray[0]}:
                            </Text>
                            <Text color={secondaryColor} display={"inline"}>
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
