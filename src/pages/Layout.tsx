import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar/NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box padding={5}>
        <Outlet></Outlet>
      </Box>
    </>
  );
};
