import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
export const AuthenticationButtonGroup = () => {
  const navigate = useNavigate();
  return (
    <>
      <Show above="800px">
        <Box display={"flex"} gap={"20px"}>
          <Button onClick={() => navigate("/login")} variant={"ghost"}>
            Log in
          </Button>
          <Button onClick={() => navigate("/signup")} variant={"outline"}>
            Sign up
          </Button>
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
            <MenuItem
              _hover={{
                background: "none",
              }}
            >
              <Button
                onClick={() => navigate("/login")}
                width={"100%"}
                textAlign={"center"}
                as={"span"}
              >
                Log in
              </Button>
            </MenuItem>
            <MenuItem
              _hover={{
                background: "none",
              }}
            >
              <Button
                as={"span"}
                onClick={() => navigate("/signup")}
                width={"100%"}
              >
                Sign up
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
};
