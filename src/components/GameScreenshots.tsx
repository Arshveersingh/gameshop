import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import useScreenshots from "../hooks/useScreenshots";
import { ScreenshotModal } from "./ScreenshotModal/ScreenshotModal";

interface Props {
  gameId: number;
}
export const GameScreenshots = ({ gameId }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, error } = useScreenshots(gameId);
  const [clickedIndex, setClickedIndex] = useState(0);
  if (isLoading) return null;
  if (error) throw error;
  const handleOpenModal = (index: number) => {
    setClickedIndex(index);
    setIsModalOpen(true);
  };
  let screenshots = data?.results.map((screenshot) => screenshot.image);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((screenshot, index) => (
          <Box key={screenshot.id}>
            <Image
              src={screenshot.image}
              cursor={"pointer"}
              onClick={() => handleOpenModal(index)}
            ></Image>
          </Box>
        ))}
      </SimpleGrid>
      {isModalOpen && (
        <ScreenshotModal
          onClose={() => {
            setIsModalOpen(false);
          }}
          screenshots={screenshots}
          clickedIndex={clickedIndex}
        ></ScreenshotModal>
      )}
    </>
  );
};

export default GameScreenshots;
