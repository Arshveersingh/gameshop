import { Box, useColorMode } from "@chakra-ui/react";

import styles from "./BackgroundImage.module.css";

interface Props {
  imgUrl: string;
}
export const BackgroundImage = ({ imgUrl }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  var linearGradient = "";
  {
    colorMode === "dark"
      ? (linearGradient = `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url("${imgUrl}");`)
      : (linearGradient = `linear-gradient(rgba(255, 255, 255, 0), rgb(45, 45, 45)), linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)), url("${imgUrl}");`);
  }
  return (
    <Box className={styles.artWrapper}>
      <Box className={styles.art} background={linearGradient}></Box>
    </Box>
  );
};
