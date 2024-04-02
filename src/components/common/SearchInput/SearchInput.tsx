import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../../stores/GameQueryStore";
import styles from "./SearchInput.module.css";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const gameQuery = useGameQueryStore();
  const navigate = useNavigate();
  useEffect(() => {
    const searchBarHotKeyHandler = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.code == "KeyK") {
        event.preventDefault();
        ref.current!.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    document.addEventListener("keydown", searchBarHotKeyHandler);

    return () => {
      document.removeEventListener("keydown", searchBarHotKeyHandler);
    };
  }, []);
  const backgroundColor = useColorModeValue("#87CEFA", "#2D3436");
  const searchButtonColor = useColorModeValue("#5cc2ed", "#333333");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        gameQuery.setSearchText(ref.current?.value || "");
        gameQuery.setDates("");
        gameQuery.setSortOrder("");
        ref.current!.value = "";
        navigate("/");
      }}
    >
      <InputGroup className={styles.searchBar}>
        <Input
          focusBorderColor="none"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
          _focus={{
            background: backgroundColor,
            transition: "background 200ms ease-in",
          }}
        ></Input>

        <InputRightAddon padding={0} margin={0} borderRadius={"0 20px 20px 0"}>
          <Button
            aria-label="Search Button"
            paddingX={"2rem"}
            _focus={{ outline: "none" }}
            borderRadius={"inherit"}
            backgroundColor={searchButtonColor}
            type="submit"
            className={styles.searchButton}
          >
            <FaSearch></FaSearch>
          </Button>
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};
