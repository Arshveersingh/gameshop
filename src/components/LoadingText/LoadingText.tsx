import { Text, Box } from "@chakra-ui/react";
import styles from "./LoadingText.module.css";
export const LoadingText = () => {
  return (
    <Box
      height={"50vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"2rem"}
      fontFamily={"'Press Start 2P', cursive;"}
      className={styles.animatedText}
    >
      <Text>Loading</Text>
      <Text>.</Text>
      <Text>.</Text>
      <Text>.</Text>
    </Box>
  );
};
