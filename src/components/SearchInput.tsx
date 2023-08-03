import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/GameQueryStore";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSearchText(ref.current?.value || "");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};
