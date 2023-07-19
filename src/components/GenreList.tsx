import { Text, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/image-url";

export const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      ></Spinner>
    );
  return (
    <>
      <List>
        {genres.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  borderRadius={8}
                  boxSize="32px"
                  src={getCroppedImages(genre.image_background)}
                ></Image>
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
