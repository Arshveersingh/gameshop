import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa6";
export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <FaSun size={"1.6rem"} color={"#FFA500"}></FaSun>

      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="purple"
        
      ></Switch>
      <FaMoon size={"1.6rem"} color={"#580D8C"}></FaMoon>
    </HStack>
  );
};
