import { Box, Switch, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa6";
export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"1fr 1fr 1fr"}
      gap={"10px"}
      alignContent={"center"}
    >
      <FaSun size={"1.6rem"} color={"#FFA500"}></FaSun>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="purple"
        aria-label="color mode switch"
        alignSelf={"center"}
      ></Switch>
      <FaMoon size={"1.6rem"} color={"#580D8C"}></FaMoon>
    </Box>
  );
};
