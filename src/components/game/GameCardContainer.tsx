import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.07)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={"15px"}
    >
      {children}
    </Box>
  );
};
