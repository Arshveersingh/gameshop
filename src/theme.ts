import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const theme = extendTheme({
  config,
  colors: {
    purple: {
      100: "#efbbff",
      200: "#d896ff",
      300: "#be29ec",
      400: "#800080",
      500: "#660066",
    },
    red: {
      100: "#ffbaba",
      200: "#ff7b7b",
      300: "#ff5252",
      400: "#ff0000",
      500: "#d11d23",
      600: "#BA1607",
      700: "#a70000",
      800: "#9b1003",
    },

    // gray: {
    //   50: "#f9f9f9",
    //   100: "#ededed",
    //   200: "#d3d3d3",
    //   300: "#b3b3b3",
    //   400: "#a0a0a0",
    //   500: "#898989",
    //   600: "#6c6c6c",
    //   700: "#202020",
    //   800: "#121212",
    //   900: "#111111",
    // },
    gray: {
      50: "#800080",
      100: "#B3E0F2",
      200: "#D6EDF5",
      300: "#9ACCE2",
      400: "#6BAAC9",
      500: "black",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111111",
    },
  },
});

export default theme;
