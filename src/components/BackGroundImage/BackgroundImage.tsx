import { Box } from "@chakra-ui/react";
import styles from "./BackgroundImage.module.css";

interface Props {
  imgUrl: string;
}
export const BackgroundImage = ({ imgUrl }: Props) => {
  return (
    <Box className={styles.artWrapper}>
      <Box
        className={styles.art}
        backgroundImage={`linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url("${imgUrl}");
`}
      ></Box>
    </Box>
  );
};
