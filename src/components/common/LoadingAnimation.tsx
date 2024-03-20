import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import loadingAnimation from "../../animations/loadingAnimation.json";

export const LoadingAnimation = () => {
  return (
    <Box
      position={"fixed"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
    >
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
