import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamestop.webp";
export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
    </HStack>
  );
};
