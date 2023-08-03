import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamestop.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
