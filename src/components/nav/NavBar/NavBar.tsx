import { HStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import getDateStr from "../../../services/date";
import useGameQueryStore from "../../../stores/GameQueryStore";
import { GiPirateCaptain } from "react-icons/gi";
import { ColorModeSwitch } from "../../common/ColorModeSwitch";
import { SearchInput } from "../../common/SearchInput/SearchInput";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const navigate = useNavigate();

  const { setGenreId, setPlatformId, setSearchText, setSortOrder, setDates } =
    useGameQueryStore();
  const handleClick = () => {
    setGenreId(0);
    setPlatformId(0);
    setSearchText("");
    setSortOrder("");
    navigate("/");
    setDates(getDateStr());
  };

  return (
    <HStack
      padding="10px"
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      className={styles.navBar}
    >
      <Link to="/" onClick={handleClick}>
        <GiPirateCaptain size="70px"></GiPirateCaptain>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
