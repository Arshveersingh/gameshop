import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
  maxChars: number;
  fontFamily?: string;
}
export const ExpandableText = ({
  children,
  maxChars,
  fontFamily = "",
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let summary = "";

  if (!children) return null;
  if (isExpanded) {
    summary = children;
  } else if (children.length <= maxChars) {
    return (
      <Text fontFamily={fontFamily} fontSize={"lg"}>
        {children}
      </Text>
    );
  } else {
    summary = children.substring(0, maxChars) + "...";
  }
  return (
    <>
      <Text fontSize="lg" fontFamily={fontFamily} lineHeight={1.3}>
        {summary}
        <Button
          color={"white"}
          variant={"link"}
          size="lg"
          fontWeight="bold"
          marginLeft={1}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};
