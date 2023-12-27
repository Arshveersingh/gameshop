import { Box } from "@chakra-ui/react";

import styles from "./BackgroundImage.module.css";

interface Props {
  imgUrl: string;
}

export const BackgroundImage = ({ imgUrl }: Props) => {
  return (
    <Box className={styles.backgroundImageContainer}>
      <Box
        className={styles.backgroundImage}
        backgroundImage={`url("${imgUrl}");`}
      ></Box>
    </Box>
  );
};
