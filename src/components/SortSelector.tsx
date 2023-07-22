import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

export const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Orderby: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relvance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};
