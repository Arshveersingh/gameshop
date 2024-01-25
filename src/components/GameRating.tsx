import { Box } from "@chakra-ui/react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

interface Props {
  rating: number;
}

export const GameRating = ({ rating }: Props) => {
  const ratingStr = rating.toFixed(1);

  return (
    <Box
      display="flex"
      mt="2"
      mb="3"
      alignItems="center"
      justifyContent={"center"}
    >
      <Box paddingX={2} ml={3} fontSize="5xl">
        {ratingStr}
      </Box>
      {Array(5)
        .fill("")
        .map((_, i) => {
          if (parseFloat(ratingStr) - i >= 1) {
            return <IoStar color="gold" key={i} size={50}></IoStar>;
          } else if (parseFloat(ratingStr) - i >= 0.5) {
            return <IoStarHalf color="gold" key={i} size={50}></IoStarHalf>;
          } else {
            return (
              <IoStarOutline key={i} color="gold" size={50}></IoStarOutline>
            );
          }
        })}
    </Box>
  );
};
