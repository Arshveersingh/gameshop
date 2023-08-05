import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamestop.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image objectFit="cover" src={logo} boxSize="60px"></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
