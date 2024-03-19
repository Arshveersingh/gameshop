import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import loadingAnimation from "../../animations/loadingAnimation.json";

export const LoadingAnimation = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        style={{
          width: "40rem",
        }}
      />
    </Box>
  );
};
