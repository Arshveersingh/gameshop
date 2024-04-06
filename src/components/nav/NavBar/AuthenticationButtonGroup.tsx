import {
  Box,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
export const AuthenticationButtonGroup = () => {
  return (
    <>
      <Show above="800px">
        <Box display={"flex"} gap={"20px"}>
          <Button variant={"ghost"}>Login</Button>
          <Button variant={"outline"}>Sign up</Button>
        </Box>
      </Show>
      <Show below="800px">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<RxHamburgerMenu size={"30px"} />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Button width={"100%"}>Login</Button>
            </MenuItem>
            <MenuItem>
              <Button width={"100%"}>Sign up</Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
};
