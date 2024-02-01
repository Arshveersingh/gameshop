import {
  Input,
  InputGroup,
  InputRightElement,
  Kbd,
  Box,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../stores/GameQueryStore";
import styles from "./SearchInput.module.css";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
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

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSearchText(ref.current?.value || "");
          ref.current!.value = "";
          navigate("/");
        }}
      >
        <InputGroup className={styles.searchBar}>
          <Input
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
            ref={ref}
          ></Input>

          <InputRightElement
            children={
              <>
                <Box paddingRight={"4rem"} className={styles.hotKeys}>
                  <Kbd>ctrl</Kbd> + <Kbd>K</Kbd>
                </Box>
              </>
            }
          ></InputRightElement>
        </InputGroup>
      </form>
    </>
  );
};
