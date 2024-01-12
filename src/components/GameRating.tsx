import { Box, Button } from "@chakra-ui/react";
// import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

interface Props {
  rating: number;
}

export const GameRating = ({ rating }: Props) => {
  rating = parseFloat(rating.toFixed(1));
  return (
    <Box
      display="flex"
      mt="2"
      mb="3"
      alignItems="center"
      justifyContent={"center"}
    >
      {Array(5)
        .fill("")
        .map((_, i) => {
          if (rating - i >= 1) {
            return <IoStar color="gold" key={i} size={50}></IoStar>;
          } else if (rating - i >= 0.5) {
            return <IoStarHalf color="gold" key={i} size={50}></IoStarHalf>;
          } else {
            return <IoStarOutline color="gold" size={50}></IoStarOutline>;
          }
        })}

      <Box
        paddingX={2}
        borderRadius={"9px"}
        ml={3}
        background={"black"}
        fontSize="2xl"
      
      >
        {rating}
      </Box>
    </Box>
  );
};
