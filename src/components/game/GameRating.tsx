import { Box } from "@chakra-ui/react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

interface Props {
  rating: number;
}

export const GameRating = ({ rating }: Props) => {
  const ratingStr = rating.toFixed(1);
  if (rating === 0) {
    return;
  }
  return (
    <Box display="flex" mt="2" mb="3" placeContent={"center"}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          if (parseFloat(ratingStr) - i >= 1) {
            return <IoStar color="gold" key={i} size={30}></IoStar>;
          } else if (parseFloat(ratingStr) - i >= 0.5) {
            return <IoStarHalf color="gold" key={i} size={30}></IoStarHalf>;
          } else {
            return (
              <IoStarOutline key={i} color="gold" size={30}></IoStarOutline>
            );
          }
        })}
      <Box ml={2} fontSize="4xl" alignItems={"center"}>
        {ratingStr}
      </Box>
    </Box>
  );
};
