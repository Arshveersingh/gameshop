import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

export const DateSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Select Release Date
      </MenuButton>
      <MenuList>
        <MenuItem>Last 7 Days</MenuItem>
        <MenuItem>This Month</MenuItem>
        <MenuItem>Next Month</MenuItem>
      </MenuList>
    </Menu>
  );
};
