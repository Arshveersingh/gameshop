import { Box, Text, useColorMode } from "@chakra-ui/react";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

export const GameRequirements = ({ game }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const platforms = game.platforms.filter(
    (obj) => Object.keys(obj.requirements).length !== 0
  );

  var color = colorMode === "dark" ? "gray.400" : "black.900";

  return (
    <Box padding={4}>
      {platforms.length > 0 && (
        <Text fontSize={"3xl"}>System Requirements</Text>
      )}
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
          <Box margin={4} key={platform.id}>
            <Text textDecoration={"underline"} fontSize={"xl"}>
              {platform.name}
            </Text>
            {minimumReq && (
              <Text fontSize={"md"} color={color}>
                Minimum:
              </Text>
            )}
            <Text paddingLeft={4}>{minimumReq}</Text>
            {recommendedReq && (
              <Text fontSize={"md"} color={color}>
                Recommended:
              </Text>
            )}
            <Text paddingLeft={4}>{recommendedReq}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
