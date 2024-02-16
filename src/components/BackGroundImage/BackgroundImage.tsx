import { Box, useColorModeValue } from "@chakra-ui/react";

import styles from "./BackgroundImage.module.css";
import getCroppedImages from "../../services/image-url";

interface Props {
  imgUrl: string;
}

export const BackgroundImage = ({ imgUrl }: Props) => {
  const opacity = useColorModeValue(0.89, 0.5);
  return (
    <Box className={styles.backgroundImageContainer} opacity={opacity}>
      <Box
        className={styles.backgroundImage}
        backgroundImage={`url("${imgUrl}"); url("${getCroppedImages(
          imgUrl
        )}") var(--fallback); `}
      ></Box>
    </Box>
  );
};
