import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gameshop.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";
import useGameQueryStore from "../stores/GameQueryStore";

export const NavBar = () => {
  const navigate = useNavigate();
  const { setGenreId, setPlatformId, setSearchText, setSortOrder } =
    useGameQueryStore();
  const handleClick = () => {
    setGenreId(0);
    setPlatformId(0);
    setSearchText("");
    setSortOrder("");
    navigate("/");
  };

  return (
    <HStack padding="10px">
      <Link to="/" onClick={handleClick}>
        <Image objectFit="cover" src={logo} boxSize="60px"></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
