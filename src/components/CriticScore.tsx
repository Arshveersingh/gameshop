import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
  fontSize?: string;
}
export const CriticScore = ({ score, fontSize }: Props) => {
  let color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";
  return (
    <Badge
      paddingX={2}
      fontSize={fontSize || "14px"}
      borderRadius={"4px"}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};
