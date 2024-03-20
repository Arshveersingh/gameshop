import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
  fontSize?: string;
}
export const CriticScore = ({ score, fontSize }: Props) => {
  let color;
  if (score == null) {
    color = "gray";
  } else if (score >= 75) {
    color = "green";
  } else if (score >= 50) {
    color = "yellow";
  } else {
    color = "red";
  }
  return (
    <Badge
      paddingX={2}
      fontSize={fontSize || "14px"}
      borderRadius={"4px"}
      colorScheme={color}
      textTransform={"capitalize"}
    >
      {score || "Not Rated"}
    </Badge>
  );
};
