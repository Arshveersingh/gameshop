import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
export const DefinitionItem = ({ term, children }: Props) => {
  const { colorMode } = useColorMode();
  var color = colorMode === "dark" ? "gray.600" : "black.900";
  return (
    <Box marginY={5}>
      <Heading marginBottom={2} as="dt" fontSize="lg" color={color} padding={0}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};
