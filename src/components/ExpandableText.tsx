import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
  maxChars: number;
}
export const ExpandableText = ({ children, maxChars }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let summary = "";

  if (!children) return null;
  if (isExpanded) {
    summary = children;
  } else {
    summary = children.substring(0, maxChars) + "...";
  }
  return (
    <>
      <Text fontSize="xl">
        {summary}
        <Button
          colorScheme="yellow"
          size="sm"
          padding={3}
          fontWeight="bold"
          marginLeft={2}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};
